import React, { useState } from "react";
import { useForm } from "react-hook-form";

const FORM_ACTION = "https://formsubmit.co/tu@correo.com";
const NEXT_URL = "/"; // Redirige a la página principal

const CareersForm = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("nombre", data.nombre);
    formData.append("email", data.email);
    formData.append("telefono", data.telefono || "");
    formData.append("puesto", data.puesto);
    formData.append("cv", data.cv[0]);
    formData.append("carta", data.carta);
    // Campos ocultos
    formData.append("_captcha", "false");
    formData.append("_honeypot", "website");
    formData.append("website", "");
    formData.append("_next", window.location.origin + NEXT_URL);

    try {
      await fetch(FORM_ACTION, {
        method: "POST",
        body: formData,
      });
      setSent(true);
      reset();
      setTimeout(() => {
        window.location.href = NEXT_URL;
      }, 2000);
    } catch (e) {
      alert("Hubo un error al enviar el formulario. Intenta de nuevo más tarde.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-12 bg-fondo">
      <div className="container max-w-lg mx-auto bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-primario mb-6">Trabaja con nosotros</h2>
        {sent ? (
          <div className="text-center py-12">
            <p className="text-2xl text-primario font-bold mb-4">¡Enviado correctamente!</p>
            <p className="text-neutroOscuro">Serás redirigido a la página principal…</p>
          </div>
        ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
          encType="multipart/form-data"
        >
          {/* Campos ocultos obligatorios */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value={NEXT_URL} />
          <input type="hidden" name="_honeypot" value="website" />
          <input type="text" name="website" style={{ display: "none" }} tabIndex="-1" autoComplete="off" />

          <div>
            <label className="block text-sm font-medium text-primario mb-1">Nombre *</label>
            <input
              type="text"
              {...register("nombre", { required: "El nombre es obligatorio" })}
              className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primario ${errors.nombre ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.nombre && <span className="text-red-600 text-sm">{errors.nombre.message}</span>}
          </div>

          <div>
            <label className="block text-sm font-medium text-primario mb-1">Email *</label>
            <input
              type="email"
              {...register("email", {
                required: "El email es obligatorio",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Introduce un email válido"
                }
              })}
              className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primario ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.email && <span className="text-red-600 text-sm">{errors.email.message}</span>}
          </div>

          <div>
            <label className="block text-sm font-medium text-primario mb-1">Teléfono</label>
            <input
              type="tel"
              {...register("telefono")}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primario"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-primario mb-1">Puesto al que aspiras *</label>
            <input
              type="text"
              {...register("puesto", { required: "El puesto es obligatorio" })}
              className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primario ${errors.puesto ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.puesto && <span className="text-red-600 text-sm">{errors.puesto.message}</span>}
          </div>

          <div>
            <label className="block text-sm font-medium text-primario mb-1">Adjuntar CV (PDF o DOCX) *</label>
            <input
              type="file"
              accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              {...register("cv", { required: "El archivo de CV es obligatorio" })}
              className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primario file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-acento2 file:text-primario ${errors.cv ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.cv && <span className="text-red-600 text-sm">{errors.cv.message}</span>}
          </div>

          <div>
            <label className="block text-sm font-medium text-primario mb-1">Carta de presentación *</label>
            <textarea
              rows={4}
              {...register("carta", { required: "La carta de presentación es obligatoria" })}
              className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primario ${errors.carta ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.carta && <span className="text-red-600 text-sm">{errors.carta.message}</span>}
          </div>

          <button
            type="submit"
            className="w-full bg-primario text-fondo font-bold py-2 px-4 rounded hover:bg-secundario transition-colors disabled:opacity-60"
            disabled={isSubmitting || loading}
          >
            {loading ? "Enviando…" : "Enviar candidatura"}
          </button>
        </form>
        )}
      </div>
    </section>
  );
};

export default CareersForm; 