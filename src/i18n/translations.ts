export type LangCode =
  | 'en' | 'hi' | 'bn' | 'te' | 'mr' | 'ta' | 'gu' | 'kn' | 'ml' | 'pa' | 'or' | 'as' | 'ur';

export const languages: { code: LangCode; name: string }[] = [
  { code: 'en', name: 'English' },
  { code: 'hi', name: 'हिंदी' },
  { code: 'bn', name: 'বাংলা' },
  { code: 'te', name: 'తెలుగు' },
  { code: 'mr', name: 'मराठी' },
  { code: 'ta', name: 'தமிழ்' },
  { code: 'gu', name: 'ગુજરાતી' },
  { code: 'kn', name: 'ಕನ್ನಡ' },
  { code: 'ml', name: 'മലയാളം' },
  { code: 'pa', name: 'ਪੰਜਾਬੀ' },
  { code: 'or', name: 'ଓଡ଼ିଆ' },
  { code: 'as', name: 'অসমীয়া' },
  { code: 'ur', name: 'اردو' },
];

  type Dict = {
    portalName: string;
    categories: {
      fruits: string;
      grains: string;
      vegetables: string;
      spices: string;
      flowers: string;
      cashCrops: string;
      oilSeeds: string;
      pulses: string;
      plantationCrops: string;
    };
    cropNames: {
      tomato: string;
      potato: string;
      okra: string;
      brinjal: string;
      cabbage: string;
      cauliflower: string;
      capsicum: string;
      cucumber: string;
      onion: string;
      greenChilli: string;
      greenPea: string;
      mango: string;
      banana: string;
      apple: string;
      grapes: string;
      guava: string;
      lemon: string;
      watermelon: string;
      muskmelon: string;
      papaya: string;
      custardApple: string;
      dragonFruit: string;
      strawberry: string;
    // Additional crops across categories
    Rice: string;
    Wheat: string;
    Maize: string;
    Bajra: string;
    coriander: string;
    Cumin: string;
    garlic: string;
    ginger: string;
    DryChilli: string;
    turmeric: string;
    marigold: string;
    rose: string;
    chrysanthemum: string;
    cotton: string;
    sugarcane: string;
    ratoonSugarcane: string;
    castor: string;
    mustard: string;
    sesame: string;
    groundnut: string;
    soyabeen: string;
    bengalGram: string;
    blackGram: string;
    greenGram: string;
    lentil: string;
    redGram: string;
    coffee: string;
    tea: string;
    rubber: string;
      coconut: string;
      [key: string]: string;
    };
    language: string;
    viewAll: string;
    home?: {
      heroTitle: string;
      heroSubtitle: string;
    };
    report?: {
      navTitle: string;
      nav: {
        cropBasics: string;
        soil: string;
        climate: string;
        varieties: string;
        seedRate: string;
        landPrep: string;
        nutrients: string;
        irrigation: string;
        pests: string;
        weeds: string;
        harvest: string;
        postHarvest: string;
        mandi: string;
        schemes: string;
        education: string;
        feedback: string;
        implinks: string;
      };
    intro: { title: string; description: string };
    cropBasics: { title: string; summary: string; items: { names: string; growthCycle: string; climate: string; calendar: string }; figcaption: string };
    soil: { title: string; summary: string; items: { soilType: string; phRange: string; drainage: string; tests: string }; figcaption: string };
    climate: { title: string; summary: string; items: { requirements: string; sowingTime: string; methods: string }; figcaption: string };
    varieties: { title: string; summary: string; items: { localVarieties: string; daysToMaturity: string; purityQuality: string; certifiedSources: string } };
    seedRate: { title: string; summary: string; items: { seedRate: string; rowSpacing: string; population: string; depth: string }; figcaption: string };
    landPrep: { title: string; summary: string; items: { tillageOps: string; levelingBeds: string; smallLargeFields: string; residueMgmt: string }; figcaption: string };
    nutrients: { title: string; summary: string; items: { macroMicro: string; stageSchedule: string; formulations: string; soilTestAdjust: string; safetyPpe: string } };
    irrigation: { title: string; summary: string; items: { criticalStages: string; method: string; waterNeeds: string }; figcaption: string };
    pests: { title: string; summary: string; items: { common: string; lifecycle: string; control: string; safeChemicals: string; protectiveMeasures: string }; figcaption: string };
    weeds: { title: string; summary: string; items: { common: string; culturalMechanical: string; herbicides: string; prevention: string }; figcaption: string };
    harvest: { title: string; summary: string; items: { maturityIndicators: string; techniques: string; threshingDrying: string; expectedYield: string }; figcaption: string };
    postHarvest: { title: string; summary: string; items: { handlingCleaning: string; dryingTargets: string; storageOptions: string; preventionStorage: string; valueAdded: string } };
    mandi: { title: string; summary: string; items: { currentPrices: string; trends: string; gradingQuality: string; accessStrategies: string; transportPacking: string }; figcaption: string };
    schemes: { title: string; summary: string; items: { available: string; regulatory: string; applicationLinks: string } };
    education: { title: string; summary: string; items: { howToVideos: string; safeHandling: string } };
    feedback: { title: string; summary: string; items: { agronomistContact: string; blogUpdates: string } };
    implinks: { title: string; summary: string; items: { usefulLinks: string }; figcaption: string };
    footer: { sourcePrefix: string; sourceName: string; sourceLinkText: string };
    misc: { backToTop: string };
  };
};

export const dictionaries: Record<LangCode, Dict> = {
  en: {
    portalName: 'Crop Knowledge',
    categories: {
      fruits: 'Fruits',
      grains: 'Grains',
      vegetables: 'Vegetables',
      spices: 'Spices',
      flowers: 'Flowers',
      cashCrops: 'Cash Crops',
      oilSeeds: 'Oil Seeds',
      pulses: 'Pulses',
      plantationCrops: 'Plantation Crops',
    },
    cropNames: {
      tomato: 'Tomato',
      potato: 'Potato',
      okra: 'Okra',
      brinjal: 'Brinjal',
      cabbage: 'Cabbage',
      cauliflower: 'Cauliflower',
      capsicum: 'Capsicum',
      cucumber: 'Cucumber',
      onion: 'Onion',
      greenChilli: 'Green Chilli',
      greenPea: 'Green Pea',
      mango: 'Mango',
      banana: 'Banana',
      bananaOne: 'Banana One',
      apple: 'Apple',
      grapes: 'Grapes',
      guava: 'Guava',
      lemon: 'Lemon',
      watermelon: 'Watermelon',
      muskmelon: 'Muskmelon',
      papaya: 'Papaya',
      custardApple: 'Custard Apple',
      dragonFruit: 'Dragon Fruit',
      strawberry: 'Strawberry',
      // Grains
      Rice: 'Rice',
      Wheat: 'Wheat',
      Maize: 'Maize',
      Bajra: 'Bajra',
      // Spices
      coriander: 'Coriander',
      Cumin: 'Cumin',
      garlic: 'Garlic',
      ginger: 'Ginger',
      DryChilli: 'Dry Chilli',
      turmeric: 'Turmeric',
      // Flowers
      marigold: 'Marigold',
      rose: 'Rose',
      chrysanthemum: 'Chrysanthemum',
      // Cash Crops
      cotton: 'Cotton',
      sugarcane: 'Sugarcane',
      ratoonSugarcane: 'Ratoon Sugarcane',
      // Oil Seeds
      castor: 'Castor',
      mustard: 'Mustard',
      sesame: 'Sesame',
      groundnut: 'Groundnut',
      soyabeen: 'Soyabeen',
      // Pulses
      bengalGram: 'Bengal Gram',
      blackGram: 'Black Gram',
      greenGram: 'Green Gram',
      lentil: 'Lentil',
      redGram: 'Red Gram',
      // Plantation Crops
      coffee: 'Coffee',
      tea: 'Tea',
      rubber: 'Rubber',
      coconut: 'Coconut',
    },
    language: 'Language',
    viewAll: 'View All',
    home: {
      heroTitle: 'Welcome to Jain’s Crop Knowledge',
      heroSubtitle: 'Transforming Lives; Enhancing Prosperity.',
    },
    report: {
      navTitle: 'Navigation',
      nav: {
        cropBasics: 'Crop Basics',
        soil: 'Soil Requirements',
        climate: 'Climate & Sowing Window',
        varieties: 'Varieties & Seed Selection',
        seedRate: 'Seed Rate & Spacing',
        landPrep: 'Land Preparation',
        nutrients: 'Nutrient & fertilizer schedule',
        irrigation: 'Irrigation & Water',
        pests: 'Pest & Disease',
        weeds: 'Weed Management',
        harvest: 'Harvesting & Yield',
        postHarvest: 'Post-harvest & Storage',
        mandi: 'Market & pricing guidance',
        schemes: 'Government Schemes',
        education: 'Educational Content',
        feedback: 'Feedback & Personalization',
        implinks: 'Important Links / Useful Resources',
      },
      intro: {
        title: 'Welcome',
        description:
          'A structured, farmer-friendly report to explore crop information aspects, practices, and resources for better decisions and outcomes.',
      },
      cropBasics: {
        title: 'Crop Basics',
        summary: 'Essential info',
        items: {
          names: 'Scientific and common names',
          growthCycle: 'Growth cycle stage and duration',
          climate: 'Suitable climate conditions',
          calendar: 'Crop Calendar',
        },
        figcaption: 'Growth stages timeline',
      },
      soil: {
        title: 'Soil Requirements',
        summary: 'Key parameters',
        items: {
          soilType: 'Ideal soil type and texture',
          phRange: 'Ideal pH range',
          drainage: 'Drainage needs',
          tests: 'Common soil tests to run',
        },
        figcaption: 'Ideal soil type and pH',
      },
      climate: {
        title: 'Climate & Sowing Window',
        summary: 'Guidelines',
        items: {
          requirements: 'Optimal temperature, rainfall, sunlight',
          sowingTime: 'Best time for sowing/planting',
          methods: 'Seed rate, spacing, and methods',
        },
        figcaption: 'Climate requirements',
      },
      varieties: {
        title: 'Varieties & Seed Selection',
        summary: 'Recommendations',
        items: {
          localVarieties: 'Recommended local varieties with pros/cons',
          daysToMaturity: 'Days to maturity',
          purityQuality: 'Seed purity and quality criteria',
          certifiedSources: 'Certified seed sources',
        },
      },
      seedRate: {
        title: 'Seed Rate & Spacing',
        summary: 'Stand establishment',
        items: {
          seedRate: 'Seed rate per hectare/acre',
          rowSpacing: 'Row spacing',
          population: 'Plant population targets',
          depth: 'Planting depth',
        },
        figcaption: 'Seed rate, spacing, population and depth',
      },
      landPrep: {
        title: 'Land Preparation',
        summary: 'Preparation steps',
        items: {
          tillageOps: 'Number of village operations',
          levelingBeds: 'leveling/bed preparation needs',
          smallLargeFields: 'recommendations for small and large fields.',
          residueMgmt: 'recommended residue management',
        },
        figcaption: 'Land preparation steps',
      },
      nutrients: {
        title: 'Nutrient & fertilizer schedule',
        summary: 'Fertilization',
        items: {
          macroMicro: 'Macro and micro nutrient needs',
          stageSchedule: 'Stage-wise fertilizer schedule and doses',
          formulations: 'Common fertilizer formulations',
          soilTestAdjust: 'Soil test–based dose adjustment',
          safetyPpe: 'Safety and PPE for handling',
        },
      },
      irrigation: {
        title: 'Irrigation Schedule & Water Management',
        summary: 'Water planning',
        items: {
          criticalStages: 'Critical crop stages for irrigation',
          method: 'Method: flood, drip, sprinkler',
          waterNeeds: 'Approximate water needs by growth stage',
        },
        figcaption: 'Irrigation & water needs',
      },
      pests: {
        title: 'Pest & Disease Management',
        summary: 'Protection',
        items: {
          common: 'Common pests and diseases with symptoms',
          lifecycle: 'Life cycle notes',
          control: 'Organic and chemical control measures',
          safeChemicals: 'Recommended safe chemicals with dose and PHI',
          protectiveMeasures: 'Protective measures',
        },
        figcaption: 'Pest & Disease Management',
      },
      weeds: {
        title: 'Weed Management',
        summary: 'Control',
        items: {
          common: 'Common weeds by growth stage',
          culturalMechanical: 'Cultural and mechanical control',
          herbicides: 'Recommended herbicides and timing',
          prevention: 'Prevention tips',
        },
        figcaption: 'Weed Management',
      },
      harvest: {
        title: 'Harvesting & Yield Estimation',
        summary: 'Yield and harvest',
        items: {
          maturityIndicators: 'Maturity indicators',
          techniques: 'Harvesting techniques',
          threshingDrying: 'Threshing and drying tips',
          expectedYield: 'Expected yield under different conditions',
        },
        figcaption: 'Harvesting & Yield Estimation',
      },
      postHarvest: {
        title: 'Post-harvest Handling & Storage',
        summary: 'Storage',
        items: {
          handlingCleaning: 'Post-harvest handling and cleaning',
          dryingTargets: 'Drying moisture targets',
          storageOptions: 'Storage container options',
          preventionStorage: 'Insect and fungal prevention in storage',
          valueAdded: 'Value-added processing ideas',
        },
      },
      mandi: {
        title: 'Market & pricing guidance',
        summary: 'Guidance',
        items: {
          currentPrices: 'Current mandi prices (region)',
          trends: 'Price trends',
          gradingQuality: 'grading/quality factors affecting price',
          accessStrategies: 'Market access strategies',
          transportPacking: 'transport & packing tips',
        },
        figcaption: 'Market & pricing guidance',
      },
      schemes: {
        title: 'Government Schemes & Subsidies',
        summary: 'Support',
        items: {
          available: 'Available schemes and subsidies',
          regulatory: 'Label and regulatory notes',
          applicationLinks: 'Application links or nearest office',
        },
      },
      education: {
        title: 'Educational Content & Short Videos',
        summary: 'Learning',
        items: {
          howToVideos: 'How-to videos for sowing',
          safeHandling: 'Spray, drip installation, safe handling',
        },
      },
      feedback: {
        title: 'Feedback & Personalization',
        summary: 'Get involved',
        items: {
          agronomistContact: 'Agronomist contact information',
          blogUpdates: 'Blog and updates',
        },
      },
      implinks: {
        title: 'Important Links / Useful Resources',
        summary: 'Resources',
        items: { usefulLinks: 'Useful links and resources' },
        figcaption: 'Important Links / Useful Resources',
      },
      footer: {
        sourcePrefix: 'Source:',
        sourceName: 'Crop Knowledge Portal —',
        sourceLinkText: 'cropknowledge.my.canva.site/crop-knowledge-portal',
      },
      misc: { backToTop: 'Back to top' },
    },
  },
  hi: {
    portalName: 'फ़सल ज्ञान',
    categories: {
      fruits: 'फल',
      grains: 'अनाज',
      vegetables: 'सब्ज़ियाँ',
      spices: 'मसाले',
      flowers: 'फूल',
      cashCrops: 'नक़दी फसलें',
      oilSeeds: 'तेलहन',
      pulses: 'दलहन',
      plantationCrops: 'बाग़ानी फसलें',
    },
    cropNames: {
      tomato: 'टमाटर',
      potato: 'आलू',
      okra: 'भिंडी',
      brinjal: 'बैंगन',
      cabbage: 'पत्तागोभी',
      cauliflower: 'फूलगोभी',
      capsicum: 'शिमला मिर्च',
      cucumber: 'खीरा',
      onion: 'प्याज़',
      greenChilli: 'हरी मिर्च',
      greenPea: 'हरी मटर',
      mango: 'आम',
      banana: 'केला',
      apple: 'सेब',
      grapes: 'अंगूर',
      guava: 'अमरूद',
      lemon: 'नींबू',
      watermelon: 'तरबूज',
      muskmelon: 'खरबूजा',
      papaya: 'पपीता',
      custardApple: 'सीताफल',
      dragonFruit: 'ड्रैगन फ्रूट',
      strawberry: 'स्ट्रॉबेरी',
      // Grains
      Rice: 'चावल',
      Wheat: 'गेहूं',
      Maize: 'मक्का',
      Bajra: 'बाजरा',
      // Spices
      coriander: 'धनिया',
      Cumin: 'जीरा',
      garlic: 'लहसुन',
      ginger: 'अदरक',
      DryChilli: 'सूखी मिर्च',
      turmeric: 'हल्दी',
      // Flowers
      marigold: 'गेंदा',
      rose: 'गुलाब',
      chrysanthemum: 'गुलदाउदी',
      // Cash Crops
      cotton: 'कपास',
      sugarcane: 'गन्ना',
      ratoonSugarcane: 'रैटन गन्ना',
      // Oil Seeds
      castor: 'अरंडी',
      mustard: 'सरसों',
      sesame: 'तिल',
      groundnut: 'मूंगफली',
      soyabeen: 'सोयाबीन',
      // Pulses
      bengalGram: 'चना',
      blackGram: 'उड़द',
      greenGram: 'मूंग',
      lentil: 'मसूर',
      redGram: 'अरहर',
      // Plantation Crops
      coffee: 'कॉफी',
      tea: 'चाय',
      rubber: 'रबर',
      coconut: 'नारियल',
    },
    language: 'भाषा',
    viewAll: 'सभी देखें',
    home: {
      heroTitle: 'जैन की फसल ज्ञान में आपका स्वागत है',
      heroSubtitle: 'जीवन बदलना; समृद्धि बढ़ाना।',
    },
    report: {
      navTitle: 'नेविगेशन',
      nav: {
        cropBasics: 'फ़सल मूल बातें',
        soil: 'मृदा आवश्यकताएँ',
        climate: 'जलवायु और बुवाई समय',
        varieties: 'जातियाँ और बीज चयन',
        seedRate: 'बीज दर और दूरी',
        landPrep: 'भूमि तैयारी',
        nutrients: 'पोषक तत्व और उर्वरक अनुसूची',
        irrigation: 'सिंचाई और पानी',
        pests: 'कीट और रोग प्रबंधन',
        weeds: 'खरपतवार प्रबंधन',
        harvest: 'कटाई और उपज',
        postHarvest: 'कटाई के बाद और भंडारण',
        mandi: 'बाज़ार और कीमत मार्गदर्शन',
        schemes: 'सरकारी योजनाएँ',
        education: 'शैक्षिक सामग्री',
        feedback: 'प्रतिक्रिया और वैयक्तिकरण',
        implinks: 'महत्वपूर्ण लिंक / उपयोगी संसाधन',
      },
      intro: {
        title: 'स्वागत है',
        description:
          'बेहतर निर्णय और परिणामों के लिए फ़सल जानकारी रिपोर्ट।',
      },
      cropBasics: {
        title: 'फ़सल मूल बातें',
        summary: 'आवश्यक जानकारी',
        items: {
          names: 'वैज्ञानिक और सामान्य नाम',
          growthCycle: 'वृद्धि चक्र और अवधि',
          climate: 'उपयुक्त जलवायु',
          calendar: 'फ़सल कैलेंडर',
        },
        figcaption: 'वृद्धि चरण समयरेखा',
      },
      soil: {
        title: 'मृदा आवश्यकताएँ',
        summary: 'मुख्य पैरामीटर',
        items: {
          soilType: 'आदर्श मृदा प्रकार और बनावट',
          phRange: 'आदर्श pH सीमा',
          drainage: 'निकास आवश्यकता',
          tests: 'सामान्य मृदा परीक्षण',
        },
        figcaption: 'आदर्श मृदा प्रकार और pH',
      },
      climate: {
        title: 'जलवायु और बुवाई समय',
        summary: 'दिशानिर्देश',
        items: {
          requirements: 'तापमान, वर्षा, धूप आवश्यकताएँ',
          sowingTime: 'सर्वोत्तम बुवाई/रोपाई समय',
          methods: 'बीज दर, दूरी और विधियाँ',
        },
        figcaption: 'जलवायु आवश्यकताएँ',
      },
      varieties: {
        title: 'जातियाँ और बीज चयन',
        summary: 'सिफ़ारिशें',
        items: {
          localVarieties: 'अनुशंसित स्थानीय जातियाँ',
          daysToMaturity: 'परिपक्वता दिन',
          purityQuality: 'बीज शुद्धता और गुणवत्ता',
          certifiedSources: 'प्रमाणित बीज स्रोत',
        },
      },
      seedRate: {
        title: 'बीज दर और दूरी',
        summary: 'स्थापना',
        items: {
          seedRate: 'प्रति हेक्टेयर/एकड़ बीज दर',
          rowSpacing: 'कतार दूरी',
          population: 'पौध जनसंख्या लक्ष्य',
          depth: 'रोपण गहराई',
        },
        figcaption: 'बीज दर, दूरी, जनसंख्या, गहराई',
      },
      landPrep: {
        title: 'भूमि तैयारी',
        summary: 'तैयारी चरण',
        items: {
          tillageOps: 'जुताई संचालन',
          levelingBeds: 'समतलीकरण/बेड तैयारी',
          smallLargeFields: 'छोटे-बड़े खेत सिफ़ारिशें',
          residueMgmt: 'अवशेष प्रबंधन',
        },
        figcaption: 'भूमि तैयारी चरण',
      },
      nutrients: {
        title: 'पोषक तत्व और उर्वरक अनुसूची',
        summary: 'उर्वरक',
        items: {
          macroMicro: 'मैक्रो/माइक्रो पोषक आवश्यकताएँ',
          stageSchedule: 'चरण-वार उर्वरक अनुसूची और मात्रा',
          formulations: 'सामान्य उर्वरक',
          soilTestAdjust: 'मृदा परीक्षण आधारित समायोजन',
          safetyPpe: 'सुरक्षा और पीपीई',
        },
      },
      irrigation: {
        title: 'सिंचाई अनुसूची और जल प्रबंधन',
        summary: 'जल योजना',
        items: {
          criticalStages: 'महत्वपूर्ण सिंचाई चरण',
          method: 'विधि: फ्लड, ड्रिप, स्प्रिंकलर',
          waterNeeds: 'चरण अनुसार जल आवश्यकता',
        },
        figcaption: 'सिंचाई और जल आवश्यकता',
      },
      pests: {
        title: 'कीट और रोग प्रबंधन',
        summary: 'संरक्षण',
        items: {
          common: 'सामान्य कीट और रोग',
          lifecycle: 'जीवन चक्र',
          control: 'जैविक और रासायनिक नियंत्रण',
          safeChemicals: 'अनुशंसित रसायन और मात्रा',
          protectiveMeasures: 'रक्षा उपाय',
        },
        figcaption: 'कीट और रोग प्रबंधन',
      },
      weeds: {
        title: 'खरपतवार प्रबंधन',
        summary: 'नियंत्रण',
        items: {
          common: 'सामान्य खरपतवार',
          culturalMechanical: 'सांस्कृतिक और यांत्रिक नियंत्रण',
          herbicides: 'अनुशंसित शाकनाशी',
          prevention: 'रोकथाम सुझाव',
        },
        figcaption: 'खरपतवार प्रबंधन',
      },
      harvest: {
        title: 'कटाई और उपज अनुमान',
        summary: 'कटाई',
        items: {
          maturityIndicators: 'परिपक्वता संकेत',
          techniques: 'कटाई तकनीक',
          threshingDrying: 'थ्रेसिंग और सुखाना',
          expectedYield: 'अपेक्षित उपज',
        },
        figcaption: 'कटाई और उपज अनुमान',
      },
      postHarvest: {
        title: 'कटाई के बाद और भंडारण',
        summary: 'भंडारण',
        items: {
          handlingCleaning: 'सफाई और संभाल',
          dryingTargets: 'नमी लक्ष्यों तक सुखाना',
          storageOptions: 'भंडारण विकल्प',
          preventionStorage: 'कीट/फफूंदी रोकथाम',
          valueAdded: 'वैल्यू-एडेड प्रसंस्करण',
        },
      },
      mandi: {
        title: 'बाज़ार और कीमत मार्गदर्शन',
        summary: 'मार्गदर्शन',
        items: {
          currentPrices: 'वर्तमान मंडी कीमतें',
          trends: 'कीमत रुझान',
          gradingQuality: 'ग्रेडिंग/गुणवत्ता कारक',
          accessStrategies: 'बाज़ार पहुँच रणनीतियाँ',
          transportPacking: 'परिवहन और पैकिंग',
        },
        figcaption: 'बाज़ार और कीमत मार्गदर्शन',
      },
      schemes: {
        title: 'सरकारी योजनाएँ और सब्सिडी',
        summary: 'समर्थन',
        items: {
          available: 'उपलब्ध योजनाएँ और सब्सिडी',
          regulatory: 'लेबल और नियामक नोट्स',
          applicationLinks: 'आवेदन लिंक या निकटतम कार्यालय',
        },
      },
      education: {
        title: 'शैक्षिक सामग्री और लघु वीडियो',
        summary: 'सीख',
        items: {
          howToVideos: 'बुवाई आदि के कैसे करें वीडियो',
          safeHandling: 'स्प्रे, ड्रिप, सुरक्षित हैंडलिंग',
        },
      },
      feedback: {
        title: 'प्रतिक्रिया और वैयक्तिकरण',
        summary: 'शामिल हों',
        items: {
          agronomistContact: 'एग्रोनोमिस्ट संपर्क',
          blogUpdates: 'ब्लॉग और अपडेट',
        },
      },
      implinks: {
        title: 'महत्वपूर्ण लिंक / उपयोगी संसाधन',
        summary: 'संसाधन',
        items: { usefulLinks: 'उपयोगी लिंक और संसाधन' },
        figcaption: 'महत्वपूर्ण लिंक / उपयोगी संसाधन',
      },
      footer: {
        sourcePrefix: 'स्रोत:',
        sourceName: 'क्रॉप नॉलेज पोर्टल —',
        sourceLinkText: 'cropknowledge.my.canva.site/crop-knowledge-portal',
      },
      misc: { backToTop: 'ऊपर जाएँ' },
    },
  },
  bn: {
    portalName: 'ফসল জ্ঞান',
    categories: {
      fruits: 'ফল',
      grains: 'শস্য',
      vegetables: 'সবজি',
      spices: 'মসলা',
      flowers: 'ফুল',
      cashCrops: 'নগদ ফসল',
      oilSeeds: 'তেলবীজ',
      pulses: 'ডাল',
      plantationCrops: 'বাগানজাত ফসল',
    },
    cropNames: {
      tomato: 'টমেটো',
      potato: 'আলু',
      okra: 'ঢেঁড়স',
      brinjal: 'বেগুন',
      cabbage: 'বাঁধাকপি',
      cauliflower: 'ফুলকপি',
      capsicum: 'ক্যাপসিকাম',
      cucumber: 'শসা',
      onion: 'পেঁয়াজ',
      greenChilli: 'কাঁচা লংকা',
      greenPea: 'সবুজ মটর',
      mango: 'আম',
      banana: 'কলা',
      apple: 'আপেল',
      grapes: 'আঙুর',
      guava: 'পেয়ারা',
      lemon: 'লেবু',
      watermelon: 'তরমুজ',
      muskmelon: 'খরমুজ',
      papaya: 'পেঁপে',
      custardApple: 'শরিফা',
      dragonFruit: 'ড্রাগন ফল',
      strawberry: 'স্ট্রবেরি',
      // Grains
      Rice: 'চাল',
      Wheat: 'গম',
      Maize: 'ভুট্টা',
      Bajra: 'বাজরা',
      // Spices
      coriander: 'ধনে',
      Cumin: 'জিরা',
      garlic: 'রসুন',
      ginger: 'আদা',
      DryChilli: 'শুকনা মরিচ',
      turmeric: 'হলুদ',
      // Flowers
      marigold: 'গাঁদা',
      rose: 'গোলাপ',
      chrysanthemum: 'চন্দ্রমল্লিকা',
      // Cash Crops
      cotton: 'কাপাস',
      sugarcane: 'আখ',
      ratoonSugarcane: 'রাটুন আখ',
      // Oil Seeds
      castor: 'রেড়ি',
      mustard: 'সরিষা',
      sesame: 'তিল',
      groundnut: 'বাদাম',
      soyabeen: 'সয়াবিন',
      // Pulses
      bengalGram: 'ছোলা',
      blackGram: 'উড়দ',
      greenGram: 'মুগ',
      lentil: 'মসুর',
      redGram: 'আরহার',
      // Plantation Crops
      coffee: 'কফি',
      tea: 'চা',
      rubber: 'রাবার',
      coconut: 'নারকেল',
    },
    language: 'ভাষা',
    viewAll: 'সব দেখুন',
    home: {
      heroTitle: 'জৈনের ফসল জ্ঞানে আপনাকে স্বাগতম',
      heroSubtitle: 'জীবন পরিবর্তন; সমৃদ্ধি বৃদ্ধি।',
    },
    report: {
      navTitle: 'নেভিগেশন',
      nav: {
        cropBasics: 'ফসলের মৌলিক তথ্য',
        soil: 'মাটির প্রয়োজন',
        climate: 'জলবায়ু ও বপন সময়',
        varieties: 'জাত ও বীজ নির্বাচন',
        seedRate: 'বীজের হার ও দূরত্ব',
        landPrep: 'জমি প্রস্তুতি',
        nutrients: 'পুষ্টি ও সার সময়সূচি',
        irrigation: 'সেচ ও পানি',
        pests: 'পোকা ও রোগ ব্যবস্থাপনা',
        weeds: 'আগাছা নিয়ন্ত্রণ',
        harvest: 'কাটা ও ফলন',
        postHarvest: 'কাটা-পরবর্তী ও সংরক্ষণ',
        mandi: 'বাজার ও মূল্য নির্দেশিকা',
        schemes: 'সরকারি প্রকল্প',
        education: 'শিক্ষামূলক কন্টেন্ট',
        feedback: 'মতামত ও ব্যক্তিকরণ',
        implinks: 'গুরুত্বপূর্ণ লিংক / দরকারী সম্পদ',
      },
      intro: {
        title: 'স্বাগতম',
        description:
          'উন্নত সিদ্ধান্ত ও ফলাফলের জন্য ফসল তথ্যের সুশৃঙ্খল রিপোর্ট।',
      },
      cropBasics: {
        title: 'ফসলের মৌলিক তথ্য',
        summary: 'মূল তথ্য',
        items: {
          names: 'বৈজ্ঞানিক ও প্রচলিত নাম',
          growthCycle: 'বৃদ্ধির ধাপ ও সময়কাল',
          climate: 'উপযোগী জলবায়ু',
          calendar: 'ফসল ক্যালেন্ডার',
        },
        figcaption: 'বৃদ্ধির ধাপের সময়রেখা',
      },
      soil: {
        title: 'মাটির প্রয়োজন',
        summary: 'মূল মানদণ্ড',
        items: {
          soilType: 'আদর্শ মাটি ধরন ও গঠন',
          phRange: 'আদর্শ pH পরিসর',
          drainage: 'নিষ্কাশন প্রয়োজন',
          tests: 'মাটি পরীক্ষা ও সুপারিশ',
        },
        figcaption: 'মাটি ধরন ও pH পরিসর',
      },
      climate: {
        title: 'জলবায়ু ও বপন সময়',
        summary: 'সেরা অনুশীলন',
        items: {
          requirements: 'তাপমাত্রা ও বৃষ্টিপাতের প্রয়োজন',
          sowingTime: 'অঞ্চলভেদে বপনের সময়',
          methods: 'সরাসরি বপন/রোপণ পদ্ধতি',
        },
        figcaption: 'জলবায়ু প্রয়োজনীয়তার সংক্ষিপ্তসার',
      },
      varieties: {
        title: 'জাত ও বীজ নির্বাচন',
        summary: 'নির্বাচন নির্দেশিকা',
        items: {
          localVarieties: 'স্থানীয়/জনপ্রিয় জাত',
          daysToMaturity: 'পরিপক্ক হতে দিন',
          purityQuality: 'বীজের বিশুদ্ধতা ও গুণমান',
          certifiedSources: 'প্রমাণিত উৎস',
        },
      },
      seedRate: {
        title: 'বীজের হার ও দূরত্ব',
        summary: 'স্থাপনা নির্দেশিকা',
        items: {
          seedRate: 'হেক্টর/একর প্রতি বীজের হার',
          rowSpacing: 'সারির দূরত্ব',
          population: 'গাছের সংখ্যা লক্ষ্য',
          depth: 'বপনের গভীরতা',
        },
        figcaption: 'বীজের হার, দূরত্ব ও গভীরতা',
      },
      landPrep: {
        title: 'জমি প্রস্তুতি',
        summary: 'প্রস্তুতি ধাপ',
        items: {
          tillageOps: 'চাষের ধাপের সংখ্যা',
          levelingBeds: 'সমতলকরণ/বেড প্রস্তুতি',
          smallLargeFields: 'ছোট/বড় জমির সুপারিশ',
          residueMgmt: 'অবশিষ্টাংশ ব্যবস্থাপনা',
        },
        figcaption: 'জমি প্রস্তুতির ধাপ',
      },
      nutrients: {
        title: 'পুষ্টি ও সার সময়সূচি',
        summary: 'সার পরিকল্পনা',
        items: {
          macroMicro: 'ম্যাক্রো ও মাইক্রো পুষ্টির প্রয়োজন',
          stageSchedule: 'ধাপভিত্তিক সার সময়সূচি',
          formulations: 'সাধারণ সার ফর্মুলেশন',
          soilTestAdjust: 'মাটি পরীক্ষার ভিত্তিতে ডোজ সমন্বয়',
          safetyPpe: 'নিরাপত্তা ও PPE নির্দেশিকা',
        },
      },
      irrigation: {
        title: 'সেচ সময়সূচি ও পানি ব্যবস্থাপনা',
        summary: 'পানি পরিকল্পনা',
        items: {
          criticalStages: 'সেচের জন্য গুরুত্বপূর্ণ ধাপ',
          method: 'পদ্ধতি: ফ্লাড, ড্রিপ, স্প্রিঙ্কলার',
          waterNeeds: 'বৃদ্ধি ধাপ অনুযায়ী পানি প্রয়োজন',
        },
        figcaption: 'সেচ ও পানির প্রয়োজন',
      },
      pests: {
        title: 'পোকা ও রোগ ব্যবস্থাপনা',
        summary: 'সুরক্ষা',
        items: {
          common: 'সাধারণ পোকা ও রোগ এবং লক্ষণ',
          lifecycle: 'জীবনচক্র নোট',
          control: 'জৈব ও রাসায়নিক নিয়ন্ত্রণ',
          safeChemicals: 'সুরক্ষিত রাসায়নিক, ডোজ ও PHI',
          protectiveMeasures: 'সুরক্ষামূলক ব্যবস্থা',
        },
        figcaption: 'পোকা ও রোগ ব্যবস্থাপনা',
      },
      weeds: {
        title: 'আগাছা নিয়ন্ত্রণ',
        summary: 'নিয়ন্ত্রণ',
        items: {
          common: 'বিভিন্ন ধাপে সাধারণ আগাছা',
          culturalMechanical: 'সাংস্কৃতিক ও যান্ত্রিক নিয়ন্ত্রণ',
          herbicides: 'প্রস্তাবিত হার্বিসাইড ও সময়',
          prevention: 'প্রতিরোধের টিপস',
        },
        figcaption: 'আগাছা নিয়ন্ত্রণ',
      },
      harvest: {
        title: 'কাটা ও ফলন নির্ধারণ',
        summary: 'ফলন ও কাটা',
        items: {
          maturityIndicators: 'পরিপক্কতার সূচক',
          techniques: 'কাটা পদ্ধতি',
          threshingDrying: 'মাড়াই ও শুকানোর টিপস',
          expectedYield: 'বিভিন্ন অবস্থায় প্রত্যাশিত ফলন',
        },
        figcaption: 'কাটা ও ফলন নির্ধারণ',
      },
      postHarvest: {
        title: 'কাটা-পরবর্তী পরিচালনা ও সংরক্ষণ',
        summary: 'সংরক্ষণ',
        items: {
          handlingCleaning: 'কাটা-পরবর্তী পরিচালনা ও পরিষ্কার',
          dryingTargets: 'শুকানোর আদর্শ আর্দ্রতা',
          storageOptions: 'সংরক্ষণ পাত্রের বিকল্প',
          preventionStorage: 'সংরক্ষণে পোকা/ছত্রাক প্রতিরোধ',
          valueAdded: 'মূল্য সংযোজিত প্রক্রিয়াকরণ ধারণা',
        },
      },
      mandi: {
        title: 'বাজার ও মূল্য নির্দেশিকা',
        summary: 'নির্দেশিকা',
        items: {
          currentPrices: 'বর্তমান মান্ডি দাম (অঞ্চল)',
          trends: 'মূল্য প্রবণতা',
          gradingQuality: 'গ্রেডিং/গুণমান যা দামে প্রভাব ফেলে',
          accessStrategies: 'বাজারে প্রবেশ কৌশল',
          transportPacking: 'পরিবহন ও প্যাকিং টিপস',
        },
        figcaption: 'বাজার ও মূল্য নির্দেশিকা',
      },
      schemes: {
        title: 'সরকারি প্রকল্প ও ভর্তুকি',
        summary: 'সহায়তা',
        items: {
          available: 'উপলভ্য প্রকল্প ও ভর্তুকি',
          regulatory: 'লেবেল ও নিয়ন্ত্রক নোট',
          applicationLinks: 'আবেদন লিংক বা নিকটতম অফিস',
        },
      },
      education: {
        title: 'শিক্ষামূলক কন্টেন্ট ও ছোট ভিডিও',
        summary: 'শেখা',
        items: {
          howToVideos: 'বপন/রোপণ কিভাবে—ভিডিও',
          safeHandling: 'স্প্রে, ড্রিপ ইনস্টলেশন, নিরাপদ ব্যবস্থাপনা',
        },
      },
      feedback: {
        title: 'মতামত ও ব্যক্তিকরণ',
        summary: 'অংশগ্রহণ',
        items: {
          agronomistContact: 'অ্যাগ্রোনমিস্ট যোগাযোগ',
          blogUpdates: 'ব্লগ ও আপডেট',
        },
      },
      implinks: {
        title: 'গুরুত্বপূর্ণ লিংক / দরকারী সম্পদ',
        summary: 'সম্পদ',
        items: { usefulLinks: 'দরকারী লিংক ও সম্পদ' },
        figcaption: 'গুরুত্বপূর্ণ লিংক / দরকারী সম্পদ',
      },
      footer: {
        sourcePrefix: 'উৎস:',
        sourceName: 'ক্রপ নলেজ পোর্টাল —',
        sourceLinkText: 'cropknowledge.my.canva.site/crop-knowledge-portal',
      },
      misc: { backToTop: 'উপরে যান' },
    },
  },
  te: {
    portalName: 'పంటల జ్ఞానం',
    categories: {
      fruits: 'పండ్లు',
      grains: 'ధాన్యాలు',
      vegetables: 'కూరగాయలు',
      spices: 'మసాలాలు',
      flowers: 'పూలు',
      cashCrops: 'నగదు పంటలు',
      oilSeeds: 'నూనె గింజలు',
      pulses: 'పప్పులు',
      plantationCrops: 'తోట పంటలు',
    },
    cropNames: {
      tomato: 'టమాటా',
      potato: 'ఆలుగడ్డ',
      okra: 'బెండకాయ',
      brinjal: 'వంకాయ',
      cabbage: 'క్యాబేజీ',
      cauliflower: 'కాలిఫ్లవర్',
      capsicum: 'క్యాప్సికం',
      cucumber: 'దోసకాయ',
      onion: 'ఉల్లిపాయ',
      greenChilli: 'పచ్చి మిర్చి',
      greenPea: 'పచ్చి బటాని',
      mango: 'మామిడి',
      banana: 'అరటి',
      apple: 'సేవ',
      grapes: 'ద్రాక్ష',
      guava: 'జామ',
      lemon: 'నిమ్మకాయ',
      watermelon: 'పుచ్చకాయ',
      muskmelon: 'కర్బూజ',
      papaya: 'బొప్పాయి',
      custardApple: 'సీతాఫలం',
      dragonFruit: 'డ్రాగన్ ఫ్రూట్',
      strawberry: 'స్ట్రాబెర్రీ',
      // Grains
      Rice: 'బియ్యం',
      Wheat: 'గోధుమ',
      Maize: 'మక్కజొన్న',
      Bajra: 'సజ్జ',
      // Spices
      coriander: 'ధనియాలు',
      Cumin: 'జీలకర్ర',
      garlic: 'వెళ్లుల్లి',
      ginger: 'అల్లం',
      DryChilli: 'ఎండుమిర్చి',
      turmeric: 'పసుపు',
      // Flowers
      marigold: 'బంతి',
      rose: 'రోజా',
      chrysanthemum: 'చామంతి',
      // Cash Crops
      cotton: 'పత్తి',
      sugarcane: 'చెరుకు',
      ratoonSugarcane: 'రాటూన్ చెరుకు',
      // Oil Seeds
      castor: 'అముదం',
      mustard: 'ఆవాలు',
      sesame: 'నువ్వులు',
      groundnut: 'వేరుశెనగ',
      soyabeen: 'సోయాబీన్',
      // Pulses
      bengalGram: 'సెనగ',
      blackGram: 'మినుములు',
      greenGram: 'పెసర్లు',
      lentil: 'మసూర్',
      redGram: 'తూర పప్పు',
      // Plantation Crops
      coffee: 'కాఫీ',
      tea: 'చాయ్',
      rubber: 'రబ్బర్',
      coconut: 'కొబ్బరి',
    },
    language: 'భాష',
    viewAll: 'అన్నీ చూడండి',
    home: {
      heroTitle: 'జైన్ పంట జ్ఞానానికి స్వాగతం',
      heroSubtitle: 'జీవితాలను మారుస్తూ; అభివృద్ధిని పెంచుతూ.',
    },
    report: {
      navTitle: 'నావిగేషన్',
      nav: {
        cropBasics: 'పంట మౌలికాలు',
        soil: 'మట్టి అవసరాలు',
        climate: 'వాతావరణం & విత్తన కాలం',
        varieties: 'రకాలు & విత్తన ఎంపిక',
        seedRate: 'విత్తన పరిమాణం & దూరం',
        landPrep: 'భూమి సిద్ధం',
        nutrients: 'పోషకాలు & ఎరువుల షెడ్యూల్',
        irrigation: 'పారుదల & నీరు',
        pests: 'పురుగు & వ్యాధి',
        weeds: 'కలుపు నిర్వహణ',
        harvest: 'కోత & దిగుబడి',
        postHarvest: 'పోస్ట్-హార్వెస్ట్ & నిల్వ',
        mandi: 'మార్కెట్ & ధర మార్గదర్శకం',
        schemes: 'ప్రభుత్వ పథకాలు',
        education: 'విద్యా కంటెంట్',
        feedback: 'అభిప్రాయం & వ్యక్తీకరణ',
        implinks: 'ముఖ్యమైన లింకులు / వనరులు',
      },
      intro: {
        title: 'స్వాగతం',
        description:
          'పంట సమాచార విభాగాలు, ఆచరణలు, వనరులను సులభంగా తెలుసుకునే నివేదిక.',
      },
      cropBasics: {
        title: 'పంట మౌలికాలు',
        summary: 'అత్యావశ్యక సమాచారం',
        items: {
          names: 'శాస్త్రీయ & సాధారణ పేర్లు',
          growthCycle: 'వృద్ధి దశలు & వ్యవధి',
          climate: 'అనుకూల వాతావరణ పరిస్థితులు',
          calendar: 'పంట కాలపట్టిక',
        },
        figcaption: 'వృద్ధి దశల టైమ్‌లైన్',
      },
      soil: {
        title: 'మట్టి అవసరాలు',
        summary: 'ప్రధాన పరామితులు',
        items: {
          soilType: 'ఆదర్శ మట్టి రకం & నిర్మాణం',
          phRange: 'ఆదర్శ pH పరిధి',
          drainage: 'నీరు పారుదల',
          tests: 'మట్ట పరీక్షలు & సిఫార్సులు',
        },
        figcaption: 'మట్టి రకం & pH పరిధి',
      },
      climate: {
        title: 'వాతావరణం & విత్తన కాలం',
        summary: 'ఉత్తమ పద్ధతులు',
        items: {
          requirements: 'ఉష్ణోగ్రత, వర్షపాతం అవసరాలు',
          sowingTime: 'ప్రాంతానుసారం విత్తన కాలం',
          methods: 'నేరుగా విత్తటం/నాటడం పద్ధతులు',
        },
        figcaption: 'వాతావరణ అవసరాల అవలోకనం',
      },
      varieties: {
        title: 'రకాలు & విత్తన ఎంపిక',
        summary: 'ఎంపిక మార్గదర్శకాలు',
        items: {
          localVarieties: 'స్థానిక/ప్రసిద్ధ రకాలు',
          daysToMaturity: 'పక్వత రోజులు (దినాలు)',
          purityQuality: 'విత్తన స్వచ్ఛత & నాణ్యత',
          certifiedSources: 'ధృవీకృత మూలాలు',
        },
      },
      seedRate: {
        title: 'విత్తన పరిమాణం & దూరం',
        summary: 'స్థాపన మార్గదర్శకాలు',
        items: {
          seedRate: 'హెక్టారుకు/ఎకరాకు విత్తన పరిమాణం',
          rowSpacing: 'వరుసల మధ్య దూరం',
          population: 'మొక్కల జనాభా లక్ష్యాలు',
          depth: 'విత్తన లోతు',
        },
        figcaption: 'విత్తన పరిమాణం, దూరం & లోతు',
      },
      landPrep: {
        title: 'భూమి సిద్ధం',
        summary: 'సిద్ధం దశలు',
        items: {
          tillageOps: 'కళప పద్ధతుల సంఖ్య',
          levelingBeds: 'సమతలీకరణ/బెడ్ సిద్ధం',
          smallLargeFields: 'చిన్న/పెద్ద పొలాలకు సిఫార్సులు',
          residueMgmt: 'అవశేషాల నిర్వహణ',
        },
        figcaption: 'భూమి సిద్ధం దశలు',
      },
      nutrients: {
        title: 'పోషకాలు & ఎరువుల షెడ్యూల్',
        summary: 'ఎరువుల ప్రణాళిక',
        items: {
          macroMicro: 'మాక్రో & మైక్రో పోషక అవసరాలు',
          stageSchedule: 'దశల వారీ ఎరువుల షెడ్యూల్',
          formulations: 'సాధారణ ఎరువు తయారీలు',
          soilTestAdjust: 'మట్ట పరీక్ష ఆధారంగా మోతాదు సర్దుబాటు',
          safetyPpe: 'సురక్ష & పీపీఈ సూచనలు',
        },
      },
      irrigation: {
        title: 'పారుదల షెడ్యూల్ & నీటి నిర్వహణ',
        summary: 'నీటి ప్రణాళిక',
        items: {
          criticalStages: 'పారుదలకు కీలక దశలు',
          method: 'పద్ధతి: ఫ్లడ్, డ్రిప్, స్ప్రింక్లర్',
          waterNeeds: 'దశల వారీ నీటి అవసరాలు',
        },
        figcaption: 'పారుదల & నీటి అవసరాలు',
      },
      pests: {
        title: 'పురుగు & వ్యాధి నిర్వహణ',
        summary: 'రక్షణ',
        items: {
          common: 'సాధారణ పురుగులు/వ్యాధులు & లక్షణాలు',
          lifecycle: 'జీవచక్రం గమనికలు',
          control: 'సేంద్రియ & రసాయన నియంత్రణ',
          safeChemicals: 'సురక్షిత రసాయనాలు, మోతాదులు, PHI',
          protectiveMeasures: 'రక్షణ చర్యలు',
        },
        figcaption: 'పురుగు & వ్యాధి నిర్వహణ',
      },
      weeds: {
        title: 'కలుపు నిర్వహణ',
        summary: 'నియంత్రణ',
        items: {
          common: 'వృద్ధి దశలకు సాధారణ కలుపు',
          culturalMechanical: 'సాంస్కృతిక/యాంత్రిక నియంత్రణ',
          herbicides: 'హెర్బిసైడ్లు & సమయం',
          prevention: 'నివారణ సూచనలు',
        },
        figcaption: 'కలుపు నిర్వహణ',
      },
      harvest: {
        title: 'కోత & దిగుబడి అంచనా',
        summary: 'కోత',
        items: {
          maturityIndicators: 'పక్వత సూచికలు',
          techniques: 'కోత పద్ధతులు',
          threshingDrying: 'దాణా వేర్పు & ఎండబెట్టడం',
          expectedYield: 'వివిధ పరిస్థితుల్లో దిగుబడి',
        },
        figcaption: 'కోత & దిగుబడి అంచనా',
      },
      postHarvest: {
        title: 'పోస్ట్-హార్వెస్ట్ నిర్వహణ & నిల్వ',
        summary: 'నిల్వ',
        items: {
          handlingCleaning: 'పంట తరువాత నిర్వహణ & శుభ్రపరిచే ప్రక్రియ',
          dryingTargets: 'ఎండబెట్టే తేమ లక్ష్యాలు',
          storageOptions: 'నిల్వ కంటైనర్ ఎంపికలు',
          preventionStorage: 'నిల్వలో పురుగు/ఫంగస్ నివారణ',
          valueAdded: 'వ్యాల్యూ-యాడెడ్ ప్రాసెసింగ్ ఆలోచనలు',
        },
      },
      mandi: {
        title: 'మార్కెట్ & ధర మార్గదర్శకం',
        summary: 'మార్గదర్శకం',
        items: {
          currentPrices: 'ప్రస్తుత మండీ ధరలు (ప్రాంతం)',
          trends: 'ధర ధోరణులు',
          gradingQuality: 'గ్రేడింగ్/నాణ్యత కారణాలు',
          accessStrategies: 'మార్కెట్ ప్రవేశ వ్యూహాలు',
          transportPacking: 'రవాణా & ప్యాకింగ్ సూచనలు',
        },
        figcaption: 'మార్కెట్ & ధర మార్గదర్శకం',
      },
      schemes: {
        title: 'ప్రభుత్వ పథకాలు & సబ్సిడీలు',
        summary: 'సహాయం',
        items: {
          available: 'లభ్యమయ్యే పథకాలు & సబ్సిడీలు',
          regulatory: 'లేబుల్ & నియంత్రణ గమనికలు',
          applicationLinks: 'అప్లికేషన్ లింకులు లేదా సమీప కార్యాలయం',
        },
      },
      education: {
        title: 'విద్యా కంటెంట్ & చిన్న వీడియోలు',
        summary: 'అభ్యాసం',
        items: {
          howToVideos: 'విత్తన/నాటడం ఎలా వీడియోలు',
          safeHandling: 'స్ప్రే, డ్రిప్, సురక్షిత నిర్వహణ',
        },
      },
      feedback: {
        title: 'అభిప్రాయం & వ్యక్తీకరణ',
        summary: 'సహభాగిత్వం',
        items: {
          agronomistContact: 'అగ్రోనమిస్ట్ సంప్రదింపు',
          blogUpdates: 'బ్లాగ్ & నవీకరణలు',
        },
      },
      implinks: {
        title: 'ముఖ్యమైన లింకులు / ఉపయోగకర వనరులు',
        summary: 'వనరులు',
        items: { usefulLinks: 'ఉపయోగకర లింకులు & వనరులు' },
        figcaption: 'ముఖ్యమైన లింకులు / ఉపయోగకర వనరులు',
      },
      footer: {
        sourcePrefix: 'మూలం:',
        sourceName: 'క్రాప్ నాలెడ్జ్ పోర్టల్ —',
        sourceLinkText: 'cropknowledge.my.canva.site/crop-knowledge-portal',
      },
      misc: { backToTop: 'పైకి వెళ్లండి' },
    },
  },
  mr: {
    portalName: 'पीक ज्ञान',
    categories: {
      fruits: 'फळे',
      grains: 'धान्ये',
      vegetables: 'भाज्या',
      spices: 'मसाले',
      flowers: 'फुले',
      cashCrops: 'नगदी पिके',
      oilSeeds: 'तेलबिया',
      pulses: 'डाळी',
      plantationCrops: 'बागायती पिके',
    },
    cropNames: {
      tomato: 'टोमॅटो',
      potato: 'बटाटा',
      okra: 'भेंडी',
      brinjal: 'वांगी',
      cabbage: 'कोबी',
      cauliflower: 'फ्लॉवर',
      capsicum: 'ढोबळी मिरची',
      cucumber: 'काकडी',
      onion: 'कांदा',
      greenChilli: 'हिरवी मिरची',
      greenPea: 'हिरवे वाटाणे',
      mango: 'आंबा',
      banana: 'केळी',
      apple: 'सफरचंद',
      grapes: 'द्राक्षे',
      guava: 'पेरू',
      lemon: 'लिंबू',
      watermelon: 'कलिंगड',
      muskmelon: 'खरबूज',
      papaya: 'पपई',
      custardApple: 'सीताफळ',
      dragonFruit: 'ड्रॅगन फ्रूट',
      strawberry: 'स्ट्रॉबेरी',
      // Grains
      Rice: 'तांदूळ',
      Wheat: 'गहू',
      Maize: 'मका',
      Bajra: 'बाजरी',
      // Spices
      coriander: 'धणे',
      Cumin: 'जिरे',
      garlic: 'लसूण',
      ginger: 'आले',
      DryChilli: 'सुकी मिरची',
      turmeric: 'हळद',
      // Flowers
      marigold: 'झेंडू',
      rose: 'गुलाब',
      chrysanthemum: 'शेवंती',
      // Cash Crops
      cotton: 'कापूस',
      sugarcane: 'ऊस',
      ratoonSugarcane: 'रॅटन ऊस',
      // Oil Seeds
      castor: 'एरंडी',
      mustard: 'मोहरी',
      sesame: 'तीळ',
      groundnut: 'शेंगदाणे',
      soyabeen: 'सोयाबीन',
      // Pulses
      bengalGram: 'हरभरा',
      blackGram: 'उडीद',
      greenGram: 'मूग',
      lentil: 'मसूर',
      redGram: 'तूर',
      // Plantation Crops
      coffee: 'कॉफी',
      tea: 'चहा',
      rubber: 'रबर',
      coconut: 'नारळ',
    },
    language: 'भाषा',
    viewAll: 'सर्व पहा',
    home: {
      heroTitle: 'जैन यांच्या पीक ज्ञानात आपले स्वागत आहे',
      heroSubtitle: 'जीवन बदलत आहे; समृद्धी वाढवत आहे.',
    },
    report: {
      navTitle: 'नेव्हिगेशन',
      nav: {
        cropBasics: 'पिक मूलभूत माहिती',
        soil: 'मातीची गरज',
        climate: 'हवामान आणि पेरणी वेळ',
        varieties: 'जाती आणि बियाणे निवड',
        seedRate: 'बियाणे दर आणि अंतर',
        landPrep: 'जमीन तयारी',
        nutrients: 'पोषक तत्त्वे आणि खत वेळापत्रक',
        irrigation: 'सिंचन आणि पाणी',
        pests: 'कीड आणि रोग व्यवस्थापन',
        weeds: 'तण व्यवस्थापन',
        harvest: 'कापणी आणि उत्पादन',
        postHarvest: 'कापणीनंतर आणि साठवण',
        mandi: 'बाजार आणि किंमत मार्गदर्शन',
        schemes: 'सरकारी योजना',
        education: 'शैक्षणिक सामग्री',
        feedback: 'अभिप्राय आणि वैयक्तिकरण',
        implinks: 'महत्वाच्या लिंक / उपयुक्त संसाधने',
      },
      intro: {
        title: 'स्वागत आहे',
        description:
          'उत्तम निर्णय आणि परिणामांसाठी पिक माहिती अहवाल.',
      },
      cropBasics: {
        title: 'पिक मूलभूत माहिती',
        summary: 'मुख्य मुद्दे',
        items: {
          names: 'वैज्ञानिक आणि सामान्य नावे',
          growthCycle: 'वाढीच्या अवस्था आणि कालावधी',
          climate: 'योग्य हवामान',
          calendar: 'पिक कॅलेंडर',
        },
        figcaption: 'वाढीच्या अवस्थांचा टाइमलाइन',
      },
      soil: {
        title: 'मातीची गरज',
        summary: 'मुख्य मानके',
        items: {
          soilType: 'आदर्श माती प्रकार आणि संरचना',
          phRange: 'आदर्श pH श्रेणी',
          drainage: 'योग्य ड्रेनेज',
          tests: 'माती चाचणी आणि शिफारसी',
        },
        figcaption: 'माती प्रकार आणि pH श्रेणी',
      },
      climate: {
        title: 'हवामान आणि पेरणी वेळ',
        summary: 'सर्वोत्तम पद्धती',
        items: {
          requirements: 'तापमान आणि पर्जन्य गरजा',
          sowingTime: 'प्रदेशानुसार पेरणी वेळ',
          methods: 'थेट पेरणी/रोपांतर पद्धती',
        },
        figcaption: 'हवामान गरजांचे सारांश',
      },
      varieties: {
        title: 'जाती आणि बियाणे निवड',
        summary: 'निवड मार्गदर्शक',
        items: {
          localVarieties: 'स्थानिक/लोकप्रिय जाती',
          daysToMaturity: 'पक्वतेसाठी दिवस',
          purityQuality: 'बियाण्यांची शुद्धता आणि गुणवत्ता',
          certifiedSources: 'प्रमाणित स्रोत',
        },
      },
      seedRate: {
        title: 'बियाणे दर आणि अंतर',
        summary: 'स्थापना मार्गदर्शक',
        items: {
          seedRate: 'हेक्टर/एकर प्रति बियाणे दर',
          rowSpacing: 'ओळीतील अंतर',
          population: 'वनस्पती संख्या लक्ष्य',
          depth: 'पेरणी खोली',
        },
        figcaption: 'बियाणे दर, अंतर आणि खोली',
      },
      landPrep: {
        title: 'जमीन तयारी',
        summary: 'तयारी टप्पे',
        items: {
          tillageOps: 'नांगरणी टप्प्यांची संख्या',
          levelingBeds: 'समतल करणे/बेड तयारी',
          smallLargeFields: 'लहान/मोठ्या शेतांसाठी शिफारसी',
          residueMgmt: 'अवशेष व्यवस्थापन',
        },
        figcaption: 'जमीन तयारीचे टप्पे',
      },
      nutrients: {
        title: 'पोषक तत्त्वे आणि खत व्यवस्थापन',
        summary: 'खत योजना',
        items: {
          macroMicro: 'मॅक्रो आणि मायक्रो पोषक गरजा',
          stageSchedule: 'टप्प्यांनुसार खत वेळापत्रक',
          formulations: 'सामान्य खत फॉर्म्युलेशन',
          soilTestAdjust: 'माती चाचणीवर आधारित प्रमाण समायोजन',
          safetyPpe: 'सुरक्षा आणि PPE मार्गदर्शक',
        },
      },
      irrigation: {
        title: 'सिंचन वेळापत्रक आणि पाणी व्यवस्थापन',
        summary: 'पाणी योजना',
        items: {
          criticalStages: 'सिंचनासाठी महत्त्वाचे टप्पे',
          method: 'पद्धती: फ्लड, ड्रिप, स्प्रिंकलर',
          waterNeeds: 'टप्प्यांनुसार पाण्याची गरज',
        },
        figcaption: 'सिंचन आणि पाण्याच्या गरजा',
      },
      pests: {
        title: 'कीड आणि रोग व्यवस्थापन',
        summary: 'संरक्षण',
        items: {
          common: 'सामान्य कीड आणि रोग चिन्हे',
          lifecycle: 'जीवनचक्र नोंदी',
          control: 'सेंद्रिय आणि रासायनिक नियंत्रण',
          safeChemicals: 'सुरक्षित रसायने, डोस आणि PHI',
          protectiveMeasures: 'संरक्षक उपाय',
        },
        figcaption: 'कीड आणि रोग व्यवस्थापन',
      },
      weeds: {
        title: 'तण व्यवस्थापन',
        summary: 'नियंत्रण',
        items: {
          common: 'विविध टप्प्यांतील सामान्य तण',
          culturalMechanical: 'संस्कृतिक/यांत्रिक नियंत्रण',
          herbicides: 'हरबिसाइड आणि वेळ',
          prevention: 'प्रतिबंध टिप्स',
        },
        figcaption: 'तण व्यवस्थापन',
      },
      harvest: {
        title: 'कापणी आणि उत्पादन अनुमान',
        summary: 'कापणी',
        items: {
          maturityIndicators: 'पक्वतेची संकेत',
          techniques: 'कापणी तंत्र',
          threshingDrying: 'दाणे काढणे आणि वाळवणे',
          expectedYield: 'विविध परिस्थितीत अपेक्षित उत्पादन',
        },
        figcaption: 'कापणी आणि उत्पादन अनुमान',
      },
      postHarvest: {
        title: 'कापणीनंतरचे हाताळणी आणि साठवण',
        summary: 'साठवण',
        items: {
          handlingCleaning: 'कापणीनंतर हाताळणी आणि साफसफाई',
          dryingTargets: 'वाळवणीतील ओलाव्याचे लक्ष्य',
          storageOptions: 'साठवणीचे पर्याय',
          preventionStorage: 'साठवणीत कीड/बुरशी प्रतिबंध',
          valueAdded: 'वॅल्यू-ऍडेड प्रक्रिया कल्पना',
        },
      },
      mandi: {
        title: 'बाजार आणि किंमत मार्गदर्शन',
        summary: 'मार्गदर्शन',
        items: {
          currentPrices: 'सध्याचे मंडी दर (प्रदेश)',
          trends: 'किंमत प्रवृत्ती',
          gradingQuality: 'ग्रेडिंग/गुणवत्ता घटक',
          accessStrategies: 'बाजार प्रवेश धोरणे',
          transportPacking: 'वाहतूक आणि पॅकिंग टिप्स',
        },
        figcaption: 'बाजार आणि किंमत मार्गदर्शन',
      },
      schemes: {
        title: 'सरकारी योजना आणि अनुदान',
        summary: 'सहाय्य',
        items: {
          available: 'उपलब्ध योजना आणि अनुदान',
          regulatory: 'लेबल आणि नियामक नोंदी',
          applicationLinks: 'अर्ज लिंक किंवा जवळचे कार्यालय',
        },
      },
      education: {
        title: 'शैक्षणिक सामग्री आणि लघु व्हिडिओ',
        summary: 'अभ्यास',
        items: {
          howToVideos: 'पेरणी/रोपांतर कसे करावे व्हिडिओ',
          safeHandling: 'स्प्रे, ड्रिप, सुरक्षित हाताळणी',
        },
      },
      feedback: {
        title: 'अभिप्राय आणि वैयक्तिकरण',
        summary: 'भागीदारी',
        items: {
          agronomistContact: 'अ‍ॅग्रोनॉमिस्ट संपर्क',
          blogUpdates: 'ब्लॉग आणि अद्यतने',
        },
      },
      implinks: {
        title: 'महत्वाच्या लिंक / उपयुक्त संसाधने',
        summary: 'संसाधने',
        items: { usefulLinks: 'उपयुक्त लिंक आणि संसाधने' },
        figcaption: 'महत्वाच्या लिंक / उपयुक्त संसाधने',
      },
      footer: {
        sourcePrefix: 'स्रोत:',
        sourceName: 'क्रॉप नॉलेज पोर्टल —',
        sourceLinkText: 'cropknowledge.my.canva.site/crop-knowledge-portal',
      },
      misc: { backToTop: 'वर जा' },
    },
  },
  ta: {
    portalName: 'பயிர் அறிவு',
    categories: {
      fruits: 'பழங்கள்',
      grains: 'தானியங்கள்',
      vegetables: 'காய்கறிகள்',
      spices: 'மசாலாக்கள்',
      flowers: 'மலர்கள்',
      cashCrops: 'பணப் பயிர்கள்',
      oilSeeds: 'எண்ணெய் விதைகள்',
      pulses: 'பயற்கள்',
      plantationCrops: 'தோட்டப் பயிர்கள்',
    },
    cropNames: {
      tomato: 'தக்காளி',
      potato: 'உருளைக்கிழங்கு',
      okra: 'வெண்டைக்காய்',
      brinjal: 'கத்தரிக்காய்',
      cabbage: 'முட்டைகோசு',
      cauliflower: 'காலிஃபிளவர்',
      capsicum: 'குடைமிளகாய்',
      cucumber: 'வெள்ளரிக்காய்',
      onion: 'வெங்காயம்',
      greenChilli: 'பச்சை மிளகாய்',
      greenPea: 'பச்சை பட்டாணி',
      mango: 'மாம்பழம்',
      banana: 'வாழைப்பழம்',
      apple: 'ஆப்பிள்',
      grapes: 'திராட்சை',
      guava: 'கொய்யாப்பழம்',
      lemon: 'எலுமிச்சை',
      watermelon: 'தர்பூசணி',
      muskmelon: 'முலாம்பழம்',
      papaya: 'பப்பாளி',
      custardApple: 'சீதாப்பழம்',
      dragonFruit: 'டிராகன் பழம்',
      strawberry: 'ஸ்ட்ராபெர்ரி',
      // Grains
      Rice: 'அரிசி',
      Wheat: 'கோதுமை',
      Maize: 'சோளம்',
      Bajra: 'கம்பு',
      // Spices
      coriander: 'கொத்தமல்லி',
      Cumin: 'சீரகம்',
      garlic: 'பூண்டு',
      ginger: 'இஞ்சி',
      DryChilli: 'உலர் மிளகாய்',
      turmeric: 'மஞ்சள்',
      // Flowers
      marigold: 'சாமந்தி',
      rose: 'ரோஜா',
      chrysanthemum: 'கிரிசாந்தமம்',
      // Cash Crops
      cotton: 'பருத்தி',
      sugarcane: 'கரும்பு',
      ratoonSugarcane: 'ராட்டூன் கரும்பு',
      // Oil Seeds
      castor: 'ஆமணக்கு',
      mustard: 'கடுகு',
      sesame: 'எள்ளு',
      groundnut: 'வேர்க்கடலை',
      soyabeen: 'சோயாபீன்',
      // Pulses
      bengalGram: 'கொண்டைக்கடலை',
      blackGram: 'உளுந்து',
      greenGram: 'பாசிப்பருப்பு',
      lentil: 'மசூர் பருப்பு',
      redGram: 'துவரம் பருப்பு',
      // Plantation Crops
      coffee: 'காபி',
      tea: 'தேயிலை',
      rubber: 'ரப்பர்',
      coconut: 'தேங்காய்',
    },
    language: 'மொழி',
    viewAll: 'அனைத்தையும் காண்க',
    home: {
      heroTitle: 'ஜெயின் பயிர் அறிவுக்கு வரவேற்கிறோம்',
      heroSubtitle: 'வாழ்க்கையை மாற்றுதல்; வளத்தை உயர்த்துதல்.',
    },
    report: {
      navTitle: 'வழிசெலுத்தல்',
      nav: {
        cropBasics: 'பயிர் அடிப்படை',
        soil: 'மண் தேவைகள்',
        climate: 'காலநிலை & விதைப்பு நேரம்',
        varieties: 'வகைகள் & விதைத் தேர்வு',
        seedRate: 'விதை அளவு & இடைவெளி',
        landPrep: 'நிலத் தயாரிப்பு',
        nutrients: 'உட்டச்சத்து & உர அட்டவணை',
        irrigation: 'நீர்ப்பாசனம் & நீர்',
        pests: 'பூச்சி & நோய்',
        weeds: 'களை மேலாண்மை',
        harvest: 'அறுவடை & விளைச்சல்',
        postHarvest: 'அறுவடைப் பிந்தைய & சேமிப்பு',
        mandi: 'சந்தை & விலை வழிகாட்டி',
        schemes: 'அரசுத் திட்டங்கள்',
        education: 'கல்வி உள்ளடக்கம்',
        feedback: 'பின்னூட்டம் & தனிப்பயனாக்கம்',
        implinks: 'முக்கிய இணைப்புகள் / பயனுள்ள வளங்கள்',
      },
      intro: {
        title: 'வரவேற்பு',
        description:
          'பயிர் தகவல் அம்சங்கள், நடைமுறைகள் மற்றும் வளங்களை ஆராய விவசாயி நட்பு அமைப்பில் வடிவமைக்கப்பட்ட அறிக்கை; சிறந்த முடிவுகள் மற்றும் விளைவுகளுக்காக.',
      },
      cropBasics: {
        title: 'பயிர் அடிப்படை',
        summary: 'அத்தியாவசிய தகவல்',
        items: {
          names: 'அறிவியல் மற்றும் பொதுப் பெயர்கள்',
          growthCycle: 'வளர்ச்சி நிலைகள் மற்றும் காலநீளம்',
          climate: 'தகுந்த காலநிலை',
          calendar: 'பயிர் நாட்காட்டி',
        },
        figcaption: 'வளர்ச்சி நிலைகளின் காலவரிசை',
      },
      soil: {
        title: 'மண் தேவைகள்',
        summary: 'முக்கிய அளவுகோல்கள்',
        items: {
          soilType: 'சிறந்த மண் வகை மற்றும் அமைப்பு',
          phRange: 'சிறந்த pH வரம்பு',
          drainage: 'நீரோட்ட தேவைகள்',
          tests: 'வழக்கமான மண் பரிசோதனைகள்',
        },
        figcaption: 'சிறந்த மண் வகை மற்றும் pH',
      },
      climate: {
        title: 'காலநிலை & விதைப்பு நேரம்',
        summary: 'வழிகாட்டுதல்',
        items: {
          requirements: 'சிறந்த வெப்பநிலை, மழை, சூரியஒளி',
          sowingTime: 'விதைப்பு/நடவு செய்ய சிறந்த நேரம்',
          methods: 'விதை அளவு, இடைவெளி மற்றும் முறைகள்',
        },
        figcaption: 'காலநிலை தேவைகள்',
      },
      varieties: {
        title: 'வகைகள் & விதைத் தேர்வு',
        summary: 'பரிந்துரைகள்',
        items: {
          localVarieties: 'உள்ளூர் பரிந்துரைக்கப்பட்ட வகைகள்—சிறப்புகள்/குறைபாடுகள்',
          daysToMaturity: 'முதிர்வதற்கான நாட்கள்',
          purityQuality: 'விதை தூய்மை மற்றும் தரச் சான்றுகள்',
          certifiedSources: 'சான்றளிக்கப்பட்ட விதை ஆதாரங்கள்',
        },
      },
      seedRate: {
        title: 'விதை அளவு & இடைவெளி',
        summary: 'நிலைத்த நிலை ஏற்படுத்தல்',
        items: {
          seedRate: 'ஏக்கர்/ஹெக்டேருக்கு விதை அளவு',
          rowSpacing: 'வரிசை இடைவெளி',
          population: 'தாவர எண்ணிக்கை இலக்குகள்',
          depth: 'நடவு ஆழம்',
        },
        figcaption: 'விதை அளவு, இடைவெளி, மக்கள் தொகை மற்றும் ஆழம்',
      },
      landPrep: {
        title: 'நிலத் தயாரிப்பு',
        summary: 'தயாரிப்பு படிகள்',
        items: {
          tillageOps: 'உழவு/அமைப்பு செயல்களின் எண்ணிக்கை',
          levelingBeds: 'நிலமட்டம்/படுக்கை தயாரிப்பு தேவைகள்',
          smallLargeFields: 'சிறிய மற்றும் பெரிய வயல்களுக்கு பரிந்துரைகள்',
          residueMgmt: 'மீதமுள்ள பதார்த்த மேலாண்மை',
        },
        figcaption: 'நிலத் தயாரிப்பு படிகள்',
      },
      nutrients: {
        title: 'உட்டச்சத்து & உர அட்டவணை',
        summary: 'உரமிடல்',
        items: {
          macroMicro: 'மூல மற்றும் சிறு உட்டச்சத்து தேவைகள்',
          stageSchedule: 'நிலை வாரியாக உர அட்டவணை மற்றும் அளவுகள்',
          formulations: 'பொதுவான உர வடிவங்கள்',
          soilTestAdjust: 'மண் பரிசோதனை அடிப்படையிலான அளவு மாற்றம்',
          safetyPpe: 'பாதுகாப்பு மற்றும் PPE கையாளல்',
        },
      },
      irrigation: {
        title: 'நீர்ப்பாசன அட்டவணை & நீர் மேலாண்மை',
        summary: 'நீர் திட்டமிடல்',
        items: {
          criticalStages: 'நீர்ப்பாசனம் தேவைப்படும் முக்கிய நிலைகள்',
          method: 'முறை: ஊற்று, டிரிப், ஸ்பிரிங்களர்',
          waterNeeds: 'வளர்ச்சி நிலைகள் படி நீர் தேவைகள்',
        },
        figcaption: 'நீர்ப்பாசனம் & நீர் தேவைகள்',
      },
      pests: {
        title: 'பூச்சி & நோய் மேலாண்மை',
        summary: 'பாதுகாப்பு',
        items: {
          common: 'பொதுவான பூச்சிகள்/நோய்கள் மற்றும் அறிகுறிகள்',
          lifecycle: 'வாழ்க்கைச் சுழற்சி குறிப்புகள்',
          control: 'ஆர்கானிக் மற்றும் வேதியியல் கட்டுப்பாடுகள்',
          safeChemicals: 'பரிந்துரைக்கப்பட்ட பாதுகாப்பான வேதிப்பொருட்கள் (அளவு, PHI)',
          protectiveMeasures: 'பாதுகாப்பு முன்னெச்சரிக்கைகள்',
        },
        figcaption: 'பூச்சி & நோய் மேலாண்மை',
      },
      weeds: {
        title: 'களை மேலாண்மை',
        summary: 'கட்டுப்பாடு',
        items: {
          common: 'வளர்ச்சி நிலைகளின் பொதுவான களைகள்',
          culturalMechanical: 'பண்பாட்டு மற்றும் இயந்திர கட்டுப்பாடு',
          herbicides: 'பரிந்துரைக்கப்பட்ட களைகட்டி மருந்துகள் மற்றும் நேரம்',
          prevention: 'தடுப்பு குறிப்புகள்',
        },
        figcaption: 'களை மேலாண்மை',
      },
      harvest: {
        title: 'அறுவடை & விளைச்சல் மதிப்பீடு',
        summary: 'விளைச்சல் மற்றும் அறுவடை',
        items: {
          maturityIndicators: 'முதிர்வுத் தகவல்கள்',
          techniques: 'அறுவடை முறைகள்',
          threshingDrying: 'அலசி & உலர்த்தல் குறிப்புகள்',
          expectedYield: 'நிலைமைகளின்படி எதிர்பார்க்கப்படும் விளைச்சல்',
        },
        figcaption: 'அறுவடை & விளைச்சல் மதிப்பீடு',
      },
      postHarvest: {
        title: 'அறுவடைப் பிந்தைய கையாளல் & சேமிப்பு',
        summary: 'சேமிப்பு',
        items: {
          handlingCleaning: 'அறுவடைப் பிந்தைய கையாளல் மற்றும் சுத்தம்',
          dryingTargets: 'உலர்விற்கான ஈரப்பத இலக்குகள்',
          storageOptions: 'சேமிப்பு விருப்பங்கள்',
          preventionStorage: 'சேமிப்பில் பூச்சி/பூஞ்சை தடுப்பு',
          valueAdded: 'மதிப்புக் கூட்டும் செயலாக்க யோசனைகள்',
        },
      },
      mandi: {
        title: 'சந்தை & விலை வழிகாட்டி',
        summary: 'வழிகாட்டி',
        items: {
          currentPrices: 'தற்போதைய மண்டி விலைகள் (பகுதி)',
          trends: 'விலை போக்குகள்',
          gradingQuality: 'தரம்/மதிப்பீடு பாதிக்கும் காரணிகள்',
          accessStrategies: 'சந்தை அணுகுமுறைகள்',
          transportPacking: 'போக்குவரத்து & பொதி குறிப்புகள்',
        },
        figcaption: 'சந்தை & விலை வழிகாட்டி',
      },
      schemes: {
        title: 'அரசுத் திட்டங்கள் & உதவித்தொகைகள்',
        summary: 'ஆதரவு',
        items: {
          available: 'கிடைக்கும் திட்டங்கள் மற்றும் உதவித்தொகைகள்',
          regulatory: 'லேபிள் மற்றும் ஒழுங்குமுறை குறிப்புகள்',
          applicationLinks: 'விண்ணப்ப இணைப்புகள் அல்லது அருகிலுள்ள அலுவலகம்',
        },
      },
      education: {
        title: 'கல்வி உள்ளடக்கம் & குறு வீடியோக்கள்',
        summary: 'கற்றல்',
        items: {
          howToVideos: 'விதைப்பு/நடவு செய்வது—வீடியோக்கள்',
          safeHandling: 'ஸ்பிரே, டிரிப் நிறுவல், பாதுகாப்பான கையாளல்',
        },
      },
      feedback: {
        title: 'பின்னூட்டம் & தனிப்பயனாக்கம்',
        summary: 'ஈடுபாடு',
        items: {
          agronomistContact: 'அக்ரோனமிஸ்ட் தொடர்பு தகவல்',
          blogUpdates: 'வலைப்பதிவு மற்றும் புதுப்பிப்புகள்',
        },
      },
      implinks: {
        title: 'முக்கிய இணைப்புகள் / பயனுள்ள வளங்கள்',
        summary: 'வளங்கள்',
        items: { usefulLinks: 'பயனுள்ள இணைப்புகள் மற்றும் வளங்கள்' },
        figcaption: 'முக்கிய இணைப்புகள் / பயனுள்ள வளங்கள்',
      },
      footer: {
        sourcePrefix: 'மூலம்:',
        sourceName: 'பயிர் அறிவு தளம் —',
        sourceLinkText: 'cropknowledge.my.canva.site/crop-knowledge-portal',
      },
      misc: { backToTop: 'மேலே செல்' },
    },
  },
  gu: {
    portalName: 'પાક જ્ઞાન',
    categories: {
      fruits: 'ફળ',
      grains: 'અનાજ',
      vegetables: 'શાકભાજી',
      spices: 'મસાલા',
      flowers: 'ફૂલ',
      cashCrops: 'નગદ પાક',
      oilSeeds: 'તેલબિયાં',
      pulses: 'દાળ',
      plantationCrops: 'બાગાયત પાક',
    },
    cropNames: {
      tomato: 'ટમેટા',
      potato: 'બટાટા',
      okra: 'ભીંડા',
      brinjal: 'રીંગણ',
      cabbage: 'કોબી',
      cauliflower: 'ફુલાવર',
      capsicum: 'કેપ્સિકમ',
      cucumber: 'કાકડી',
      onion: 'ડુંગળી',
      greenChilli: 'લીલા મરચાં',
      greenPea: 'લીલા વટાણા',
      mango: 'કેરી',
      banana: 'કેળા',
      apple: 'સફરજન',
      grapes: 'દ્રાક્ષ',
      guava: 'જામફળ',
      lemon: 'લીંબુ',
      watermelon: 'તરબૂચ',
      muskmelon: 'કરબુજ',
      papaya: 'પપૈયું',
      custardApple: 'સીતા ફળ',
      dragonFruit: 'ડ્રેગન ફળ',
      strawberry: 'સ્ટ્રોબેરી',
      // Grains
      Rice: 'ચોખા',
      Wheat: 'ગહું',
      Maize: 'મકાઈ',
      Bajra: 'બાજરી',
      // Spices
      coriander: 'ધાણા',
      Cumin: 'જીરું',
      garlic: 'લસણ',
      ginger: 'આદુ',
      DryChilli: 'સુકી મરચી',
      turmeric: 'હળદર',
      // Flowers
      marigold: 'ગાંદા',
      rose: 'ગુલાબ',
      chrysanthemum: 'ચંદ્રમલ્લિકા',
      // Cash Crops
      cotton: 'કપાસ',
      sugarcane: 'ઈખ',
      ratoonSugarcane: 'રાટૂન ઈખ',
      // Oil Seeds
      castor: 'અરંડ',
      mustard: 'સરસવ',
      sesame: 'તલ',
      groundnut: 'શિંગદાણા',
      soyabeen: 'સોયાબીન',
      // Pulses
      bengalGram: 'ચણા',
      blackGram: 'ઉડદ',
      greenGram: 'મગ',
      lentil: 'મસૂર',
      redGram: 'તુવેર',
      // Plantation Crops
      coffee: 'કોફી',
      tea: 'ચા',
      rubber: 'રબર',
      coconut: 'નાળિયેર',
    },
    language: 'ભાષા',
    viewAll: 'બધું જુઓ',
    home: {
      heroTitle: 'જૈનની પાક જ્ઞાનમાં આપનું સ્વાગત છે',
      heroSubtitle: 'જીવન બદલતા; સમૃદ્ધિ વધારતા.',
    },
    report: {
      navTitle: 'નેવિગેશન',
      nav: {
        cropBasics: 'પાક આધારભૂત માહિતી',
        soil: 'માટી આવશ્યકતાઓ',
        climate: 'હવામાન & વાવણી સમય',
        varieties: 'જાતો & બીજ પસંદગી',
        seedRate: 'બીજ दर & અંતર',
        landPrep: 'ખેતર તૈયારી',
        nutrients: 'પોષક તત્ત્વો & ખાતર સમયપત્રક',
        irrigation: 'સિંચાઈ & પાણી',
        pests: 'કીટ & રોગ',
        weeds: 'નીંદણ વ્યવસ્થાપન',
        harvest: 'કાપણી & ઉપજ',
        postHarvest: 'કાપણી પછી & સંગ્રહ',
        mandi: 'બજાર & કિંમતો માર્ગદર્શન',
        schemes: 'સરકારી યોજનાઓ',
        education: 'શૈક્ષણિક સામગ્રી',
        feedback: 'પ્રતિસાદ & વ્યક્તિગતીકરણ',
        implinks: 'મહત્વપૂર્ણ લિંક્સ / ઉપયોગી સ્ત્રોતો',
      },
      intro: {
        title: 'સ્વાગત',
        description:
          'પાક માહિતીના પાસાઓ, પ્રથાઓ અને સ્ત્રોતો શોધવા ખેડૂત-મૈત્રીપૂર્ણ રીતે રચાયેલ રિપોર્ટ — ઉત્તમ નિર્ણયો અને પરિણામો માટે.',
      },
      cropBasics: {
        title: 'પાક આધારભૂત માહિતી',
        summary: 'મૂળભૂત જાણકારી',
        items: {
          names: 'વૈજ્ઞાનિક અને સામાન્ય નામો',
          growthCycle: 'વિકાસ ચક્ર તબક્કાઓ અને અવધિ',
          climate: 'યોગ્ય હવામાન પરિસ્થિતિઓ',
          calendar: 'પાક કેલેન્ડર',
        },
        figcaption: 'વિકાસ તબક્કાની સમયરેખા',
      },
      soil: {
        title: 'માટી આવશ્યકતાઓ',
        summary: 'મુખ્ય પરિમાણો',
        items: {
          soilType: 'આદર્શ માટી પ્રકાર અને રચના',
          phRange: 'આદર્શ pH શ્રેણી',
          drainage: 'ડ્રેનેજ જરૂરિયાત',
          tests: 'સામાન્ય માટી પરીક્ષણો',
        },
        figcaption: 'આદર્શ માટી પ્રકાર અને pH',
      },
      climate: {
        title: 'હવામાન & વાવણી સમય',
        summary: 'માર્ગદર્શન',
        items: {
          requirements: 'આદર્શ તાપમાન, વરસાદ, સૂર્યપ્રકાશ',
          sowingTime: 'વાવણી/રોપણી માટે શ્રેષ્ઠ સમય',
          methods: 'બીજ दर, અંતર અને પદ્ધતિઓ',
        },
        figcaption: 'હવામાન આવશ્યકતાઓ',
      },
      varieties: {
        title: 'જાતો & બીજ પસંદગી',
        summary: 'ભલામણો',
        items: {
          localVarieties: 'સ્થાનિક ભલામણિત જાતો—લાભ/ઓછતા',
          daysToMaturity: 'પરિપક્વતા સુધીના દિવસો',
          purityQuality: 'બીજ શુદ્ધતા અને ગુણવત્તા માપદંડ',
          certifiedSources: 'પ્રમાણિત બીજ સ્ત્રોતો',
        },
      },
      seedRate: {
        title: 'બીજ दर & અંતર',
        summary: 'સ્થિર ઊભરાણ',
        items: {
          seedRate: 'એકર/હેક્ટર દીઠ બીજ दर',
          rowSpacing: 'પંક્તિ અંતર',
          population: 'વનસ્પતિ સંખ્યાના લક્ષ્યાંકો',
          depth: 'રોપણી ઊંડાઈ',
        },
        figcaption: 'બીજ दर, અંતર, વસ્તી અને ઊંડાઈ',
      },
      landPrep: {
        title: 'ખેતર તૈયારી',
        summary: 'તૈયારી પગલાં',
        items: {
          tillageOps: 'ઉઝરડા/ખેતી કાર્યવાહીઓની સંખ્યા',
          levelingBeds: 'લેવેલિંગ/બેડ તૈયાર કરવાની જરૂરિયાત',
          smallLargeFields: 'નાના અને મોટા ખેતરો માટે ભલામણો',
          residueMgmt: 'અવશેષ વ્યવસ્થાપન',
        },
        figcaption: 'ખેતર તૈયાર કરવાની પગલાં',
      },
      nutrients: {
        title: 'પોષક તત્ત્વો & ખાતર સમયપત્રક',
        summary: 'ખાતરદાન',
        items: {
          macroMicro: 'મેક્રો અને માઇક્રો પોષક જરૂરિયાતો',
          stageSchedule: 'તબક્કાવાર ખાતર સમયપત્રક અને ડોઝ',
          formulations: 'સામાન્ય ખાતર રચનાઓ',
          soilTestAdjust: 'માટી પરીક્ષણ આધારિત ડોઝ સુધારણા',
          safetyPpe: 'સુરક્ષા અને PPE',
        },
      },
      irrigation: {
        title: 'સિંચાઈ સમયપત્રક & પાણી વ્યવસ્થાપન',
        summary: 'પાણી આયોજન',
        items: {
          criticalStages: 'સિંચાઈ માટે મહત્વપૂર્ણ તબક્કાઓ',
          method: 'પદ્ધતિ: ફ્લડ, ડ્રિપ, સ્પ્રિંકલર',
          waterNeeds: 'વિકાસ તબક્કા અનુસાર પાણી જરૂરિયાત',
        },
        figcaption: 'સિંચાઈ & પાણી જરૂરીયાતો',
      },
      pests: {
        title: 'કીટ & રોગ વ્યવસ્થાપન',
        summary: 'સુરક્ષા',
        items: {
          common: 'સામાન્ય કીટ/રોગ અને લક્ષણો',
          lifecycle: 'જીવન ચક્ર નોંધો',
          control: 'જીવાતમુક્ત અને રસાયણિક નિયંત્રણ ઉપાયો',
          safeChemicals: 'સુરક્ષિત ભલામણિત રસાયણો (ડોઝ, PHI)',
          protectiveMeasures: 'રક્ષણાત્મક ઉપાયો',
        },
        figcaption: 'કીટ & રોગ વ્યવસ્થાપન',
      },
      weeds: {
        title: 'નીંદણ વ્યવસ્થાપન',
        summary: 'નિયંત્રણ',
        items: {
          common: 'વિકાસ તબક્કા પ્રમાણે સામાન્ય નીંદણ',
          culturalMechanical: 'સાંસ્કૃતિક અને યાંત્રિક નિયંત્રણ',
          herbicides: 'ભલામણિત નીંદણનાશકો અને સમય',
          prevention: 'રોકથામ સૂચનો',
        },
        figcaption: 'નીંદણ વ્યાવસ્થાપન',
      },
      harvest: {
        title: 'કાપણી & ઉપજ અંદાજ',
        summary: 'ઉપજ અને કાપણી',
        items: {
          maturityIndicators: 'પરિપક્વતા સૂચકો',
          techniques: 'કાપણીની પદ્ધતિઓ',
          threshingDrying: 'મંદણ & સુકવણી સૂચનો',
          expectedYield: 'પરિસ્થિતિ મુજબ અપેક્ષિત ઉપજ',
        },
        figcaption: 'કાપણી & ઉપજ અંદાજ',
      },
      postHarvest: {
        title: 'કાપણી પછીની હેન્ડલિંગ & સંગ્રહ',
        summary: 'સંગ્રહ',
        items: {
          handlingCleaning: 'કાપણી પછી હેન્ડલિંગ અને સફાઈ',
          dryingTargets: 'સુકાવાની ભેજ લક્ષ્યાંકો',
          storageOptions: 'સંગ્રહ વિકલ્પો/કન્ટેનરો',
          preventionStorage: 'સંગ્રહમાં કીટ/ફૂગ રોકથામ',
          valueAdded: 'વેલ્યુ-એડેડ પ્રક્રિયા વિચારો',
        },
      },
      mandi: {
        title: 'બજાર & કિંમતો માર્ગદર્શન',
        summary: 'માર્ગદર્શન',
        items: {
          currentPrices: 'વર્તમાન મંડિ કિંમતો (પ્રદેશ)',
          trends: 'કિંમતોના પ્રવૃત્તિ',
          gradingQuality: 'ગ્રેડિંગ/ગુણવત્તા પરિબળો',
          accessStrategies: 'બજાર પ્રવેશની વ્યૂહરચનાઓ',
          transportPacking: 'પરિવહન & પેકિંગ સૂચનો',
        },
        figcaption: 'બજાર & કિંમતો માર્ગદર્શન',
      },
      schemes: {
        title: 'સરકારી યોજનાઓ & સહાય',
        summary: 'આધાર',
        items: {
          available: 'ઉપલબ્ધ યોજનાઓ અને સહાય',
          regulatory: 'લેબલ અને નિયમન નોંધો',
          applicationLinks: 'અરજી લિંક્સ અથવા નજીકનું કચેરી',
        },
      },
      education: {
        title: 'શૈક્ષણિક સામગ્રી & ટૂંકા વિડિઓ',
        summary: 'અભ્યાસ',
        items: {
          howToVideos: 'વાવણી/રોપણી કેવી રીતે — વિડિઓ',
          safeHandling: 'સ્પ્રે, ડ્રિપ ઇન્સ્ટોલેશન, સુરક્ષિત હેન્ડલિંગ',
        },
      },
      feedback: {
        title: 'પ્રતિસાદ & વ્યક્તિગતીકરણ',
        summary: 'ભાગીદારી',
        items: {
          agronomistContact: 'એગ્રોનોમિસ્ટ સંપર્ક માહિતી',
          blogUpdates: 'બ્લોગ અને અપડેટ્સ',
        },
      },
      implinks: {
        title: 'મહત્વપૂર્ણ લિંક્સ / ઉપયોગી સ્ત્રોતો',
        summary: 'સ્ત્રોતો',
        items: { usefulLinks: 'ઉપયોગી લિંક્સ અને સ્ત્રોતો' },
        figcaption: 'મહત્વપૂર્ણ લિંક્સ / ઉપયોગી સ્ત્રોતો',
      },
      footer: {
        sourcePrefix: 'સ્ત્રોત:',
        sourceName: 'પાક જ્ઞાન પોર્ટલ —',
        sourceLinkText: 'cropknowledge.my.canva.site/crop-knowledge-portal',
      },
      misc: { backToTop: 'ઉપર જાઓ' },
    },
  },
  kn: {
    portalName: 'ಬೆಳೆ ಜ್ಞಾನ',
    categories: {
      fruits: 'ಹಣ್ಣುಗಳು',
      grains: 'ಧಾನ್ಯಗಳು',
      vegetables: 'ತರಕಾರಿಗಳು',
      spices: 'ಮಸಾಲೆಗಳು',
      flowers: 'ಹೂವುಗಳು',
      cashCrops: 'ನಗದು ಬೆಳೆಗಳು',
      oilSeeds: 'ಎಣ್ಣೆ ಬೀಜಗಳು',
      pulses: 'ಪಲ್ಸ್‌ಗಳು',
      plantationCrops: 'ತೋಟ ಬೆಳೆಗಳು',
    },
    cropNames: {
      tomato: 'ಟೊಮೇಟೊ',
      potato: 'ಆಲೂಗಡ್ಡೆ',
      okra: 'ಬೆಂಡೆಕಾಯಿ',
      brinjal: 'ಬದನೆಕಾಯಿ',
      cabbage: 'ಎಲೆಕೋಸು',
      cauliflower: 'ಹೂಕೋಸು',
      capsicum: 'ಕ್ಯಾಪ್ಸಿಕಂ',
      cucumber: 'ಸೌತೆಕಾಯಿ',
      onion: 'ಈರುಳ್ಳಿ',
      greenChilli: 'ಹಸಿ ಮೆಣಸಿನಕಾಯಿ',
      greenPea: 'ಹಸಿರು ಬಟಾಣಿ',
      mango: 'ಮಾವು',
      banana: 'ಬಾಳೆಹಣ್ಣು',
      apple: 'ಸೇಬು',
      grapes: 'ದ್ರಾಕ್ಷಿ',
      guava: 'ಪೇರಲೆ',
      lemon: 'ನಿಂಬೆಹಣ್ಣು',
      watermelon: 'ಕಲ್ಲಂಗಡಿ',
      muskmelon: 'ಕರ್ಬೂಜ',
      papaya: 'ಪಪ್ಪಾಯಿ',
      custardApple: 'ಸೀತಾಫಲ',
      dragonFruit: 'ಡ್ರ್ಯಾಗನ್ ಹಣ್ಣು',
      strawberry: 'ಸ್ಟ್ರಾಬೆರಿ',
      // Grains
      Rice: 'ಅಕ್ಕಿ',
      Wheat: 'ಗೋಧಿ',
      Maize: 'ಮೆಕ್ಕೆಜೋಳ',
      Bajra: 'ಸಜ್ಜೆ',
      // Spices
      coriander: 'ಕೊತ್ತಂಬರಿ',
      Cumin: 'ಜೀರಿಗೆ',
      garlic: 'ಬೆಳ್ಳುಳ್ಳಿ',
      ginger: 'ಶುಂಠಿ',
      DryChilli: 'ಒಣ ಮೆಣಸಿನಕಾಯಿ',
      turmeric: 'ಅರಿಶಿನ',
      // Flowers
      marigold: 'ಚೆಂಡು ಹೂವು',
      rose: 'ಗುಲಾಬಿ',
      chrysanthemum: 'ಸೇವಂತಿಗೆ',
      // Cash Crops
      cotton: 'ಹತ್ತಿ',
      sugarcane: 'ಕಬ್ಬು',
      ratoonSugarcane: 'ರಾಟೂನ್ ಕಬ್ಬು',
      // Oil Seeds
      castor: 'ಹರಳೆಣ್ಣೆ',
      mustard: 'ಸಾಸಿವೆ',
      sesame: 'ಎಳ್ಳು',
      groundnut: 'ಕಡಲೆಕಾಯಿ',
      soyabeen: 'ಸೋಯಾಬೀನ್',
      // Pulses
      bengalGram: 'ಕಡಲೆ',
      blackGram: 'ಉದ್ದಿನ ಬೇಳೆ',
      greenGram: 'ಹೆಸರಿಬೇಳೆ',
      lentil: 'ಮಸೂರ ಬೇಳೆ',
      redGram: 'ತೊಗರಿ ಬೇಳೆ',
      // Plantation Crops
      coffee: 'ಕಾಫಿ',
      tea: 'ಚಹಾ',
      rubber: 'ರಬ್ಬರ್',
      coconut: 'ತೆಂಗಿನಕಾಯಿ',
    },
    language: 'ಭಾಷೆ',
    viewAll: 'ಎಲ್ಲವನ್ನೂ ನೋಡಿ',
    home: {
      heroTitle: 'ಜೈನ್ ಅವರ ಬೆಳೆ ಜ್ಞಾನಕ್ಕೆ ಸ್ವಾಗತ',
      heroSubtitle: 'ಜೀವನಗಳನ್ನು ರೂಪಿಸುವುದು; ಸಮೃದ್ಧಿಯನ್ನು ಹೆಚ್ಚಿಸುವುದು.',
    },
    report: {
      navTitle: 'ನಾವಿಗೇಷನ್',
      nav: {
        cropBasics: 'ಬೆಳೆ ಆಧಾರಭೂತ ಮಾಹಿತಿ',
        soil: 'ಮಣ್ಣಿನ ಅವಶ್ಯಕತೆಗಳು',
        climate: 'ಹವಾಮಾನ & ಬಿತ್ತನೆ ಜಾಲ',
        varieties: 'ಜಾತಿಗಳು & ಬೀಜ ಆಯ್ಕೆ',
        seedRate: 'ಬೀಜ ಪ್ರಮಾಣ & ಅಂತರ',
        landPrep: 'ಜಮೀನು ತಯಾರಿ',
        nutrients: 'ಪೋಷಕಾಂಶಗಳು & ರಾಸಾಯನಿಕ ವೇಳಾಪಟ್ಟಿ',
        irrigation: 'ನೀರಾವರಿ & ನೀರು',
        pests: 'ಹಾನಿಕಾರಕ ಕೀಟಗಳು & ರೋಗಗಳು',
        weeds: 'ಕಳೆ ನಿಯಂತ್ರಣೆ',
        harvest: 'ಕೊಯ್ಯುವಿಕೆ & ಉತ್ಪಾದನೆ',
        postHarvest: 'ಕೊಯ್ಲಿನ ನಂತರ & ಸಂಗ್ರಹಣೆ',
        mandi: 'ಬಜಾರ್ & ಬೆಲೆ ಮಾರ್ಗದರ್ಶನ',
        schemes: 'ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು',
        education: 'ಶೈಕ್ಷಣಿಕ ವಿಷಯ',
        feedback: 'ಪ್ರತಿಕ್ರಿಯೆ & ವೈಯಕ್ತೀಕರಣೆ',
        implinks: 'ಮುಖ್ಯ ಲಿಂಕ್‌ಗಳು / ಉಪಯುಕ್ತ ಸಂಪನ್ಮೂಲಗಳು',
      },
      intro: {
        title: 'ಸ್ವಾಗತ',
        description:
          'ರೈತ ಸ್ನೇಹಿ ವರದಿ ಬೆಳೆ ಮಾಹಿತಿ, ಪದ್ಧತಿಗಳು ಮತ್ತು ಸಂಪನ್ಮೂಲಗಳನ್ನು ಸುಲಭವಾಗಿ ಹುಡುಕಲು ಸಹಾಯಮಾಡುತ್ತದೆ, ಉತ್ತಮ ನಿರ್ಧಾರಗಳು ಮತ್ತು ಫಲಿತಾಂಶಗಳಿಗಾಗಿ.',
      },
      cropBasics: {
        title: 'ಬೆಳೆ ಆಧಾರಭೂತ ಮಾಹಿತಿ',
        summary: 'ಆಧಾರಗಳು',
        items: {
          names: 'ವೈಜ್ಞಾನಿಕ ಮತ್ತು ಸಾಮಾನ್ಯ ಹೆಸರುಗಳು',
          growthCycle: 'ವೃದ್ಧಿ ಚಕ್ರ',
          climate: 'ಹವಾಮಾನ ಅವಶ್ಯಕತೆಗಳು',
          calendar: 'ಬೆಳೆ ಕ್ಯಾಲೆಂಡರ್',
        },
        figcaption: 'ಬೆಳೆ ಮೂಲ ಮಾಹಿತಿ',
      },
      soil: {
        title: 'ಮಣ್ಣಿನ ಅವಶ್ಯಕತೆಗಳು',
        summary: 'ಮಣ್ಣು',
        items: {
          soilType: 'ಮಣ್ಣಿನ ವಿಧ & ಜಾಡ್ಯ',
          phRange: 'pH ವ್ಯಾಪ್ತಿ',
          drainage: 'ಡ್ರೈನೇಜ್/ನೀರಿನ ಹರಿವು',
          tests: 'ಮಣ್ಣಿನ ಪರೀಕ್ಷೆ & ಶಿಫಾರಸುಗಳು',
        },
        figcaption: 'ಮಣ್ಣಿನ ಅಗತ್ಯಗಳು & ಪರೀಕ್ಷೆಗಳು',
      },
      climate: {
        title: 'ಹವಾಮಾನ & ಬಿತ್ತನೆ ಜಾಲ',
        summary: 'ಹವಾಮಾನ',
        items: {
          requirements: 'ತಾಪಮಾನ/ಮಳೆ ಅವಶ್ಯಕತೆಗಳು',
          sowingTime: 'ಬಿತ್ತನೆ ಸಮಯ',
          methods: 'ಬಿತ್ತನೆ ವಿಧಾನಗಳು',
        },
        figcaption: 'ಹವಾಮಾನ & ಬಿತ್ತನೆ',
      },
      varieties: {
        title: 'ಜಾತಿಗಳು & ಬೀಜ ಆಯ್ಕೆ',
        summary: 'ಬೀಜ',
        items: {
          localVarieties: 'ಸ್ಥಳ ವಿಶೇಷ/ಶಿಫಾರಸು ಮಾಡಿದ ಜಾತಿಗಳು',
          daysToMaturity: 'ಪಾಕಕ್ಕೆ ಬೇಕಾಗುವ ದಿನಗಳು',
          purityQuality: 'ಬೀಜದ ಶುದ್ಧತೆ & ಗುಣಮಟ್ಟ',
          certifiedSources: 'ಪ್ರಮಾಣಿತ ಬೀಜ ಮೂಲಗಳು',
        },
      },
      seedRate: {
        title: 'ಬೀಜ ಪ್ರಮಾಣ & ಅಂತರ',
        summary: 'ಬಲವಾದ ಮೊಳಕೆ',
        items: {
          seedRate: 'ಪ್ರತಿ ಹೆಕ್ಟೇರ್/ಏಕರೆಗೆ ಬೀಜ ಪ್ರಮಾಣ',
          rowSpacing: 'ವರಿ ಅಂತರ',
          population: 'ಗಿಡಗಳ ಸಂಖ್ಯಾ ಗುರಿ',
          depth: 'ಬಿತ್ತನೆ/ನೆಡುವ ಆಳ',
        },
        figcaption: 'ಬೀಜ ಪ್ರಮಾಣ, ಅಂತರ, ಜನಸಂಖ್ಯೆ & ಆಳ',
      },
      landPrep: {
        title: 'ಜಮೀನು ತಯಾರಿ',
        summary: 'ತಯಾರಿ',
        items: {
          tillageOps: 'ಟಿಲ್ಲೇಜ್/ಕೊಳಲ್ ಕಾರ್ಯಗಳ ಸಂಖ್ಯೆ',
          levelingBeds: 'ಲೆವೆಲಿಂಗ್/ಬೆಡ್ ತಯಾರಿ ಅಗತ್ಯ',
          smallLargeFields: 'ಸಣ್ಣ/ದೊಡ್ಡ ಗದ್ದೆಗಳಿಗೆ ಸಲಹೆಗಳು',
          residueMgmt: 'ಅವಶೇಷ ನಿರ್ವಹಣೆ',
        },
        figcaption: 'ಜಮೀನು ತಯಾರಿ ಹಂತಗಳು',
      },
      nutrients: {
        title: 'ಪೋಷಕಾಂಶಗಳು & ರಾಸಾಯನಿಕ ವೇಳಾಪಟ್ಟಿ',
        summary: 'ರಾಸಾಯನಿಕ',
        items: {
          macroMicro: 'ಮ್ಯಾಕ್ರೋ/ಮೈಕ್ರೋ ಪೋಷಕ ಅಗತ್ಯಗಳು',
          stageSchedule: 'ಹಂತವಾರು ರಾಸಾಯನಿಕ ವೇಳಾಪಟ್ಟಿ & ಪ್ರಮಾಣ',
          formulations: 'ಸಾಮಾನ್ಯ ರಾಸಾಯನಿಕ ಮಿಶ್ರಣಗಳು',
          soilTestAdjust: 'ಮಣ್ಣಿನ ಪರೀಕ್ಷೆಯ ಆಧಾರವಾಗಿ ಪ್ರಮಾಣ ಸರಿಹೊಂದಿಕೆ',
          safetyPpe: 'ಭದ್ರತೆ & PPE',
        },
      },
      irrigation: {
        title: 'ನೀರಾವರಿ ವೇಳಾಪಟ್ಟಿ & ನೀರು ನಿರ್ವಹಣೆ',
        summary: 'ನೀರು ಯೋಜನೆ',
        items: {
          criticalStages: 'ನೀರಾವರಿಗೆ ಮುಖ್ಯ ಹಂತಗಳು',
          method: 'ವಿಧಾನ: ಫ್ಲಡ್, ಡ್ರಿಪ್, ಸ್ಪ್ರಿಂಕ್ಲರ್',
          waterNeeds: 'ಹಂತವಾರು ನೀರಿನ ಅಗತ್ಯ',
        },
        figcaption: 'ನೀರಾವರಿ & ನೀರು',
      },
      pests: {
        title: 'ಹಾನಿಕಾರಕ ಕೀಟಗಳು & ರೋಗಗಳು',
        summary: 'ರಕ್ಷಣೆ',
        items: {
          common: 'ಸಾಮಾನ್ಯ ಕೀಟ/ರೋಗಗಳು & ಲಕ್ಷಣಗಳು',
          lifecycle: 'ಜೀವಚಕ್ರ ಟಿಪ್ಪಣಿಗಳು',
          control: 'ಜೈವಿಕ & ರಾಸಾಯನಿಕ ನಿಯಂತ್ರಣ',
          safeChemicals: 'ಸುರಕ್ಷಿತ ರಾಸಾಯನಿಕಗಳು (ಪ್ರಮಾಣ, PHI)',
          protectiveMeasures: 'ರಕ್ಷಣಾತ್ಮಕ ಕ್ರಮಗಳು',
        },
        figcaption: 'ಕೀಟಗಳು & ರೋಗಗಳು',
      },
      weeds: {
        title: 'ಕಳೆ ನಿಯಂತ್ರಣೆ',
        summary: 'ನಿಯಂತ್ರಣೆ',
        items: {
          common: 'ಸಾಮಾನ್ಯ ಕಳೆಗಳು',
          culturalMechanical: 'ಸಾಂಸ್ಕೃತಿಕ & ಯಾಂತ್ರಿಕ ನಿಯಂತ್ರಣ',
          herbicides: 'ಶಿಫಾರಸು ಮಾಡಿದ ಹರ್ಬಿಸೈಡ್‌ಗಳು & ಸಮಯ',
          prevention: 'ತಡೆಗಟ್ಟುವ ಸಲಹೆಗಳು',
        },
        figcaption: 'ಕಳೆಗಳು',
      },
      harvest: {
        title: 'ಕೊಯ್ಯುವಿಕೆ & ಉತ್ಪಾದನೆ',
        summary: 'ಉತ್ಪಾದನೆ',
        items: {
          maturityIndicators: 'ಪಾಕ ಸೂಚಕಗಳು',
          techniques: 'ಕೊಯ್ಯುವಿಕೆ ವಿಧಾನಗಳು',
          threshingDrying: 'ತೊಳೆದು & ಒಣಗಿಸುವಿಕೆ',
          expectedYield: 'ಸ್ಥಿತಿಯ ಆಧಾರದ ಮೇಲೆ ನಿರೀಕ್ಷಿತ ಉತ್ಪಾದನೆ',
        },
        figcaption: 'ಕೊಯ್ಯುವಿಕೆ & ಉತ್ಪಾದನೆ',
      },
      postHarvest: {
        title: 'ಕೊಯ್ಲಿನ ನಂತರ & ಸಂಗ್ರಹಣೆ',
        summary: 'ಸಂಗ್ರಹಣೆ',
        items: {
          handlingCleaning: 'ಕೊಯ್ಲಿನ ನಂತರ ಹ್ಯಾಂಡ್ಲಿಂಗ್ & ಕ್ಲೀನಿಂಗ್',
          dryingTargets: 'ಒಣಗಿಸುವ ಆರ್ದ್ರತೆ ಗುರಿಗಳು',
          storageOptions: 'ಸಂಗ್ರಹಣಾ ಆಯ್ಕೆಗಳು/ಕಂಟೇನರ್‌ಗಳು',
          preventionStorage: 'ಸಂಗ್ರಹಣದಲ್ಲಿ ಕೀಟ/ಹುಳು ತಡೆಗಟ್ಟಿಕೆ',
          valueAdded: 'ಮೌಲ್ಯವರ್ಧಿತ ಪ್ರಕ್ರಿಯೆ ಆಯ್ಕೆಗಳು',
        },
      },
      mandi: {
        title: 'ಬಜಾರ್ & ಬೆಲೆ ಮಾರ್ಗದರ್ಶನ',
        summary: 'ಮಾರ್ಗದರ್ಶನ',
        items: {
          currentPrices: 'ಪ್ರಸ್ತುತ ಮಂಡಿ ಬೆಲೆಗಳು (ಪ್ರದೇಶ)',
          trends: 'ಬೆಲೆ ಪ್ರವೃತ್ತಿಗಳು',
          gradingQuality: 'ಗ್ರೇಡಿಂಗ್/ಗುಣಮಟ್ಟ ಅಂಶಗಳು',
          accessStrategies: 'ಮಾರ್ಕೆಟ್ ಪ್ರವೇಶ ತಂತ್ರಗಳು',
          transportPacking: 'ಸಾರಿಗೆ & ಪ್ಯಾಕಿಂಗ್ ಸಲಹೆಗಳು',
        },
        figcaption: 'ಬಜಾರ್ & ಬೆಲೆ ಮಾರ್ಗದರ್ಶನ',
      },
      schemes: {
        title: 'ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು & ಅನುದಾನ',
        summary: 'ಸಹಾಯ',
        items: {
          available: 'ಲಭ್ಯ ಯೋಜನೆಗಳು ಮತ್ತು ಅನುದಾನ',
          regulatory: 'ಲೇಬಲ್ & ನಿಯಂತ್ರಣ ಟಿಪ್ಪಣಿಗಳು',
          applicationLinks: 'ಅರ್ಜಿ ಲಿಂಕುಗಳು ಅಥವಾ ಸಮೀಪದ ಕಚೇರಿ',
        },
      },
      education: {
        title: 'ಶೈಕ್ಷಣಿಕ ವಿಷಯ & ಚಿಕ್ಕ ವೀಡಿಯೊಗಳು',
        summary: 'ಅಭ್ಯಾಸ',
        items: {
          howToVideos: 'ಬಿತ್ತನೆ/ನೆಡುವಿಕೆ ಹೇಗೆ — ವೀಡಿಯೊಗಳು',
          safeHandling: 'ಸ್ಪ್ರೇ, ಡ್ರಿಪ್ ಇನ್ಸ್ಟಾಲೇಶನ್, ಸುರಕ್ಷಿತ ಹ್ಯಾಂಡ್ಲಿಂಗ್',
        },
      },
      feedback: {
        title: 'ಪ್ರತಿಕ್ರಿಯೆ & ವೈಯಕ್ತೀಕರಣೆ',
        summary: 'ಪಾಲ್ಗೊಳ್ಳಿಕೆ',
        items: {
          agronomistContact: 'ಅಗ್ರೊನಾಮಿಸ್ಟ್ ಸಂಪರ್ಕ ಮಾಹಿತಿ',
          blogUpdates: 'ಬ್ಲಾಗ್ & ಅಪ್‌ಡೇಟುಗಳು',
        },
      },
      implinks: {
        title: 'ಮುಖ್ಯ ಲಿಂಕ್‌ಗಳು / ಉಪಯುಕ್ತ ಸಂಪನ್ಮೂಲಗಳು',
        summary: 'ಸಂಪನ್ಮೂಲಗಳು',
        items: { usefulLinks: 'ಉಪಯುಕ್ತ ಲಿಂಕ್‌ಗಳು & ಸಂಪನ್ಮೂಲಗಳು' },
        figcaption: 'ಮುಖ್ಯ ಲಿಂಕ್‌ಗಳು / ಉಪಯುಕ್ತ ಸಂಪನ್ಮೂಲಗಳು',
      },
      footer: {
        sourcePrefix: 'ಮೂಲ:',
        sourceName: 'ಕ್ರಾಪ್ ನೊಲೇಜ್ ಪೋರ್ಟಲ್ —',
        sourceLinkText: 'cropknowledge.my.canva.site/crop-knowledge-portal',
      },
      misc: { backToTop: 'ಮೇಲಕ್ಕೆ ಹೋಗಿ' },
    },
  },
  ml: {
    portalName: 'വിള അറിവ്',
    categories: {
      fruits: 'ഫലങ്ങൾ',
      grains: 'ധാന്യങ്ങൾ',
      vegetables: 'പച്ചക്കറികൾ',
      spices: 'മസാലകൾ',
      flowers: 'പുഷ്പങ്ങൾ',
      cashCrops: 'നഗദ വിളകൾ',
      oilSeeds: 'എണ്ണ വിത്തുകൾ',
      pulses: 'പയർവർഗ്ഗങ്ങൾ',
      plantationCrops: 'തോട്ടവിളകൾ',
    },
    cropNames: {
      tomato: 'തക്കാളി',
      potato: 'ഉരുളക്കിഴങ്ങ്',
      okra: 'വെണ്ടക്ക',
      brinjal: 'വഴുതന',
      cabbage: 'കാബേജ്',
      cauliflower: 'കോളിഫ്ലവർ',
      capsicum: 'ക്യാപ്സിക്കം',
      cucumber: 'വെള്ളരി',
      onion: 'ഉള്ളി',
      greenChilli: 'പച്ചമുളക്',
      greenPea: 'പച്ച പയർ',
      mango: 'മാമ്പഴം',
      banana: 'വാഴപ്പഴം',
      apple: 'ആപ്പിൾ',
      grapes: 'മുന്നിരി',
      guava: 'പേരയ്ക്ക',
      lemon: 'നാരങ്ങ',
      watermelon: 'തണ്ണിമത്തൻ',
      muskmelon: 'മസ്ക്മെലൺ',
      papaya: 'പപ്പായ',
      custardApple: 'സീതപ്പഴം',
      dragonFruit: 'ഡ്രാഗൺ ഫ്രൂട്ട്',
      strawberry: 'സ്ട്രോബെറി',
      // Grains
      Rice: 'അരി',
      Wheat: 'ഗോതമ്പ്',
      Maize: 'മക്ക',
      Bajra: 'കമ്പ്',
      // Spices
      coriander: 'മല്ലി',
      Cumin: 'ജീരകം',
      garlic: 'വെളുത്തുള്ളി',
      ginger: 'ഇഞ്ചി',
      DryChilli: 'ഉണക്കമുളക്',
      turmeric: 'മഞ്ഞൾ',
      // Flowers
      marigold: 'ചെണ്ടു',
      rose: 'റോസ്',
      chrysanthemum: 'ചെണ്ടുമല്ലി',
      // Cash Crops
      cotton: 'പരുത്തി',
      sugarcane: 'കുറുമ്പ്',
      ratoonSugarcane: 'റാറ്റൂൺ കരിമ്പ്',
      // Oil Seeds
      castor: 'അമണക്ക്',
      mustard: 'കടുക്',
      sesame: 'എള്ള്',
      groundnut: 'നിലക്കടല',
      soyabeen: 'സോയാബീൻ',
      // Pulses
      bengalGram: 'കടല',
      blackGram: 'ഉഴുന്ന്',
      greenGram: 'പയർ',
      lentil: 'മസൂർ',
      redGram: 'തുവര',
      // Plantation Crops
      coffee: 'കാഫി',
      tea: 'ചായ',
      rubber: 'റബ്ബർ',
      coconut: 'തേങ്ങ',
    },
    language: 'ഭാഷ',
    viewAll: 'എല്ലാം കാണുക',
    home: {
      heroTitle: 'ജെയ്നിന്റെ കൃഷി വിജ്ഞാനത്തിലേക്ക് സ്വാഗതം',
      heroSubtitle: 'ജീവിതം മാറ്റി; സമൃദ്ധി വർധിപ്പിക്കുന്നു.',
    },
    report: {
      navTitle: 'നാവിഗേഷൻ',
      nav: {
        cropBasics: 'വിളയുടെ അടിസ്ഥാന വിവരങ്ങൾ',
        soil: 'മണ്ണിന്റെ ആവശ്യകതകൾ',
        climate: 'കാലാവസ്ഥ & വിത്തിടൽ ജാലകം',
        varieties: 'ജാതികളും വിത്ത് തിരഞ്ഞെടുപ്പും',
        seedRate: 'വിത്ത് നിരക്ക് & ഇടവിട',
        landPrep: 'ഭൂമി തയ്യാറാക്കൽ',
        nutrients: 'പോഷകങ്ങൾ & വള പട്ടിക',
        irrigation: 'ജലസേചനം & വെള്ളം',
        pests: 'കീടങ്ങളും രോഗങ്ങളും',
        weeds: 'കൊടികൾ നിയന്ത്രണം',
        harvest: 'വിളവെടുപ്പ് & ഉൽപാദനം',
        postHarvest: 'വിളവെടുപ്പിനു ശേഷം & സംഭരണം',
        mandi: 'മാർക്കറ്റ് & വില മാർഗ്ഗനിർദ്ദേശം',
        schemes: 'സർക്കാർ പദ്ധതികൾ',
        education: 'വിദ്യാഭ്യാസ സാമഗ്രികൾ',
        feedback: 'ഫീഡ്ബാക്ക് & വ്യക്തിഗതീകരണം',
        implinks: 'പ്രധാന ലിങ്കുകൾ / ഉപകാരപ്രദമായ സ്രോതസ്സുകൾ',
      },
      intro: {
        title: 'സ്വാഗതം',
        description:
          'കർഷക സുഹൃദ് റിപ്പോർട്ട്, വിള വിവരങ്ങൾ, പ്രാക്ടീസുകൾ, സ്രോതസ്സുകൾ എന്നിവ എളുപ്പത്തിൽ കണ്ടെത്താൻ സഹായിക്കുന്നു, മെച്ചപ്പെട്ട തീരുമാനങ്ങളും ഫലങ്ങളും നേടാൻ.',
      },
      cropBasics: {
        title: 'വിളയുടെ അടിസ്ഥാന വിവരങ്ങൾ',
        summary: 'അടിസ്ഥാനങ്ങൾ',
        items: {
          names: 'ശാസ്ത്രീയവും സാധാരണ പേരുകളും',
          growthCycle: 'വളർച്ച ചക്രം',
          climate: 'കാലാവസ്ഥ ആവശ്യകതകൾ',
          calendar: 'വിള കലണ്ടർ',
        },
        figcaption: 'വിള അടിസ്ഥാന വിവരം',
      },
      soil: {
        title: 'മണ്ണിന്റെ ആവശ്യകതകൾ',
        summary: 'മണ്ണ്',
        items: {
          soilType: 'മണ്ണിന്റെ തരം & ഘടന',
          phRange: 'pH പരിധി',
          drainage: 'ഡ്രെയിനേജ്/വെള്ള ഒഴുക്ക്',
          tests: 'മണ്ണ് പരിശോധന & പരിഹാരങ്ങൾ',
        },
        figcaption: 'മണ്ണ് ആവശ്യകതകളും പരിശോധനകളും',
      },
      climate: {
        title: 'കാലാവസ്ഥ & വിത്തിടൽ ജാലകം',
        summary: 'കാലാവസ്ഥ',
        items: {
          requirements: 'താപനില/മഴ ആവശ്യകതകൾ',
          sowingTime: 'വിത്തിടൽ സമയം',
          methods: 'വിത്തിടൽ രീതികൾ',
        },
        figcaption: 'കാലാവസ്ഥ & വിത്തിടൽ',
      },
      varieties: {
        title: 'ജാതികളും വിത്ത് തിരഞ്ഞെടുപ്പും',
        summary: 'വിത്ത്',
        items: {
          localVarieties: 'സ്ഥലം-വിശേഷ/ശുപാർശ ചെയ്ത ജാതികൾ',
          daysToMaturity: 'പാകാൻ വേണ്ട ദിവസങ്ങൾ',
          purityQuality: 'വിത്തിന്റെ ശുദ്ധി & ഗുണനിലവാരം',
          certifiedSources: 'സർട്ടിഫൈഡ് വിത്ത് ഉറവിടങ്ങൾ',
        },
      },
      seedRate: {
        title: 'വിത്ത് നിരക്ക് & ഇടവിട',
        summary: 'ശക്തമായ മുളയ്ക്കൽ',
        items: {
          seedRate: 'ഹെക്ടർ/ഏക്കർ പ്രതി വിത്ത് നിരക്ക്',
          rowSpacing: 'വരി ഇടവിട',
          population: 'ചെടികളുടെ എണ്ണം ലക്ഷ്യം',
          depth: 'വിത്തിടൽ/തൈ നടീൽ ആഴം',
        },
        figcaption: 'വിത്ത് നിരക്ക്, ഇടവിട, എണ്ണം & ആഴം',
      },
      landPrep: {
        title: 'ഭൂമി തയ്യാറാക്കൽ',
        summary: 'തയ്യാറെടുപ്പ്',
        items: {
          tillageOps: 'ടില്ലേജ്/കൊള്ളൽ പ്രവർത്തനങ്ങളുടെ എണ്ണം',
          levelingBeds: 'ലെവലിംഗ്/ബെഡ് തയ്യാറാക്കൽ ആവശ്യം',
          smallLargeFields: 'ചെറിയ/വലിയ വയലുകൾക്ക് നിർദ്ദേശങ്ങൾ',
          residueMgmt: 'അവശിഷ്ട മാനേജ്മെന്റ്',
        },
        figcaption: 'ഭൂമി തയ്യാറാക്കൽ ഘട്ടങ്ങൾ',
      },
      nutrients: {
        title: 'പോഷകങ്ങൾ & വള പട്ടിക',
        summary: 'വള',
        items: {
          macroMicro: 'മാക്രോ/മൈക്രോ പോഷക ആവശ്യകതകൾ',
          stageSchedule: 'ഘട്ടാനുസൃത വള ഷെഡ്യൂൾ & ഡോസ്',
          formulations: 'സാധാരണ വള മിശ്രിതങ്ങൾ',
          soilTestAdjust: 'മണ്ണ് പരിശോധനപ്രകാരം ഡോസ് ക്രമീകരണം',
          safetyPpe: 'സുരക്ഷ & PPE',
        },
      },
      irrigation: {
        title: 'ജലസേചന ഷെഡ്യൂൾ & വെള്ളം മാനേജ്മെന്റ്',
        summary: 'വെള്ളം പദ്ധതി',
        items: {
          criticalStages: 'ജലസേചനത്തിന് നിർണായക ഘട്ടങ്ങൾ',
          method: 'രീതി: ഫ്‌ളഡ്, ഡ്രിപ്പ്, സ്പ്രിങ്ക്ലർ',
          waterNeeds: 'ഘട്ടാനുസൃത വെള്ളം ആവശ്യകത',
        },
        figcaption: 'ജലസേചനം & വെള്ളം',
      },
      pests: {
        title: 'കീടങ്ങളും രോഗങ്ങളും',
        summary: 'സംരക്ഷണം',
        items: {
          common: 'പോതുവായ കീടങ്ങൾ/രോഗങ്ങളും ലക്ഷണങ്ങളും',
          lifecycle: 'ജീവചരിത്ര കുറിപ്പുകൾ',
          control: 'ജൈവ & രാസ നിയന്ത്രണം',
          safeChemicals: 'സുരക്ഷിത രാസങ്ങൾ (ഡോസ്, PHI)',
          protectiveMeasures: 'സംരക്ഷണ നടപടികൾ',
        },
        figcaption: 'കീടങ്ങളും രോഗങ്ങളും',
      },
      weeds: {
        title: 'കൊടികൾ നിയന്ത്രണം',
        summary: 'നിയന്ത്രണം',
        items: {
          common: 'പോതുവായ കൊടികൾ',
          culturalMechanical: 'സാംസ്കാരിക & യാന്ത്രിക നിയന്ത്രണം',
          herbicides: 'ശുപാർശ ചെയ്ത ഹർബിസൈഡുകളും സമയം',
          prevention: 'പ്രതിരോധ നിർദ്ദേശങ്ങൾ',
        },
        figcaption: 'കൊടികൾ',
      },
      harvest: {
        title: 'വിളവെടുപ്പ് & ഉൽപാദനം',
        summary: 'വിളവ് & കറ്റ',
        items: {
          maturityIndicators: 'പാകം തിരിച്ചറിയുന്ന സൂചനകൾ',
          techniques: 'വിളവെടുപ്പ് രീതികൾ',
          threshingDrying: 'തെളിച്ച് & ഉണക്കൽ',
          expectedYield: 'സ്ഥിതിക്കനുസരിച്ചുള്ള പ്രതീക്ഷിച്ച വിളവ്',
        },
        figcaption: 'വിളവെടുപ്പ് & ഉൽപാദനം',
      },
      postHarvest: {
        title: 'വിളവെടുപ്പിനു ശേഷം & സംഭരണം',
        summary: 'സംഭരണം',
        items: {
          handlingCleaning: 'വിളവെടുപ്പിനു ശേഷം കൈകാര്യം & ശുചീകരണം',
          dryingTargets: 'ഉണക്കൽ ഈർപ്പ് ലക്ഷ്യങ്ങൾ',
          storageOptions: 'സംഭരണ ഓപ്ഷനുകൾ/കണ്ടെയ്‌നറുകൾ',
          preventionStorage: 'സംഭരണത്തിൽ കീട/ഫംഗസ് പ്രതിരോധം',
          valueAdded: 'മൂല്യവർദ്ധിത പ്രോസസ്സിംഗ് ആശയങ്ങൾ',
        },
      },
      mandi: {
        title: 'മാർക്കറ്റ് & വില മാർഗ്ഗനിർദ്ദേശം',
        summary: 'മാർഗ്ഗനിർദ്ദേശം',
        items: {
          currentPrices: 'പ്രദേശാനുസൃത നിലവിലെ മണ്ടി വിലകൾ',
          trends: 'വില പ്രവണതകൾ',
          gradingQuality: 'ഗ്രേഡിംഗ്/ഗുണമേന്മാ ഘടകങ്ങൾ',
          accessStrategies: 'മാർക്കറ്റ് പ്രവേശന തന്ത്രങ്ങൾ',
          transportPacking: 'ഗതാഗതം & പാക്കിങ് നിർദ്ദേശങ്ങൾ',
        },
        figcaption: 'മാർക്കറ്റ് & വില മാർഗ്ഗനിർദ്ദേശം',
      },
      schemes: {
        title: 'സർക്കാർ പദ്ധതികൾ & സബ്സിഡികൾ',
        summary: 'സഹായം',
        items: {
          available: 'ലഭ്യമായ പദ്ധതികളും സബ്സിഡികളും',
          regulatory: 'ലേബൽ & നിയമപരമായ കുറിപ്പുകൾ',
          applicationLinks: 'അപേക്ഷ ലിങ്കുകൾ അല്ലെങ്കിൽ സമീപ ഓഫീസ്',
        },
      },
      education: {
        title: 'വിദ്യാഭ്യാസ സാമഗ്രികളും ചെറിയ വീഡിയോകൾ',
        summary: 'പഠനം',
        items: {
          howToVideos: 'വിത്തിടൽ/തൈ നടീൽ — എങ്ങനെ വീഡിയോ',
          safeHandling: 'സ്പ്രേ, ഡ്രിപ്പ് ഇൻസ്റ്റലേഷൻ, സുരക്ഷിത ഹാൻഡ്ലിംഗ്',
        },
      },
      feedback: {
        title: 'ഫീഡ്ബാക്ക് & വ്യക്തിഗതീകരണം',
        summary: 'പങ്കാളിത്തം',
        items: {
          agronomistContact: 'അഗ്രോണമിസ്റ്റ് ബന്ധപ്പെടുക',
          blogUpdates: 'ബ്ലോഗ് & അപ്ഡേറ്റുകൾ',
        },
      },
      implinks: {
        title: 'പ്രധാന ലിങ്കുകൾ / ഉപകാരപ്രദമായ സ്രോതസ്സുകൾ',
        summary: 'സ്രോതസ്സുകൾ',
        items: { usefulLinks: 'ഉപകാരപ്രദമായ ലിങ്കുകളും സ്രോതസ്സുകളും' },
        figcaption: 'പ്രധാന ലിങ്കുകൾ / ഉപകാരപ്രദമായ സ്രോതസ്സുകൾ',
      },
      footer: {
        sourcePrefix: 'സ്രോതസ്സ്:',
        sourceName: 'ക്രോപ്പ് നോളഡ്ജ് പോർട്ടൽ —',
        sourceLinkText: 'cropknowledge.my.canva.site/crop-knowledge-portal',
      },
      misc: { backToTop: 'മുകളിൽ പോകുക' },
    },
  },
  pa: {
    portalName: 'ਫਸਲ ਗਿਆਨ',
    categories: {
      fruits: 'ਫਲ',
      grains: 'ਅਨਾਜ',
      vegetables: 'ਸਬਜ਼ੀਆਂ',
      spices: 'ਮਸਾਲੇ',
      flowers: 'ਫੁੱਲ',
      cashCrops: 'ਨਕਦੀ ਫਸਲਾਂ',
      oilSeeds: 'ਤੈਲ ਬੀਜ',
      pulses: 'ਦਾਲਾਂ',
      plantationCrops: 'ਬਾਗਬਾਨੀ ਫਸਲਾਂ',
    },
    cropNames: {
      tomato: 'ਟਮਾਟਰ',
      potato: 'ਆਲੂ',
      okra: 'ਭਿੰਡੀ',
      brinjal: 'ਬੈਂਗਣ',
      cabbage: 'ਪੱਤਾ ਗੋਭੀ',
      cauliflower: 'ਫੂਲ ਗੋਭੀ',
      capsicum: 'ਸ਼ਿਮਲਾ ਮਿਰਚ',
      cucumber: 'ਖੀਰਾ',
      onion: 'ਪਿਆਜ਼',
      greenChilli: 'ਹਰੀ ਮਿਰਚ',
      greenPea: 'ਹਰਾ ਮਟਰ',
      mango: 'ਅੰਬ',
      banana: 'ਕੇਲਾ',
      apple: 'ਸੇਬ',
      grapes: 'ਅੰਗੂਰ',
      guava: 'ਅਮਰੂਦ',
      lemon: 'ਨਿੰਬੂ',
      watermelon: 'ਤਰਬੂਜ਼',
      muskmelon: 'ਖਰਬੂਜਾ',
      papaya: 'ਪਪੀਤਾ',
      custardApple: 'ਸੀਤਾਫਲ',
      dragonFruit: 'ਡਰੈਗਨ ਫਲ',
      strawberry: 'ਸਟ੍ਰਾਬੈਰੀ',
      // Grains
      Rice: 'ਚਾਵਲ',
      Wheat: 'ਗੈਹੂੰ',
      Maize: 'ਮੱਕੀ',
      Bajra: 'ਬਾਜਰਾ',
      // Spices
      coriander: 'ਧਨੀਆ',
      Cumin: 'ਜੀਰਾ',
      garlic: 'ਲਸਣ',
      ginger: 'ਅਦਰਕ',
      DryChilli: 'ਸੁੱਕੀ ਮਿਰਚ',
      turmeric: 'ਹਲਦੀ',
      // Flowers
      marigold: 'ਗੇਂਦਾ',
      rose: 'ਗੁਲਾਬ',
      chrysanthemum: 'ਗੁਲਦਾਵਦੀ',
      // Cash Crops
      cotton: 'ਕਪਾਹ',
      sugarcane: 'ਗੰਨਾ',
      ratoonSugarcane: 'ਰਟੂਨ ਗੰਨਾ',
      // Oil Seeds
      castor: 'ਅਰੰਡੀ',
      mustard: 'ਸਰੋਂ',
      sesame: 'ਤਿਲ',
      groundnut: 'ਮੂੰਗਫਲੀ',
      soyabeen: 'ਸੋਯਾਬੀਨ',
      // Pulses
      bengalGram: 'ਕਾਬਲੀ ਚਨਾ',
      blackGram: 'ਉਰਦ',
      greenGram: 'ਮੂੰਗ',
      lentil: 'ਮਸੂਰ',
      redGram: 'ਅਰਹਰ',
      // Plantation Crops
      coffee: 'ਕੌਫੀ',
      tea: 'ਚਾਹ',
      rubber: 'ਰਬੜ',
      coconut: 'ਨਾਰੀਅਲ',
    },
    language: 'ਭਾਸ਼ਾ',
    viewAll: 'ਸਭ ਵੇਖੋ',
    home: {
      heroTitle: 'ਜੈਨ ਦੇ ਫਸਲ ਗਿਆਨ ਵਿੱਚ ਤੁਹਾਡਾ ਸੁਆਗਤ ਹੈ',
      heroSubtitle: 'ਜੀਵਨ ਬਦਲਣਾ; ਖੁਸ਼ਹਾਲੀ ਵਧਾਉਣਾ।',
    },
    report: {
      navTitle: 'ਨੇਵੀਗੇਸ਼ਨ',
      nav: {
        cropBasics: 'ਫਸਲ ਦੇ ਮੁੱਢਲੇ ਜਾਣਕਾਰੀ',
        soil: 'ਮਿੱਟੀ ਦੀਆਂ ਲੋੜਾਂ',
        climate: 'ਮੌਸਮ & ਬੀਜਾਈ ਵਿੰਡੋ',
        varieties: 'ਕਿਸਮਾਂ & ਬੀਜ ਚੋਣ',
        seedRate: 'ਬੀਜ ਦਰ & ਫਾਸਲਾ',
        landPrep: 'ਜ਼ਮੀਨ ਤਿਆਰੀ',
        nutrients: 'ਪੋਸ਼ਕ & ਖਾਦ ਸਮਾਂਸੂਚੀ',
        irrigation: 'ਸਿੰਚਾਈ & ਪਾਣੀ',
        pests: 'ਕੀਟ & ਰੋਗ',
        weeds: 'ਘਾਸ-ਫੂਸ ਪ੍ਰਬੰਧਨ',
        harvest: 'ਕਟਾਈ & ਉਪਜ',
        postHarvest: 'ਕਟਾਈ ਤੋਂ ਬਾਅਦ & ਸਟੋਰੇਜ',
        mandi: 'ਬਾਜ਼ਾਰ & ਕੀਮਤ ਰਹਿਨੁਮਾ',
        schemes: 'ਸਰਕਾਰੀ ਯੋਜਨਾਵਾਂ',
        education: 'ਸ਼ਿਕਸ਼ਣ ਸਮੱਗਰੀ',
        feedback: 'ਫੀਡਬੈਕ & ਵਿਅਕਤੀਗਤ ਕਰਨ',
        implinks: 'ਮਹੱਤਵਪੂਰਨ ਲਿੰਕ / ਲਾਭਕਾਰੀ ਸਰੋਤ',
      },
      intro: {
        title: 'ਸਵਾਗਤ',
        description:
          'ਚਾਸ਼ੀ-ਦੋਸਤ ਰਿਪੋਰਟ ਜੋ ਫਸਲ ਜਾਣਕਾਰੀ, ਅਭਿਆਸ ਅਤੇ ਸਰੋਤਾਂ ਦੀ ਖੋਜ ਵਿੱਚ ਮਦਦ ਕਰਦੀ ਹੈ ਤਾਂ ਜੋ ਵਧੀਆ ਫੈਸਲੇ ਅਤੇ ਨਤੀਜੇ ਪ੍ਰਾਪਤ ਹੋਣ।',
      },
      cropBasics: {
        title: 'ਫਸਲ ਦੇ ਮੁੱਢਲੇ ਜਾਣਕਾਰੀ',
        summary: 'ਜ਼ਰੂਰੀ ਜਾਣਕਾਰੀ',
        items: {
          names: 'ਵਿਗਿਆਨਕ ਅਤੇ ਆਮ ਨਾਮ',
          growthCycle: 'ਵਿਕਾਸ ਚੱਕਰ',
          climate: 'ਮੌਸਮ ਲੋੜਾਂ',
          calendar: 'ਫਸਲੀ ਕੈਲੰਡਰ',
        },
        figcaption: 'ਫਸਲ ਦੇ ਮੁੱਢਲੇ ਤੱਥ',
      },
      soil: {
        title: 'ਮਿੱਟੀ ਦੀਆਂ ਲੋੜਾਂ',
        summary: 'ਮਿੱਟੀ',
        items: {
          soilType: 'ਮਿੱਟੀ ਦੀ ਕਿਸਮ & ਬਣਤਰ',
          phRange: 'pH ਸੀਮਾ',
          drainage: 'ਨਿਕਾਸ/ਪਾਣੀ ਦੀ ਚਲਹਟ',
          tests: 'ਮਿੱਟੀ ਟੈਸਟ & ਸੁਧਾਰ',
        },
        figcaption: 'ਮਿੱਟੀ ਲੋੜਾਂ & ਟੈਸਟ',
      },
      climate: {
        title: 'ਮੌਸਮ & ਬੀਜਾਈ ਵਿੰਡੋ',
        summary: 'ਮੌਸਮ',
        items: {
          requirements: 'ਤਾਪਮਾਨ/ਬਰਸਾਤ ਲੋੜਾਂ',
          sowingTime: 'ਬੀਜਾਈ ਦਾ ਸਮਾਂ',
          methods: 'ਬੀਜਾਈ ਦੇ ਤਰੀਕੇ',
        },
        figcaption: 'ਮੌਸਮ & ਬੀਜਾਈ',
      },
      varieties: {
        title: 'ਕਿਸਮਾਂ & ਬੀਜ ਚੋਣ',
        summary: 'ਬੀਜ',
        items: {
          localVarieties: 'ਥਾਂ-ਵਿਸ਼ੇਸ਼/ਸਿਫਾਰਸ਼ ਕੀਤੀਆਂ ਕਿਸਮਾਂ',
          daysToMaturity: 'ਪੱਕਣ ਦੇ ਦਿਨ',
          purityQuality: 'ਬੀਜ ਦੀ ਪਵਿੱਤਰਤਾ & ਗੁਣਵੱਤਾ',
          certifiedSources: 'ਪ੍ਰਮਾਣਿਤ ਬੀਜ ਸਰੋਤ',
        },
      },
      seedRate: {
        title: 'ਬੀਜ ਦਰ & ਫਾਸਲਾ',
        summary: 'ਮਜ਼ਬੂਤ ਅੰਕੁਰਣ',
        items: {
          seedRate: 'ਏਕੜ/ਹੈਕਟੇਅਰ ਪ੍ਰਤੀ ਬੀਜ ਦਰ',
          rowSpacing: 'ਕਤਾਰ ਫਾਸਲਾ',
          population: 'ਪੌਦੇ ਗਿਣਤੀ ਲਕਸ਼',
          depth: 'ਬੀਜਾਈ/ਰੋਪਾਈ ਦੀ ਗਹਿਰਾਈ',
        },
        figcaption: 'ਬੀਜ ਦਰ, ਫਾਸਲਾ, ਗਿਣਤੀ & ਗਹਿਰਾਈ',
      },
      landPrep: {
        title: 'ਜ਼ਮੀਨ ਤਿਆਰੀ',
        summary: 'ਤਿਆਰੀ',
        items: {
          tillageOps: 'ਉਲ੍ਹੀ/ਕਲੇਡ ਕਾਰਵਾਈਆਂ ਦੀ ਗਿਣਤੀ',
          levelingBeds: 'ਲੇਵਲਿੰਗ/ਬੈਡ ਤਿਆਰੀ ਲੋੜ',
          smallLargeFields: 'ਛੋਟੇ/ਵੱਡੇ ਖੇਤਰਾਂ ਲਈ ਸੁਝਾਅ',
          residueMgmt: 'ਅਵਸ਼ੇਸ਼ ਪ੍ਰਬੰਧਨ',
        },
        figcaption: 'ਜ਼ਮੀਨ ਤਿਆਰੀ ਕਦਮ',
      },
      nutrients: {
        title: 'ਪੋਸ਼ਕ & ਖਾਦ ਸਮਾਂਸੂਚੀ',
        summary: 'ਖਾਦ',
        items: {
          macroMicro: 'ਮੈਕਰੋ/ਮਾਈਕਰੋ ਪੋਸ਼ਕ ਲੋੜਾਂ',
          stageSchedule: 'ਪੜਾਅ-ਅਨੁਸਾਰ ਖਾਦ ਸਮਾਂਸੂਚੀ & ਡੋਸ',
          formulations: 'ਆਮ ਖਾਦ ਸੰਯੋਜਨ',
          soilTestAdjust: 'ਮਿੱਟੀ ਟੈਸਟ ਅਨੁਸਾਰ ਡੋਸ ਸਮਾਯੋਜਨ',
          safetyPpe: 'ਸੁਰੱਖਿਆ & PPE',
        },
      },
      irrigation: {
        title: 'ਸਿੰਚਾਈ ਸਮਾਂਸੂਚੀ & ਪਾਣੀ ਪ੍ਰਬੰਧਨ',
        summary: 'ਪਾਣੀ ਯੋਜਨਾ',
        items: {
          criticalStages: 'ਸਿੰਚਾਈ ਲਈ ਮਹੱਤਵਪੂਰਨ ਪੜਾਅ',
          method: 'ਤਰੀਕਾ: ਫਲੱਡ, ਡ੍ਰਿਪ, ਸਪ੍ਰਿੰਕਲਰ',
          waterNeeds: 'ਪੜਾਅ ਅਨੁਸਾਰ ਪਾਣੀ ਦੀ ਲੋੜ',
        },
        figcaption: 'ਸਿੰਚਾਈ & ਪਾਣੀ',
      },
      pests: {
        title: 'ਕੀਟ & ਰੋਗ ਪ੍ਰਬੰਧਨ',
        summary: 'ਸੁਰੱਖਿਆ',
        items: {
          common: 'ਆਮ ਕੀਟ/ਰੋਗ ਅਤੇ ਲੱਛਣ',
          lifecycle: 'ਜੀਵਨ ਚੱਕਰ ਟਿੱਪਣੀਆਂ',
          control: 'ਜੈਵਿਕ & ਰਸਾਇਣਕ ਨਿਯੰਤਰਣ',
          safeChemicals: 'ਸੁਰੱਖਿਅਤ ਰਸਾਇਣ (ਡੋਸ, PHI)',
          protectiveMeasures: 'ਸੁਰੱਖਿਆ ਉਪਾਅ',
        },
        figcaption: 'ਕੀਟ & ਰੋਗ',
      },
      weeds: {
        title: 'ਘਾਸ-ਫੂਸ ਪ੍ਰਬੰਧਨ',
        summary: 'ਨਿਯੰਤਰਣ',
        items: {
          common: 'ਆਮ ਘਾਸ-ਫੂਸ',
          culturalMechanical: 'ਸੱਭਿਆਚਾਰਕ & ਮਕੈਨਿਕਲ ਨਿਯੰਤਰਣ',
          herbicides: 'ਸਿਫਾਰਸ਼ੀ ਜੰਗਲ-ਨਾਸ਼ਕ & ਸਮਾਂ',
          prevention: 'ਰੋਕਥਾਮ ਸੁਝਾਅ',
        },
        figcaption: 'ਘਾਸ-ਫੂਸ',
      },
      harvest: {
        title: 'ਕਟਾਈ & ਉਪਜ',
        summary: 'ਉਪਜ & ਕਟਾਈ',
        items: {
          maturityIndicators: 'ਪੱਕਣ ਦੇ ਸੰਕੇਤ',
          techniques: 'ਕਟਾਈ ਤਕਨੀਕਾਂ',
          threshingDrying: 'ਮੰਝਾਈ & ਸੁਕਾਉਣ',
          expectedYield: 'ਹਾਲਤ ਅਨੁਸਾਰ ਉਮੀਦ ਕੀਤੀ ਉਪਜ',
        },
        figcaption: 'ਕਟਾਈ & ਉਪਜ',
      },
      postHarvest: {
        title: 'ਕਟਾਈ ਤੋਂ ਬਾਅਦ ਹੈਂਡਲਿੰਗ & ਸਟੋਰੇਜ',
        summary: 'ਸਟੋਰੇਜ',
        items: {
          handlingCleaning: 'ਕਟਾਈ ਤੋਂ ਬਾਅਦ ਹੱਥ-ਸੰਭਾਲ & ਸਫਾਈ',
          dryingTargets: 'ਸੁਕਾਉਣ ਨਮੀ ਟਾਰਗੇਟ',
          storageOptions: 'ਸਟੋਰੇਜ ਵਿਕਲਪ/ਕੰਟੇਨਰ',
          preventionStorage: 'ਸਟੋਰੇਜ ਵਿੱਚ ਕੀਟ/ਫੰਗਸ ਰੋਕਥਾਮ',
          valueAdded: 'ਮੁੱਲ-ਵਧਾਉਣ ਪ੍ਰੋਸੈਸਿੰਗ ਵਿਚਾਰ',
        },
      },
      mandi: {
        title: 'ਬਾਜ਼ਾਰ & ਕੀਮਤ ਰਹਿਨੁਮਾ',
        summary: 'ਰਹਿਨੁਮਾ',
        items: {
          currentPrices: 'ਮੌਜੂਦਾ ਮੰਡੀ ਕੀਮਤਾਂ (ਖੇਤਰ)',
          trends: 'ਕੀਮਤ ਰੁਝਾਨ',
          gradingQuality: 'ਗ੍ਰੇਡਿੰਗ/ਗੁਣਵੱਤਾ ਕਾਰਕ',
          accessStrategies: 'ਬਾਜ਼ਾਰ ਪ੍ਰਵੇਸ਼ ਰਣਨੀਤੀਆਂ',
          transportPacking: 'ਟ੍ਰਾਂਸਪੋਰਟ & ਪੈਕਿੰਗ ਸੁਝਾਅ',
        },
        figcaption: 'ਬਾਜ਼ਾਰ & ਕੀਮਤ',
      },
      schemes: {
        title: 'ਸਰਕਾਰੀ ਯੋਜਨਾਵਾਂ & ਸਬਸਿਡੀਆਂ',
        summary: 'ਸਹਾਇਤਾ',
        items: {
          available: 'ਉਪਲਬਧ ਯੋਜਨਾਵਾਂ ਅਤੇ ਸਬਸਿਡੀਆਂ',
          regulatory: 'ਲੇਬਲ & ਨਿਯਮਕ ਨੋਟਸ',
          applicationLinks: 'ਅਰਜ਼ੀ ਲਿੰਕ ਜਾਂ ਨੇੜਲਾ ਦਫ਼ਤਰ',
        },
      },
      education: {
        title: 'ਸ਼ਿਕਸ਼ਣ ਸਮੱਗਰੀ & ਛੋਟੇ ਵੀਡੀਓ',
        summary: 'ਸਿੱਖਿਆ',
        items: {
          howToVideos: 'ਬੀਜਾਈ/ਰੋਪਾਈ ਕਿਵੇਂ—ਵੀਡੀਓ',
          safeHandling: 'ਸਪਰੇ, ਡ੍ਰਿਪ, ਸੁਰੱਖਿਅਤ ਹਥਵਾਰਾ',
        },
      },
      feedback: {
        title: 'ਫੀਡਬੈਕ & ਵਿਅਕਤੀਗਤ ਕਰਨ',
        summary: 'ਭਾਗੀਦਾਰੀ',
        items: {
          agronomistContact: 'ਅਗਰੋਨੋਮਿਸਟ ਸੰਪਰਕ',
          blogUpdates: 'ਬਲੌਗ & ਅੱਪਡੇਟ',
        },
      },
      implinks: {
        title: 'ਮਹੱਤਵਪੂਰਨ ਲਿੰਕ / ਲਾਭਕਾਰੀ ਸਰੋਤ',
        summary: 'ਸਰੋਤ',
        items: { usefulLinks: 'ਲਾਭਕਾਰੀ ਲਿੰਕ ਅਤੇ ਸਰੋਤ' },
        figcaption: 'ਮਹੱਤਵਪੂਰਨ ਲਿੰਕ / ਲਾਭਕਾਰੀ ਸਰੋਤ',
      },
      footer: {
        sourcePrefix: 'ਸਰੋਤ:',
        sourceName: 'ਫਸਲ ਗਿਆਨ ਪੋਰਟਲ —',
        sourceLinkText: 'cropknowledge.my.canva.site/crop-knowledge-portal',
      },
      misc: { backToTop: 'ਉੱਤੇ ਵਾਪਸ ਜਾਓ' },
    },
  },
  or: {
    portalName: 'ଫସଲ ଜ୍ଞାନ',
    categories: {
      fruits: 'ଫଳ',
      grains: 'ଧାନ୍ୟ',
      vegetables: 'ସବଜି',
      spices: 'ମସଲା',
      flowers: 'ଫୁଲ',
      cashCrops: 'ନଗଦ ଫସଲ',
      oilSeeds: 'ତେଲ ବିଆ',
      pulses: 'ଡାଲ',
      plantationCrops: 'ବଗିଚା ଫସଲ',
    },
    cropNames: {
      tomato: 'ଟମାଟୋ',
      potato: 'ଆଳୁ',
      okra: 'ଭିଣ୍ଡି',
      brinjal: 'ବାଇଗଣ',
      cabbage: 'କୋବି',
      cauliflower: 'ଫୁଲକୋବି',
      capsicum: 'କ୍ୟାପ୍ସିକମ୍',
      cucumber: 'ଖିରା',
      onion: 'ପିଆଜ',
      greenChilli: 'ହରି ଲଙ୍କା',
      greenPea: 'ହରି ବଟେ',
      mango: 'ଆମ୍ବ',
      banana: 'କଳା',
      apple: 'ସେବ',
      grapes: 'ଅଙ୍ଗୁର',
      guava: 'ପେୟାରା',
      lemon: 'ନିମ୍ବୁ',
      watermelon: 'ତରଭୁଜ',
      muskmelon: 'ଖରବୁଜା',
      papaya: 'ପପିତା',
      custardApple: 'ସୀତାଫଳ',
      dragonFruit: 'ଡ୍ରାଗନ୍ ଫଳ',
      strawberry: 'ଷ୍ଟ୍ରବେରି',
      // Grains
      Rice: 'ଚାଉଳ',
      Wheat: 'ଗହମ',
      Maize: 'ମକା',
      Bajra: 'ବାଜରା',
      // Spices
      coriander: 'ଧନିଆ',
      Cumin: 'ଜିରା',
      garlic: 'ରସୁଣ',
      ginger: 'ଅଦା',
      DryChilli: 'ସୁକା ଲଙ୍କା',
      turmeric: 'ହଳଦୀ',
      // Flowers
      marigold: 'ଗେନ୍ଦୁଳା',
      rose: 'ଗୋଲାପ',
      chrysanthemum: 'ଚନ୍ଦ୍ରମଲ୍ଲୀକା',
      // Cash Crops
      cotton: 'କପାସ',
      sugarcane: 'ଅଖୁ',
      ratoonSugarcane: 'ରାଟୁନ ଅଖୁ',
      // Oil Seeds
      castor: 'ରେଣ୍ଡି',
      mustard: 'ସରିଷ',
      sesame: 'ତିଳ',
      groundnut: 'ବାଦାମ',
      soyabeen: 'ସୋଯାବିନ',
      // Pulses
      bengalGram: 'ଚଣା',
      blackGram: 'ବିରି',
      greenGram: 'ମୁଗ',
      lentil: 'ମସୁର',
      redGram: 'ଆରହର',
      // Plantation Crops
      coffee: 'କଫି',
      tea: 'ଚା',
      rubber: 'ରବର',
      coconut: 'ନଡିଆ',
    },
    language: 'ଭାଷା',
    viewAll: 'ସମସ୍ତ ଦେଖନ୍ତୁ',
    home: {
      heroTitle: 'ଜେନଙ୍କ ଚାଷ ଜ୍ଞାନକୁ ସ୍ୱାଗତ',
      heroSubtitle: 'ଜୀବନ ପରିବର୍ତ୍ତନ; ସମୃଦ୍ଧି ବୃଦ୍ଧି।',
    },
    report: {
      navTitle: 'ନାଭିଗେଶନ',
      nav: {
        cropBasics: 'ଫସଲର ମୂଳ ତଥ୍ୟ',
        soil: 'ମାଟିର ଆବଶ୍ୟକତା',
        climate: 'ଜଳବାୟୁ ଓ ବିଆ ଲଗାଣି ସମୟ',
        varieties: 'ଜାତି ଓ ବିଆ ବାଛାଇ',
        seedRate: 'ବିଆ ଦର ଓ ଦୂରତା',
        landPrep: 'ଜମି ପ୍ରସ୍ତୁତି',
        nutrients: 'ପୋଷକ ଓ ସାର ସମୟସୂଚୀ',
        irrigation: 'ସିଚାଇ ଓ ପାଣି',
        pests: 'ପୋକା ଓ ରୋଗ',
        weeds: 'ଘାସ-ଜତା ପ୍ରବନ୍ଧନ',
        harvest: 'କଟାଇ ଓ ଉତ୍ପାଦନ',
        postHarvest: 'କଟାଇ ପରେ ହ୍ୟାଣ୍ଡଲିଂ ଓ ସଞ୍ଚୟ',
        mandi: 'ବଜାର ଓ ଦର ନିର୍ଦେଶନ',
        schemes: 'ସରକାରୀ ଯୋଜନା',
        education: 'ଶିକ୍ଷା ସାମଗ୍ରୀ',
        feedback: 'ମତାମତ ଓ ବ୍ୟକ୍ତିଗତୀକରଣ',
        implinks: 'ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ଲିଙ୍କ / ଉପଯୁକ୍ତ ସମ୍ପଦ',
      },
      intro: {
        title: 'ସ୍ବାଗତ',
        description:
          'ଚାଷୀ-ବନ୍ଧୁ ରିପୋର୍ଟ ଯାହା ଫସଲ ତଥ୍ୟ, ପ୍ରକ୍ରିୟା ଓ ସମ୍ପଦ ଖୋଜାକୁ ସହାଯ୍ୟ କରେ ଭଲ ନିଷ୍ପତ୍ତି ଓ ଫଳ ପାଇଁ।',
      },
      cropBasics: {
        title: 'ଫସଲର ମୂଳ ତଥ୍ୟ',
        summary: 'ପ୍ରାଥମିକ',
        items: {
          names: 'ବୈଜ୍ଞାନିକ ଓ ସାଧାରଣ ନାମ',
          growthCycle: 'ବିକାଶ ଚକ୍ର',
          climate: 'ଜଳବାୟୁ ଆବଶ୍ୟକତା',
          calendar: 'ଫସଲ କ୍ୟାଲେଣ୍ଡର',
        },
        figcaption: 'ଫସଲ ବିଷୟର ମୂଳ ତଥ୍ୟ',
      },
      soil: {
        title: 'ମାଟିର ଆବଶ୍ୟକତା',
        summary: 'ମାଟି',
        items: {
          soilType: 'ଉଚିତ ମାଟି ପ୍ରକାର ଓ ଗଠନ',
          phRange: 'ଉଚିତ pH ରେଞ୍ଜ',
          drainage: 'ନିସ୍କାସନ ଆବଶ୍ୟକତା',
          tests: 'ସାଧାରଣ ମାଟି ପରୀକ୍ଷା',
        },
        figcaption: 'ଉଚିତ ମାଟି ପ୍ରକାର ଓ pH',
      },
      climate: {
        title: 'ଜଳବାୟୁ ଓ ବିଆ ଲଗାଣି ସମୟ',
        summary: 'ନିର୍ଦ୍ଦେଶନ',
        items: {
          requirements: 'ଉପଯୁକ୍ତ ତାପମାତ୍ରା, ବର୍ଷା, ଧୂପ',
          sowingTime: 'ବିଆ ଲଗାଣି/ରୋପାଣ ପାଇଁ ଭଲ ସମୟ',
          methods: 'ବିଆ ଦର, ଦୂରତା ଓ ପଦ୍ଧତି',
        },
        figcaption: 'ଜଳବାୟୁ ଆବଶ୍ୟକତା',
      },
      varieties: {
        title: 'ଜାତି ଓ ବିଆ ବାଛାଇ',
        summary: 'ସୁପାରିଶ',
        items: {
          localVarieties: 'ସ୍ଥାନ ଉପଯୋଗୀ/ପ୍ରସ୍ତାବିତ ଜାତି',
          daysToMaturity: 'ପକାପାକି ଦିନ',
          purityQuality: 'ବିଆର ଶୁଧତା ଓ ଗୁଣ',
          certifiedSources: 'ପ୍ରମାଣିତ ବିଆ ଉତ୍ସ',
        },
      },
      seedRate: {
        title: 'ବିଆ ଦର ଓ ଦୂରତା',
        summary: 'ମଜବୁତ ଅଂକୁରଣ',
        items: {
          seedRate: 'ହେକ୍ଟର/ଏକର ପ୍ରତି ବିଆ ଦର',
          rowSpacing: 'ପାଲି ମଧ୍ୟର ଦୂରତା',
          population: 'ଗଛ ସଂଖ୍ୟା ଲକ୍ଷ୍ୟ',
          depth: 'ଲଗାଣି/ରୋପାଣ ଗହନତା',
        },
        figcaption: 'ବିଆ ଦର, ଦୂରତା, ସଂଖ୍ୟା ଓ ଗହନତା',
      },
      landPrep: {
        title: 'ଜମି ପ୍ରସ୍ତୁତି',
        summary: 'ପ୍ରସ୍ତୁତି',
        items: {
          tillageOps: 'ହାଲ/କଲାଇ କାର୍ଯ୍ୟ ସଂଖ୍ୟା',
          levelingBeds: 'ସମତଳ/ବେଡ ପ୍ରସ୍ତୁତି ଆବଶ୍ୟକତା',
          smallLargeFields: 'ଛୋଟ/ବଡ ଖେତ ପାଇଁ ପରାମର୍ଶ',
          residueMgmt: 'ଅବଶେଷ ପ୍ରବନ୍ଧନ',
        },
        figcaption: 'ଜମି ପ୍ରସ୍ତୁତି ପଦକ୍ଷେପ',
      },
      nutrients: {
        title: 'ପୋଷକ ଓ ସାର ସମୟସୂଚୀ',
        summary: 'ସାର',
        items: {
          macroMicro: 'ମାକ୍ରୋ/ମାଇକ୍ରୋ ପୋଷକ ଆବଶ୍ୟକତା',
          stageSchedule: 'ପର୍ଯ୍ୟାୟ ଅନୁଯାୟୀ ସାର ସମୟସୂଚୀ ଓ ଡୋଜ',
          formulations: 'ସାଧାରଣ ସାର ସଂଯୋଜନ',
          soilTestAdjust: 'ମାଟି ପରୀକ୍ଷା ଅନୁଯାୟୀ ଡୋଜ ସମଯୋଜନ',
          safetyPpe: 'ସୁରକ୍ଷା ଓ PPE',
        },
      },
      irrigation: {
        title: 'ସିଚାଇ ସମୟସୂଚୀ ଓ ପାଣି ପ୍ରବନ୍ଧନ',
        summary: 'ପାଣି ଯୋଜନା',
        items: {
          criticalStages: 'ସିଚାଇ ପାଇଁ ଜରୁରୀ ପର୍ଯ୍ୟାୟ',
          method: 'ପଦ୍ଧତି: ଫ୍ଲଡ୍, ଡ୍ରିପ୍, ସ୍ପ୍ରିଙ୍କଲର',
          waterNeeds: 'ପର୍ଯ୍ୟାୟ ଅନୁଯାୟୀ ପାଣି ଆବଶ୍ୟକତା',
        },
        figcaption: 'ସିଚାଇ ଓ ପାଣି',
      },
      pests: {
        title: 'ପୋକା ଓ ରୋଗ ପ୍ରବନ୍ଧନ',
        summary: 'ସୁରକ୍ଷା',
        items: {
          common: 'ସାଧାରଣ ପୋକା/ରୋଗ ଓ ଲକ୍ଷଣ',
          lifecycle: 'ଜୀବନଚକ୍ର ଟିପ୍ପଣୀ',
          control: 'ଜୈବିକ ଓ ରାସାୟନିକ ନିୟନ୍ତ୍ରଣ',
          safeChemicals: 'ସୁରକ୍ଷିତ ରାସାୟନ (ଡୋଜ, PHI)',
          protectiveMeasures: 'ସୁରକ୍ଷା ଉପାୟ',
        },
        figcaption: 'ପୋକା ଓ ରୋଗ',
      },
      weeds: {
        title: 'ଘାସ-ଜତା ପ୍ରବନ୍ଧନ',
        summary: 'ନିୟନ୍ତ୍ରଣ',
        items: {
          common: 'ସାଧାରଣ ଘାସ-ଜତା',
          culturalMechanical: 'ସାଂସ୍କୃତିକ ଓ ଯାନ୍ତ୍ରିକ ନିୟନ୍ତ୍ରଣ',
          herbicides: 'ସୁପାରିଶୀ ନିର୍ଜାତକ ଓ ସମୟ',
          prevention: 'ପ୍ରତିରୋଧ ସୁପାରିଶ',
        },
        figcaption: 'ଘାସ-ଜତା',
      },
      harvest: {
        title: 'କଟାଇ ଓ ଉତ୍ପାଦନ',
        summary: 'ଉପଜ ଓ କଟାଇ',
        items: {
          maturityIndicators: 'ପକାପାକି ସଙ୍କେତ',
          techniques: 'କଟାଇ ପ୍ରକ୍ରିୟା',
          threshingDrying: 'ମଝା ଓ ଶୁଖାଇବା',
          expectedYield: 'ପରିସ୍ଥିତି ଅନୁଯାୟୀ ଆଶାକରା ଉପଜ',
        },
        figcaption: 'କଟାଇ ଓ ଉତ୍ପାଦନ',
      },
      postHarvest: {
        title: 'କଟାଇ ପରେ ହ୍ୟାଣ୍ଡଲିଂ ଓ ସଞ୍ଚୟ',
        summary: 'ସଞ୍ଚୟ',
        items: {
          handlingCleaning: 'କଟାଇ ପରେ ସଂଭାଳ ଓ ସଫା',
          dryingTargets: 'ଶୁଖାଇବା ଆର୍ଦ୍ରତା ଲକ୍ଷ୍ୟ',
          storageOptions: 'ରଖିବା ବିକଳ୍ପ/ପାତ୍ର',
          preventionStorage: 'ସଞ୍ଚୟରେ ପୋକା/ଫଙ୍ଗସ ପ୍ରତିରୋଧ',
          valueAdded: 'ମୂଲ୍ୟ-ବୃଦ୍ଧି ପ୍ରୋସେସିଂ ଧାରଣା',
        },
      },
      mandi: {
        title: 'ବଜାର ଓ ଦର ନିର୍ଦ୍ଦେଶନ',
        summary: 'ନିର୍ଦ୍ଦେଶନ',
        items: {
          currentPrices: 'ଅଞ୍ଚଳ ଅନୁଯାୟୀ ବର୍ତ୍ତମାନ ମଣ୍ଡି ଦର',
          trends: 'ଦର ପ୍ରବୃତ୍ତି',
          gradingQuality: 'ଗ୍ରେଡିଂ/ଗୁଣଗତତା କାରକ',
          accessStrategies: 'ବଜାର ପ୍ରବେଶ ରଣନୀତି',
          transportPacking: 'ପରିବହନ ଓ ପ୍ୟାକିଂ ସୁପାରିଶ',
        },
        figcaption: 'ବଜାର ଓ ଦର ନିର୍ଦ୍ଦେଶନ',
      },
      schemes: {
        title: 'ସରକାରୀ ଯୋଜନା ଓ ଅନୁଦାନ',
        summary: 'ସହାୟତା',
        items: {
          available: 'ଉପଲବ୍ଧ ଯୋଜନା ଓ ଅନୁଦାନ',
          regulatory: 'ଲେବେଲ ଓ ନିୟମକ ଟିପ୍ପଣୀ',
          applicationLinks: 'ଆବେଦନ ଲିଙ୍କ କିମ୍ବା ନିକଟସ୍ଥ କାର୍ଯ୍ୟାଳୟ',
        },
      },
      education: {
        title: 'ଶିକ୍ଷା ସାମଗ୍ରୀ ଓ ଛୋଟ ଭିଡିଓ',
        summary: 'ଶିକ୍ଷା',
        items: {
          howToVideos: 'ବିଆ ଲଗାଣି/ରୋପାଣ—କିପରି ଭିଡିଓ',
          safeHandling: 'ସ୍ପ୍ରେ, ଡ୍ରିପ୍, ସୁରକ୍ଷିତ ହ୍ୟାଣ୍ଡଲିଂ',
        },
      },
      feedback: {
        title: 'ମତାମତ ଓ ବ୍ୟକ୍ତିଗତୀକରଣ',
        summary: 'ଅଂଶଗ୍ରହଣ',
        items: {
          agronomistContact: 'ଏଗ୍ରୋନୋମିଷ୍ଟ ସଂପର୍କ',
          blogUpdates: 'ବ୍ଲଗ୍ ଓ ଅପଡେଟ୍',
        },
      },
      implinks: {
        title: 'ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ଲିଙ୍କ / ଉପଯୁକ୍ତ ସମ୍ପଦ',
        summary: 'ସମ୍ପଦ',
        items: { usefulLinks: 'ଉପଯୁକ୍ତ ଲିଙ୍କ ଓ ସମ୍ପଦ' },
        figcaption: 'ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ଲିଙ୍କ / ଉପଯୁକ୍ତ ସମ୍ପଦ',
      },
      footer: {
        sourcePrefix: 'ସୂତ୍ର:',
        sourceName: 'କ୍ରପ୍ ନଲେଜ୍ ପୋର୍ଟାଲ —',
        sourceLinkText: 'cropknowledge.my.canva.site/crop-knowledge-portal',
      },
      misc: { backToTop: 'ଉପରକୁ ଫେରନ୍ତୁ' },
    },
  },
  as: {
    portalName: 'ফচল জ্ঞান',
    categories: {
      fruits: 'ফল',
      grains: 'ধান্য',
      vegetables: 'সবজি',
      spices: 'মচলা',
      flowers: 'ফুল',
      cashCrops: 'নগদ ফচল',
      oilSeeds: 'তেলবীজ',
      pulses: 'ডাল',
      plantationCrops: 'বাগিচাৰ ফচল',
    },
    cropNames: {
      tomato: 'টমেটো',
      potato: 'আলু',
      okra: 'ঢেঁকীয়া',
      brinjal: 'বেগুন',
      cabbage: 'বাঁধা কপি',
      cauliflower: 'ফুলকপি',
      capsicum: 'কেপ্‌সিকাম',
      cucumber: 'কাঁকুৰ',
      onion: 'পিয়াজ',
      greenChilli: 'জালুক',
      greenPea: 'সেউজী মটৰ',
      mango: 'আম',
      banana: 'কল',
      apple: 'আপেল',
      grapes: 'আঙুৰ',
      guava: 'পেয়ারা',
      lemon: 'নেমু',
      watermelon: 'তৰা মুজ',
      muskmelon: 'খৰবুজা',
      papaya: 'পেঁপে',
      custardApple: 'সীতাফল',
      dragonFruit: 'ড্ৰাগন ফল',
      strawberry: 'ষ্ট্ৰবেৰী',
      // Grains
      Rice: 'চাউল',
      Wheat: 'গহঁ',
      Maize: 'মকাই',
      Bajra: 'বাজৰা',
      // Spices
      coriander: 'ধনিয়া',
      Cumin: 'জিৰা',
      garlic: 'ৰসুন',
      ginger: 'আদা',
      DryChilli: 'শুকা লংকা',
      turmeric: 'হলধি',
      // Flowers
      marigold: 'গেন্দা',
      rose: 'গোলাপ',
      chrysanthemum: 'গোলদাউদি',
      // Cash Crops
      cotton: 'কপাহী',
      sugarcane: 'উখ',
      ratoonSugarcane: 'ৰাটুন উখ',
      // Oil Seeds
      castor: 'এৰণ্ড',
      mustard: 'সৰিষ',
      sesame: 'তিল',
      groundnut: 'বাদাম',
      soyabeen: 'চইবিন',
      // Pulses
      bengalGram: 'চণা',
      blackGram: 'উৰত ডাল',
      greenGram: 'মুগ ডাল',
      lentil: 'মসুৰ ডাল',
      redGram: 'ৰহৰ ডাল',
      // Plantation Crops
      coffee: 'কফি',
      tea: 'চাহ',
      rubber: 'ৰেৱাৰ',
      coconut: 'নাৰিয়েল',
    },
    language: 'ভাষা',
    viewAll: 'সকলো চাওক',
    home: {
      heroTitle: 'জেইনৰ খেতি জ্ঞানত আপুনি স্বাগতম',
      heroSubtitle: 'জীৱন সলনি কৰা; সমৃদ্ধি বৃদ্ধি কৰা।',
    },
    report: {
      navTitle: 'নেভিগেশন',
      nav: {
        cropBasics: 'ফচলৰ মৌলিক তথ্য',
        soil: 'মাটিৰ প্ৰয়োজনীয়তা',
        climate: 'জলবায়ু আৰু বিয়া বপন সময়',
        varieties: 'জাতসমূহ আৰু বীজ বাছনি',
        seedRate: 'বীজৰ পৰিমাণ আৰু দূৰত্ব',
        landPrep: 'জমি প্রস্তুতি',
        nutrients: 'পুষ্টি আৰু সারৰ সময়সূচী',
        irrigation: 'সেচ আৰু পানী',
        pests: 'কীট-পতঙ্গ আৰু ৰোগ',
        weeds: 'আগুৱল ব্যৱস্থাপনা',
        harvest: 'কটনী আৰু উৎপাদন',
        postHarvest: 'কটনী পাছত আৰু সংৰক্ষণ',
        mandi: 'বজাৰ আৰু মূল্য নিৰ্দেশনা',
        schemes: 'ৰাজহুৱা আঁচনি',
        education: 'শিক্ষামূলক সমগ্রী',
        feedback: 'প্ৰতিক্ৰিয়া আৰু ব্যক্তিগতকৰণ',
        implinks: 'গুৰত্বপূৰ্ণ সংযোগ / উপকাৰী সম্পদ',
      },
      intro: {
        title: 'স্বাগতম',
        description:
          'এটা কৃষক-বান্ধৱ প্ৰতিবেদন, য’ত ফচল তথ্য, আচৰণ-পদ্ধতি আৰু সম্পদসমূহ সু-সংগঠিতভাৱে উপস্থাপিত, যাতে উত্তম সিদ্ধান্ত আৰু ফলাফল পোৱা যায়।',
      },
      cropBasics: {
        title: 'ফচলৰ মৌলিক তথ্য',
        summary: 'আৱশ্যক তথ্য',
        items: {
          names: 'বৈজ্ঞানিক আৰু সাধাৰণ নাম',
          growthCycle: 'বৃদ্ধিৰ পৰ্যায় আৰু অৱধি',
          climate: 'উপযুক্ত জলবায়ু পৰিস্থিতি',
          calendar: 'ফচল কেলেণ্ডাৰ',
        },
        figcaption: 'বৃদ্ধি পৰ্যায় সময়ৰেখা',
      },
      soil: {
        title: 'মাটিৰ প্ৰয়োজনীয়তা',
        summary: 'মুখ্য পৰামিতি',
        items: {
          soilType: 'আদর্শ মাটিৰ ধৰণ আৰু গঠন',
          phRange: 'আদর্শ pH পৰিসৰ',
          drainage: 'ড্ৰেনেজৰ প্ৰয়োজন',
          tests: 'সাধাৰণ মাটি পৰীক্ষা',
        },
        figcaption: 'আদর্শ মাটিৰ ধৰণ আৰু pH',
      },
      climate: {
        title: 'জলবায়ু আৰু বিয়া বপন সময়',
        summary: 'নিৰ্দেশনা',
        items: {
          requirements: 'আদর্শ তাপমাত্রা, বৰষুণ, ৰ’দ',
          sowingTime: 'বিয়া বপন/পৌতনিৰ উৎকৃষ্ট সময়',
          methods: 'বীজৰ পৰিমাণ, দূৰত্ব আৰু পদ্ধতি',
        },
        figcaption: 'জলবায়ুৰ প্ৰয়োজনীয়তা',
      },
      varieties: {
        title: 'জাতসমূহ আৰু বীজ বাছনি',
        summary: 'পৰামৰ্শ',
        items: {
          localVarieties: 'সুপাৰিশ কৰা স্থানীয় জাতসমূহৰ সুবিধা/অসুবিধা',
          daysToMaturity: 'পকিবলৈ লাগে তাৰিখ/দিন',
          purityQuality: 'বীজৰ বিশুদ্ধতা আৰু গুণগত মান',
          certifiedSources: 'প্ৰমাণিত বীজ উৎসসমূহ',
        },
      },
      seedRate: {
        title: 'বীজৰ পৰিমাণ আৰু দূৰত্ব',
        summary: 'স্থাপন',
        items: {
          seedRate: 'প্ৰতি হেক্টৰ/একৰ বীজৰ পৰিমাণ',
          rowSpacing: 'সারি দূৰত্ব',
          population: 'গছৰ সংখ্যা লক্ষ্য',
          depth: 'বপন/পৌতনিৰ গভীৰতা',
        },
        figcaption: 'বীজ পৰিমাণ, দূৰত্ব, সংখ্যা আৰু গভীৰতা',
      },
      landPrep: {
        title: 'জমি প্রস্তুতি',
        summary: 'প্ৰস্তুতি পদক্ষেপ',
        items: {
          tillageOps: 'টিলেজ/হাল-চাষ কৰ্মৰ সংখ্যা',
          levelingBeds: 'লেভেলিং/বেড প্রস্তুতিৰ প্ৰয়োজন',
          smallLargeFields: 'সৰু আৰু ডাঙৰ খেতিৰ বাবে পৰামৰ্শ',
          residueMgmt: 'অবশিষ্ট ব্যৱস্থাপনা',
        },
        figcaption: 'জমি প্রস্তুতি পদক্ষেপ',
      },
      nutrients: {
        title: 'পুষ্টি আৰু সারৰ সময়সূচী',
        summary: 'সাৰ',
        items: {
          macroMicro: 'মেক্ৰো আৰু মাইক্রো পুষ্টিৰ প্ৰয়োজন',
          stageSchedule: 'পৰ্যায়ভিত্তিক সাৰ সময়সূচী আৰু মাত্ৰা',
          formulations: 'সাধাৰণ সাৰ মিশ্ৰণ',
          soilTestAdjust: 'মাটি পৰীক্ষাৰ আধাৰত মাত্ৰা সংশোধন',
          safetyPpe: 'সুৰক্ষা আৰু PPE',
        },
      },
      irrigation: {
        title: 'সেচ সময়সূচী আৰু পানী ব্যৱস্থাপনা',
        summary: 'পানী পৰিকল্পনা',
        items: {
          criticalStages: 'সেচৰ গুৰুত্বপূর্ণ পৰ্যায়',
          method: 'পদ্ধতি: ফ্লাড, ড্ৰিপ, স্প্ৰিংকলাৰ',
          waterNeeds: 'পৰ্যায়ভিত্তিক পানীৰ প্ৰয়োজন',
        },
        figcaption: 'সেচ আৰু পানী',
      },
      pests: {
        title: 'কীট-পতঙ্গ আৰু ৰোগ',
        summary: 'সুৰক্ষা',
        items: {
          common: 'সাধাৰণ কীট/ৰোগ আৰু লক্ষণ',
          lifecycle: 'জীৱনচক্র সংক্রান্ত টোকা',
          control: 'জৈৱিক আৰু ৰাসায়নিক নিয়ন্ত্ৰণ',
          safeChemicals: 'নিরাপদ ৰাসায়নিক (মাত্ৰা, PHI)',
          protectiveMeasures: 'সুৰক্ষামূলক পদক্ষেপ',
        },
        figcaption: 'কীট-পতঙ্গ আৰু ৰোগ',
      },
      weeds: {
        title: 'আগুৱল ব্যৱস্থাপনা',
        summary: 'দমন',
        items: {
          common: 'সাধাৰণ আগুৱলসমূহ',
          culturalMechanical: 'সাংস্কৃতিক আৰু যান্ত্ৰিক দমন',
          herbicides: 'সুপাৰিশ কৰা আগুৱলনাশক আৰু সময়',
          prevention: 'প্ৰতিৰোধমূলক পৰামৰ্শ',
        },
        figcaption: 'আগুৱল',
      },
      harvest: {
        title: 'কটনী আৰু উৎপাদন',
        summary: 'উৎপাদন আৰু কটনী',
        items: {
          maturityIndicators: 'পরিপক্কতাৰ সূচক',
          techniques: 'কটনী পদ্ধতি',
          threshingDrying: 'ধানকৰা/শুকোৱা',
          expectedYield: 'অৱস্থাৰ ওপৰত আশা কৰা উৎপাদন',
        },
        figcaption: 'কটনী আৰু উৎপাদন',
      },
      postHarvest: {
        title: 'কটনী পাছত আৰু সংৰক্ষণ',
        summary: 'সংৰক্ষণ',
        items: {
          handlingCleaning: 'কটনী পাছত হেণ্ডলিং আৰু পৰিষ্কাৰ',
          dryingTargets: 'শুকোৱাৰ আর্দ্ৰতা লক্ষ্য',
          storageOptions: 'সংৰক্ষণ বিকল্প/ভাণ্ডাৰ',
          preventionStorage: 'সংৰক্ষণত কীট/ফাংগাছ প্ৰতিৰোধ',
          valueAdded: 'মান-সংযোজিত প্ৰসেসিং আইডিয়া',
        },
      },
      mandi: {
        title: 'বজাৰ আৰু মূল্য নিৰ্দেশনা',
        summary: 'নিৰ্দেশনা',
        items: {
          currentPrices: 'অঞ্চল অনুসৰি বৰ্তমান বজাৰ মূল্য',
          trends: 'মূল্যৰ ধৰণ',
          gradingQuality: 'গ্ৰেডিং/গুণগত বিষয়া',
          accessStrategies: 'বজাৰ অভিগম কৌশল',
          transportPacking: 'পৰিবহন আৰু পেকিং পৰামৰ্শ',
        },
        figcaption: 'বজাৰ আৰু মূল্য নিৰ্দেশনা',
      },
      schemes: {
        title: 'ৰাজহুৱা আঁচনি আৰু অনুদান',
        summary: 'সহায়তা',
        items: {
          available: 'উপলব্ধ আঁচনি আৰু অনুদান',
          regulatory: 'লেবেল আৰু বিধিমালা টোকা',
          applicationLinks: 'আবেদনৰ লিংক বা ওচৰৰ কাৰ্যালয়',
        },
      },
      education: {
        title: 'শিক্ষামূলক সমগ্ৰী আৰু ছুটীয়া ভিডিঅ',
        summary: 'শিকনি',
        items: {
          howToVideos: 'পচোৱা/পৌতনি কেনেকৈ — ভিডিঅ',
          safeHandling: 'স্প্ৰে, ড্ৰিপ ইনষ্টল, সুৰক্ষিত হেণ্ডলিং',
        },
      },
      feedback: {
        title: 'প্ৰতিক্ৰিয়া আৰু ব্যক্তিগতকৰণ',
        summary: 'অংশগ্ৰহণ',
        items: {
          agronomistContact: 'এগ্ৰ’নমিষ্ট সংযোগ',
          blogUpdates: 'ব্লগ আৰু আপডেট',
        },
      },
      implinks: {
        title: 'গুৰত্বপূৰ্ণ সংযোগ / উপকাৰী সম্পদ',
        summary: 'সম্পদ',
        items: { usefulLinks: 'উপকাৰী লিংক আৰু সম্পদ' },
        figcaption: 'গুৰত্বপূৰ্ণ সংযোগ / উপকাৰী সম্পদ',
      },
      footer: {
        sourcePrefix: 'উৎস:',
        sourceName: 'ফচল জ্ঞান পোৰ্টাল —',
        sourceLinkText: 'cropknowledge.my.canva.site/crop-knowledge-portal',
      },
      misc: { backToTop: 'উপৰলৈ উভতি যাওক' },
    },
  },
  ur: {
    portalName: 'فصل کا علم',
    categories: {
      fruits: 'پھل',
      grains: 'اناج',
      vegetables: 'سبزیاں',
      spices: 'مصالحے',
      flowers: 'پھول',
      cashCrops: 'نقد فصلیں',
      oilSeeds: 'تیل کے بیج',
      pulses: 'دالیں',
      plantationCrops: 'باغبانی فصلیں',
    },
    cropNames: {
      tomato: 'ٹماٹر',
      potato: 'آلو',
      okra: 'بھنڈی',
      brinjal: 'بینگن',
      cabbage: 'بند گوبی',
      cauliflower: 'پھول گوبی',
      capsicum: 'شملا مرچ',
      cucumber: 'کھیرا',
      onion: 'پیاز',
      greenChilli: 'ہری مرچ',
      greenPea: 'ہرے مٹر',
      mango: 'آم',
      banana: 'کیلا',
      apple: 'سیب',
      grapes: 'انگور',
      guava: 'امرود',
      lemon: 'لیموں',
      watermelon: 'تربوز',
      muskmelon: 'خربوزہ',
      papaya: 'پپیتا',
      custardApple: 'شریفہ',
      dragonFruit: 'ڈریگن پھل',
      strawberry: 'اسٹرابیری',
      // Grains
      Rice: 'چاول',
      Wheat: 'گندم',
      Maize: 'مکئی',
      Bajra: 'باجرا',
      // Spices
      coriander: 'دھنیا',
      Cumin: 'زیرہ',
      garlic: 'لہسن',
      ginger: 'ادرک',
      DryChilli: 'خشک مرچ',
      turmeric: 'ہلدی',
      // Flowers
      marigold: 'گیندہ',
      rose: 'گلاب',
      chrysanthemum: 'گل داؤدی',
      // Cash Crops
      cotton: 'روئی',
      sugarcane: 'گنا',
      ratoonSugarcane: 'راٹون گنا',
      // Oil Seeds
      castor: 'ارنڈ',
      mustard: 'سرسوں',
      sesame: 'تل',
      groundnut: 'مونگ پھلی',
      soyabeen: 'سویا بین',
      // Pulses
      bengalGram: 'چنا',
      blackGram: 'ماش',
      greenGram: 'مونگ',
      lentil: 'مسور',
      redGram: 'ارہر',
      // Plantation Crops
      coffee: 'کافی',
      tea: 'چائے',
      rubber: 'ربڑ',
      coconut: 'ناریل',
    },
    language: 'زبان',
    viewAll: 'سب دیکھیں',
    home: {
      heroTitle: 'جین کے فصل علم میں خوش آمدید',
      heroSubtitle: 'زندگیاں بدلنا؛ خوشحالی بڑھانا۔',
    },
    report: {
      navTitle: 'نیویگیشن',
      nav: {
        cropBasics: 'فصل کی بنیادی معلومات',
        soil: 'مٹی کی ضروریات',
        climate: 'آب و ہوا اور بوائی کا وقت',
        varieties: 'اقسام اور بیج کے انتخاب',
        seedRate: 'بیج کی مقدار اور فاصلہ',
        landPrep: 'زمین کی تیاری',
        nutrients: 'غذائی اجزاء اور کھاد کا شیڈول',
        irrigation: 'آبپاشی اور پانی',
        pests: 'کیڑے اور بیماریاں',
        weeds: 'جڑی بوٹیوں کا انتظام',
        harvest: 'کٹائی اور پیداوار',
        postHarvest: 'کٹائی کے بعد اور ذخیرہ',
        mandi: 'منڈی اور قیمت رہنمائی',
        schemes: 'حکومتی اسکیمیں',
        education: 'تعلیمی مواد',
        feedback: 'رائے اور ذاتی نوعیت',
        implinks: 'اہم روابط / مفید وسائل',
      },
      intro: {
        title: 'خوش آمدید',
        description:
          'کاشتکار دوست رپورٹ جو فصل معلومات، طریقہ کار اور وسائل تک رسائی میں مدد کرتی ہے تاکہ بہتر فیصلے اور نتائج حاصل ہوں۔',
      },
      cropBasics: {
        title: 'فصل کی بنیادی معلومات',
        summary: 'اہم معلومات',
        items: {
          names: 'سائنسی اور عام نام',
          growthCycle: 'نشوونما کے مراحل اور دورانیہ',
          climate: 'موزوں آب و ہوا',
          calendar: 'فصل کا کیلنڈر',
        },
        figcaption: 'بنیادی حقائق اور مراحل',
      },
      soil: {
        title: 'مٹی کی ضروریات',
        summary: 'اہم پیرامیٹرز',
        items: {
          soilType: 'موزوں مٹی کی قسم اور ساخت',
          phRange: 'موزوں pH حد',
          drainage: 'نکاسیِ آب کی ضروریات',
          tests: 'رائج مٹی کے ٹیسٹ',
        },
        figcaption: 'موزوں مٹی اور pH',
      },
      climate: {
        title: 'آب و ہوا اور بوائی کا وقت',
        summary: 'رہنمائی',
        items: {
          requirements: 'درجہ حرارت، بارش، دھوپ کی ضروریات',
          sowingTime: 'بوائی/پودے لگانے کا بہترین وقت',
          methods: 'بیج کی مقدار، فاصلہ اور طریقے',
        },
        figcaption: 'آب و ہوا کی ضروریات',
      },
      varieties: {
        title: 'اقسام اور بیج کے انتخاب',
        summary: 'سفارشات',
        items: {
          localVarieties: 'مقامی تجویز کردہ اقسام',
          daysToMaturity: 'پختگی کے دن',
          purityQuality: 'بیج کی صفائی اور معیار کے اصول',
          certifiedSources: 'مستند بیج کے ذرائع',
        },
      },
      seedRate: {
        title: 'بیج کی مقدار اور فاصلہ',
        summary: 'پودوں کی قائم کاری',
        items: {
          seedRate: 'فی ہیکٹر/ایکر بیج کی مقدار',
          rowSpacing: 'قطار کا فاصلہ',
          population: 'پودوں کی تعداد کا ہدف',
          depth: 'پودے لگانے کی گہرائی',
        },
        figcaption: 'بیج مقدار، فاصلہ، تعداد اور گہرائی',
      },
      landPrep: {
        title: 'زمین کی تیاری',
        summary: 'تیاری کے مراحل',
        items: {
          tillageOps: 'ہل چلانے کی کارروائیاں کی تعداد',
          levelingBeds: 'سطح برابر کرنا/بیڈ تیاری کی ضرورت',
          smallLargeFields: 'چھوٹے/بڑے کھیتوں کے لیے سفارشات',
          residueMgmt: 'بقیہ کا انتظام',
        },
        figcaption: 'زمین کی تیاری کے مراحل',
      },
      nutrients: {
        title: 'غذائی اجزاء اور کھاد کا شیڈول',
        summary: 'کھاد',
        items: {
          macroMicro: 'میکرو/مائیکرو غذائی اجزاء کی ضرورت',
          stageSchedule: 'مرحلہ وار کھاد شیڈول اور خوراک',
          formulations: 'عام کھاد ترکیبیں',
          soilTestAdjust: 'مٹی ٹیسٹ کے مطابق خوراک ایڈجسٹ کریں',
          safetyPpe: 'حفاظت اور حفاظتی سامان',
        },
      },
      irrigation: {
        title: 'آبپاشی شیڈول اور پانی کا انتظام',
        summary: 'پانی منصوبہ',
        items: {
          criticalStages: 'آبپاشی کے اہم مراحل',
          method: 'طریقہ: فلوڈ، ڈرپ، سپرنکلر',
          waterNeeds: 'مرحلہ وار پانی کی ضرورت',
        },
        figcaption: 'آبپاشی اور پانی',
      },
      pests: {
        title: 'کیڑے اور بیماریاں',
        summary: 'حفاظت',
        items: {
          common: 'عام کیڑے/بیماریاں اور علامات',
          lifecycle: 'زندگی کے چکر کے نوٹس',
          control: 'حیاتیاتی اور کیمیائی تدارک',
          safeChemicals: 'محفوظ کیمیکلز (خوراک، PHI)',
          protectiveMeasures: 'حفاظتی اقدامات',
        },
        figcaption: 'کیڑے اور بیماریاں',
      },
      weeds: {
        title: 'جڑی بوٹیوں کا انتظام',
        summary: 'تدارک',
        items: {
          common: 'عام جڑی بوٹیاں',
          culturalMechanical: 'ثقافتی اور میکانی تدارک',
          herbicides: 'سفارش کردہ جڑی بوٹی مار ادویات اور وقت',
          prevention: 'احتیاطی مشورے',
        },
        figcaption: 'جڑی بوٹیاں',
      },
      harvest: {
        title: 'کٹائی اور پیداوار',
        summary: 'پیداوار اور کٹائی',
        items: {
          maturityIndicators: 'پختگی کی نشانیاں',
          techniques: 'کٹائی کے طریقے',
          threshingDrying: 'منجائی اور خشک کرنا',
          expectedYield: 'حالات کے مطابق متوقع پیداوار',
        },
        figcaption: 'کٹائی اور پیداوار',
      },
      postHarvest: {
        title: 'کٹائی کے بعد اور ذخیرہ',
        summary: 'ذخیرہ',
        items: {
          handlingCleaning: 'کٹائی کے بعد ہینڈلنگ اور صفائی',
          dryingTargets: 'خشک کرنے کی نمی کے اہداف',
          storageOptions: 'ذخیرہ کے اختیارات/برتن',
          preventionStorage: 'ذخیرہ میں کیڑے/فنگس کی روک تھام',
          valueAdded: 'قدر بڑھانے والی پراسیسنگ خیالات',
        },
      },
      mandi: {
        title: 'منڈی اور قیمت رہنمائی',
        summary: 'رہنمائی',
        items: {
          currentPrices: 'علاقے کے مطابق موجودہ منڈی قیمتیں',
          trends: 'قیمت کے رجحانات',
          gradingQuality: 'درجہ بندی/معیار عوامل',
          accessStrategies: 'منڈی تک رسائی کی حکمتِ عملی',
          transportPacking: 'نقل و حمل اور پیکنگ تجاویز',
        },
        figcaption: 'منڈی اور قیمت رہنمائی',
      },
      schemes: {
        title: 'حکومتی اسکیمیں اور سبسڈیز',
        summary: 'معاونت',
        items: {
          available: 'دستیاب اسکیمیں اور سبسڈیز',
          regulatory: 'لیبل اور ضابطہ نوٹس',
          applicationLinks: 'درخواست کے روابط یا قریبی دفتر',
        },
      },
      education: {
        title: 'تعلیمی مواد اور مختصر ویڈیوز',
        summary: 'سیکھنا',
        items: {
          howToVideos: 'بوائی/روپائی کیسے کریں — ویڈیوز',
          safeHandling: 'اسپرے، ڈرپ تنصیب، محفوظ ہینڈلنگ',
        },
      },
      feedback: {
        title: 'رائے اور ذاتی نوعیت',
        summary: 'شمولیت',
        items: {
          agronomistContact: 'اگرو نومسٹ رابطہ',
          blogUpdates: 'بلاگ اور تازہ کاریاں',
        },
      },
      implinks: {
        title: 'اہم روابط / مفید وسائل',
        summary: 'وسائل',
        items: { usefulLinks: 'مفید روابط اور وسائل' },
        figcaption: 'اہم روابط / مفید وسائل',
      },
      footer: {
        sourcePrefix: 'ماخذ:',
        sourceName: 'کرپ نالج پورٹل —',
        sourceLinkText: 'cropknowledge.my.canva.site/crop-knowledge-portal',
      },
      misc: { backToTop: 'اوپر واپس جائیں' },
    },
  },
};

function isObject(val: unknown): val is Record<string, unknown> {
  return typeof val === 'object' && val !== null;
}

function deepMerge(base: unknown, override: unknown): unknown {
  if (!isObject(base)) return override ?? base;
  if (Array.isArray(base)) return override ?? base;
  const result: Record<string, unknown> = { ...(base as Record<string, unknown>) };
  const baseObj = base as Record<string, unknown>;
  const overObj = isObject(override) ? (override as Record<string, unknown>) : undefined;
  for (const key of Object.keys(baseObj)) {
    const bVal = baseObj[key];
    const oVal = overObj?.[key];
    if (oVal === undefined) {
      result[key] = bVal;
    } else if (isObject(bVal) && isObject(oVal)) {
      result[key] = deepMerge(bVal, oVal);
    } else {
      result[key] = oVal;
    }
  }
  if (overObj) {
    for (const key of Object.keys(overObj)) {
      if (!(key in baseObj)) result[key] = overObj[key];
    }
  }
  return result;
}

export function getDict(code: LangCode): Dict {
  const lang = dictionaries[code] ?? dictionaries.en;
  return deepMerge(dictionaries.en, lang) as Dict;
}