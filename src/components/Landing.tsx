import { Button } from "primereact/button";
import FullScreen from "./Fullscreen";

const Landing = () => {
  return (
    <FullScreen
      justifyContent="center"
      alignItems="center"
      isDarkBackground
      backgroundColor="#FFFFFF"
    >
      <div className="grid grid-nogutter surface-0 text-800">
        <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
          <section>
            <p className="text-2xl mt-0 mb-2 text-700 line-height-3">
              Hola, soy
            </p>
            <span className="block text-6xl font-bold mb-1">
              Exequiel Sabatié
            </span>
            <div className="text-6xl text-primary font-bold mb-3">
              Construyo cosas para la web.
            </div>
            <p className="text-2xl mt-0 mb-4 text-700 line-height-3">
              Soy un desarrollador en construcción, actualmente residiendo en
              San Juan - Argentina.
            </p>

            <Button
              label="Mi historia"
              type="button"
              className="mr-3 p-button-raised"
            />
            <Button
              label="Contacto"
              type="button"
              className="p-button-outlined"
            />
          </section>
        </div>
        <div className="col-12 md:col-6 overflow-hidden">
          <img
            src="./images/exequiel.jpg"
            alt="hero-1"
            className="md:ml-auto block md:h-full p-mx-auto p-my-2"
            style={{
              clipPath: "polygon(8% 0, 100% 0%, 100% 100%, 0 100%)",
              width: "500px",
              height: "auto",
            }}
          />
        </div>
      </div>
    </FullScreen>
  );
};

export default Landing;
