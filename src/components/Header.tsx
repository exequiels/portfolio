import { themeStyles } from '../themes'
import { useTheme } from '../context/ThemeContext'
import LanguageSwitcher from '../utils/LanguageSwitcher'
import LanguageSwitcherDropdown from '../utils/LanguageSwitcherDropdown'
import useLenguajeFormalTranslations from '../hooks/useLenguajeFormalTranslations'
import Menu from './Menu'

const Header = () => {
  const { theme } = useTheme()
  const estilos = themeStyles[theme]
  const { t } = useLenguajeFormalTranslations('common')

  const menuList = [
    { id: 1, label: t('menu.inicio'), link: 'inicio' },
    { id: 2, label: t('menu.historia'), link: 'historia' },
    { id: 3, label: t('menu.proyectos'), link: 'proyectos' },
    { id: 4, label: t('menu.cursos'), link: 'cursos' },
    { id: 5, label: t('menu.contacto'), link: 'contacto' },
  ]

  return (
    <header className={estilos.headerContainer}>
      <div className={estilos.headerContent}>
        <img
          src={estilos.logoRuta}
          className={`mx-2`}
          style={estilos.logo || undefined}
          title={t('menu.logo')}
        />
        <a href="https://sabatie.com.ar/" className={estilos.linkHome}>
          {t('menu.sabatie')}
        </a>
      </div>
      {theme === 'default' ? (
        <LanguageSwitcher />
      ) : (
        <LanguageSwitcherDropdown />
      )}
      <div className="mx-auto py-3 bg-menu">
        <div className={estilos.menu}>
          <Menu />
        </div>
        <div className={estilos.container}>
          {menuList.map((list) => (
            <span key={list.id} className="mx-2">
              <a href={`#${list.link}`} className={estilos.link}>
                {list.label}
              </a>
            </span>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header
