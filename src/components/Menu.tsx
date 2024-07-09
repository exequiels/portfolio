import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";

export default function FullScreenDemo() {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <div className="card flex justify-content-center">
      <Sidebar visible={visible} onHide={() => setVisible(false)} fullScreen>
        <div className="flex flex-column align-items-center">
          <h1 className="mb-3">Menu</h1>
          <div className="mb-3">
            <a
              href=""
              className="mb-3 text-gray-500 hover:text-primary-500 font-bold no-underline"
            >
              Educación
            </a>
          </div>
          <div className="mb-3">
            <a
              href=""
              className="mb-3 text-gray-500 hover:text-primary-500 font-bold no-underline"
            >
              Proyectos
            </a>
          </div>
          <div className="mb-3">
            <a
              href=""
              className="mb-3 text-gray-500 hover:text-primary-500 font-bold no-underline"
            >
              Testimonios
            </a>
          </div>
          <div className="mb-3">
            <a
              href=""
              className="mb-3 text-gray-500 hover:text-primary-500 font-bold no-underline"
            >
              Contacto
            </a>
          </div>
        </div>
      </Sidebar>
      <Button icon="pi pi-window-maximize" onClick={() => setVisible(true)} />
    </div>
  );
}
