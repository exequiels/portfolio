import { useTranslation } from 'react-i18next'
import LanguageSwitcher from '../utils/LanguageSwitcher'

const Header = () => {
  const { t } = useTranslation('common')

  const menuList = [
    { id: 1, label: t('menu.inicio'), link: 'inicio' },
    { id: 2, label: t('menu.historia'), link: 'historia' },
    { id: 3, label: t('menu.proyectos'), link: 'proyectos' },
    { id: 4, label: t('menu.cursos'), link: 'cursos' },
    { id: 5, label: t('menu.contacto'), link: 'contacto' },
  ]

  return (
    <header>
      <div className="text-center py-1 text-left">
        <img
          src="./images/logo_roto.jpg"
          className="mx-2"
          title={t('menu.logo')}
        />
        <a href="https://sabatie.com.ar/" className="hover:no-underline">
          https://sabatie.com.ar/
        </a>
      </div>
      <LanguageSwitcher />
      <div className="text-center mx-auto py-3" style={{ background: 'white' }}>
        {menuList.map((list) => (
          <span key={list.id} className="mx-2">
            <a href={`#${list.link}`}>{list.label}</a>
          </span>
        ))}
      </div>
    </header>
  )
}

export default Header
