import { useTheme } from '../context/ThemeContext'
import { getMenuList } from '../utils/menuList'
import useLenguajeFormalTranslations from '../hooks/useLenguajeFormalTranslations'
import { Proyecto } from './types/project'

const Footer = () => {
  const { theme } = useTheme()
  const { t } = useLenguajeFormalTranslations('common')
  const { t: tProyectos } = useLenguajeFormalTranslations('proyectos')

  const proyectosList: Proyecto[] =
    (tProyectos('proyectosLista', {
      returnObjects: true,
    }) as unknown as Proyecto[]) || []

  const imageList = [
    { id: 1, imagen: 'frontpage_logo.gif' },
    { id: 2, imagen: 'mysql.gif' },
    { id: 3, imagen: 'apache_pb.gif' },
    { id: 4, imagen: 'php3.jpg' },
    { id: 5, imagen: 'ygeo2.gif' },
  ]

  const redesSociales = [
    {
      id: 1,
      pipi: 'pi-youtube',
      link: 'https://www.youtube.com/@ExequielsCodetoLife',
    },
    {
      id: 2,
      pipi: 'pi-linkedin',
      link: 'https://www.linkedin.com/in/exequiel-sabatie/',
    },
    { id: 3, pipi: 'pi-github', link: 'https://github.com/exequiels/' },
    { id: 4, pipi: 'pi-facebook', link: '#' },
    {
      id: 5,
      pipi: 'pi-instagram',
      link: '#',
    },
  ]

  const menuList = getMenuList(t)

  return (
    <footer
      className={`p-4 font-weight-medium ${
        theme === 'default'
          ? ''
          : `bg-footer ${theme === 'formal' ? 'bg-formal' : ''}`
      }`}
    >
      {theme === 'default' && (
        <div className="mt-4 text-center">
          {imageList.map((img) => (
            <img key={img.id} src={`./images/${img.imagen}`} className="ml-4" />
          ))}
        </div>
      )}

      {theme === 'redes' && (
        <div className="flex justify-content-end text-white gap-3">
          {redesSociales.map((pi) => (
            <a href={pi.link}>
              <i className={`pi ${pi.pipi}`} style={{ fontSize: '1.5rem' }}></i>
            </a>
          ))}
        </div>
      )}

      {theme === 'formal' && (
        <div className="text-primary mb-5 grid">
          <div className="col-12 md:col-4 flex justify-content-start md:justify-content-center align-items-center">
            <div className="text-left">
              {menuList.map((list) => (
                <p key={list.id}>
                  <a href={`#${list.link}`}>{list.label}</a>
                </p>
              ))}
            </div>
          </div>
          <div className="col-12 md:col-4 flex justify-content-start md:justify-content-center align-items-center">
            <div className="text-left">
              {proyectosList.map((proyecto) => (
                <p key={proyecto.id}>
                  <a href={`#${proyecto.id}`}>{proyecto.titulo}</a>
                </p>
              ))}
            </div>
          </div>
          <div className="col-12 md:col-4 flex justify-content-center align-items-center gap-3 mt-4 md:mt-0">
            {redesSociales.map((pi) => (
              <a href={pi.link} target="_blank">
                <i
                  className={`pi ${pi.pipi}`}
                  style={{ fontSize: '1.5rem' }}
                ></i>
              </a>
            ))}
          </div>
        </div>
      )}

      <div
        className={`text-center ${
          theme === 'redes' ? 'text-white mt-3' : 'mt-4'
        }`}
      >
        <p>© 2025 Exequiel Sabatie. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
