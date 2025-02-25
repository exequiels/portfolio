import { Card } from 'primereact/card'

const Proyectos = () => {
  return (
    <div
      id="proyectos"
      className="min-h-screen flex align-items-center justify-content-center surface-0 text-800 w-full"
    >
      <div className="grid w-full mt-5" style={{ maxWidth: '1200px' }}>
        <div className="col-12 text-left">
          <h2 className="text-4xl font-bold mb-3">Proyectos</h2>
          <Card title="Gestión de Proyectos BIM y ACC">
            <p>
              Desarrollé un sistema web en PHP (sin frameworks), HTML, MySQL,
              CSS y Bootstrap, integrando las APIs de Autodesk para optimizar la
              gestión de proyectos en BIM 360 y ACC.
            </p>

            <ul>
              <li>Autenticación de usuarios con control de sesiones.</li>
              <li>
                Visualización de proyectos y gestión de información clave.
              </li>
              <li>
                Administración de issues y permisos para acceso a proyectos.
              </li>
              <li>
                Creación y seguimiento de trouble tickets en BIM 360 y ACC.
              </li>
              <li>
                Seguimiento de usuarios para monitorear actividad e inactividad
                en Autodesk.
              </li>
            </ul>

            <p>
              Posteriormente, el proyecto evolucionó a una versión en React,
              TypeScript y AWS, donde participé como colaborador en su
              desarrollo y mejora.
            </p>

            <p>
              Aún trabajo en este proyecto interno de la empresa y puedo proveer
              el contacto de la persona a cargo en la actualidad si es
              necesario.
            </p>
          </Card>

          <Card title="Plataforma de Videojuegos Usados" className="mt-5">
            <p>
              Desarrollé un sitio web en PHP (sin frameworks), HTML, MySQL, CSS
              y Bootstrap, enfocado en la compra y venta de videojuegos usados.
            </p>

            <ul>
              <li>
                Integración con las APIs de MercadoLibre para mostrar las
                últimas novedades en videojuegos usados.
              </li>
              <li>
                Implementación de modelos (MVC) para estructurar el código de
                forma modular.
              </li>
              <li>Autenticación y gestión de usuarios con control de roles.</li>
              <li>Renovación y obtención de tokens mediante cron jobs.</li>
              <li>Extracción automatizada de datos con cron jobs.</li>
              <li>
                Paginación optimizada para cargar contenido dinámico según la
                página solicitada.
              </li>
              <li>
                Panel de administración para gestionar publicaciones y usuarios.
              </li>
              <li>
                Sistema de error logging centralizado, registrando y mostrando
                errores en un solo lugar.
              </li>
              <li>
                Control de acceso a secciones del sitio basado en roles de
                usuario.
              </li>
              <li>Diseño responsivo y optimizado para dispositivos móviles.</li>
            </ul>

            <div className="flex justify-content-end">
              <a
                href="https://reusados.net"
                target="_blank"
                style={{ color: 'blue', textDecoration: 'underline' }}
              >
                https://reusados.net/
              </a>
            </div>
          </Card>

          <Card title="Migración de WordPress" className="mt-5">
            <p>
              Realicé la migración completa de dos sitios web en WordPress desde
              un hosting a otro, asegurando la correcta transferencia de
              archivos, base de datos y correos electrónicos.
            </p>

            <ul>
              <li>
                Respaldé y restauré la base de datos MySQL y los archivos del
                sitio.
              </li>
              <li>
                Configuré el entorno en el nuevo hosting, asegurando
                compatibilidad con PHP y MySQL.
              </li>
              <li>Actualicé y ajusté la configuración del dominio y DNS.</li>
              <li>
                Recreé y configuré cuentas de correo en el nuevo hosting,
                asegurando su correcto funcionamiento.
              </li>
              <li>
                Optimizé la carga del sitio y configuraciones del servidor.
              </li>
              <li>
                Verifiqué la funcionalidad del sitio y los plugins tras la
                migración.
              </li>
              <li>
                Implementé medidas de seguridad para proteger el sitio en su
                nueva ubicación.
              </li>
            </ul>

            <div className="flex justify-content-end">
              <a
                href="https://sgtours.com.ar/"
                target="_blank"
                style={{ color: 'blue', textDecoration: 'underline' }}
              >
                https://sgtours.com.ar/
              </a>
            </div>
            <div className="flex justify-content-end">
              <a
                href="https://sentimendoza.com.ar/"
                target="_blank"
                style={{ color: 'blue', textDecoration: 'underline' }}
              >
                https://sentimendoza.com.ar/
              </a>
            </div>
          </Card>

          <Card title="Blog con Afiliados" className="mt-5">
            <p>
              Un blog dedicado a compartir experiencias personales, con enlaces
              de afiliados y calculadoras útiles para bebés, todo desarrollado
              en React y utilizando PrimeReact. Un recurso para padres y futuros
              padres con contenido práctico y de valor.
            </p>

            <ul>
              <li>Experiencias personales en la crianza y cuidado de bebés.</li>
              <li>Enlaces de afiliados a productos recomendados.</li>
              <li>
                Herramientas útiles como calculadoras para el bienestar
                infantil.
              </li>
            </ul>

            <div className="flex justify-content-end">
              <a
                href="https://parabebes.com.ar/"
                target="_blank"
                style={{ color: 'blue', textDecoration: 'underline' }}
              >
                https://parabebes.com.ar/
              </a>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Proyectos
