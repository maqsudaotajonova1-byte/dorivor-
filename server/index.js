const express = require('express');
const cors    = require('cors');
const multer  = require('multer');
const fs      = require('fs');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const app    = express();
const upload = multer({ dest: 'uploads/' });
const genAI  = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));
app.use(express.json());

// ── AI SCANNER endpoint ───────────────────────────────────────────────────────
app.post('/api/scan', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'Rasm yuklanmadi' });
    }

    const imageData  = fs.readFileSync(req.file.path);
    const base64Data = imageData.toString('base64');
    const mimeType   = req.file.mimetype;
    fs.unlinkSync(req.file.path);

    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

    const prompt = `Bu rasmda qanday o'simlik ko'rinayapti?

Faqat JSON formatida javob ber, boshqa hech narsa yozma:
{
  "found": true yoki false,
  "name": "O'simlik nomi o'zbekcha",
  "latin": "Lotincha nomi",
  "emoji": "Mos emoji",
  "description": "Qisqa tavsif (2-3 gap o'zbekcha)",
  "benefits": ["foyda 1", "foyda 2", "foyda 3"],
  "warnings": ["ogohlantirish 1"],
  "usage": "Qo'llash usuli qisqacha o'zbekcha",
  "isHerbal": true yoki false
}

Agar o'simlik bo'lmasa yoki aniqlab bo'lmasa:
{"found": false, "message": "Sababi o'zbekcha"}`;

    const result = await model.generateContent([
      prompt,
      {
        inlineData: {
          mimeType: mimeType,
          data: base64Data,
        },
      },
    ]);

    const text = result.response.text().trim();

    let parsed;
    try {
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      parsed = jsonMatch ? JSON.parse(jsonMatch[0]) : { found: false, message: "Aniqlab bo'lmadi" };
    } catch {
      parsed = { found: false, message: "Javobni qayta ishlashda xato" };
    }

    res.json(parsed);

  } catch (error) {
    console.error('Gemini xato:', error.message);
    res.status(500).json({ error: "Server xatosi: " + error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server ishga tushdi: http://localhost:${PORT}`);
  console.log(`🤖 Gemini AI Scanner tayyor!`);
});