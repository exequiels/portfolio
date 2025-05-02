import { themeStyles } from '../themes'
import { useTheme } from '../context/ThemeContext'
import useLenguajeFormalTranslations from '../hooks/useLenguajeFormalTranslations'
import { LenguajeFormalContext } from '../context/LenguajeFormalContext'
import { useContext } from 'react'

const Intro = () => {
  const { theme } = useTheme()
  const estilos = themeStyles[theme]
  const { t } = useLenguajeFormalTranslations('common')
  const { isLenguajeFormal } = useContext(LenguajeFormalContext)

  return (
    <div
      id="inicio"
      className="min-h-screen flex align-items-center justify-content-center text-800 w-full mt-3 md:mt-0"
    >
      <div className="grid w-full mt-5" style={{ maxWidth: '1200px' }}>
        <div className="col-12 md:col-6 text-left md:text-left flex align-items-center">
          <div>
            <div className="text-2xl mt-0 mb-2 text-700 line-height-3">
              {t('intro.saludos')}
            </div>
            <div className="block text-6xl font-bold mb-1">
              Exequiel Sabatié
            </div>
            <div className="text-6xl text-primary font-bold mb-3">
              {t('intro.frase')}
            </div>
            <p className="text-2xl mt-0 mb-4 text-700 line-height-3">
              {t('intro.descripcion')}
            </p>
            <div className="flex justify-content-center md:justify-content-start">
              <a href="#historia">
                <button
                  onClick={() => (window.location.hash = 'historia')}
                  className="p-3 my-2 cursor-pointer"
                >
                  {t('intro.botonMiHistoria')}
                </button>
              </a>
              <a href="#contacto">
                <button
                  onClick={() => (window.location.hash = 'contacto')}
                  className="p-3 m-2 cursor-pointer"
                >
                  {t('intro.botonContacto')}
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 md:col-6 text-center flex justify-content-center align-items-center">
          <img
            src={
              isLenguajeFormal
                ? './images/exequiel.jpg'
                : './images/exequiel_low_quality_2.jpg'
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

{
  /* <Button
label="Mi historia"
className="mr-3 p-button-raised z-0"
style={{ position: "static" }}
/>
</a>
<a href="#contacto">
<Button
label="Contacto"
className="p-button-outlined z-0"
style={{ position: "static" }}
/>
</a> */
}
