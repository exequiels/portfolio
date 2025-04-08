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
        <div className="col-12 text-left">
          <h2 className="text-4xl font-bold mb-3">Github Repository</h2>
          <ul>
            <li className="m-5">
              <a
                href="https://github.com/exequiels?tab=repositories"
                title=""
                target="_blank"
              >
                https://github.com/exequiels?tab=repositories
              </a>
              <p>
                Este es mi repositorio público. Aquí agregaré proyectos y
                prácticas, la mayoría de mis proyectos son privados y debo dar
                permiso para que puedan ser vistos.
              </p>
            </li>
            <li className="m-5">
              <a
                href="https://github.com/exequiels?tab=repositories"
                title=""
                target="_blank"
              >
                https://github.com/exequiels/wiki-extract
              </a>
              <p>
                Este es un extracto directo de mi wiki personal. Este año decidí
                que era una buena idea crear una wiki con todo lo que voy
                aprendiendo y construyendo. Hay muchas cosas que no documenté en
                su momento, y ahora intento mantener un registro que me ayude a
                aprender y llevar cierta estructura, orden, estrategias y
                pensamientos propios sobre lo que aprendo y construyo. Este
                extracto sería un resumen de mi wiki personal.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cursos
