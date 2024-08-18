import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enHome from "./en/home.json";
import enAbout from "./en/about.json";
import enServices from "./en/services.json";
import enHeader from "./en/header.json";
import enFooter from "./en/footer.json";

import deHome from "./de/home.json";
import deAbout from "./de/about.json";
import deServices from "./de/services.json";
import deHeader from "./de/header.json";
import deFooter from "./de/footer.json";

import frHome from "./fr/home.json";
import frAbout from "./fr/about.json";
import frServices from "./fr/services.json";
import frHeader from "./fr/header.json";
import frFooter from "./fr/footer.json";

import ukHome from "./uk/home.json";
import ukAbout from "./uk/about.json";
import ukServices from "./uk/services.json";
import ukHeader from "./uk/header.json";
import ukFooter from "./uk/footer.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        home: enHome,
        about: enAbout,
        services: enServices,
        header: enHeader,
        footer: enFooter,
      },
      de: {
        home: deHome,
        about: deAbout,
        services: deServices,
        header: deHeader,
        footer: deFooter,
      },
      fr: {
        home: frHome,
        about: frAbout,
        services: frServices,
        header: frHeader,
        footer: frFooter,
      },
      uk: {
        home: ukHome,
        about: ukAbout,
        services: ukServices,
        header: ukHeader,
        footer: ukFooter,
      },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
