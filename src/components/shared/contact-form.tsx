"use client";

import { FormEvent } from "react";

export default function ContactForm() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData) as {
      nombre: string;
      email: string;
      asunto: string;
      mensaje: string;
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", 
      },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      alert("Mensaje enviado correctamente 🚀");
      form.reset();
    } else {
      alert("Hubo un error, intenta nuevamente.");
    }
  };

  return (
    <div className="w-full flex items-center justify-center p-3">
      <div className="bg-neutral-900 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 max-w-2xl w-full">

        <form onSubmit={handleSubmit} className="space-y-6 text-center mb-8">
          
          <div>
            <label htmlFor="nombre" className="block font-semibold mb-2">
              Nombre completo
            </label>
            <input
              required
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Ej: Juan Pérez"
              className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl 
                focus:outline-none  transition-all duration-300 
                focus:ring-4 text-gray-900"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-semibold mb-2">
              Correo electrónico
            </label>
            <input
              required
              type="email"
              id="email"
              name="email"
              placeholder="tu@email.com"
              className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl 
                focus:outline-none  focus:bg-white transition-all duration-300 
                focus:ring-4  text-gray-900"
            />
          </div>

          <div>
            <label htmlFor="asunto" className="block font-semibold mb-2">
              Asunto
            </label>
            <input
              required
              type="text"
              id="asunto"
              name="asunto"
              placeholder="¿De qué quieres hablar?"
              className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl 
                focus:outline-none transition-all duration-300 
                focus:ring-4  text-gray-900"
            />
          </div>

          <div>
            <label htmlFor="mensaje" className="block font-semibold mb-2">
              Mensaje
            </label>
            <textarea
              required
              id="mensaje"
              name="mensaje"
              rows={6}
              placeholder="Cuéntame sobre tu proyecto..."
              className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl 
                focus:outline-none transition-all duration-300 
                focus:ring-4  resize-vertical text-gray-900"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-linear-to-r from-indigo-500 to-purple-600 text-white font-bold py-4 px-6 
              rounded-xl hover:shadow-lg hover:scale-[1.02] active:scale-100 transition-all duration-300 text-lg"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </div>
  );
}
