import { useState } from 'react'
import { Sidebar } from 'primereact/sidebar'
import { Button } from 'primereact/button'
import { getMenuList } from '../utils/menuList'
import useLenguajeFormalTranslations from '../hooks/useLenguajeFormalTranslations'

const Menu = () => {
  const { t } = useLenguajeFormalTranslations('common')
  const [visible, setVisible] = useState<boolean>(false)

  const menuList = getMenuList(t)

  const handleMenuClick = () => {
    setVisible(false)
  }

  return (
    <div className="card flex justify-content-end">
      <Sidebar visible={visible} onHide={() => setVisible(false)} fullScreen>
        <div className="flex flex-column align-items-center">
          <h1 className="mb-3">Menu</h1>
          {menuList.map((item) => (
            <div key={item.id} className="mb-3">
              <a
                href={`#${item.link}`}
                className="mb-3 text-gray-500 hover:text-primary-500 font-bold no-underline"
                onClick={handleMenuClick}
              >
                {item.label}
              </a>
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
