import { themeStyles } from '../themes'
import { useTheme } from '../context/ThemeContext'
import useLenguajeFormalTranslations from '../hooks/useLenguajeFormalTranslations'
import { LenguajeFormalContext } from '../context/LenguajeFormalContext'
import { useContext } from 'react'
import { Button } from 'primereact/button'

const Intro = () => {
  const { theme } = useTheme()
  const estilos = themeStyles[theme]
  const { t } = useLenguajeFormalTranslations('common')
  const { isLenguajeFormal } = useContext(LenguajeFormalContext)
  const isDefault = theme === 'default'

  const obtenerSaludoFormal = () => {
    const hora = new Date().getHours()

    if (hora >= 5 && hora < 12) {
      return t('intro.saludos_formal_dia.buenos_dias')
    } else if (hora >= 12 && hora < 20) {
      return t('intro.saludos_formal_dia.buenas_tardes')
    } else {
      return t('intro.saludos_formal_dia.buenas_noches')
    }
  }

  return (
    <div
      id="inicio"
      className="min-h-screen flex align-items-center justify-content-center text-800 w-full mt-3 md:mt-0"
    >
      <div className="grid w-full mt-5" style={{ maxWidth: '1200px' }}>
        <div className="col-12 md:col-6 text-left md:text-left flex align-items-center">
          <div>
            <div className="text-2xl mt-0 mb-2 text-700 line-height-3">
              {isLenguajeFormal ? obtenerSaludoFormal() : t('intro.saludos')}
            </div>
            <div className="block text-6xl font-bold mb-1">
              Exequiel Sabatié
            </div>
            <div className={`mb-3 ${estilos.queHago}`}>{t('intro.frase')}</div>
            <p className="text-2xl mt-0 mb-4 text-700 line-height-3">
              {t('intro.descripcion')}
            </p>
            <div className="flex justify-content-center md:justify-content-start">
              <a href="#historia">
                <Button
                  onClick={() => (window.location.hash = 'historia')}
                  className="p-3 my-2 cursor-pointer p-button-raised"
                  label={t('intro.botonMiHistoria')}
                  unstyled={estilos.sinEstilo}
                />
              </a>
              <a href="#contacto">
                <Button
                  onClick={() => (window.location.hash = 'contacto')}
                  className="p-3 m-2 cursor-pointer p-button-outlined"
                  label={t('intro.botonContacto')}
                  unstyled={estilos.sinEstilo}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 md:col-6 text-center flex justify-content-center align-items-center">
          <img
            src={
              isDefault
                ? './images/exequiel_low_quality_2.jpg'
                : './images/exequiel.jpg'
            }
            alt="Exequiel Sabatié"
            className={`block md:ml-auto md:ml-auto block md:h-full p-mx-auto p-my-2 ${estilos.img}`}
            style={{
              width: '100%',
              maxWidth: '400px',
              height: 'auto',
            }}
            title={t('intro.imagen')}
          />
        </div>
      </div>
    </div>
  )
}

export default Intro
