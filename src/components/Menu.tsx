import { useState } from 'react'
import { Sidebar } from 'primereact/sidebar'
import { Button } from 'primereact/button'

const Menu = () => {
  const [visible, setVisible] = useState<boolean>(false)

  const menuItems = [
    { label: 'Inicio', id: '#inicio' },
    { label: 'Historia', id: '#historia' },
    { label: 'Proyectos', id: '#proyectos' },
    { label: 'Cursos', id: '#cursos,' },
    { label: 'Contacto', id: '#contacto' },
  ]

  const handleMenuClick = () => {
    setVisible(false)
  }

  return (
    <div className="card flex justify-content-end">
      <Sidebar visible={visible} onHide={() => setVisible(false)} fullScreen>
        <div className="flex flex-column align-items-center">
          <h1 className="mb-3">Menu</h1>
          {menuItems.map((item) => (
            <div key={item.id} className="mb-3">
              <a
                href={item.id}
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
        className="bg-primary"
        onClick={() => setVisible(true)}
      />
    </div>
  )
}

export default Menu
