import FullScreenDemo from "./Menu";

const Header = () => {
  return (
    <div
      className="p-2 text-white bg-bluegray-900"
      style={{
        fontWeight: "medium",
      }}
    >
      <ul className="list-none flex align-items-center justify-content-between items-center font-medium mb-3">
        <li>
          <a
            href="https://sabatie.com.ar/"
            className="text-white hover:text-primary-500 font-bold no-underline"
          >
            https://sabatie.com.ar/
          </a>
        </li>
        <li className="flex">
          <div className="md:hidden ml-4">
            <FullScreenDemo />
          </div>
          <a
            href=""
            className="mr-4 text-gray-500 hover:text-primary-500 font-bold no-underline hidden md:block"
          >
            Educación
          </a>

          <a
            href=""
            className="mr-4 text-gray-500 hover:text-primary-500 font-bold no-underline hidden md:block"
          >
            Proyectos
          </a>

          <a
            href=""
            className="mr-4 text-gray-500 hover:text-primary-500 font-bold no-underline hidden md:block"
          >
            Testimonios
          </a>

          <a
            href=""
            className="mr-4 text-gray-500 hover:text-primary-500 font-bold no-underline hidden md:block"
          >
            Contacto
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
