import { themeStyles } from '../themes'
import { useTheme } from '../context/ThemeContext'
import { Card } from 'primereact/card'
import { useTranslation } from 'react-i18next'
import { Proyecto } from '../components/types/project'

const Proyectos = () => {
  const { theme } = useTheme()
  const estilos = themeStyles[theme]
  const { t } = useTranslation('proyectos')
  const isRedes = theme === 'redes'

  const proyectosList: Proyecto[] =
    (t('proyectosLista', { returnObjects: true }) as unknown as Proyecto[]) ||
    []

  const getHeader = (proyecto: Proyecto) => {
    const imagenSrc = proyecto.imagen || `./images/icon.png`

    return (
      <div className="flex justify-content-center">
        <a href={`${proyecto.imagen}`} target="_blank" rel="noopener">
          <img
            alt={`Proyecto ${proyecto.titulo}`}
            className="border-dashed img-border"
            src={imagenSrc}
            style={{
              width: '100%',
              maxWidth: '450px',
              height: '250px',
            }}
          />
        </a>
      </div>
    )
  }

  return (
    <div
      id="proyectos"
      className="min-h-screen flex align-items-center justify-content-center text-800 w-full"
    >
      <div
        className="grid w-full mt-5 align-stretch"
        style={{ maxWidth: '1200px' }}
      >
        <h2 className="text-4xl font-bold mb-3">{t('titulo')}</h2>
        <div className="flex flex-wrap w-full">
          {proyectosList.map((proyecto) => (
            <div
              key={proyecto.id}
              className={`p-2 w-full ${isRedes ? 'md:w-6 lg:w-6' : ''} flex`}
            >
              <div className="flex flex-column w-full">
                <Card
                  className="p-3 bg-proyectos mb-3 w-full h-full flex flex-column"
                  unstyled={estilos.sinEstilo}
                  header={isRedes ? getHeader(proyecto) : undefined}
                >
                  <h3 className="mb-2" id={proyecto.id}>
                    {proyecto.titulo}
                  </h3>
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
                      <div className="flex justify-content-end mt-2">
                        <a href={proyecto.links} target="_blank" rel="noopener">
                          {proyecto.links}
                        </a>
                      </div>
                    ) : (
                      proyecto.links.map((link, index) => (
                        <div
                          key={index}
                          className="flex justify-content-end mt-2"
                        >
                          {link.url?.trim() ? (
                            <a href={link.url} target="_blank" rel="noopener">
                              {link.texto}
                            </a>
                          ) : (
                            <span>{link.texto}</span>
                          )}
                        </div>
                      ))
                    ))}
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Proyectos
