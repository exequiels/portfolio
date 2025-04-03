const Intro = () => {
  return (
    <div
      id="inicio"
      className="min-h-screen flex align-items-center justify-content-center text-800 w-full mt-3 md:mt-0"
    >
      <div className="grid w-full" style={{ maxWidth: '1200px' }}>
        <div className="col-12 md:col-6 text-left md:text-left flex align-items-center">
          <div>
            <div className="text-2xl mt-0 mb-2 text-700 line-height-3">
              Hola, soy
            </div>
            <div className="block text-6xl font-bold mb-1">
              Exequiel Sabatié
            </div>
            <div className="text-6xl text-primary font-bold mb-3">
              Construyo cosas para la web.
            </div>
            <p className="text-2xl mt-0 mb-4 text-700 line-height-3">
              Soy un desarrollador en construcción, actualmente residiendo en
              San Juan - Argentina.
            </p>
            <div className="flex justify-content-center md:justify-content-start">
              <a href="#historia">
                <button
                  onClick={() => (window.location.hash = 'historia')}
                  className="p-3 my-2 cursor-pointer"
                >
                  Mi Historia
                </button>
              </a>
              <a href="#contacto">
                <button
                  onClick={() => (window.location.hash = 'contacto')}
                  className="p-3 m-2 cursor-pointer"
                >
                  Contacto
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 md:col-6 text-center flex justify-content-center align-items-center">
          <img
            src="./images/exequiel.jpg"
            alt="Exequiel Sabatié"
            className="block md:ml-auto md:ml-auto block md:h-full p-mx-auto p-my-2"
            style={{
              width: '100%',
              maxWidth: '400px',
              height: 'auto',
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Intro
