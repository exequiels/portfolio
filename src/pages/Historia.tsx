import useLenguajeFormalTranslations from '../hooks/useLenguajeFormalTranslations'

const Historia = () => {
  const { t } = useLenguajeFormalTranslations('common')

  return (
    <div
      id="historia"
      className="min-h-screen flex align-items-center justify-content-center text-800 w-full px-4 md:px-6"
    >
      <div className="grid w-full mt-5" style={{ maxWidth: '1200px' }}>
        <div className="col-12 text-left text-xl md:text-2xl text-700 line-height-3">
          <h2 className="text-4xl font-bold mb-3">{t('historia.titulo')}</h2>
          <p>{t('historia.parrafo1')}</p>
          <p className="mt-3">{t('historia.parrafo2')}</p>
        </div>
      </div>
    </div>
  )
}

export default Historia
