import React, { useEffect, useState } from "react";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import { useNavigate } from "react-router-dom";
import containerVid from "../public/vids/vid2.mp4";
import containerBackVid from "../public/vids/vid7.mp4";
import { registerUsers } from "../services/registerUsers.js";
import { loginUsers } from "../services/loginUsers.js";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export const LoginForm = () => {
  const color = useMotionValue(COLORS_TOP[0]);
  const [isVideoVisible, setIsVideoVisible] = useState(true);
  const [isFlipped, setIsFlipped] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;

  const handleToggleVideo = () => {
    setIsVideoVisible((prev) => !prev);
    setIsFlipped((prev) => !prev);
  };

  return (
    <motion.section
      style={{ backgroundImage }}
      className="relative min-h-screen overflow-hidden bg-gray-950"
    >
      <div className="relative z-10 flex items-center justify-center mt-24">
        <div className="relative flex h-[450px] w-1/2 rounded-lg bg-black shadow-lg">
          {/* Contenedor del video */}
          <motion.div
            className="absolute top-0 left-0 z-20 w-1/2 h-full overflow-hidden rounded-lg shadow-lg"
            initial={{ x: 0, rotateY: 0 }}
            animate={{ x: isVideoVisible ? 0 : "100%" }}
            transition={{ type: "tween", duration: 0.5 }}
            onAnimationComplete={() => {
              if (!isVideoVisible) {
                setIsFlipped(true);
              }
            }}
          >
            {isFlipped ? (
              <>
                <video
                  src={containerBackVid}
                  autoPlay
                  loop
                  muted
                  className="object-cover w-full h-full"
                />
                <motion.div
                  className="absolute z-30 p-4 text-center text-white transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 rounded top-1/2 left-1/2 bg-opacity-10 backdrop-blur-sm"
                  initial={{ opacity: 0, filter: "blur(10px)" }}
                  animate={{ opacity: 1, filter: "blur(0)" }}
                  transition={{ duration: 0.6 }}
                >
                  <h1 className="text-3xl font-bold">Saludos!</h1>
                  <p className="text-center">
                    Crea una cuenta para disfrutar de todas las funcionalidades
                    que ofrecemos.
                  </p>
                </motion.div>
              </>
            ) : (
              <>
                <motion.div
                  className="absolute z-30 p-4 text-center text-white transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 rounded top-1/2 left-1/2 bg-opacity-10 backdrop-blur-sm"
                  initial={{ opacity: 0, filter: "blur(10px)" }}
                  animate={{ opacity: 1, filter: "blur(0)" }}
                  transition={{ duration: 0.6 }}
                >
                  <h1 className="text-3xl font-bold">Bienvenido!</h1>
                  <p className="text-center">
                    Ingresa los datos de tu cuenta para acceder y retomar desde
                    dónde lo dejaste.
                  </p>
                </motion.div>
                <video
                  src={containerVid}
                  autoPlay
                  loop
                  muted
                  className="object-cover w-full h-full"
                />
              </>
            )}
            <div className="absolute z-30 flex items-center p-2 bg-gray-900 rounded bottom-4 left-4 bg-opacity-60">
              <div className="flex flex-col mr-2">
                {isFlipped ? (
                  <p className="text-center text-white">
                    Ya tienes una cuenta?
                  </p>
                ) : (
                  <p className="text-center text-white">
                    No tienes una cuenta?
                  </p>
                )}
              </div>
              <button
                onClick={handleToggleVideo}
                className="px-3 py-1 text-sm text-black bg-white rounded bg-opacity-70 hover:bg-gray-400"
              >
                {isFlipped ? "Acceder" : "Registrarse"}
              </button>
            </div>
          </motion.div>

          {/* Contenedor de formularios */}
          <div className="flex w-full h-full bg-black rounded-lg">
            {/* Formulario de registro (izq) */}
            <div className="flex items-center justify-center w-1/2 h-full bg-gray-900 rounded-l-lg opacity-50">
              <motion.div
                className="flex flex-col items-center text-gray-200"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: isFlipped ? 0 : 100, opacity: isFlipped ? 1 : 0 }}
                transition={{ type: "tween", duration: 0.5 }}
              >
                <h1 className="text-3xl font-bold">Registro</h1>
                <form
                  onSubmit={registerUsers}
                  className="flex flex-col items-center mt-6 space-y-4"
                >
                  <input
                    id="name"
                    type="text"
                    placeholder="Nombre de Usuario"
                    className="px-4 py-2 text-gray-200 bg-gray-800 rounded"
                  />
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    className="px-4 py-2 text-gray-200 bg-gray-800 rounded"
                  />
                  <input
                    id="password"
                    type="password"
                    placeholder="Contraseña"
                    className="px-4 py-2 text-gray-200 bg-gray-800 rounded"
                  />
                  <input
                    id="password-repeat"
                    type="password"
                    placeholder="Confirmar contraseña"
                    className="px-4 py-2 text-gray-200 bg-gray-800 rounded"
                  />
                  <button className="px-4 py-2 mt-2 font-semibold text-white bg-gray-800 rounded hover:bg-gray-700">
                    Enviar
                  </button>
                </form>
              </motion.div>
            </div>

            {/* Formulario de login (der) */}
            <div className="flex items-center justify-center w-1/2 h-full bg-gray-900 rounded-r-lg opacity-50">
              <motion.div
                className="flex flex-col items-center p-6 text-gray-200"
                initial={{ x: 100, opacity: 0 }}
                animate={{
                  x: isFlipped ? -100 : 0,
                  opacity: isFlipped ? 0 : 1,
                }}
                transition={{ type: "tween", duration: 0.5 }}
              >
                <h1 className="text-3xl font-bold">Iniciar Sesión</h1>
                <form
                  onSubmit={loginUsers}
                  className="flex flex-col items-center mt-6 space-y-4"
                >
                  <input
                    id="emailLogin"
                    type="email"
                    placeholder="Email"
                    className="px-4 py-2 text-gray-200 bg-gray-800 rounded"
                  />
                  <input
                    id="passwordLogin"
                    type="password"
                    placeholder="Contraseña"
                    className="px-4 py-2 text-gray-200 bg-gray-800 rounded"
                  />
                  <button className="px-4 py-2 mt-2 font-semibold text-white bg-gray-800 rounded hover:bg-gray-700">
                    Acceder
                  </button>
                </form>
                <p className="mt-4 text-sm text-gray-400 cursor-pointer hover:text-white">
                  ¿Olvidaste tu contraseña?
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
