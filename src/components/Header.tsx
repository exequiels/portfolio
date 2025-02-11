import Menu from "./Menu";

const Header = () => {
  return (
    // <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out bg-bluegray-900 shadow-2xl">
    <header className="sticky top-0 z-50 bg-bluegray-900">
      <div className="container mx-auto px-4 py-2">
        <ul className="list-none flex align-items-center justify-content-between items-center font-medium">
          <li>
            <a
              href="https://sabatie.com.ar/"
              className="text-white hover:text-primary-500 font-bold no-underline"
            >
              https://sabatie.com.ar/
            </a>
          </li>
          <li className="flex align-items-center">
            <div className="md:hidden ml-4">
              <Menu />
            </div>
            <div className="hidden md:flex">
              <a
                href="#inicio"
                className="mr-4 text-gray-500 hover:text-primary-500 font-bold no-underline"
              >
                Inicio
              </a>
              <a
                href="#historia"
                className="mr-4 text-gray-500 hover:text-primary-500 font-bold no-underline"
              >
                Historia
              </a>
              <a
                href="#proyectos"
                className="mr-4 text-gray-500 hover:text-primary-500 font-bold no-underline"
              >
                Proyectos
              </a>
              <a
                href="#contacto"
                className="mr-4 text-gray-500 hover:text-primary-500 font-bold no-underline"
              >
                Contacto
              </a>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
