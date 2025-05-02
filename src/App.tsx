import { PrimeReactProvider } from 'primereact/api'
import './utils/i18n'
import { useTranslation } from 'react-i18next'
import Header from './components/Header'
import Intro from './pages/Intro'
import Historia from './pages/Historia'
import Footer from './components/Footer'
import Proyectos from './pages/Proyectos'
import Contacto from './pages/Contacto'
import 'primereact/resources/themes/lara-light-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import SEO from './components/SEO'
import Cursos from './pages/Cursos'
import { LenguajeFormalProvider } from './context/LenguajeFormalContext'
import { useTheme } from './context/ThemeContext'
import { useEffect } from 'react'

const App = () => {
  const value = {
    ripple: true,
  }

  const { theme } = useTheme()
  const isDefault = theme === 'default'

  useEffect(() => {
    document.body.classList.remove('default', 'formal', 'redes')
    document.body.classList.add(theme)
  }, [theme])

  const { t } = useTranslation('common')
  return (
    <PrimeReactProvider value={value}>
      <LenguajeFormalProvider>
        <SEO
          title={`Exequiel Sabatie | ${t('seo.titulo')}`}
          description={t('seo.descripcion')}
        />
        <main>
          <Header />
          <Intro />
          {isDefault && <hr />}
          <Historia />
          {isDefault && <hr />}
          <Proyectos />
          {isDefault && <hr />}
          <Cursos />
          {isDefault && <hr />}
          <Contacto />
          {isDefault && <hr />}
          <Footer />
        </main>
      </LenguajeFormalProvider>
    </PrimeReactProvider>
  )
}

export default App
