import { useState } from 'react'
import { Sidebar } from 'primereact/sidebar'
import { Button } from 'primereact/button'
import { getMenuList } from '../utils/menuList'
import useLenguajeFormalTranslations from '../hooks/useLenguajeFormalTranslations'
import { useTheme } from '../context/ThemeContext'

const Menu = () => {
  const { theme } = useTheme()
  const { t } = useLenguajeFormalTranslations('common')
  const [visible, setVisible] = useState<boolean>(false)

  const menuList = getMenuList(t)

  const handleMenuClick = () => {
    setVisible(false)
  }

  return (
    <div className="card flex justify-content-end">
      <Sidebar
        visible={visible}
        onHide={() => setVisible(false)}
        position={theme === 'redes' ? 'right' : undefined}
        fullScreen={theme !== 'redes'}
        className="bg-proyectos"
      >
        <div className="flex flex-column align-items-center">
          <h1 className="mb-3">Menu</h1>
          {menuList.map((item) => (
            <div key={item.id} className="mb-2 w-full text-center">
              {theme === 'redes' ? (
                <Button
                  onClick={() => (window.location.hash = item.link)}
                  className="p-3 cursor-pointer p-button-raised bg-boton rd-focus w-full"
                  label={item.label}
                />
              ) : (
                <div className="border-bottom-1 mt-5 mb-5">
                  <a
                    href={`#${item.link}`}
                    className="text-3xl"
                    onClick={handleMenuClick}
                  >
                    {item.label}
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </Sidebar>
      <Button
        icon="pi pi-bars"
        className="hamburguesa"
        onClick={() => setVisible(true)}
      />
    </div>
  )
}

export default Menu
