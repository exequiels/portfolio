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

const App = () => {
  const value = {
    ripple: true,
  }

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
          <hr />
          <Historia />
          <hr />
          <Proyectos />
          <hr />
          <Cursos />
          <hr />
          <Contacto />
          <hr />
          <Footer />
        </main>
      </LenguajeFormalProvider>
    </PrimeReactProvider>
  )
}

export default App
