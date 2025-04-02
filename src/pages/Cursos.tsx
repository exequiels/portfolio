const Cursos = () => {
  const menuCursos = [
    {
      id: 1,
      label: 'Certificado Meta - Introduction to Front-End Development',
    },
    {
      id: 2,
      label: 'Certificado Meta - Programming with JavaScript',
    },
    {
      id: 3,
      label: 'Certificado Meta - React Basics',
    },
    {
      id: 4,
      label: 'Certificado Meta - Version Control',
    },
    {
      id: 5,
      label: 'Certificado Meta - Advanced React',
    },
    {
      id: 6,
      label: 'Certificado UNLPAM - Maquetación web con HTML 5 y CSS',
    },
    {
      id: 7,
      label: 'Certificado UNLPAM - JavaScript Desarrollador Avanzado',
    },
    {
      id: 8,
      label: 'Certificado UNLPAM - Programación Web con PHP y MySQL',
    },
  ]

  return (
    <div
      id="cursos"
      className="min-h-screen flex align-items-center justify-content-center text-800 w-full"
    >
      <div className="grid w-full mt-5" style={{ maxWidth: '1200px' }}>
        <div className="col-12 text-left">
          <h2 className="text-4xl font-bold mb-3">Cursos</h2>
          <ul>
            {menuCursos.map((list) => (
              <li key={list.id} className="m-5">
                <a href={`./files/${list.label}.pdf`} title="" target="_blank">
                  {list.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cursos
