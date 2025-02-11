import { useState, useRef } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Card } from "primereact/card";
import { Toast } from "primereact/toast";

const Contacto = () => {
  const toast = useRef<Toast>(null);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const validateEmail = (email: string): boolean => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
  };

  const isFormValid = () => {
    return (
      formData.nombre.trim() !== "" &&
      formData.email.trim() !== "" &&
      validateEmail(formData.email) &&
      formData.mensaje.trim() !== "" &&
      formData.mensaje.length <= 1000 &&
      formData.nombre.length <= 100
    );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://sabatie.com.ar/contacto.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      toast.current?.show({
        severity: data.message.includes(":(") ? "error" : "success",
        summary: data.message.includes(":(") ? "Error" : "Éxito",
        detail: data.message,
        life: 3000,
      });

      if (!data.message.includes(":(")) {
        setFormData({
          nombre: "",
          email: "",
          mensaje: "",
        });
      }
    } catch (error) {
      toast.current?.show({
        severity: "error",
        summary: "Error",
        detail:
          error instanceof Error
            ? error.message
            : "Hubo un problema al enviar el mensaje",
        life: 3000,
      });
    }
  };

  return (
    <div
      id="contacto"
      className="min-h-screen flex align-items-center justify-content-center bg-gray-100 mt-5"
    >
      <Toast ref={toast} />
      <div className="grid w-full" style={{ maxWidth: "1200px" }}>
        <div className="col-12 text-left">
          <h2 className="text-4xl font-bold mb-3">Contacto</h2>

          <Card title="Hablamos?">
            <form onSubmit={handleSubmit}>
              <div className="p-field p-mb-3">
                <label htmlFor="nombre">Nombre</label>
                <InputText
                  id="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>

              <div className="p-field p-mb-3 mt-2">
                <label htmlFor="email">Correo Electrónico</label>
                <InputText
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>

              <div className="p-field p-mb-3 mt-2">
                <label htmlFor="mensaje">Mensaje</label>
                <InputTextarea
                  id="mensaje"
                  rows={5}
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>

              <div className="p-field p-mb-3 flex justify-content-end mt-2">
                <Button
                  label="Enviar"
                  type="submit"
                  className="p-mt-3"
                  disabled={!isFormValid()}
                />
              </div>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
