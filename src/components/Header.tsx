const Header = () => {
  const menuList = [
    { id: 1, label: 'Inicio' },
    { id: 2, label: 'Historia' },
    { id: 3, label: 'Proyectos' },
    { id: 4, label: 'Cursos' },
    { id: 5, label: 'Contacto' },
  ]

  return (
    <header>
      <div className="text-center py-1 text-left">
        <a href="https://sabatie.com.ar/" className="hover:no-underline">
          https://sabatie.com.ar/
        </a>
      </div>
      <div
        className="text-center mx-auto px-4 py-3"
        style={{ background: 'white' }}
      >
        {menuList.map((list) => (
          <span key={list.id} className="mx-2">
            <a href={`#${list.label.toLowerCase()}`}>{list.label}</a>
          </span>
        ))}
      </div>
    </header>
  )
}

export default Header
