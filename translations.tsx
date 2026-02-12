
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type LanguageCode = 'en' | 'hi' | 'ta' | 'te' | 'kn' | 'ml';

export const translations = {
  en: {
    'nav.home': 'Home',
    'nav.philosophy': 'Philosophy',
    'nav.programs': 'Programs',
    'nav.mascot': 'Pixel World',
    'nav.parents': 'For Parents',
    'nav.support': 'Support',
    'nav.join': 'Join Free',
    'hero.title1': 'Energy. Learn.',
    'hero.title2': 'Grow.',
    'hero.subtitle': 'Not marks. A child who speaks without fear. We turn learning into pure joy through interactive 3D adventures with Pixel.',
    'hero.cta': 'Start The Journey',
    'hero.vision': 'The Vision',
    'hero.trusted': "India's Trusted Mascot",
    'philosophy.title': 'The Official PIXO Method',
    'philosophy.subtitle': "Built with the world's most friendly digital companion.",
    'philosophy.energy': 'Energy',
    'philosophy.learn': 'Learn',
    'philosophy.grow': 'Grow',
    'philosophy.energyDesc': 'Channelling play into purpose.',
    'philosophy.learnDesc': 'Discovery through dialogue.',
    'philosophy.growDesc': 'Visible, fearless transformation.',
    'modal.title': 'Join the Adventure!',
    'modal.desc': 'Create a free account to start your journey with Pixel and master English speaking.',
    'modal.placeholder': "Parent's Email Address",
    'modal.cta': 'Start Learning Free'
  },
  hi: {
    'nav.home': 'होम',
    'nav.philosophy': 'दर्शन',
    'nav.programs': 'कार्यक्रम',
    'nav.mascot': 'पिक्सेल वर्ल्ड',
    'nav.parents': 'माता-पिता के लिए',
    'nav.support': 'सहायता',
    'nav.join': 'फ्री जुड़ें',
    'hero.title1': 'ऊर्जा. सीखना.',
    'hero.title2': 'बढ़ना.',
    'hero.subtitle': 'अंक नहीं। एक बच्चा जो बिना डर के बोलता है। हम पिक्सेल के साथ इंटरैक्टिव 3D रोमांच के माध्यम से सीखने को शुद्ध आनंद में बदल देते हैं।',
    'hero.cta': 'यात्रा शुरू करें',
    'hero.vision': 'हमारा दृष्टिकोण',
    'hero.trusted': "भारत का विश्वसनीय शुभंकर",
    'philosophy.title': 'आधिकारिक PIXO विधि',
    'philosophy.subtitle': "दुनिया के सबसे अनुकूल डिजिटल साथी के साथ निर्मित।",
    'philosophy.energy': 'ऊर्जा',
    'philosophy.learn': 'सीखना',
    'philosophy.grow': 'विकास',
    'philosophy.energyDesc': 'खेल को उद्देश्य में बदलना।',
    'philosophy.learnDesc': 'संवाद के माध्यम से खोज।',
    'philosophy.growDesc': 'दृश्यमान, निडर परिवर्तन।',
    'modal.title': 'साहसिक कार्य में शामिल हों!',
    'modal.desc': 'पिक्सेल के साथ अपनी यात्रा शुरू करने और अंग्रेजी बोलने में महारत हासिल करने के लिए एक निःशुल्क खाता बनाएँ।',
    'modal.placeholder': "माता-पिता का ईमेल पता",
    'modal.cta': 'मुफ्त सीखना शुरू करें'
  },
  ta: {
    'nav.home': 'முகப்பு',
    'nav.philosophy': 'தத்துவம்',
    'nav.programs': 'நிகழ்ச்சிகள்',
    'nav.mascot': 'பிக்சல் உலகம்',
    'nav.parents': 'பெற்றோருக்கு',
    'nav.support': 'ஆதரவு',
    'nav.join': 'இலவசமாக சேருங்கள்',
    'hero.title1': 'ஆற்றல். கற்றல்.',
    'hero.title2': 'வளர்ச்சி.',
    'hero.subtitle': 'மதிப்பெண்கள் அல்ல. பயமில்லாமல் பேசும் ஒரு குழந்தை. பிக்சலுடன் ஊடாடும் 3D சாகசங்கள் மூலம் கற்றலை தூய மகிழ்ச்சியாக மாற்றுகிறோம்.',
    'hero.cta': 'பயணத்தைத் தொடங்குங்கள்',
    'hero.vision': 'பார்வை',
    'hero.trusted': "இந்தியாவின் நம்பகமான சின்னம்",
    'philosophy.title': 'அதிகாரப்பூர்வ PIXO முறை',
    'philosophy.subtitle': "உலகின் மிகவும் நட்பு ரீதியான டிஜிட்டல் துணையுடன் உருவாக்கப்பட்டது.",
    'philosophy.energy': 'ஆற்றல்',
    'philosophy.learn': 'கற்றல்',
    'philosophy.grow': 'வளர்ச்சி',
    'philosophy.energyDesc': 'விளையாட்டை நோக்கமாக மாற்றுதல்.',
    'philosophy.learnDesc': 'உரையாடல் மூலம் கண்டுபிடிப்பு.',
    'philosophy.growDesc': 'புலப்படும், அச்சமற்ற மாற்றம்.',
    'modal.title': 'சாகசத்தில் இணையுங்கள்!',
    'modal.desc': 'பிக்சலுடன் உங்கள் பயணத்தைத் தொடங்கவும் ஆங்கிலம் பேசுவதில் தேர்ச்சி பெறவும் இலவசக் கணக்கை உருவாக்கவும்.',
    'modal.placeholder': "பெற்றோரின் மின்னஞ்சல் முகவரி",
    'modal.cta': 'இலவசமாக கற்கத் தொடங்குங்கள்'
  },
  te: {
    'nav.home': 'హోమ్',
    'nav.philosophy': 'తత్వశాస్త్రం',
    'nav.programs': 'కార్యక్రమాలు',
    'nav.mascot': 'పిక్సెల్ ప్రపంచం',
    'nav.parents': 'తల్లిదండ్రుల కోసం',
    'nav.support': 'మద్దతు',
    'nav.join': 'ఉచితంగా చేరండి',
    'hero.title1': 'శక్తి. నేర్చుకోవడం.',
    'hero.title2': 'ఎదగడం.',
    'hero.subtitle': 'మార్కులు కాదు. భయం లేకుండా మాట్లాడే బిడ్డ. పిక్సెల్‌తో ఇంటరాక్టివ్ 3D అడ్వెంచర్స్ ద్వారా మేము నేర్చుకోవడాన్ని స్వచ్ఛమైన ఆనందంగా మారుస్తాము.',
    'hero.cta': 'ప్రయాణాన్ని ప్రారంభించండి',
    'hero.vision': 'దృష్టి',
    'hero.trusted': "భారతదేశపు అత్యంత విశ్వసనీయ చిహ్నం",
    'philosophy.title': 'అధికారిక PIXO పద్ధతి',
    'philosophy.subtitle': "ప్రపంచంలోని అత్యంత స్నేహపూర్వక డిజిటల్ తోడుతో నిర్మించబడింది.",
    'philosophy.energy': 'శక్తి',
    'philosophy.learn': 'నేర్చుకోవడం',
    'philosophy.grow': 'ఎదగడం',
    'philosophy.energyDesc': 'ఆటను లక్ష్యంగా మార్చడం.',
    'philosophy.learnDesc': 'సంభాషణ ద్వారా అన్వేషణ.',
    'philosophy.growDesc': 'కనిపించే, నిర్భయమైన మార్పు.',
    'modal.title': 'సాహసయాత్రలో చేరండి!',
    'modal.desc': 'పిక్సెల్‌తో మీ ప్రయాణాన్ని ప్రారంభించడానికి మరియు ఇంగ్లీష్ మాట్లాడటంలో ప్రావీణ్యం సంపాదించడానికి ఉచిత ఖాతాను సృష్టించండి.',
    'modal.placeholder': "తల్లిదండ్రుల ఇమెయిల్ చిరునామా",
    'modal.cta': 'ఉచితంగా నేర్చుకోవడం ప్రారంభించండి'
  },
  kn: {
    'nav.home': 'ಮುಖಪುಟ',
    'nav.philosophy': 'ತತ್ವಶಾಸ್ತ್ರ',
    'nav.programs': 'ಕಾರ್ಯಕ್ರಮಗಳು',
    'nav.mascot': 'ಪಿಕ್ಸೆಲ್ ವರ್ಲ್ಡ್',
    'nav.parents': 'ಪೋಷಕರಿಗಾಗಿ',
    'nav.support': 'ಬೆಂಬಲ',
    'nav.join': 'ಉಚಿತವಾಗಿ ಸೇರಿ',
    'hero.title1': 'ಶಕ್ತಿ. ಕಲಿಕೆ.',
    'hero.title2': 'ಬೆಳವಣಿಗೆ.',
    'hero.subtitle': 'ಅಂಕಗಳಲ್ಲ. ಭಯವಿಲ್ಲದೆ ಮಾತನಾಡುವ ಮಗು. ಪಿಕ್ಸೆಲ್‌ನೊಂದಿಗೆ ಸಂವಾದಾತ್ಮಕ 3D ಸಾಹಸಗಳ ಮೂಲಕ ನಾವು ಕಲಿಕೆಯನ್ನು ಶುದ್ಧ ಆನಂದವಾಗಿ ಬದಲಾಯಿಸುತ್ತೇವೆ.',
    'hero.cta': 'ಪ್ರಯಾಣ ಪ್ರಾರಂಭಿಸಿ',
    'hero.vision': 'ದೃಷ್ಟಿಕೋನ',
    'hero.trusted': "ಭಾರತದ ವಿಶ್ವಾಸಾರ್ಹ ಮ್ಯಾಸ್ಕಾಟ್",
    'philosophy.title': 'ಅಧಿಕೃತ PIXO ವಿಧಾನ',
    'philosophy.subtitle': "ವಿಶ್ವದ ಅತ್ಯಂತ ಸ್ನೇಹಪರ ಡಿಜಿಟಲ್ ಒಡನಾಡಿಯೊಂದಿಗೆ ನಿರ್ಮಿಸಲಾಗಿದೆ.",
    'philosophy.energy': 'ಶಕ್ತಿ',
    'philosophy.learn': 'ಕಲಿಕೆ',
    'philosophy.grow': 'ಬೆಳವಣಿಗೆ',
    'philosophy.energyDesc': 'ಆಟವನ್ನು ಉದ್ದೇಶವಾಗಿ ಬದಲಾಯಿಸುವುದು.',
    'philosophy.learnDesc': 'ಸಂವಾದದ ಮೂಲಕ ಅನ್ವೇಷಣೆ.',
    'philosophy.growDesc': 'ಕಾಣುವಂತಹ, ನಿರ್ಭೀತ ಬದಲಾವಣೆ.',
    'modal.title': 'ಸಾಹಸದಲ್ಲಿ ಸೇರಿ!',
    'modal.desc': 'ಪಿಕ್ಸೆಲ್‌ನೊಂದಿಗೆ ನಿಮ್ಮ ಪ್ರಯಾಣವನ್ನು ಪ್ರಾರಂಭಿಸಲು ಮತ್ತು ಇಂಗ್ಲಿಷ್ ಮಾತನಾಡುವುದನ್ನು ಕಲಿಯಲು ಉಚಿತ ಖಾತೆಯನ್ನು ರಚಿಸಿ.',
    'modal.placeholder': "ಪೋಷಕರ ಇಮೇಲ್ ವಿಳಾಸ",
    'modal.cta': 'ಉಚಿತವಾಗಿ ಕಲಿಯಲು ಪ್ರಾರಂಭಿಸಿ'
  },
  ml: {
    'nav.home': 'ഹോം',
    'nav.philosophy': 'തത്വശാസ്ത്രം',
    'nav.programs': 'പ്രോഗ്രാമുകൾ',
    'nav.mascot': 'പിക്സൽ വേൾഡ്',
    'nav.parents': 'രക്ഷിതാക്കൾക്ക്',
    'nav.support': 'പിന്തുണ',
    'nav.join': 'സൗജന്യമായി ചേരൂ',
    'hero.title1': 'ഊർജ്ജം. പഠനം.',
    'hero.title2': 'വളർച്ച.',
    'hero.subtitle': 'മാർക്കുകളല്ല. ഭയമില്ലാതെ സംസാരിക്കുന്ന ഒരു കുട്ടി. പിക്സലിനൊപ്പമുള്ള ഇന്ററാക്ടീവ് 3D സാഹസങ്ങളിലൂടെ ഞങ്ങൾ പഠനത്തെ ശുദ്ധമായ സന്തോഷമാക്കി മാറ്റുന്നു.',
    'hero.cta': 'യാത്ര തുടങ്ങൂ',
    'hero.vision': 'വീക്ഷണം',
    'hero.trusted': "ഇന്ത്യയുടെ വിശ്വസ്ത ചിഹ്നം",
    'philosophy.title': 'ഔദ്യോഗിക PIXO രീതി',
    'philosophy.subtitle': "ലോകത്തിലെ ഏറ്റവും സൗഹൃദപരമായ ഡിജിറ്റൽ കൂട്ടുകാരനോടൊപ്പം നിർമ്മിച്ചത്.",
    'philosophy.energy': 'ഊർജ്ജം',
    'philosophy.learn': 'പഠനം',
    'philosophy.grow': 'വളർച്ച',
    'philosophy.energyDesc': 'കളിയെ ലക്ഷ്യമാക്കി മാറ്റുന്നു.',
    'philosophy.learnDesc': 'സംഭാഷണത്തിലൂടെയുള്ള കണ്ടെത്തൽ.',
    'philosophy.growDesc': 'ദൃശ്യമായ, നിർഭയമായ മാറ്റം.',
    'modal.title': 'സാഹസികതയിൽ പങ്കുചേരൂ!',
    'modal.desc': 'പിക്സലിനൊപ്പം നിങ്ങളുടെ യാത്ര തുടങ്ങാനും ഇംഗ്ലീഷ് സംസാരിക്കാൻ പഠിക്കാനും ഒരു സൗജന്യ അക്കൗണ്ട് തുടങ്ങൂ.',
    'modal.placeholder': "രക്ഷിതാവിന്റെ ഇമെയിൽ വിലാസം",
    'modal.cta': 'സൗജന്യമായി പഠനം തുടങ്ങൂ'
  }
};

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<LanguageCode>('en');

  const t = (key: string): string => {
    return (translations[language] as any)[key] || (translations['en'] as any)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
