import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

export const Example = () => {
  return (
    <div className="flex w-full px-4 py-12 space-x-20 place-content-center text-slate-900">
      <TiltCard
        title="Sector de Construcción"
        description="Implica múltiples actividades y riesgos, desde excavaciones hasta edificaciones complejas. Es crucial adoptar prácticas seguras, capacitar a los trabajadores, proporcionar EPP y realizar revisiones para garantizar un entorno seguro para todos."
      />
      <TiltCard
        title="Sector Industrial"
        description="Comprende actividades como fabricación, ensamblaje y distribución.  Enfrenta riesgos con la maquinaria y sustancias químicas. Es vital la capacitación y el cumplimiento de normas para proteger a los empleados y prevenir accidentes."
      />
      <TiltCard
        title="Sector Institucional"
        description="Abarca escuelas, universidades e instituciones, donde la seguridad e higiene es fundamental. Se deben establecer protocolos claros para prevenir incidentes y garantizar un entorno seguro, especialmente en lugares con alta afluencia de personas."
      />
    </div>
  );
};

export const TiltCard = ({ title, description }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-black to-orange-600"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute grid bg-white shadow-lg inset-4 place-content-center rounded-xl"
      >
        <p
          style={{
            transform: "translateZ(50px)",
          }}
          className="text-2xl font-bold text-center"
        >
          {title}
        </p>
        <p className="p-2 text-lg text-center text-black">{description}</p>
      </div>
    </motion.div>
  );
};
