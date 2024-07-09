import React from "react";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import Educacion from "./components/Educacion";
import MiHistoria from "./components/MiHistoria";
import Projects from "./components/Projects";
import Servicios from "./components/Servicios";
import Contact from "./components/Contact";

const App = () => {
  const value = {
    ripple: true,
  };
  return (
    <PrimeReactProvider value={value}>
      <main>
        <Header />
        <Landing />
        <MiHistoria />
        <Educacion />
        <Projects />
        <Servicios />
        <Contact />
        <Footer />
      </main>
    </PrimeReactProvider>
  );
};

export default App;
