import { themeStyles } from '../themes'
import { useTheme } from '../context/ThemeContext'
import LanguageSwitcher from '../utils/LanguageSwitcher'
import LanguageSwitcherDropdown from '../utils/LanguageSwitcherDropdown'
import useLenguajeFormalTranslations from '../hooks/useLenguajeFormalTranslations'
import Menu from './Menu'
import { getMenuList } from '../utils/menuList'

const Header = () => {
  const { theme } = useTheme()
  const estilos = themeStyles[theme]
  const { t } = useLenguajeFormalTranslations('common')
  const isDefault = theme === 'default'
  const isRedes = theme === 'redes'

  const menuList = getMenuList(t)

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
          {theme === 'redes' ? 'SABATIE' : t('menu.sabatie')}
        </a>
      </div>
      {isDefault ? <LanguageSwitcher /> : <LanguageSwitcherDropdown />}
      <div className="mx-auto py-3 bg-menu">
        <div className={estilos.menu}>
          <Menu />
        </div>
        <div className={estilos.container}>
          {menuList.map((list) => (
            <span key={list.id} className={`${isRedes ? 'mx-5' : 'mx-2'}`}>
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
