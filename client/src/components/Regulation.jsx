
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import P1 from "../public/img/P1.jpg"

export const RegSection = () => {
  return (
    <div className="overflow-hidden bg-zinc-950">
      <Hero />
      <Regulations />
    </div>
  );
};

const SECTION_HEIGHT = 1500;

const Hero = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative hidden w-full max-h-screen md:block"
    >
      <CenterImage />

    </div>
  );
};

const CenterImage = () => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["170%", "100%"]
  );
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0]
  );

  return (
    <motion.div
      className="sticky top-0 w-full h-screen"
      style={{
        clipPath,
        backgroundSize,
        opacity,
        backgroundImage: `url(${P1})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

const Regulations = () => {
  return (
    <section
      id="regulations"
      className="max-w-6xl px-4 py-24 mx-auto text-white"
    >
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-20 text-4xl font-black uppercase text-zinc-50"
      >
        Normativas y Regulaciones
      </motion.h1>
      <RegulationItem 
        title="Ley de Riesgos del Trabajo (Ley N° 24.557)"
        description="Regula el sistema de riesgos laborales en Argentina, estableciendo las responsabilidades de empleadores, las prestaciones por accidentes y enfermedades laborales, y la creación de las Aseguradoras de Riesgos del Trabajo (ART). Su objetivo es prevenir accidentes y garantizar la cobertura ante siniestros laborales."
      />
      <RegulationItem 
        title="Ley Nacional de Higiene y Seguridad en el Trabajo (Ley N° 19.587)"
        description="Establece las condiciones básicas de higiene y seguridad en el trabajo, aplicable a todos los sectores. Define responsabilidades para empleadores y trabajadores, y establece procedimientos para la prevención de accidentes laborales."
      />
      <RegulationItem 
        title="Reglamento de Higiene y Seguridad en el Trabajo (Decreto N° 351/79)"
        description="Complementa la Ley N° 24.557 y detalla medidas específicas que deben adoptar las empresas para garantizar la seguridad y salud de los trabajadores."
      />
      <RegulationItem 
        title="Normativa de Seguridad y Salud Laboral (Resolución SRT N° 295/2003)"
        description="Establece las condiciones mínimas de seguridad y salud ocupacional que deben seguir las empresas en Argentina. Regula aspectos como la ventilación, iluminación, señalización, protección contra incendios, entre otros."
      />
      <RegulationItem 
        title="Ley Provincial de Seguridad e Higiene en el Trabajo (Ley N° 1.498)"
        description="Establece regulaciones específicas para la provincia de Formosa, adaptando las normativas nacionales a las realidades locales y abordando particularidades del entorno laboral en la región."
      />
      <RegulationItem 
        title="Resoluciones del Ministerio de Trabajo, Empleo y Seguridad Social"
        description="El Ministerio emite resoluciones que pueden variar según el sector y que abordan aspectos específicos de la seguridad laboral, como el uso de Equipos de Protección Personal (EPP) y protocolos de capacitación."
      />
      <RegulationItem 
        title="Normas IRAM (Instituto Argentino de Normalización y Certificación)"
        description="Establecen estándares de calidad y seguridad en diferentes industrias, algunas específicas para la construcción y la industria, abordando la seguridad en el diseño, construcción y operación de instalaciones."
      />
      <RegulationItem 
        title="Convenios Internacionales"
        description="Argentina es parte de la Organización Internacional del Trabajo (OIT), adhiriéndose a varios convenios internacionales sobre seguridad y salud en el trabajo que influyen en la legislación local."
      />
    </section>
  );
};

const RegulationItem = ({ title, description }) => {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="border-b mb-9 border-zinc-800 pb-9"
    >
      <div>
        <p className="mb-1.5 text-xl text-zinc-50">{title}</p>
        <p className="text-sm text-zinc-500">{description}</p>
      </div>
    </motion.div>
  );
};
