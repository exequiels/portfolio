import React from "react";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Footer from "./components/Footer";

const App = () => {
  const value = {
    ripple: true,
  };
  return (
    <PrimeReactProvider value={value}>
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
