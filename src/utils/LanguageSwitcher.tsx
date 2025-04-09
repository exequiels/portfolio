import { useTranslation } from 'react-i18next'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()

  const codigoIdiomas = [
    { code: 'es', label: 'ES' },
    { code: 'en', label: 'EN' },
    { code: 'de', label: 'DE' },
  ]

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }
  return (
    <div className="flex justify-content-end flex gap-2 mb-2 mr-1">
      {codigoIdiomas.map((idiomas) => (
        <button
          key={idiomas.code}
          className={i18n.language === idiomas.code ? '' : 'cursor-pointer'}
          onClick={() => changeLanguage(idiomas.code)}
          disabled={i18n.language === idiomas.code}
        >
          {idiomas.label}
        </button>
      ))}
    </div>
  )
}

export default LanguageSwitcher
