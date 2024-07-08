import React from "react";

const Header = () => {
  return (
    <div
      className="p-2 text-white bg-bluegray-900"
      style={{
        fontWeight: "medium",
      }}
    >
      <ul className="list-none flex justify-content-between items-center font-medium mb-3">
        <li>
          <a
            href="https://sabatie.com.ar/"
            className="text-white hover:text-primary-500 font-bold no-underline"
          >
            https://sabatie.com.ar/
          </a>
        </li>
        <li className="flex">
          <a
            href=""
            className="mr-4 text-white hover:text-primary-500 font-bold no-underline"
          >
            Estudios
          </a>
          <a
            href=""
            className="mr-4 text-white hover:text-primary-500 font-bold no-underline"
          >
            Proyectos
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
