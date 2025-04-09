import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import esCommon from '../translations/es/common.json'
import esProyectos from '../translations/es/proyectos.json'
import enCommon from '../translations/en/common.json'
import enProyectos from '../translations/en/proyectos.json'
import deCommon from '../translations/de/common.json'
import deProyectos from '../translations/de/proyectos.json'

const resources = {
  es: {
    common: esCommon,
    proyectos: esProyectos,
  },
  en: {
    common: enCommon,
    proyectos: enProyectos,
  },
  de: {
    common: deCommon,
    proyectos: deProyectos,
  },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es',
    ns: ['common', 'proyectos'],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
