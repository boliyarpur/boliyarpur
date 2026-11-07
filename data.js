
/*
===========================================================
          BOLIYAPUR COMMUNITY DIRECTORY
          OFFICIAL LOCAL INFORMATION DATABASE
===========================================================

Area:
Boliyapur, 9 No. Bongaon Union, Savar, Dhaka, Bangladesh

File:
data.js

Image folders:
images/gallery/
images/services/
images/news/
images/schools/
images/members/

IMPORTANT:
1. Only Boliyapur village institutions belong in services.
2. Union-wide government services are separately labelled.
3. Never publish unverified phone numbers as official.
4. Empty fields can be updated later.
5. All images should use English filenames.
6. Do not invent email addresses or contact details.
===========================================================
*/

window.BOLIYAPUR_DATA = {

  // ======================================================
  // 01. WEBSITE SETTINGS
  // ======================================================

  siteName: "বলিয়াপুর | Boliyapur Community",

  siteNameEnglish: "Boliyapur Community Directory",

  tagline: "আমাদের গ্রাম, আমাদের পরিচয়",

  description:
    "বলিয়াপুর গ্রামের শিক্ষা প্রতিষ্ঠান, স্বাস্থ্যসেবা, স্থানীয় ব্যবসা, যোগাযোগ, সংবাদ ও প্রয়োজনীয় তথ্যের একটি কমিউনিটি ডিরেক্টরি।",

  country: "Bangladesh",
  division: "Dhaka",
  district: "Dhaka",
  upazila: "Savar",
  union: "9 No. Bongaon Union",
  village: "Boliyapur",

  language: "bn",

  timezone: "Asia/Dhaka",

  whatsapp: "8801605150684",
  phone: "8801605150684",

  email: "boliyarpursavar@gmail.com",

  heroImage: "images/gallery/village-road.jpg.jpeg",

  logo: "images/logo.png",

  favicon: "images/favicon.png",

  facebook: "",
  youtube: "",
  instagram: "",

  // ======================================================
  // 02. WEBSITE MENU
  // ======================================================

  menu: [
    { title: "হোম", link: "#home" },
    { title: "আমাদের গ্রাম", link: "#about" },
    { title: "শিক্ষাপ্রতিষ্ঠান", link: "#education" },
    { title: "স্বাস্থ্যসেবা", link: "#health" },
    { title: "স্থানীয় সেবা", link: "#services" },
    { title: "ব্যবসা প্রতিষ্ঠান", link: "#business" },
    { title: "সংবাদ", link: "#news" },
    { title: "নোটিশ", link: "#notices" },
    { title: "গ্যালারি", link: "#gallery" },
    { title: "যোগাযোগ", link: "#contact" }
  ],

  // ======================================================
  // 03. VERIFICATION SYSTEM
  // ======================================================

  verificationLabels: {
    verified: "যাচাইকৃত",
    sourceListed: "উৎসে তালিকাভুক্ত",
    needsCheck: "পুনরায় যাচাই প্রয়োজন",
    userProvided: "ব্যবহারকারীর দেওয়া তথ্য",
    pending: "তথ্য সংগ্রহ চলছে"
  },

  // ======================================================
  // 04. NOTICES
  // ======================================================

  notices: [
    {
      id: 1,
      title: "বলিয়াপুর কমিউনিটি নোটিশ",
      category: "সাধারণ ঘোষণা",
      text:
        "বলিয়াপুর গ্রামের নাগরিকদের জন্য গুরুত্বপূর্ণ ঘোষণা এখানে প্রকাশ করা হবে।",
      date: "",
      image: "",
      link: "",
      status: "active"
    },
    {
      id: 2,
      title: "শিক্ষাপ্রতিষ্ঠানের ভর্তি বিজ্ঞপ্তি",
      category: "শিক্ষা",
      text:
        "স্থানীয় শিক্ষাপ্রতিষ্ঠানের যাচাইকৃত ভর্তি বিজ্ঞপ্তি এখানে প্রকাশ করা হবে।",
      date: "",
      image: "",
      link: "",
      status: "active"
    }
  ],

  // ======================================================
  // 05. LOCAL NEWS
  // ======================================================

  news: [
    {
      id: 1,
      title: "বলিয়াপুর গ্রামের স্থানীয় খবর",
      category: "কমিউনিটি সংবাদ",
      date: "",
      author: "",
      description:
        "বলিয়াপুর গ্রামের যাচাই করা সংবাদ, সামাজিক কার্যক্রম ও উন্নয়নমূলক তথ্য এখানে প্রকাশ করা হবে।",
      image: "images/news/boliyapur-local-news.jpg",
      link: "",
      source: "",
      status: "draft"
    },
    {
      id: 2,
      title: "বলিয়াপুরের শিক্ষা সংবাদ",
      category: "শিক্ষা",
      date: "",
      author: "",
      description:
        "স্থানীয় স্কুল ও মাদ্রাসার ভর্তি, পরীক্ষার ফলাফল ও শিক্ষা কার্যক্রমের খবর।",
      image: "",
      link: "",
      source: "",
      status: "draft"
    },
    {
      id: 3,
      title: "বলিয়াপুরের সামাজিক কার্যক্রম",
      category: "সামাজিক সংবাদ",
      date: "",
      author: "",
      description:
        "গ্রামের সামাজিক অনুষ্ঠান, খেলাধুলা, সাংস্কৃতিক আয়োজন ও জনকল্যাণমূলক কার্যক্রম।",
      image: "",
      link: "",
      source: "",
      status: "draft"
    }
  ],

  // ======================================================
  // 06. EDUCATION INSTITUTIONS
  // ======================================================

  education: [

    {
      id: "EDU-001",

      name: "বলিয়ারপুর সরকারি প্রাথমিক বিদ্যালয়",

      nameEnglish: "Baliarpur Government Primary School",

      category: "সরকারি প্রাথমিক বিদ্যালয়",

      type: "primary-school",

      description:
        "বলিয়াপুর এলাকার সরকারি প্রাথমিক বিদ্যালয়।",

      headTeacher: "কামরুন নেছা",

      phone: "01719107451",

      email: "boliarpurgovtps@gmail.com",

      address:
        "বলিয়ারপুর, বনগাঁও ইউনিয়ন, সাভার, ঢাকা",

      village: "Boliyapur",

      image:
        "images/schools/boliarpur-government-primary-school.jpg",

      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=Baliarpur+Government+Primary+School+Savar+Dhaka",

      website: "",

      facebook: "",

      source:
        "Bongaon Union official website",

      sourceUrl:
        "https://bongaonup.dhaka.gov.bd/",

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
        "বলিয়াপুর এলাকার ইসলামি শিক্ষা প্রতিষ্ঠান। সরকারি ইউনিয়ন পোর্টালে প্রকাশিত তথ্য অনুযায়ী প্রধান শিক্ষক মুফতী আব্দুর রাজ্জাক কাসেমী।",

      headTeacher:
        "মুফতী আব্দুর রাজ্জাক কাসেমী",

      phone: "01712019451",

      email: "",

      address:
        "বলিয়ারপুর, বনগাঁও ইউনিয়ন, সাভার, ঢাকা",

      village: "Boliyapur",

      image:
        "images/schools/jamia-boliarpur.jpg",

      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=Jamia+Islamia+Arabia+Baliarpur+Savar",

      website: "",

      facebook: "",

      source:
        "Bongaon Union official website",

      sourceUrl:
        "https://bongaonup.dhaka.gov.bd/",

      verification: "sourceListed",

      contactVerification: "needsCheck",

      status: "active"
    }

  ],

  // ======================================================
  // 07. OTHER EDUCATION RESEARCH LEADS
  // These are NOT confirmed public directory entries.
  // ======================================================

  educationResearch: [

    {
      id: "EDU-LEAD-001",

      name:
        "Sunkin Institute for Autistic Children and Trust Home",

      category: "বিশেষ শিক্ষা প্রতিষ্ঠান",

      address: "",

      phone: "",

      email: "",

      mapUrl: "",

      facebook: "",

      source: "",

      description:
        "অনুসন্ধানে এই প্রতিষ্ঠানের নাম পাওয়া গেছে। বলিয়াপুরের সঠিক অবস্থান, ঠিকানা ও কার্যক্রম যাচাই না হওয়া পর্যন্ত মূল ডিরেক্টরিতে প্রকাশ করা যাবে না।",

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

      description:
        "স্থানীয় Facebook পোস্ট, Google Maps ও শিক্ষা-সংক্রান্ত সূত্র থেকে নাম সংগ্রহ করতে হবে।",

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

      description:
        "স্থানীয় কওমি, হিফজ ও অন্যান্য মাদ্রাসার নাম ও অবস্থান যাচাই করতে হবে।",

      verification: "pending",

      status: "research-only"
    },

    {
      id: "EDU-LEAD-004",

      name: "বলিয়াপুরের অন্যান্য প্রাথমিক ও উচ্চ বিদ্যালয়",

      category: "বিদ্যালয়",

      address: "",

      phone: "",

      email: "",

      description:
        "সরকারি শিক্ষা ডেটাবেস, EIIN, স্থানীয় পোস্ট ও প্রতিষ্ঠানের নিজস্ব সূত্র থেকে তথ্য সংগ্রহ করতে হবে।",

      verification: "pending",

      status: "research-only"
    }

  ],

  // ======================================================
  // 08. SCHOOL EVENTS
  // ======================================================

  schools: [

    {
      id: 1,

      title:
        "বলিয়ারপুর সরকারি প্রাথমিক বিদ্যালয়ের শিক্ষা কার্যক্রম",

      date: "",

      description:
        "বিদ্যালয়ের ভর্তি বিজ্ঞপ্তি, পরীক্ষা, ফলাফল, বার্ষিক অনুষ্ঠান ও পুরস্কার বিতরণীর খবর।",

      image: "",

      school:
        "বলিয়ারপুর সরকারি প্রাথমিক বিদ্যালয়",

      status: "draft"
    },

    {
      id: 2,

      title:
        "বলিয়ারপুর মাদ্রাসার শিক্ষা কার্যক্রম",

      date: "",

      description:
        "মাদ্রাসার ভর্তি, শিক্ষা কার্যক্রম, ধর্মীয় অনুষ্ঠান ও অন্যান্য আয়োজন।",

      image: "",

      school:
        "জামি'আ ইসলামিয়া আরাবিয়া বলিয়ারপুর মাদ্রাসা",

      status: "draft"
    }

  ],

  // ======================================================
  // 09. HEALTH SERVICES
  // ======================================================

  health: [

    {
      id: "HEALTH-001",

      name: "বলিয়ারপুর কমিউনিটি ক্লিনিক",

      category: "কমিউনিটি ক্লিনিক",

      description:
        "বলিয়াপুর এলাকার প্রাথমিক স্বাস্থ্যসেবা কেন্দ্র হিসেবে তথ্য দেওয়া হয়েছে। সরকারি স্বাস্থ্য পোর্টাল থেকে সঠিক অবস্থান ও কার্যক্রম পুনরায় যাচাই প্রয়োজন।",

      phone: "",

      email: "",

      address:
        "বলিয়ারপুর, বনগাঁও ইউনিয়ন, সাভার, ঢাকা",

      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=Boliyapur+Community+Clinic+Savar",

      image: "",

      website: "",

      source: "",

      verification: "needsCheck",

      status: "draft"
    }

  ],

  // ======================================================
  // 10. UNION-WIDE GOVERNMENT SERVICES
  // These serve the village but are not all located inside it.
  // ======================================================

  unionServices: [

    {
      id: "GOV-001",

      name: "৯ নম্বর বনগাঁও ইউনিয়ন পরিষদ",

      category: "সরকারি প্রতিষ্ঠান",

      description:
        "বনগাঁও ইউনিয়নের স্থানীয় সরকার প্রতিষ্ঠান। নাগরিক সনদ, জন্ম ও মৃত্যু নিবন্ধনসহ বিভিন্ন নাগরিক সেবা সম্পর্কে তথ্য পাওয়া যায়।",

      phone: "",

      email: "bangaounup9@gmail.com",

      address:
        "নগরকোন্ডা, বনগাঁও ইউনিয়ন, সাভার, ঢাকা",

      image:
        "images/services/bongaon-union-parishad.jpg",

      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=Bongaon+Union+Parishad+Savar",

      website:
        "https://bongaonup.dhaka.gov.bd/",

      verification: "needsCheck",

      serviceArea: "Bongaon Union",

      status: "active"
    },

    {
      id: "GOV-002",

      name: "বনগাঁও ইউনিয়ন তথ্য ও সেবা কেন্দ্র",

      category: "সরকারি ডিজিটাল সেবা",

      description:
        "ইউনিয়নের নাগরিকদের তথ্য ও ডিজিটাল সেবা গ্রহণের কেন্দ্র।",

      phone: "",

      email: "",

      address:
        "বনগাঁও ইউনিয়ন পরিষদ কার্যালয়, নগরকোন্ডা",

      image: "",

      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=Bongaon+Union+Information+Service+Center+Savar",

      website:
        "https://bongaonup.dhaka.gov.bd/",

      verification: "needsCheck",

      serviceArea: "Bongaon Union",

      status: "draft"
    },

    {
      id: "GOV-003",

      name: "বনগাঁও ইউনিয়ন ভূমি অফিস",

      category: "ভূমি সেবা",

      description:
        "ভূমি সংক্রান্ত সরকারি সেবা ও তথ্যের জন্য ইউনিয়ন ভূমি অফিসের যোগাযোগ ও অবস্থান যাচাই করুন।",

      phone: "",

      email: "",

      address:
        "বনগাঁও ইউনিয়ন, সাভার, ঢাকা",

      image: "",

      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=Bongaon+Union+Land+Office+Savar",

      website:
        "https://bongaonup.dhaka.gov.bd/",

      verification: "needsCheck",

      serviceArea: "Bongaon Union",

      status: "draft"
    },

    {
      id: "GOV-004",

      name: "বনগাঁও ইউনিয়ন সমাজসেবা অফিস",

      category: "সমাজসেবা",

      description:
        "সামাজিক নিরাপত্তা ও সমাজসেবা সংক্রান্ত সরকারি তথ্য ও সেবার জন্য।",

      phone: "",

      email: "",

      address:
        "বনগাঁও ইউনিয়ন, সাভার, ঢাকা",

      image: "",

      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=Bongaon+Union+Social+Service+Office+Savar",

      website: "",

      verification: "needsCheck",

      serviceArea: "Bongaon Union",

      status: "draft"
    },

    {
      id: "GOV-005",

      name: "বনগাঁও ইউনিয়ন স্বাস্থ্য ও পরিবার কল্যাণ কেন্দ্র",

      category: "স্বাস্থ্যসেবা",

      description:
        "ইউনিয়নের প্রাথমিক স্বাস্থ্য ও পরিবার পরিকল্পনা সেবা সম্পর্কে তথ্য।",

      phone: "",

      email: "",

      address:
        "বনগাঁও ইউনিয়ন, সাভার, ঢাকা",

      image: "",

      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=Bongaon+Union+Health+Family+Welfare+Center",

      website:
        "https://bongaonup.dhaka.gov.bd/",

      verification: "needsCheck",

      serviceArea: "Bongaon Union",

      status: "draft"
    }

  ],

  // ======================================================
  // 11. LOCAL BUSINESS DIRECTORY
  // ======================================================

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
    "অন্যান্য"
  ],

  businesses: [

    {
      id: "BUS-001",

      name: "স্থানীয় ব্যবসা প্রতিষ্ঠান",

      category: "অন্যান্য",

      owner: "",

      description:
        "ব্যবসার নাম, মালিকের অনুমতি নিয়ে প্রকাশিত ফোন নম্বর, ঠিকানা ও সেবার বিবরণ এখানে যোগ করুন।",

      phone: "",

      whatsapp: "",

      email: "",

      address: "",

      image: "",

      mapUrl: "",

      facebook: "",

      openingHours: "",

      verification: "pending",

      status: "draft"
    }

  ],

  // ======================================================
  // 12. IMPORTANT CONTACTS
  // ======================================================

  contacts: [

    {
      id: "CONTACT-001",

      name: "Boliyapur Community",

      category: "কমিউনিটি যোগাযোগ",

      phone: "01605150684",

      whatsapp: "8801605150684",

      email: "boliyarpursavar@gmail.com",

      description:
        "ওয়েবসাইটের তথ্য সংশোধন, নতুন প্রতিষ্ঠান যোগ করা এবং কমিউনিটি যোগাযোগের জন্য।",

      verification: "userProvided"
    },

    {
      id: "CONTACT-002",

      name: "বনগাঁও ইউনিয়ন পরিষদ",

      category: "সরকারি যোগাযোগ",

      phone: "",

      email: "bangaounup9@gmail.com",

      website: "https://bongaonup.dhaka.gov.bd/",

      description:
        "ইউনিয়ন পরিষদের যোগাযোগের জন্য প্রকাশিত ইমেইল। বর্তমান কার্যকারিতা যাচাই প্রয়োজন।",

      verification: "needsCheck"
    }

  ],

  // ======================================================
  // 13. LOCAL EMERGENCY SERVICES
  // ======================================================

  emergency: [

    {
      name: "জাতীয় জরুরি সেবা",

      category: "Emergency",

      phone: "999",

      description:
        "পুলিশ, ফায়ার সার্ভিস ও অ্যাম্বুলেন্সসহ জরুরি সহায়তা।",

      verification: "official"
    },

    {
      name: "জাতীয় স্বাস্থ্য বাতায়ন",

      category: "Health",

      phone: "16263",

      description:
        "স্বাস্থ্য বিষয়ক পরামর্শ ও সেবা।",

      verification: "official"
    },

    {
      name: "ফায়ার সার্ভিস",

      category: "Fire Service",

      phone: "102",

      description:
        "অগ্নিনির্বাপণ ও উদ্ধার সহায়তা।",

      verification: "official"
    }

  ],

  // ======================================================
  // 14. PHOTO GALLERY
  // ======================================================

  gallery: [

    {
      id: 1,

      title: "বলিয়াপুর গ্রামের রাস্তা",

      category: "গ্রামের দৃশ্য",

      image:
        "images/gallery/village-road.jpg.jpeg",

      date: "",

      description: ""
    },

    {
      id: 2,

      title: "বলিয়ারপুর সরকারি প্রাথমিক বিদ্যালয়",

      category: "শিক্ষাপ্রতিষ্ঠান",

      image:
        "images/schools/boliarpur-government-primary-school.jpg",

      date: "",

      description: ""
    },

    {
      id: 3,

      title: "বলিয়ারপুর মাদ্রাসা",

      category: "শিক্ষাপ্রতিষ্ঠান",

      image:
        "images/schools/jamia-boliarpur.jpg",

      date: "",

      description: ""
    },

    {
      id: 4,

      title: "বনগাঁও ইউনিয়ন পরিষদ",

      category: "সরকারি প্রতিষ্ঠান",

      image:
        "images/services/bongaon-union-parishad.jpg",

      date: "",

      description: ""
    },

    {
      id: 5,

      title: "বলিয়াপুর গ্রামের সামাজিক অনুষ্ঠান",

      category: "সামাজিক অনুষ্ঠান",

      image:
        "images/gallery/community-event.jpg",

      date: "",

      description: ""
    },

    {
      id: 6,

      title: "বলিয়াপুরের প্রাকৃতিক সৌন্দর্য",

      category: "প্রকৃতি",

      image:
        "images/gallery/village-nature.jpg",

      date: "",

      description: ""
    }

  ],

  // ======================================================
  // 15. VIDEOS
  // ======================================================

  videos: [

    {
      id: 1,

      title: "বলিয়াপুর গ্রামের ভিডিও",

      category: "Village",

      thumbnail: "",

      videoUrl: "",

      youtubeUrl: "",

      date: "",

      description: ""
    }

  ],

  // ======================================================
  // 16. COMMUNITY CONTRIBUTION
  // ======================================================

  contribution: {

    title: "বলিয়াপুরের তথ্য যোগ করুন",

    description:
      "আপনার জানা কোনো স্কুল, মাদ্রাসা, ব্যবসা, স্বাস্থ্যকেন্দ্র বা গুরুত্বপূর্ণ সেবার তথ্য আমাদের পাঠান। যাচাই করার পর ডিরেক্টরিতে যুক্ত করা হবে।",

    contactEmail: "boliyarpursavar@gmail.com",

    whatsapp: "8801605150684",

    allowPublicSubmission: true,

    requireVerification: true
  },

  // ======================================================
  // 17. WEBSITE FOOTER
  // ======================================================

  footer: {

    title: "Boliyapur Community",

    description:
      "বলিয়াপুর গ্রামের মানুষের জন্য একটি তথ্যভিত্তিক কমিউনিটি প্ল্যাটফর্ম।",

    copyright:
      "© 2026 Boliyapur Community. All Rights Reserved.",

    email: "boliyarpursavar@gmail.com",

    phone: "01605150684",

    address:
      "Boliyapur, Bongaon Union, Savar, Dhaka, Bangladesh",

    developer: "Boliyapur Community Team"
  }

};


// ========================================================
// 18. DIRECTORY HELPER FUNCTIONS
// ========================================================

// Phone number formatting

window.BOLIYAPUR_HELPERS = {

  getPhoneLink: function(phone) {

    if (!phone) return "";

    return "tel:" + phone.replace(/[^0-9+]/g, "");

  },

  getEmailLink: function(email) {

    if (!email) return "";

    return "mailto:" + email;

  },

  getWhatsAppLink: function(number) {

    if (!number) return "";

    return "https://wa.me/" +
      number.replace(/[^0-9]/g, "");

  },

  getMapLink: function(item) {

    if (item.mapUrl) return item.mapUrl;

    if (!item.address) return "";

    return "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent(item.address);

  },

  // Only publish active records

  getActiveServices: function() {

    return window.BOLIYAPUR_DATA.services.filter(
      item => item.status === "active"
    );

  },

  // Get education records

  getEducation: function() {

    return window.BOLIYAPUR_DATA.education.filter(
      item => item.status === "active"
    );

  },

  // Search all public local services

  searchServices: function(keyword) {

    const query = keyword.toLowerCase().trim();

    if (!query) return [];

    const all = [
      ...window.BOLIYAPUR_DATA.services,
      ...window.BOLIYAPUR_DATA.education,
      ...window.BOLIYAPUR_DATA.health,
      ...window.BOLIYAPUR_DATA.businesses
    ];

    return all.filter(item => {

      const name = (item.name || "").toLowerCase();

      const category =
        (item.category || "").toLowerCase();

      const address =
        (item.address || "").toLowerCase();

      return (
        name.includes(query) ||
        category.includes(query) ||
        address.includes(query)
      );

    });

  },

  // Get records that need checking

  getPendingVerification: function() {

    const all = [
      ...window.BOLIYAPUR_DATA.education,
      ...window.BOLIYAPUR_DATA.educationResearch,
      ...window.BOLIYAPUR_DATA.health,
      ...window.BOLIYAPUR_DATA.unionServices,
      ...window.BOLIYAPUR_DATA.businesses
    ];

    return all.filter(item =>
      item.verification === "pending" ||
      item.verification === "needsCheck"
    );

  }

};


// ========================================================
// 19. BASIC DATA VALIDATION
// ========================================================

window.BOLIYAPUR_VALIDATE = function() {

  const data = window.BOLIYAPUR_DATA;

  const problems = [];

  if (!data.siteName) {
    problems.push("Website name missing");
  }

  if (!Array.isArray(data.education)) {
    problems.push("Education data missing");
  }

  if (!Array.isArray(data.services)) {
    problems.push("Services data missing");
  }

  const all = [
    ...data.education,
    ...data.health,
    ...data.businesses,
    ...data.unionServices
  ];

  all.forEach(item => {

    if (!item.name) {
      problems.push("Institution name missing");
    }

    if (!item.category) {
      problems.push(
        "Category missing: " + (item.name || "Unknown")
      );
    }

    if (!item.verification) {
      problems.push(
        "Verification status missing: " +
        (item.name || "Unknown")
      );
    }

  });

  if (problems.length) {

    console.warn(
      "Boliyapur Directory Validation:",
      problems
    );

    return {
      success: false,
      problems: problems
    };

  }

  console.log(
    "Boliyapur Directory data structure is valid."
  );

  return {
    success: true,
    problems: []
  };

};


// Run basic validation

window.BOLIYAPUR_VALIDATE();

// Connect all directory categories to the old services section

window.BOLIYAPUR_DATA.services = [

  ...window.BOLIYAPUR_DATA.education,

  ...window.BOLIYAPUR_DATA.health,

  ...window.BOLIYAPUR_DATA.unionServices,

  ...window.BOLIYAPUR_DATA.businesses

];

