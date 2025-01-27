// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
const resources = {
    en: {
      translation: {
        categories: {
            babyShower: 'BABY SHOWER',
            pubertyFunction: 'PUBERTY FUNCTION',
            consecration: 'consecration',
            earPiercingCeremony: 'EAR PIERCING CEREMONY',
            tonsuringCeremony: 'TONSURING CEREMONY',
            houseWarmingCeremony: 'HOUSE WARMING CEREMONY',
            wedding: 'WEDDING',
            firstHolyCommunion: 'FIRST HOLY COMMUNION',
            birthday: 'BIRTHDAY',
            baptism: 'BAPTISM',
            kovilKodaiVila: 'KOVIL KODAI VIZHA',
            nameCeremonyFunction: 'NAME CEREMONY FUNCTION',
            others : 'Others',
            
          },
        home: 'Home',
        photoFrames:'Photo Frames',
        gallery: 'Gallery',
        matrimony: 'Matrimony',
        pricing: 'Pricing',
        products: 'Products',
        about: 'About',
        bookSlot: 'Book a Slot Now',
        welcomeText: 'Welcome to New Brindha Studio',
        galleryLinkText: 'Gallery',
        pricingLinkText: 'Pricing',
        productLinkText: "Products",
        aboutLinkText: 'About',
        bookSlotFormTitle: 'Book Your Slot',
        photoFramesFormTitle: 'Photo Frames Form',
        formLabels: {
          name: 'Name',
          phone: 'Phone',
          eventDate: 'Event Date',
          eventTime: 'Event Time',
          eventType: 'Event Type',
          selectEventType: 'Select Event Type',
          frameSize: 'Frame Size',
        uploadPhotos: 'Upload Photos',
        selectFrame: 'Select a Frame',
        previewPhotos:'Preview Photos'
        },
        selectFrameSize: 'Select Frame Size',
        submitBtn: 'Submit',
        submitting: 'Submitting...',
        error: 'An unexpected error occurred',
      },
    },
    ta: {
      translation: {
        categories: {
            babyShower: 'வளைகாப்பு',
            pubertyFunction: 'பேறு தொழில்',
            consecration: 'கும்பாபிஷேக விழா',
            earPiercingCeremony: 'காது குத்து விழா',
            tonsuringCeremony: 'தொடக்க நிகழ்ச்சி',
            houseWarmingCeremony: 'புதுமனை புகுவிழா.',
            wedding: 'திருமணம்',
            firstHolyCommunion: 'முதல் புனித கம்யூனியன்',
            birthday: 'பிறந்த நாள்',
            baptism: 'திருப்பணம்',
            kovilKodaiVila: 'கோவில் கொடை விழா',
            nameCeremonyFunction: 'பெயர் நிகழ்ச்சி',
            others : 'மற்றவை',
          },
          photoFramesFormTitle: 'புகைப்படக் கட்டகம் முன்பதிவு',

        home: 'முகப்பு',
        gallery: 'கேலரி',
        matrimony: 'திருமணத்திற்கான அமைப்பு',
        pricing: 'விலை',
        products: 'எங்கள் தயாரிப்புகள்',
        photoFrames:'புகைப்படக் கட்டகம்',

        about: 'பற்றி',
        bookSlot: 'இப்போது ஒரு ஸ்லாட் முன்பதிவு செய்க',
        welcomeText: 'New Brindha ஸ்டூடியோவில் வரவேற்கின்றேன்',
        galleryLinkText: 'கேலரி',
        pricingLinkText: 'விலை',
        aboutLinkText: 'பற்றி',
        productLinkText: 'எங்கள் தயாரிப்புகள்',
        bookSlotFormTitle: 'உங்கள் ஸ்லாட் முன்பதிவு செய்யவும்',
        formLabels: {
          name: 'பெயர்',
          phone: 'தொலைபேசி',
          eventDate: 'நிகழ்வு தேதி',
          eventTime: 'நிகழ்வு நேரம்',
          eventType: 'நிகழ்வு வகை',
          selectEventType: 'ஒரு நிகழ்வைத் தேர்ந்தெடுக்கவும்',
          frameSize: 'புகைப்படக் கட்டகம் அளவு',
        uploadPhotos: 'புகைப்படங்களைப் பதிவேற்றவும்',
        selectFrame: 'ஒரு பீசா தேர்வு செய்யவும்',
        previewPhotos: "புகைப்பட முன்னோட்டம்"
        },
        selectFrameSize: ' கட்டகம் அளவைக் தேர்ந்தெடுக்கவும்',
        submitBtn: 'சமர்ப்பிக்கவும்',
        submitting: 'சமர்ப்பிக்கின்றேன்...',
        error: 'ஒரு எதிர்பாராத பிழை ஏற்பட்டது',
      },
    },
  };
  
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
