import React from "react";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeflex/primeflex.css";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Cursos from "./components/Cursos";

const App = () => {
  return (
    <PrimeReactProvider>
      <main>
        <Header />
        <Landing />
        {/* <Projects /> */}
        {/* <Cursos /> */}
        {/* <Contact /> */}
        <Footer />
      </main>
    </PrimeReactProvider>
  );
};

export default App;
