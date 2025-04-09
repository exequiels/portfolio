import { useTranslation } from 'react-i18next'

const Cursos = () => {
  const { t } = useTranslation('common')

  const certificados = t('cursos.certificados', {
    returnObjects: true,
  }) as string[]

  return (
    <div
      id="cursos"
      className="min-h-screen flex align-items-center justify-content-center text-800 w-full"
    >
      <div className="grid w-full mt-5" style={{ maxWidth: '1200px' }}>
        <div className="col-12 text-left">
          <h2 className="text-4xl font-bold mb-3">{t('cursos.titulo')}</h2>
          <ul>
            {certificados.map((label, index) => (
              <li key={index} className="m-5">
                <a
                  href={`./files/${label}.pdf`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-12 text-left">
          <h2 className="text-4xl font-bold mb-3">{t('github.titulo')}</h2>
          <ul>
            <li className="m-5">
              <a
                href="https://github.com/exequiels?tab=repositories"
                title=""
                target="_blank"
              >
                https://github.com/exequiels?tab=repositories
              </a>
              <p>{t('github.parrafo1')}</p>
            </li>
            <li className="m-5">
              <a
                href="https://github.com/exequiels/wiki-extract"
                title=""
                target="_blank"
              >
                https://github.com/exequiels/wiki-extract
              </a>
              <p>{t('github.parrafo2')}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cursos
