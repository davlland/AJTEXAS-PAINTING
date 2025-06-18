import React from 'react';
import ScrollReveal from './ScrollReveal';

const About = () => (
  <section id="sobre-nosotros" className="py-12 bg-fondo">
    <div className="container max-w-3xl text-left text-neutroOscuro space-y-8 text-lg">
      <ScrollReveal>
        <h2 className="text-3xl font-bold text-primario mb-2">Sobre Nosotros</h2>
      </ScrollReveal>
      <ScrollReveal>
        <p>
          En <span className="text-primario font-semibold">AJ Texas Painting</span> llevamos más de 10 años dedicados a transformar espacios residenciales con pasión y profesionalidad. El compromiso constante con la excelencia y la satisfacción de nuestros clientes nos ha permitido crecer de forma sostenida, manteniendo siempre un trato cercano y personalizado.
        </p>
      </ScrollReveal>
      <ScrollReveal>
        <div className="border-l-4 border-acento1 pl-4 bg-acento2/30 py-4 rounded">
          <h3 className="text-2xl font-bold text-primario mb-2 mt-2">Nuestros valores</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><b>Calidad:</b> Utilizamos materiales de primeras marcas y técnicas contrastadas para asegurar acabados duraderos y estéticos.</li>
            <li><b>Integridad:</b> Trabajamos con transparencia, ofreciendo presupuestos claros y respetando plazos y presupuestos acordados.</li>
            <li><b>Orientación al cliente:</b> Cada proyecto se adapta a tus necesidades; escuchamos tus ideas y te asesoramos en cada paso.</li>
            <li><b>Sostenibilidad:</b> Apostamos por productos y procesos que reduzcan el impacto ambiental sin sacrificar eficacia ni calidad.</li>
            <li><b>Trabajo en equipo:</b> La coordinación entre nuestros pintores, yeseros y profesionales de campo garantiza resultados impecables.</li>
          </ul>
        </div>
      </ScrollReveal>
      <ScrollReveal direction="x">
        <div className="border-l-4 border-acento1 pl-4 bg-acento2/30 py-4 rounded">
          <h3 className="text-2xl font-bold text-primario mb-2 mt-2">Nuestros objetivos</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Superar las expectativas en cada proyecto, tanto en el nivel técnico como estético.</li>
            <li>Consolidar relaciones de confianza a largo plazo con comunidades de vecinos, administradores y propietarios.</li>
            <li>Innovar constantemente en métodos y productos para ofrecer soluciones más eficientes y sostenibles.</li>
            <li>Ampliar nuestra presencia en la región manteniendo siempre el trato cercano y la atención al detalle.</li>
          </ul>
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <div className="border-l-4 border-acento1 pl-4 bg-acento2/30 py-4 rounded">
          <h3 className="text-2xl font-bold text-primario mb-2 mt-2">Nuestros compromisos con el cliente</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><b>Comunicación fluida:</b> Informarte puntualmente sobre el avance de los trabajos.</li>
            <li><b>Cumplimiento de plazos:</b> Planificación rigurosa para terminar en el tiempo previsto, sin sorpresas.</li>
            <li><b>Garantía de satisfacción:</b> Revisiones finales y retoques gratuitos hasta que estés plenamente satisfecho.</li>
            <li><b>Limpieza y orden:</b> Nos encargamos de proteger tus espacios y recogemos todo material al finalizar.</li>
            <li><b>Asesoramiento continuo:</b> Te guiamos en la elección de colores, acabados y soluciones técnicas, incluso tras la finalización del proyecto.</li>
          </ul>
        </div>
      </ScrollReveal>
      <ScrollReveal>
        <p className="mt-6">
          En <span className="text-primario font-semibold">AJ Texas Painting</span>, tu proyecto es nuestra prioridad: implicación, rigor y compromiso para que cada rincón de tu hogar refleje tu estilo y se mantenga impecable durante años.
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default About;