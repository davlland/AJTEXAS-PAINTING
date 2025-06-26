import React, { useRef, useState } from 'react';

const FORM_ACTION = "https://formsubmit.co/contacto@ajtexaspainting.com"; // Cambia el email si es necesario
const COOLDOWN_SECONDS = 15;

const motivos = [
  "Presupuesto",
  "Soporte",
  "Trabaja con nosotros",
  "Otro"
];

const Contact = () => {
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [cooldown, setCooldown] = useState(0);
  const formRef = useRef(null);
  const headingRef = useRef(null);

  // Cooldown para evitar spam
  React.useEffect(() => {
    if (cooldown > 0) {
      const timer = setTimeout(() => setCooldown(cooldown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [cooldown]);

  // Devuelve el focus al encabezado tras enviar
  React.useEffect(() => {
    if (success && headingRef.current) {
      headingRef.current.focus();
    }
  }, [success]);

  // Validación nativa + deshabilitar botón si no es válido
  const [isValid, setIsValid] = useState(false);
  const handleInput = (e) => {
    if (formRef.current) {
      setIsValid(formRef.current.checkValidity());
    }
  };

  // Manejo de envío
  const handleSubmit = async (e) => {
    setError("");
    setSuccess("");
    setSending(true);
    setCooldown(COOLDOWN_SECONDS);
    // Deja que el form haga POST normal
  };

  return (
    <section id="contacto" className="py-12 bg-fondo">
      <h2
        className="text-3xl font-bold text-primario mb-4 outline-none"
        tabIndex={-1}
        ref={headingRef}
      >
        Contáctanos
      </h2>
      <p className="text-neutroOscuro mb-8">Ponte en contacto con nosotros para más información.</p>
      <form
        ref={formRef}
        className="max-w-xl mx-auto bg-white/90 rounded-2xl shadow-lg p-8 flex flex-col gap-6 border border-acento2"
        method="POST"
        action={FORM_ACTION}
        onInput={handleInput}
        onSubmit={handleSubmit}
        autoComplete="on"
      >
        {/* Campos ocultos FormSubmit */}
        <input type="hidden" name="_next" value="/contacto?success=1" />
        <input type="hidden" name="_subject" value="Nuevo mensaje de contacto desde la web" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
        {/* Campos visibles */}
        <div>
          <label htmlFor="nombre" className="block font-medium text-primario mb-1">Nombre completo *</label>
          <input
            id="nombre"
            name="Nombre"
            type="text"
            required
            placeholder="Juan Pérez"
            className="w-full px-4 py-2 rounded border border-acento2 focus:ring-2 focus:ring-primario outline-none"
            autoComplete="name"
            minLength={3}
            maxLength={60}
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-medium text-primario mb-1">Email *</label>
          <input
            id="email"
            name="Email"
            type="email"
            required
            placeholder="juan@email.com"
            className="w-full px-4 py-2 rounded border border-acento2 focus:ring-2 focus:ring-primario outline-none"
            autoComplete="email"
            pattern="^[^@\s]+@[^@\s]+\.[^@\s]+$"
          />
        </div>
        <div>
          <label htmlFor="telefono" className="block font-medium text-primario mb-1">Teléfono</label>
          <input
            id="telefono"
            name="Teléfono"
            type="tel"
            placeholder="+1 (512) 555-1234"
            className="w-full px-4 py-2 rounded border border-acento2 focus:ring-2 focus:ring-primario outline-none"
            autoComplete="tel"
            pattern="^[+]?[(]?[0-9]{1,4}[)]?[-\s\./0-9]*$"
            maxLength={25}
          />
        </div>
        <div>
          <label htmlFor="motivo" className="block font-medium text-primario mb-1">Motivo de contacto *</label>
          <select
            id="motivo"
            name="Motivo"
            required
            className="w-full px-4 py-2 rounded border border-acento2 focus:ring-2 focus:ring-primario outline-none"
            defaultValue=""
          >
            <option value="" disabled>Selecciona una opción</option>
            {motivos.map(m => <option key={m} value={m}>{m}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="mensaje" className="block font-medium text-primario mb-1">Mensaje *</label>
          <textarea
            id="mensaje"
            name="Mensaje"
            required
            placeholder="Escríbenos los detalles…"
            className="w-full px-4 py-2 rounded border border-acento2 focus:ring-2 focus:ring-primario outline-none min-h-[120px] resize-vertical"
            minLength={10}
            maxLength={1000}
          />
        </div>
        {/* Mensaje de éxito/error accesible */}
        <div aria-live="polite" className="min-h-[24px]">
          {sending && <span className="text-primario">Enviando…</span>}
          {success && <span className="text-green-700 font-semibold">{success}</span>}
          {error && <span className="text-red-600 font-semibold">{error}</span>}
        </div>
        <button
          type="submit"
          className={`bg-primario hover:bg-primarioOscuro text-fondo font-bold py-2 px-6 rounded-lg shadow transition-colors focus:outline-none focus:ring-2 focus:ring-primario ${sending || !isValid || cooldown > 0 ? 'opacity-60 cursor-not-allowed' : ''}`}
          disabled={sending || !isValid || cooldown > 0}
        >
          {sending ? (
            <span className="flex items-center gap-2"><svg className="animate-spin h-5 w-5 text-fondo" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path></svg>Enviando…</span>
          ) : cooldown > 0 ? `Espera ${cooldown}s…` : 'Enviar'}
        </button>
      </form>
    </section>
  );
};

export default Contact;