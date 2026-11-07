
/*
============================================================
       BOLIYAPUR COMMUNITY DIRECTORY
       MASTER INFORMATION DATABASE — 2026
============================================================

Area:
Boliyapur, Bongaon Union, Savar, Dhaka, Bangladesh

Main file: data.js

OFFICIAL COMMUNITY CONTACT:
Phone: 01605150684
WhatsApp: 8801605150684

IMPORTANT:
- Never invent institutional information.
- Unverified records remain marked for verification.
- Keep village and union-wide services separate.
- Only publish approved and active information.
============================================================
*/

(function () {
"use strict";

// ==========================================================
// 01. WEBSITE SETTINGS
// ==========================================================

const CONTACT_PHONE = "01605150684";
const CONTACT_WHATSAPP = "8801605150684";
const CONTACT_EMAIL = "boliyarpursavar@gmail.com";

const DATA = {

  siteName: "বলিয়াপুর | Boliyapur Community",
  siteNameEnglish: "Boliyapur Community Directory",

  tagline: "আমাদের গ্রাম, আমাদের পরিচয়",

  description:
    "বলিয়াপুর ও আশপাশের এলাকার শিক্ষা, স্বাস্থ্য, ব্যবসা, সরকারি সেবা, যোগাযোগ, সংবাদ ও প্রয়োজনীয় তথ্যের একটি কমিউনিটি ডিরেক্টরি।",

  country: "Bangladesh",
  division: "Dhaka",
  district: "Dhaka",
  upazila: "Savar",
  union: "9 No. Bongaon Union",
  village: "Boliyapur",

  language: "bn",
  timezone: "Asia/Dhaka",

  phone: CONTACT_PHONE,
  whatsapp: CONTACT_WHATSAPP,
  email: CONTACT_EMAIL,

  heroImage: "images/gallery/village-road.jpg.jpeg",
  logo: "images/logo.png",
  favicon: "images/favicon.png",

  facebook: "",
  youtube: "",
  instagram: "",

  established: "",
  lastUpdated: "2026-11-07",

  // ========================================================
  // 02. WEBSITE NAVIGATION
  // ========================================================

  menu: [
    { title: "হোম", link: "#home" },
    { title: "আমাদের গ্রাম", link: "#about" },
    { title: "শিক্ষা", link: "#education" },
    { title: "স্বাস্থ্যসেবা", link: "#health" },
    { title: "স্থানীয় সেবা", link: "#services" },
    { title: "ব্যবসা", link: "#business" },
    { title: "সরকারি সেবা", link: "#government" },
    { title: "সংবাদ", link: "#news" },
    { title: "নোটিশ", link: "#notices" },
    { title: "গ্যালারি", link: "#gallery" },
    { title: "যোগাযোগ", link: "#contact" }
  ],

  // ========================================================
  // 03. VERIFICATION SYSTEM
  // ========================================================

  verificationLabels: {
    verified: "যাচাইকৃত",
    sourceListed: "উৎসে তালিকাভুক্ত",
    userProvided: "ব্যবহারকারীর দেওয়া তথ্য",
    needsCheck: "পুনরায় যাচাই প্রয়োজন",
    pending: "তথ্য সংগ্রহ চলছে",
    official: "সরকারি জরুরি নম্বর"
  },

  // ========================================================
  // 04. VILLAGE INFORMATION
  // ========================================================

  about: {
    name: "বলিয়াপুর",
    englishName: "Boliyapur",
    union: "৯ নম্বর বনগাঁও ইউনিয়ন",
    upazila: "সাভার",
    district: "ঢাকা",
    country: "বাংলাদেশ",

    description:
      "বলিয়াপুর ও আশপাশের এলাকার মানুষের প্রয়োজনীয় তথ্য, শিক্ষা প্রতিষ্ঠান, স্বাস্থ্যসেবা, স্থানীয় ব্যবসা এবং সামাজিক কার্যক্রম এক জায়গায় তুলে ধরাই এই উদ্যোগের উদ্দেশ্য।",

    history: "",
    population: "",
    area: "",
    postalCode: "",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Boliyapur+Savar+Dhaka"
  },

  // ========================================================
  // 05. NOTICES
  // ========================================================

  notices: [
    {
      id: "NOTICE-001",
      title: "বলিয়াপুর কমিউনিটি নোটিশ",
      category: "সাধারণ ঘোষণা",
      text: "গুরুত্বপূর্ণ স্থানীয় ঘোষণা এখানে প্রকাশ করা হবে।",
      date: "",
      image: "",
      link: "",
      status: "draft"
    },
    {
      id: "NOTICE-002",
      title: "শিক্ষাপ্রতিষ্ঠানের ভর্তি বিজ্ঞপ্তি",
      category: "শিক্ষা",
      text: "যাচাইকৃত ভর্তি বিজ্ঞপ্তি এখানে প্রকাশ করা হবে।",
      date: "",
      image: "",
      link: "",
      status: "draft"
    }
  ],

  // ========================================================
  // 06. LOCAL NEWS
  // ========================================================

  news: [
    {
      id: "NEWS-001",
      title: "বলিয়াপুর গ্রামের স্থানীয় খবর",
      category: "কমিউনিটি সংবাদ",
      date: "",
      author: "",
      description: "গ্রামের যাচাইকৃত সংবাদ ও উন্নয়নমূলক কার্যক্রম।",
      image: "images/news/boliyapur-local-news.jpg",
      source: "",
      link: "",
      status: "draft"
    },
    {
      id: "NEWS-002",
      title: "বলিয়াপুরের শিক্ষা সংবাদ",
      category: "শিক্ষা",
      date: "",
      author: "",
      description: "স্থানীয় শিক্ষাপ্রতিষ্ঠানের খবর ও শিক্ষা কার্যক্রম।",
      image: "",
      source: "",
      link: "",
      status: "draft"
    },
    {
      id: "NEWS-003",
      title: "বলিয়াপুরের সামাজিক কার্যক্রম",
      category: "সামাজিক",
      date: "",
      author: "",
      description: "সামাজিক অনুষ্ঠান, খেলাধুলা ও জনকল্যাণমূলক কার্যক্রম।",
      image: "",
      source: "",
      link: "",
      status: "draft"
    }
  ],

  // ========================================================
  // 07. EDUCATION CATEGORIES
  // ========================================================

  educationCategories: [
    "সরকারি প্রাথমিক বিদ্যালয়",
    "বেসরকারি প্রাথমিক বিদ্যালয়",
    "উচ্চ বিদ্যালয়",
    "কলেজ",
    "কিন্ডারগার্টেন",
    "মাদ্রাসা",
    "হিফজ মাদ্রাসা",
    "কারিগরি শিক্ষা",
    "বিশেষ শিক্ষা প্রতিষ্ঠান",
    "কোচিং সেন্টার"
  ],

  // ========================================================
  // 08. EDUCATION INSTITUTIONS
  // ========================================================

  education: [

    {
      id: "EDU-001",
      name: "বলিয়ারপুর সরকারি প্রাথমিক বিদ্যালয়",
      nameEnglish: "Baliarpur Government Primary School",
      category: "সরকারি প্রাথমিক বিদ্যালয়",
      type: "primary-school",

      description: "বলিয়াপুর এলাকার সরকারি প্রাথমিক বিদ্যালয়।",

      headTeacher: "কামরুন নেছা",
      phone: "01719107451",
      email: "boliarpurgovtps@gmail.com",

      address: "বলিয়ারপুর, বনগাঁও ইউনিয়ন, সাভার, ঢাকা",
      village: "Boliyapur",

      image: "images/schools/boliarpur-government-primary-school.jpg",

      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=Baliarpur+Government+Primary+School+Savar+Dhaka",

      website: "",
      facebook: "",

      source: "Bongaon Union official website",
      sourceUrl: "https://bongaonup.dhaka.gov.bd/",

      verification: "sourceListed",
      contactVerification: "needsCheck",
      status: "active"
    },

    {
      id: "EDU-002",
      name: "জামি'আ ইসলামিয়া আরাবিয়া বলিয়ারপুর মাদ্রাসা",
      nameEnglish: "Jamia Islamia Arabia Baliarpur Madrasa",
      category: "মাদ্রাসা",
      type: "madrasa",

      description:
        "বলিয়াপুর এলাকার ইসলামি শিক্ষা প্রতিষ্ঠান। ইউনিয়ন পোর্টালে প্রকাশিত তথ্য অনুযায়ী প্রধান শিক্ষক মুফতী আব্দুর রাজ্জাক কাসেমী।",

      headTeacher: "মুফতী আব্দুর রাজ্জাক কাসেমী",
      phone: "01712019451",
      email: "",

      address: "বলিয়ারপুর, বনগাঁও ইউনিয়ন, সাভার, ঢাকা",
      village: "Boliyapur",

      image: "images/schools/jamia-boliarpur.jpg",

      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=Jamia+Islamia+Arabia+Baliarpur+Savar",

      website: "",
      facebook: "",

      source: "Bongaon Union official website",
      sourceUrl: "https://bongaonup.dhaka.gov.bd/",

      verification: "sourceListed",
      contactVerification: "needsCheck",
      status: "active"
    }

  ],

  // ========================================================
  // 09. EDUCATION RESEARCH LEADS
  // Not displayed as confirmed institutions
  // ========================================================

  educationResearch: [

    {
      id: "EDU-LEAD-001",
      name: "Sunkin Institute for Autistic Children and Trust Home",
      category: "বিশেষ শিক্ষা প্রতিষ্ঠান",
      address: "",
      phone: "",
      email: "",
      source: "",
      description: "বলিয়াপুরের সঙ্গে অবস্থানগত সম্পর্ক যাচাই প্রয়োজন।",
      verification: "pending",
      status: "research-only"
    },

    {
      id: "EDU-LEAD-002",
      name: "বলিয়াপুরের অন্যান্য কিন্ডারগার্টেন",
      category: "কিন্ডারগার্টেন",
      address: "",
      phone: "",
      email: "",
      verification: "pending",
      status: "research-only"
    },

    {
      id: "EDU-LEAD-003",
      name: "বলিয়াপুরের অন্যান্য মাদ্রাসা",
      category: "মাদ্রাসা",
      address: "",
      phone: "",
      email: "",
      verification: "pending",
      status: "research-only"
    },

    {
      id: "EDU-LEAD-004",
      name: "বলিয়াপুরের অন্যান্য বিদ্যালয়",
      category: "বিদ্যালয়",
      address: "",
      phone: "",
      email: "",
      verification: "pending",
      status: "research-only"
    }

  ],

  // ========================================================
  // 10. SCHOOL EVENTS
  // ========================================================

  schools: [
    {
      id: "SCHOOL-EVENT-001",
      title: "বলিয়ারপুর সরকারি প্রাথমিক বিদ্যালয়ের শিক্ষা কার্যক্রম",
      school: "বলিয়ারপুর সরকারি প্রাথমিক বিদ্যালয়",
      date: "",
      description: "ভর্তি, পরীক্ষা, ফলাফল ও বার্ষিক অনুষ্ঠান।",
      image: "",
      status: "draft"
    },
    {
      id: "SCHOOL-EVENT-002",
      title: "বলিয়ারপুর মাদ্রাসার শিক্ষা কার্যক্রম",
      school: "জামি'আ ইসলামিয়া আরাবিয়া বলিয়ারপুর মাদ্রাসা",
      date: "",
      description: "ভর্তি ও শিক্ষা কার্যক্রমের খবর।",
      image: "",
      status: "draft"
    }
  ],

  // ========================================================
  // 11. HEALTH SERVICES
  // ========================================================

  healthCategories: [
    "হাসপাতাল",
    "কমিউনিটি ক্লিনিক",
    "স্বাস্থ্য ও পরিবার কল্যাণ কেন্দ্র",
    "ডাক্তার",
    "ফার্মেসি",
    "ডায়াগনস্টিক সেন্টার",
    "অ্যাম্বুলেন্স",
    "মাতৃসেবা",
    "অন্যান্য"
  ],

  health: [
    {
      id: "HEALTH-001",
      name: "বলিয়ারপুর কমিউনিটি ক্লিনিক",
      category: "কমিউনিটি ক্লিনিক",

      description:
        "বলিয়াপুর এলাকার প্রাথমিক স্বাস্থ্যসেবা কেন্দ্র হিসেবে তথ্য দেওয়া হয়েছে। অবস্থান ও কার্যক্রম পুনরায় যাচাই প্রয়োজন।",

      phone: "",
      email: "",
      address: "বলিয়ারপুর, বনগাঁও ইউনিয়ন, সাভার, ঢাকা",

      image: "",
      website: "",

      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=Boliyapur+Community+Clinic+Savar",

      source: "",
      verification: "needsCheck",
      status: "draft"
    }
  ],

  // ========================================================
  // 12. UNION-WIDE GOVERNMENT SERVICES
  // ========================================================

  unionServices: [

    {
      id: "GOV-001",
      name: "৯ নম্বর বনগাঁও ইউনিয়ন পরিষদ",
      category: "সরকারি প্রতিষ্ঠান",

      description:
        "জন্ম ও মৃত্যু নিবন্ধন, নাগরিক সনদসহ ইউনিয়ন পরিষদের বিভিন্ন সেবা।",

      phone: "",
      email: "bangaounup9@gmail.com",

      address: "নগরকোন্ডা, বনগাঁও ইউনিয়ন, সাভার, ঢাকা",

      image: "images/services/bongaon-union-parishad.jpg",

      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=Bongaon+Union+Parishad+Savar",

      website: "https://bongaonup.dhaka.gov.bd/",

      verification: "needsCheck",
      serviceArea: "Bongaon Union",
      status: "active"
    },

    {
      id: "GOV-002",
      name: "বনগাঁও ইউনিয়ন তথ্য ও সেবা কেন্দ্র",
      category: "সরকারি ডিজিটাল সেবা",
      description: "ইউনিয়নের ডিজিটাল নাগরিক সেবা কেন্দ্র।",
      phone: "",
      email: "",
      address: "বনগাঁও ইউনিয়ন পরিষদ কার্যালয়, নগরকোন্ডা",
      image: "",
      mapUrl: "",
      website: "https://bongaonup.dhaka.gov.bd/",
      verification: "needsCheck",
      serviceArea: "Bongaon Union",
      status: "draft"
    },

    {
      id: "GOV-003",
      name: "বনগাঁও ইউনিয়ন ভূমি অফিস",
      category: "ভূমি সেবা",
      description: "ভূমি সংক্রান্ত সরকারি সেবা।",
      phone: "",
      email: "",
      address: "বনগাঁও ইউনিয়ন, সাভার, ঢাকা",
      image: "",
      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=Bongaon+Union+Land+Office+Savar",
      website: "",
      verification: "needsCheck",
      serviceArea: "Bongaon Union",
      status: "draft"
    },

    {
      id: "GOV-004",
      name: "বনগাঁও ইউনিয়ন সমাজসেবা অফিস",
      category: "সমাজসেবা",
      description: "সামাজিক নিরাপত্তা ও সমাজসেবা সংক্রান্ত তথ্য।",
      phone: "",
      email: "",
      address: "বনগাঁও ইউনিয়ন, সাভার, ঢাকা",
      image: "",
      mapUrl: "",
      website: "",
      verification: "needsCheck",
      serviceArea: "Bongaon Union",
      status: "draft"
    },

    {
      id: "GOV-005",
      name: "বনগাঁও ইউনিয়ন স্বাস্থ্য ও পরিবার কল্যাণ কেন্দ্র",
      category: "স্বাস্থ্যসেবা",
      description: "প্রাথমিক স্বাস্থ্য ও পরিবার পরিকল্পনা সেবা।",
      phone: "",
      email: "",
      address: "বনগাঁও ইউনিয়ন, সাভার, ঢাকা",
      image: "",
      mapUrl: "",
      website: "https://bongaonup.dhaka.gov.bd/",
      verification: "needsCheck",
      serviceArea: "Bongaon Union",
      status: "draft"
    }

  ],

  // ========================================================
  // 13. LOCAL BUSINESS DIRECTORY
  // ========================================================

  businessCategories: [
    "মুদি দোকান",
    "ফার্মেসি",
    "রেস্টুরেন্ট",
    "চায়ের দোকান",
    "কাপড়ের দোকান",
    "মোবাইল ও ইলেকট্রনিক্স",
    "কম্পিউটার সার্ভিস",
    "টেইলার্স",
    "কৃষি ও সার",
    "গবাদিপশু ও পোলট্রি",
    "হার্ডওয়্যার",
    "পরিবহন",
    "সেলুন",
    "বিউটি পার্লার",
    "মেরামত ও সার্ভিস",
    "অন্যান্য"
  ],

  businesses: [],

  // ========================================================
  // 14. OTHER LOCAL SERVICES
  // ========================================================

  services: [],

  serviceCategories: [
    "শিক্ষা",
    "স্বাস্থ্য",
    "সরকারি সেবা",
    "পরিবহন",
    "ব্যবসা",
    "অন্যান্য"
  ],

  // ========================================================
  // 15. IMPORTANT CONTACTS
  // ========================================================

  contacts: [

    {
      id: "CONTACT-001",
      name: "Boliyapur Community",
      category: "কমিউনিটি যোগাযোগ",

      phone: CONTACT_PHONE,
      whatsapp: CONTACT_WHATSAPP,
      email: CONTACT_EMAIL,

      description:
        "ওয়েবসাইটের তথ্য সংশোধন, নতুন প্রতিষ্ঠান যোগ এবং কমিউনিটি যোগাযোগের জন্য।",

      verification: "userProvided"
    },

    {
      id: "CONTACT-002",
      name: "বনগাঁও ইউনিয়ন পরিষদ",
      category: "সরকারি যোগাযোগ",

      phone: "",
      email: "bangaounup9@gmail.com",

      website: "https://bongaonup.dhaka.gov.bd/",

      description: "ইউনিয়ন পরিষদের যোগাযোগ।",

      verification: "needsCheck"
    }

  ],

  // ========================================================
  // 16. EMERGENCY CONTACTS
  // ========================================================

  emergency: [

    {
      id: "EMERGENCY-001",
      name: "জাতীয় জরুরি সেবা",
      category: "Emergency",
      phone: "999",
      description: "পুলিশ, ফায়ার সার্ভিস ও জরুরি সহায়তা।",
      verification: "official"
    },

    {
      id: "EMERGENCY-002",
      name: "জাতীয় স্বাস্থ্য বাতায়ন",
      category: "Health",
      phone: "16263",
      description: "স্বাস্থ্য বিষয়ক পরামর্শ।",
      verification: "official"
    },

    {
      id: "EMERGENCY-003",
      name: "ফায়ার সার্ভিস",
      category: "Fire Service",
      phone: "102",
      description: "অগ্নিনির্বাপণ ও উদ্ধার সহায়তা।",
      verification: "official"
    }

  ],

  // ========================================================
  // 17. PHOTO GALLERY
  // ========================================================

  gallery: [

    {
      id: "GALLERY-001",
      title: "বলিয়াপুর গ্রামের রাস্তা",
      category: "গ্রামের দৃশ্য",
      image: "images/gallery/village-road.jpg.jpeg",
      date: "",
      description: ""
    },

    {
      id: "GALLERY-002",
      title: "বলিয়ারপুর সরকারি প্রাথমিক বিদ্যালয়",
      category: "শিক্ষাপ্রতিষ্ঠান",
      image: "images/schools/boliarpur-government-primary-school.jpg",
      date: "",
      description: ""
    },

    {
      id: "GALLERY-003",
      title: "বলিয়ারপুর মাদ্রাসা",
      category: "শিক্ষাপ্রতিষ্ঠান",
      image: "images/schools/jamia-boliarpur.jpg",
      date: "",
      description: ""
    },

    {
      id: "GALLERY-004",
      title: "বনগাঁও ইউনিয়ন পরিষদ",
      category: "সরকারি প্রতিষ্ঠান",
      image: "images/services/bongaon-union-parishad.jpg",
      date: "",
      description: ""
    },

    {
      id: "GALLERY-005",
      title: "বলিয়াপুর গ্রামের সামাজিক অনুষ্ঠান",
      category: "সামাজিক অনুষ্ঠান",
      image: "images/gallery/community-event.jpg",
      date: "",
      description: ""
    },

    {
      id: "GALLERY-006",
      title: "বলিয়াপুরের প্রাকৃতিক সৌন্দর্য",
      category: "প্রকৃতি",
      image: "images/gallery/village-nature.jpg",
      date: "",
      description: ""
    }

  ],

  // ========================================================
  // 18. VIDEOS
  // ========================================================

  videos: [
    {
      id: "VIDEO-001",
      title: "বলিয়াপুর গ্রামের ভিডিও",
      category: "Village",
      thumbnail: "",
      videoUrl: "",
      youtubeUrl: "",
      date: "",
      description: "",
      status: "draft"
    }
  ],

  // ========================================================
  // 19. COMMUNITY CONTRIBUTION
  // ========================================================

  contribution: {

    title: "বলিয়াপুরের তথ্য যোগ করুন",

    description:
      "আপনার জানা কোনো স্কুল, মাদ্রাসা, ব্যবসা, স্বাস্থ্যকেন্দ্র বা গুরুত্বপূর্ণ সেবার তথ্য আমাদের পাঠান। যাচাই করার পর ডিরেক্টরিতে যুক্ত করা হবে।",

    contactPhone: CONTACT_PHONE,
    contactEmail: CONTACT_EMAIL,
    whatsapp: CONTACT_WHATSAPP,

    allowPublicSubmission: true,
    requireVerification: true
  },

  // ========================================================
  // 20. WEBSITE FOOTER
  // ========================================================

  footer: {

    title: "Boliyapur Community",

    description:
      "বলিয়াপুর ও আশপাশের মানুষের জন্য একটি তথ্যভিত্তিক কমিউনিটি প্ল্যাটফর্ম।",

    copyright:
      "© 2026 Boliyapur Community. All Rights Reserved.",

    email: CONTACT_EMAIL,
    phone: CONTACT_PHONE,

    address:
      "Boliyapur, Bongaon Union, Savar, Dhaka, Bangladesh",

    developer: "Boliyapur Community Team"
  }

};


// ==========================================================
// 21. BUILD COMBINED DIRECTORY
// ==========================================================

// All service categories are combined here.
// This is created BEFORE validation to prevent errors.

DATA.services = [
  ...DATA.education,
  ...DATA.health,
  ...DATA.unionServices,
  ...DATA.businesses
];


// ==========================================================
// 22. DIRECTORY HELPER FUNCTIONS
// ==========================================================

const HELPERS = {

  // Convert phone number to clickable telephone link

  getPhoneLink: function (phone) {
    if (!phone) return "";

    const clean = String(phone).replace(/[^0-9+]/g, "");

    return clean ? "tel:" + clean : "";
  },

  // Convert email to mail link

  getEmailLink: function (email) {
    if (!email) return "";

    return "mailto:" + String(email).trim();
  },

  // Generate WhatsApp link

  getWhatsAppLink: function (number) {
    if (!number) return "";

    const clean = String(number).replace(/[^0-9]/g, "");

    return clean
      ? "https://wa.me/" + clean
      : "";
  },

  // Google Maps link

  getMapLink: function (item) {
    if (!item) return "";

    if (item.mapUrl) return item.mapUrl;

    if (!item.address) return "";

    return (
      "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent(item.address)
    );
  },

  // Get active education institutions

  getEducation: function () {
    return DATA.education.filter(
      item => item.status === "active"
    );
  },

  // Get active services

  getActiveServices: function () {
    return DATA.services.filter(
      item => item.status === "active"
    );
  },

  // Get active businesses

  getBusinesses: function () {
    return DATA.businesses.filter(
      item => item.status === "active"
    );
  },

  // Get active health services

  getHealth: function () {
    return DATA.health.filter(
      item => item.status === "active"
    );
  },

  // Search across the directory

  searchServices: function (keyword) {

    const query = String(keyword || "")
      .toLowerCase()
      .trim();

    if (!query) return [];

    const all = [
      ...DATA.education,
      ...DATA.health,
      ...DATA.unionServices,
      ...DATA.businesses
    ];

    return all.filter(item => {

      const searchable = [
        item.name,
        item.nameEnglish,
        item.category,
        item.address,
        item.description
      ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

      return (
        searchable.includes(query) &&
        item.status === "active"
      );

    });

  },

  // Search education institutions

  searchEducation: function (keyword) {

    const query = String(keyword || "").toLowerCase().trim();

    if (!query) return [];

    return DATA.education.filter(item => {

      const content = [
        item.name,
        item.nameEnglish,
        item.category,
        item.address
      ].filter(Boolean).join(" ").toLowerCase();

      return (
        content.includes(query) &&
        item.status === "active"
      );

    });

  },

  // Find an institution by ID

  getById: function (id) {

    const all = [
      ...DATA.education,
      ...DATA.health,
      ...DATA.unionServices,
      ...DATA.businesses
    ];

    return all.find(item => item.id === id) || null;

  },

  // Get pending verification records

  getPendingVerification: function () {

    const all = [
      ...DATA.education,
      ...DATA.educationResearch,
      ...DATA.health,
      ...DATA.unionServices,
      ...DATA.businesses
    ];

    return all.filter(item =>
      item.verification === "pending" ||
      item.verification === "needsCheck"
    );

  },

  // Get all published notices

  getActiveNotices: function () {
    return DATA.notices.filter(
      item => item.status === "active"
    );
  },

  // Get published news

  getActiveNews: function () {
    return DATA.news.filter(
      item => item.status === "active"
    );
  },

  // Directory statistics

  getStatistics: function () {
    return {
      education: DATA.education.length,
      health: DATA.health.length,
      government: DATA.unionServices.length,
      businesses: DATA.businesses.length,
      notices: DATA.notices.length,
      news: DATA.news.length,
      gallery: DATA.gallery.length,
      videos: DATA.videos.length
    };
  }

};


// ==========================================================
// 23. DATA VALIDATION SYSTEM
// ==========================================================

function VALIDATE() {

  const problems = [];
  const warnings = [];

  if (!DATA.siteName) {
    problems.push("Website name missing");
  }

  const requiredArrays = [
    "education",
    "health",
    "unionServices",
    "businesses",
    "services",
    "news",
    "notices",
    "gallery",
    "contacts",
    "emergency"
  ];

  requiredArrays.forEach(key => {
    if (!Array.isArray(DATA[key])) {
      problems.push("Invalid or missing array: " + key);
    }
  });

  // Check duplicate IDs

  const allRecords = [
    ...DATA.education,
    ...DATA.health,
    ...DATA.unionServices,
    ...DATA.businesses
  ];

  const ids = new Set();

  allRecords.forEach(item => {

    if (!item.id) {
      problems.push("Record ID missing: " + (item.name || "Unknown"));
    } else if (ids.has(item.id)) {
      problems.push("Duplicate ID: " + item.id);
    } else {
      ids.add(item.id);
    }

    if (!item.name) {
      problems.push("Institution name missing");
    }

    if (!item.category) {
      warnings.push("Category missing: " + (item.name || item.id));
    }

    if (!item.verification) {
      warnings.push("Verification status missing: " + (item.name || item.id));
    }

  });

  // Check official community phone

  if (DATA.phone !== CONTACT_PHONE) {
    problems.push("Community phone number does not match");
  }

  if (DATA.whatsapp !== CONTACT_WHATSAPP) {
    problems.push("Community WhatsApp number does not match");
  }

  // Check important contact number

  const communityContact = DATA.contacts.find(
    item => item.id === "CONTACT-001"
  );

  if (!communityContact ||
      communityContact.phone !== CONTACT_PHONE) {
    problems.push("Community contact phone is incorrect");
  }

  if (DATA.footer.phone !== CONTACT_PHONE) {
    problems.push("Footer phone number is incorrect");
  }

  if (problems.length) {
    console.error(
      "BOLIYAPUR DIRECTORY ERRORS:",
      problems
    );
  } else {
    console.log(
      "Boliyapur Directory: No structural errors found."
    );
  }

  if (warnings.length) {
    console.warn(
      "Boliyapur Directory warnings:",
      warnings
    );
  }

  return {
    success: problems.length === 0,
    problems: problems,
    warnings: warnings
  };

}


// ==========================================================
// 24. GLOBAL EXPORTS
// ==========================================================

window.BOLIYAPUR_DATA = DATA;
window.BOLIYAPUR_HELPERS = HELPERS;
window.BOLIYAPUR_VALIDATE = VALIDATE;

// Run validation after all data and services are ready.

window.BOLIYAPUR_VALIDATION_RESULT = VALIDATE();

})();
