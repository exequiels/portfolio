import { useState, useEffect } from 'react'
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown'
import { useTranslation } from 'react-i18next'
import { useTheme } from '../context/ThemeContext'

interface LanguageOption {
  label: string
  code: string
  countryCode: string
}

const LanguageSwitcherDropdown = () => {
  const { theme } = useTheme()
  const { i18n } = useTranslation()
  const { t } = useTranslation('common')

  const idiomaOptions: LanguageOption[] = [
    { code: 'es', label: t('languageSwitcher.español'), countryCode: 'es' },
    { code: 'en', label: t('languageSwitcher.ingles'), countryCode: 'gb' },
    { code: 'de', label: t('languageSwitcher.aleman'), countryCode: 'de' },
  ]

  const [selectedLanguage, setSelectedLanguage] =
    useState<LanguageOption | null>(null)

  useEffect(() => {
    const currentLang = i18n.language
    const found = idiomaOptions.find((opt) => opt.code === currentLang)
    setSelectedLanguage(found || null)
  }, [i18n.language])

  const onLanguageChange = (e: DropdownChangeEvent) => {
    const selected = e.value as LanguageOption
    setSelectedLanguage(selected)
    i18n.changeLanguage(selected.code)
  }

  const renderOption = (
    option: LanguageOption,
    props?: { placeholder?: string }
  ) => {
    if (!option) return <span>{props?.placeholder}</span>

    return (
      <div className="flex align-items-center">
        <img
          alt={option.label}
          src={`https://flagcdn.com/w40/${option.countryCode}.png`}
          className="mr-2"
          style={{ width: '20px' }}
        />
        <div className="block md:hidden">
          <i className="pi pi-language"></i>
        </div>
        <div className="hidden md:block">{option.label}</div>
      </div>
    )
  }

  return (
    <div className="card flex justify-content-end mb-2 mr-1 ml-1 md:ml-0">
      <Dropdown
        value={selectedLanguage}
        onChange={onLanguageChange}
        options={idiomaOptions}
        optionLabel="label"
        placeholder={t('languageSwitcher.selecciona')}
        valueTemplate={renderOption}
        itemTemplate={renderOption}
        className={`md:w-14rem ${theme === 'redes' ? 'no-highlight' : ''}`}
      />
    </div>
  )
}

export default LanguageSwitcherDropdown
