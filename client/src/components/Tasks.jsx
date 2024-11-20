import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Board } from "./Board";


const ActionCard = ({ title, content }) => (
  <div className="p-4 rounded-lg bg-gray-800/20">
    <h3 className="text-xl font-bold text-white">{title}</h3>
    <div className="mt-2 text-gray-400">
      <p>{content}</p>
    </div>
  </div>
);

const pageAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

export const Tasks = () => {
  return (
    <AnimatePresence>
      <motion.div
        className="w-full space-y-6 text-neutral-50"
        variants={pageAnimation}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="space-y-2 text-start">
          <h1 className="text-3xl font-bold text-white">
            Bienvenido a tus Tareas
          </h1>
          <hr className="w-1/3 mt-2 border-t-4 border-orange-500" />
          <p className="text-gray-400">
            En esta sección podrás organizar y gestionar tus tareas de manera eficiente. 
            Clasifica las actividades según su prioridad, establece plazos y monitorea el progreso para asegurarte de cumplir con los objetivos establecidos. 
            Optimiza tu flujo de trabajo distribuyendo las tareas en diferentes estados. Añade, mueve y elimina fácilmente según tus necesidades.
          </p>
        </div>

        <Board />

        <div
          className="grid grid-cols-3 gap-4"
        >
          <ActionCard
            title="Añadir"
            content="Dándole a 'Añadir' puedes crear las tareas que quieras asignar y agrega plazos si es necesario."
          />
          <ActionCard
            title="Mover"
            content="Una vez creadas las tareas, puedes moverlas a los diferentes estados para organizarlas."
          />
          <ActionCard
            title="Eliminar"
            content="Si quieres eliminar una tarea por cualquier razón, arrástrala hacia la papelera."
          />
          </div>
    

        <div className="flex flex-col gap-4">
          <div className="p-6 rounded-lg bg-gray-800/20">
            <h3 className="mb-3 text-xl font-bold text-white">Notificaciones y Recordatorios</h3>
            <span className="font-bold text-orange-500">Si asignas plazos a cumplir se te notificará lo siguiente:</span>
            <div className="mt-2 text-gray-400">
              <p>Recordatorios de Tareas Vencidas: Notificaciones automáticas para recordar las tareas que están por vencer o que ya han vencido. </p>
              <p>Recordatorios de Tareas Incompletas: Una alerta para las tareas que se encuentran en estado "En progreso" durante un tiempo considerable. </p>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
