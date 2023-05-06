import React, { useState } from "react";

interface FormValues {
  nombre: string;
  apellido: string;
  direccion: string;
  telefono: string;
  email: string;
}

function Formulario() {
  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState<FormValues>({
    nombre: "",
    apellido: "",
    direccion: "",
    telefono: "",
    email: "",
  });

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Formulario enviado:", formValues);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
    <div className="w-96 p-6 bg-white rounded-md shadow-lg">
      {step === 1 && (
        <div className="flex flex-col space-y-4">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formValues.nombre}
            onChange={handleInputChange}
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <label htmlFor="apellido">Apellido:</label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            value={formValues.apellido}
            onChange={handleInputChange}
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Siguiente
          </button>
        </div>
      )}
  
      {step === 2 && (
        <div className="flex flex-col space-y-4">
          <label htmlFor="direccion">Dirección:</label>
          <input
            type="text"
            id="direccion"
            name="direccion"
            value={formValues.direccion}
            onChange={handleInputChange}
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <label htmlFor="telefono">Teléfono:</label>
          <input
            type="text"
            id="telefono"
            name="telefono"
            value={formValues.telefono}
            onChange={handleInputChange}
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex justify-between">
            <button
              onClick={handlePrevious}
              className="px-4 py-2 text-gray-600 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Anterior
            </button>
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Siguiente
            </button>
          </div>
        </div>
      )}
  
      {step === 3 && (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formValues.email}
            onChange={handleInputChange}
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex justify-between">
            <button
              onClick={handlePrevious}
              className="px-4 py-2 text-gray-600 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
              Anterior
              </button>
              <button
                       type="submit"
                       className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                     >
              Enviar
              </button>
              </div>
              </form>
              )}
            </div>
            </div>
  );
}

export default Formulario;
