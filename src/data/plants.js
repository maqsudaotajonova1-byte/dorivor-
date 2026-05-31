import arnica from "../assets/images/sariq-gul.jpg";
import zira from "../assets/images/zira.jpeg";
import namatak from "../assets/images/namatak.jpg";
import isiriq from "../assets/images/isiriq.jpg";
import zanjabil from "../assets/images/zanjabil.jpg";
import limonOti from "../assets/images/limon-o'ti.jpg";
import yalpiz from "../assets/images/yalpiz.jfif";
import moychechak from "../assets/images/moychechak.jfif";
import lavanda from "../assets/images/lavanda.jpg";
import aloeVera from "../assets/images/aloe-vera.jpeg";
import zafaron from "../assets/images/zafaron.jpg";
import valerian from "../assets/images/valerian.jpg";
import echinacea from "../assets/images/echinacea.jpg";
import qoqiot from "../assets/images/qoqio't.jpeg";
import curcuma from "../assets/images/curcuma.jpg";
import qizilmiya from "../assets/images/qizilmiya.jpg";

const plants = [
  {
    id: 1,
    name: "Zira",
    emoji: "🌿",
    latin: "Cuminum cyminum",
    short: "Hazm qilishni yaxshilaydi, ishtahani ochadi.",
    description: "Zira hazm qilishni yaxshilaydi, ishtahani ochadi va oshqozon og'riqlarida foydali. Qadimdan sharq tabobatida keng qo'llanilgan.",
    image: zira,
    category: "hazm",
    rating: 4,
    premium: false,
    benefits: ["Hazm yaxshilaydi", "Ishtaha ochadi", "Oshqozon og'riqlarini kamaytiradi", "Ich ketishda foydali"],
    warnings: ["Homilador ayollar ehtiyot bo'lsin", "Ko'p miqdorda qabul qilmang"],
    usage: { steps: ["1 choy qoshiq zira oling", "Issiq suvga soling", "10 daqiqa qoldiring", "Suzib iching"] }
  },
  {
    id: 2,
    name: "Namatak",
    emoji: "🌹",
    latin: "Rosa canina",
    short: "C vitamini ko'p, immunitetni mustahkamlaydi.",
    description: "Namatak mevasi C vitaminga boy bo'lib, immunitetni mustahkamlaydi va shamollashda yordam beradi. Quritilgan mevalari choy sifatida ishlatiladi.",
    image: namatak,
    category: "immun",
    rating: 4,
    premium: false,
    benefits: ["Immunitetni kuchaytiradi", "C vitamini manbai", "Shamollashda yordam beradi", "Qon bosimini normallashtiradi"],
    warnings: ["Ko'p iste'mol qilmang", "Buyrak toshi bo'lsa ehtiyot bo'ling"],
    usage: { steps: ["Quritilgan mevalarni oling", "Qaynab turgan suvga soling", "15 daqiqa damlab qo'ying", "Asallab iching"] }
  },
  {
    id: 3,
    name: "Isiriq",
    emoji: "🌾",
    latin: "Peganum harmala",
    short: "Dezinfeksiya xususiyati bor, havo tozalaydi.",
    description: "Isiriq kuchli dezinfeksiya xususiyatiga ega bo'lib, xonani tozalash va stress kamaytirish uchun ishlatiladi. O'rta Osiyoda keng tarqalgan.",
    image: isiriq,
    category: "nafas",
    rating: 3,
    premium: false,
    benefits: ["Havo tozalaydi", "Stressni kamaytiradi", "Dezinfeksiya qiladi", "Yomon ko'zdan saqlaydi"],
    warnings: ["Ichish tavsiya etilmaydi", "Homilador ayollarga zararli", "Ko'p tutab qolmang"],
    usage: { steps: ["Quritilgan isiriqni oling", "Kosacha yoki idishga soling", "Olov bilan yoqing", "Xonada tutatingiz"] }
  },
  {
    id: 4,
    name: "Zanjabil",
    emoji: "🫚",
    latin: "Zingiber officinale",
    short: "Yallig'lanishga qarshi, ko'ngil aynishda yordam.",
    description: "Zanjabil yallig'lanishga qarshi kuchli vosita bo'lib, ko'ngil aynishi, sovuq qotish va immunitetni kuchaytirishda yordam beradi.",
    image: zanjabil,
    category: "immun",
    rating: 4,
    premium: false,
    benefits: ["Ko'ngil aynishni to'xtatadi", "Yallig'lanishga qarshi", "Immunitetni kuchaytiradi", "Qon aylanishini yaxshilaydi"],
    warnings: ["Oshqozon yarasi bo'lsa ehtiyot bo'ling", "Qon suyultiruvchi dorilar bilan qabul qilmang"],
    usage: { steps: ["Yangi zanjabilni tozalang", "Mayda qilib kesiing", "Qaynoq suvga soling", "Limon va asal qo'shib iching"] }
  },
  {
    id: 5,
    name: "Limon o'ti",
    emoji: "🍋",
    latin: "Melissa officinalis",
    short: "Tinchlantiruvchi, uyquni yaxshilaydi.",
    description: "Limon o'ti tinchlantiruvchi xususiyatga ega bo'lib, uyquni yaxshilaydi, stress va bezovtalikni kamaytiradi. Limon hidi keladi.",
    image: limonOti,
    category: "asab",
    rating: 4,
    premium: false,
    benefits: ["Uyquni yaxshilaydi", "Stressni kamaytiradi", "Tinchlantiradi", "Bosh og'riqni kamaytiradi"],
    warnings: ["Uyqu dorilar bilan birgalikda qabul qilmang", "Mashina haydashdan oldin ehtiyot bo'ling"],
    usage: { steps: ["1-2 choy qoshiq bargni oling", "Qaynoq suvga soling", "5-10 daqiqa damlab qo'ying", "Kechqurun iching"] }
  },
  {
    id: 6,
    name: "Yalpiz",
    emoji: "🌱",
    latin: "Mentha piperita",
    short: "Bosh og'riqda, hazm qilishda yordam beradi.",
    description: "Yalpiz bosh og'riqda, hazm qilishda yordam beradi va og'izni muattar qiladi. Salqin ta'mi bilan mashhur dorivor o'simlik.",
    image: yalpiz,
    category: "hazm",
    rating: 4,
    premium: false,
    benefits: ["Bosh og'riqni kamaytiradi", "Hazm yaxshilaydi", "Og'izni muattar qiladi", "Ko'ngil aynishda yordam beradi"],
    warnings: ["Kichik bolalarga ko'p bermang", "Reflyuks bo'lsa ehtiyot bo'ling"],
    usage: { steps: ["Yangi yalpiz barglari oling", "Qaynoq suvga soling", "3-5 daqiqa damlab qo'ying", "Issiq iching"] }
  },
  {
    id: 7,
    name: "Moychechak",
    emoji: "🌼",
    latin: "Matricaria chamomilla",
    short: "Tinchlantiruvchi, me'da uchun foydali.",
    description: "Moychechak tinchlantiruvchi va yallig'lanishga qarshi xususiyatga ega. Me'da muammolari, uyqusizlik va stress uchun eng mashhur o'simliklardan biri.",
    image: moychechak,
    category: "asab",
    rating: 5,
    premium: false,
    benefits: ["Tinchlantiradi", "Me'dani yaxshilaydi", "Yallig'lanishga qarshi", "Uyquni yaxshilaydi"],
    warnings: ["Moychechakka allergiya bo'lishi mumkin", "Qon suyultiruvchi dorilar bilan ehtiyot bo'ling"],
    usage: { steps: ["1 choy qoshiq quritilgan gul oling", "Qaynoq suvga soling", "10 daqiqa damlab qo'ying", "Suzib iching"] }
  },
  {
    id: 8,
    name: "Arnica",
    emoji: "🌻",
    latin: "Arnica montana",
    short: "Shish va qon quyilishda yordam beradi.",
    description: "Arnica shish va qon quyilishda yordam beradi, og'riq qoldiruvchi xususiyati bor. Faqat tashqi qo'llash uchun ishlatiladi.",
    image: arnica,
    category: "teri",
    rating: 4,
    premium: false,
    benefits: ["Shishni kamaytiradi", "Og'riq qoldiradi", "Jarohatlarni tezitadi", "Ko'karishlarni yo'qotadi"],
    warnings: ["Ichish mutlaqo man etilgan", "Ochiq yaraga surmaslik kerak", "Allergiya tekshiring"],
    usage: { steps: ["Arnica kremini oling", "Shish yoki jarohat joyiga suring", "Kuniga 2-3 marta qo'llang", "Ko'zga tegmasin"] }
  },
  {
    id: 9,
    name: "Lavanda",
    emoji: "💜",
    latin: "Lavandula angustifolia",
    short: "Uyquni yaxshilaydi, tinchlantiradi.",
    description: "Lavanda uyquni yaxshilaydi, stress va bosh og'riqda yordam beradi. Xushbo'y hidi bilan taniqli premium dorivor o'simlik.",
    image: lavanda,
    category: "asab",
    rating: 5,
    premium: true,
    benefits: ["Uyquni yaxshilaydi", "Stressni kamaytiradi", "Bosh og'riqda yordam beradi", "Kayfiyatni ko'taradi"],
    warnings: ["Teri allergiyasini tekshiring", "Homiladorlikda shifokor bilan maslahatlashing"],
    usage: { steps: ["Lavanda moyini oling", "Ko'mikka yoki yostig'ingizga tomizing", "Yoki vannaga qo'shing", "Yoki choy sifatida iching"] }
  },
  {
    id: 10,
    name: "Aloe Vera",
    emoji: "🌵",
    latin: "Aloe barbadensis",
    short: "Teri uchun foydali, kuyishlarda yordam beradi.",
    description: "Aloe Vera teri uchun foydali, kuyishlarda va yaralarni tezda bitishda yordam beradi. Jeli shaklida bevosita terига qo'llaniladi.",
    image: aloeVera,
    category: "teri",
    rating: 4,
    premium: false,
    benefits: ["Kuyishlarni davolaydi", "Terini namlaydi", "Yaralarni tezitadi", "Teri kasalliklarida foydali"],
    warnings: ["Og'iz orqali iste'mol qilishdan oldin shifokorga murojaat qiling", "Allergiya bo'lishi mumkin"],
    usage: { steps: ["Bargni kesib oling", "Jelini ajrating", "Teri yuzasiga suring", "Quriguncha qoldiring"] }
  },
  {
    id: 11,
    name: "Zafaron",
    emoji: "🟡",
    latin: "Crocus sativus",
    short: "Kayfiyatni ko'taradi, xotirani yaxshilaydi.",
    description: "Zafaron dunyodagi eng qimmat o'simliklardan biri. Kayfiyatni ko'taradi, xotirani yaxshilaydi va antidepressant xususiyatiga ega.",
    image: zafaron,
    category: "asab",
    rating: 5,
    premium: true,
    benefits: ["Kayfiyatni yaxshilaydi", "Xotirani kuchaytiradi", "Antidepressant xususiyati bor", "Uyquni yaxshilaydi"],
    warnings: ["Ko'p dozada zaharli bo'lishi mumkin", "Homiladorlikda qabul qilmang", "Kuniga 1-2 ip yetarli"],
    usage: { steps: ["2-3 ip zafaron oling", "Iliq suvda eritib qo'ying", "15 daqiqa kuting", "Taom yoki ichimlikka qo'shing"] }
  },
  {
    id: 12,
    name: "Valerian",
    emoji: "🌸",
    latin: "Valeriana officinalis",
    short: "Uyqusizlikda, asab tizimini tinchlantiradi.",
    description: "Valerian uyqusizlikda va asab tizimini tinchlantirish uchun eng mashhur o'simlik. Tabiiy uyqu vositasi sifatida ishlatiladi.",
    image: valerian,
    category: "asab",
    rating: 4,
    premium: false,
    benefits: ["Uyqusizlikka yordam beradi", "Asabni tinchlantiradi", "Tashvishni kamaytiradi", "Stressga qarshi"],
    warnings: ["Mashina haydashdan oldin qabul qilmang", "Alkogol bilan qabul qilmang", "Uzoq muddatda ehtiyot bo'ling"],
    usage: { steps: ["1 choy qoshiq quritilgan ildiz oling", "Qaynoq suvga soling", "15 daqiqa damlab qo'ying", "Yotishdan 30 daqiqa oldin iching"] }
  },
  {
    id: 13,
    name: "Echinacea",
    emoji: "🌺",
    latin: "Echinacea purpurea",
    short: "Immunitetni kuchaytiradi, shamollashda yordam.",
    description: "Echinacea immunitetni kuchaytiradi va shamollash hamda gripp profilaktikasida keng ishlatiladi. Tabiatning eng kuchli immunostimulyatoru.",
    image: echinacea,
    category: "immun",
    rating: 4,
    premium: false,
    benefits: ["Immunitetni kuchaytiradi", "Shamollashni qisqartiradi", "Grippga qarshi yordam beradi", "Yallig'lanishga qarshi"],
    warnings: ["Autoimmun kasalliklarda qabul qilmang", "2 haftadan ko'p uzluksiz qabul qilmang"],
    usage: { steps: ["Echinacea choyini oling", "Qaynoq suvga soling", "10 daqiqa damlab qo'ying", "Kuniga 3 mahal iching"] }
  },
  {
    id: 14,
    name: "Qoqio't",
    emoji: "🍀",
    latin: "Plantago major",
    short: "Yo'tal va bronxitda yordam beradi.",
    description: "Qoqio't yo'tal va bronxitda, yaralarni tezitishda va teri kasalliklarida yordam beradi. Ko'p joylarda o'suvchi foydali o'simlik.",
    image: qoqiot,
    category: "nafas",
    rating: 4,
    premium: false,
    benefits: ["Yo'talni bosadi", "Yaralarni tezitadi", "Bronxitda foydali", "Bakteriyalarga qarshi"],
    warnings: ["Qon ivishini buzishi mumkin, ehtiyot bo'ling", "Allergiya bo'lishi mumkin"],
    usage: { steps: ["Yangi barglarni yuvib oling", "Ezib shirini oling", "Yoki choy sifatida damlab iching", "Kuniga 2-3 marta iching"] }
  },
  {
    id: 15,
    name: "Curcuma",
    emoji: "🟠",
    latin: "Curcuma longa",
    short: "Kuchli yallig'lanishga qarshi, antioxidant.",
    description: "Curcuma kuchli yallig'lanishga qarshi va antioxidant xususiyatga ega. Jigar uchun foydali bo'lib, ovqatda ham keng ishlatiladi.",
    image: curcuma,
    category: "jigar",
    rating: 5,
    premium: true,
    benefits: ["Yallig'lanishga qarshi", "Antioxidant", "Jigar uchun foydali", "Qon tozalaydi"],
    warnings: ["Qon suyultiruvchi dorilar bilan birgalikda qabul qilmang", "Homiladorlikda ehtiyot bo'ling"],
    usage: { steps: ["1 choy qoshiq kurkuma oling", "Iliq sut yoki suvga qo'shing", "Qora qalampir qo'shing", "Kuniga 1 marta iching"] }
  },
  {
    id: 16,
    name: "Qizilmiya",
    emoji: "🌿",
    latin: "Glycyrrhiza glabra",
    short: "Yo'tal, bronxit, immunitet uchun foydali.",
    description: "Qizilmiya yo'tal, bronxit va oshqozon yarasi uchun foydali o'simlik. Immunitetni kuchaytiradi va chuchuk ta'mi bilan mashhur.",
    image: qizilmiya,
    category: "nafas",
    rating: 4,
    premium: false,
    benefits: ["Yo'talga qarshi", "Oshqozon yarasini davolaydi", "Immunitetni kuchaytiradi", "Bronxitda foydali"],
    warnings: ["Yuqori qon bosimida qabul qilmang", "Uzoq muddatli iste'moldan saqlaning", "Homiladorlikda qabul qilmang"],
    usage: { steps: ["Qizilmiya ildizini oling", "Qaynoq suvga soling", "10-15 daqiqa damlab qo'ying", "Kuniga 2 mahal iching"] }
  },
];

export const CATEGORIES = [
  { key: "all",   label: "Hammasi", icon: "🌿" },
  { key: "nafas", label: "Nafas",   icon: "🫁" },
  { key: "jigar", label: "Jigar",   icon: "💚" },
  { key: "asab",  label: "Asab",    icon: "🧠" },
  { key: "immun", label: "Immun",   icon: "🛡️" },
  { key: "hazm",  label: "Hazm",    icon: "🍵" },
  { key: "teri",  label: "Teri",    icon: "🌸" },
];

export default plants;