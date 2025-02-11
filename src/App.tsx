import { PrimeReactProvider } from "primereact/api";
import Header from "./components/Header";
import Intro from "./pages/Intro";
import Historia from "./pages/Historia";
import Footer from "./components/Footer";
import Proyectos from "./pages/Proyectos";
import Contacto from "./pages/Contacto";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

const App = () => {
  const value = {
    ripple: true,
  };
  return (
    <PrimeReactProvider value={value}>
      <main>
        <Header />
        <Intro />
        <Historia />
        <Proyectos />
        <Contacto />
        <Footer />
      </main>
    </PrimeReactProvider>
  );
};

export default App;
