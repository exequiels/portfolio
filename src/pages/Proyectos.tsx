import { Card } from 'primereact/card'
import proyectosLista from '../utils/proyectosLista.json'

type Proyecto = {
  id: string
  titulo: string
  descripcion: string
  lista: string[]
  seguimiento: string
  actualidad: string
  links: string | Array<{ url: string; texto: string }> | ''
}

const Proyectos = () => {
  const proyectosList: Proyecto[] = proyectosLista.proyectosLista

  return (
    <div
      id="proyectos"
      className="min-h-screen flex align-items-center justify-content-center text-800 w-full"
    >
      <div className="grid w-full mt-5" style={{ maxWidth: '1200px' }}>
        <div className="col-12 text-left">
          <h2 className="text-4xl font-bold mb-3">Proyectos</h2>
          {proyectosList.map((proyecto) => (
            <Card key={proyecto.id} className="p-3 bg-white mb-3" unstyled>
              <h3 className="mb-2">{proyecto.titulo}</h3>
              <p>{proyecto.descripcion}</p>
              <ul>
                {proyecto.lista.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              {proyecto.seguimiento && <p>{proyecto.seguimiento}</p>}
              {proyecto.actualidad && <p>{proyecto.actualidad}</p>}

              {proyecto.links &&
                (typeof proyecto.links === 'string' ? (
                  <div className="flex justify-content-end">
                    <a
                      href={proyecto.links}
                      target="_blank"
                      style={{ color: 'blue', textDecoration: 'underline' }}
                    >
                      {proyecto.links}
                    </a>
                  </div>
                ) : (
                  proyecto.links.map((link, index) => (
                    <div key={index} className="flex justify-content-end">
                      <a
                        href={link.url}
                        target="_blank"
                        style={{ color: 'blue', textDecoration: 'underline' }}
                      >
                        {link.texto}
                      </a>
                    </div>
                  ))
                ))}
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Proyectos
