import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Navbar } from '../components/Navbar';
import { verifyJWT } from "../services/verifyJWT.js";
import { NavbarNotSession } from "../components/NavbarNotSession.jsx";

//Iconos
import { FaCircleUser } from "react-icons/fa6";
import { FaWpforms, FaChartBar, FaChartPie, FaTasks, FaTrash, FaCheckCircle } from "react-icons/fa";
import { MdCategory, MdDashboard } from "react-icons/md";
import { BsClipboardCheckFill } from "react-icons/bs";

// Imágenes
import P2 from "../public/img/P2.jpg";
import P3 from "../public/img/P3.jpg";
import P4 from "../public/img/P4.jpg";
import P5 from "../public/img/P5.jpg";

export const Help = () => {

  let tokenExist = verifyJWT()


  return (
  
    <div className="bg-gradient-to-b from-black via-zinc-950 to-gray-950">
              {tokenExist ? <Navbar /> : <NavbarNotSession />}

              
      <TextParallaxContent
        imgUrl={P2}
        subheading="Incorpórate"
        heading="Crea una cuenta y accede."
        helpContent={<HelpContent1 />} // Contenido específico para cada sección
      />

      <TextParallaxContent
        imgUrl={P3}
        subheading="Gestiona y Asegura"
        heading="Completa las áreas."
        helpContent={<HelpContent2 />}
      />

      <TextParallaxContent
        imgUrl={P4}
        subheading="Analiza y Evalúa"
        heading="Visualiza los datos."
        helpContent={<HelpContent3 />}
      />

      <TextParallaxContent
        imgUrl={P5}
        subheading="Planifica, Organiza y Controla"
        heading="Gestión sencilla de tus tareas."
        helpContent={<HelpContent4 />}
      />
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, helpContent }) => {
  return (
    <div style={{ paddingLeft: IMG_PADDING, paddingRight: IMG_PADDING }}>
      <div className="relative h-[150vh] mt-2">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {helpContent} {/* Muestra el contenido de ayuda aquí */}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-screen text-white"
    >
      <p className="mb-2 text-xl text-center md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-4xl font-bold text-center md:text-6xl">{heading}</p>
    </motion.div>
  );
};

const AnimatedHelpContent = ({ children }) => {
  return (
    <motion.div
      initial={{ x: 48, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 1.05 }}
      className="max-w-5xl px-4 pt-12 pb-20 mx-auto"
    >
      {children}
    </motion.div>
  );
};

// Contenidos de ayuda específicos
const HelpContent1 = () => (
  <AnimatedHelpContent>
    <h2 className="mb-8 text-3xl font-bold text-gray-400">
      Tu acceso a las funciones
    </h2>
    <div className="space-y-8">
      <div className="flex items-start">
        <FaCircleUser className="mr-4 text-orange-600 text-8xl" />
        <p className="text-xl text-white md:text-2xl">
          Para comenzar, haz clic en el botón "Iniciar sesión" en la parte superior derecha de la página. Esto te llevará a nuestra pestaña de login, donde podrás ingresar tu correo electrónico y contraseña. Si olvidaste tu contraseña, puedes recuperarla haciendo clic en "Olvidé mi contraseña".
        </p>
      </div>
      <div className="flex items-start">
        <FaWpforms className="mr-4 text-orange-600 text-7xl" />
        <p className="text-xl text-white md:text-2xl">
          Si aún no tienes una cuenta, selecciona la opción "Registrarse" en la misma pestaña. Completa el formulario con tus datos para crear tu cuenta. Una vez registrado, podrás iniciar sesión y aprovechar todas las funcionalidades de nuestra plataforma.
        </p>
      </div>
    </div>
  </AnimatedHelpContent>
);

const HelpContent2 = () => (
  <AnimatedHelpContent>
    <h2 className="mb-8 text-3xl font-bold text-gray-400">
      Gestiona la seguridad en tu entorno
    </h2>
    <div className="space-y-8">
      <div className="flex items-start">
        <MdCategory className="mr-4 text-orange-600 text-8xl" />
        <p className="text-xl text-white md:text-2xl">
          En nuestra plataforma, puedes gestionar la seguridad e higiene de tu entorno en los sectores de construcción, industrial o institucional. Comienza seleccionando el sector en el que trabajas y luego elige entre las categorías de seguridad específicas.
        </p>
      </div>
      <div className="flex items-start">
        <BsClipboardCheckFill className="mr-6 text-orange-600 text-7xl" />
        <p className="text-xl text-white md:text-2xl">
          Cada categoría incluye un test con subcategorías diseñadas para evaluar distintos aspectos de la seguridad. Al completarlos, podrás garantizar que tu entorno cumpla con los requisitos necesarios para prevenir riesgos y proteger a todos los involucrados.
        </p>
      </div>
      <div className="flex items-start">
        <FaChartBar className="mr-5 text-orange-600 text-7xl" />
        <p className="text-xl text-white md:text-2xl">
          Al final del proceso, obtendrás un análisis detallado que te permitirá identificar áreas de mejora y asegurar que todas las medidas de seguridad estén en orden, ayudando a salvar vidas y cumplir con los estándares requeridos.
        </p>
      </div>
    </div>
  </AnimatedHelpContent>
);

const HelpContent3 = () => (
  <AnimatedHelpContent>
    <h2 className="mb-8 text-3xl font-bold text-gray-400">
      Ayuda para el Análisis de Datos
    </h2>
    <div className="space-y-8">
      <div className="flex items-start">
        <FaChartPie className="mr-4 text-orange-600 text-8xl" />
        <p className="text-xl text-white md:text-2xl">
          Aquí podrás visualizar los resultados de tus tests de seguridad e higiene a través de gráficos intuitivos. Estos gráficos te mostrarán el porcentaje de riesgo en diferentes áreas, permitiéndote identificar fácilmente las zonas que requieren atención y mejora.
        </p>
      </div>
      <div className="flex items-start">
        <MdDashboard className="mr-4 text-orange-600 text-8xl" />
        <p className="text-xl text-white md:text-2xl">
          Al completar los tests tus respuestas serán recopiladas y analizadas. Los resultados se reflejarán en tu dashboard, donde podrás realizar un seguimiento del estado de seguridad de tu entorno y tomar decisiones informadas.
        </p>
      </div>
    </div>
  </AnimatedHelpContent>
);

const HelpContent4 = () => (
  <AnimatedHelpContent>
    <h2 className="mb-8 text-3xl font-bold text-gray-400">
      Gestión de tareas y mejoras
    </h2>
    <div className="space-y-8">
      <div className="flex items-start">
        <FaTasks className="mr-4 text-orange-600 text-8xl" />
        <p className="text-xl text-white md:text-2xl">
          Después de analizar los resultados de los tests desde la dashboard, podrás organizar las tareas necesarias para mejorar la seguridad en tu entorno. Las tareas pueden estar categorizadas en "Tareas", "En progreso" o "Completadas", según el estado en el que se encuentren.
        </p>
      </div>
      <div className="pl-16 space-y-4">
        <p className="text-xl text-white md:text-2xl">
          <strong>Tareas:</strong> Aquí podrás agregar las tareas pendientes de ser abordadas, como corregir cualquier problema detectado en el entorno.
        </p>
        <p className="text-xl text-white md:text-2xl">
          <strong>En progreso:</strong> Esta categoría es para aquellas tareas que ya han comenzado pero aún no están finalizadas, ayudándote a llevar un control del avance.
        </p>
        <p className="text-xl text-white md:text-2xl">
          <strong>Completadas:</strong> Una vez que resuelvas una tarea, puedes marcarla como completada, asegurando que has implementado las mejoras necesarias en tu entorno.
        </p>
      </div>
      <div className="flex items-start">
        <FaTrash className="mr-5 text-4xl text-orange-600" />
        <p className="text-xl text-white md:text-2xl">
          Además, si alguna tarea ya no es relevante o se ha agregado por error, podrás eliminarla fácilmente arrastrándola a la papelera.
        </p>
      </div>
      <div className="flex items-start">
        <FaCheckCircle className="mr-4 text-6xl text-orange-600" />
        <p className="text-xl text-white md:text-2xl">
          Este sistema te permite llevar un seguimiento detallado de las acciones correctivas que debes implementar para mejorar la seguridad, y hacerlo de manera eficiente y visual.
        </p>
      </div>
    </div>
  </AnimatedHelpContent>
);