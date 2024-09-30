import React, { useEffect, useState } from "react";
import { useMotionTemplate, useMotionValue, motion, animate } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import containerVid from '../public/vids/vid2.mp4';
import containerBackVid from '../public/vids/vid7.mp4';

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

  const handleSignIn = () => {
    navigate('/');
  };

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
            animate={{ x: isVideoVisible ? 0 : '100%' }}
            transition={{ type: 'tween', duration: 0.5 }}
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
                  className="absolute z-30 text-center text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  initial={{ opacity: 0, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, filter: 'blur(0)' }}
                  transition={{ duration: 0.6 }}
                >
                  <h1 className="text-3xl font-bold">Hello, Friend!</h1>
                  <p className="text-center">Register with your personal details to use all of site features</p>
                </motion.div>
              </>
            ) : (
              <>
                <motion.div
                  className="absolute z-30 text-center text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  initial={{ opacity: 0, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, filter: 'blur(0)' }}
                  transition={{ duration: 0.6 }}
                >
                  <h1 className="text-3xl font-bold">Welcome Back!</h1>
                  <p className="text-center">Enter your personal details to use all of site features</p>
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
                  <p className="text-center text-white">Have an account?</p>
                ) : (
                  <p className="text-center text-white">Don't have an account?</p>
                )}
              </div>
              <button 
                onClick={handleToggleVideo} 
                className="px-3 py-1 text-sm text-black bg-white rounded bg-opacity-70 hover:bg-gray-400"
              >
                {isFlipped ? "Sign In" : "Register"}
              </button>
            </div>
          </motion.div>

          {/* Contenedor de formularios */}
          <div className="flex w-full h-full bg-black rounded-lg">
            {/* Formulario de registro (izq) */}
            <div className="flex items-center justify-center w-1/2 h-full bg-gray-900 rounded-l-lg opacity-50">
              <div className="flex flex-col items-center text-gray-200">
                <h1 className="text-3xl font-bold">Register</h1>
                <form className="flex flex-col items-center mt-6 space-y-4">
                  <input
                    type="text"
                    placeholder="Username"
                    className="px-4 py-2 text-gray-200 bg-gray-800 rounded"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="px-4 py-2 text-gray-200 bg-gray-800 rounded"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="px-4 py-2 text-gray-200 bg-gray-800 rounded"
                  />
                  <button 
                    type="button" 
                    className="px-4 py-2 mt-2 font-semibold text-white bg-gray-800 rounded hover:bg-gray-700"
                  >
                    Register
                  </button>
                </form>
              </div>
            </div>

            {/* Formulario de login (der) */}
            <div className="flex items-center justify-center w-1/2 h-full bg-gray-900 rounded-r-lg opacity-50">
              <div className="flex flex-col items-center p-6 text-gray-200">
                <h1 className="text-3xl font-bold">Login</h1>
                <form className="flex flex-col items-center mt-6 space-y-4">
                  <input
                    type="email"
                    placeholder="Email"
                    className="px-4 py-2 text-gray-200 bg-gray-800 rounded"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="px-4 py-2 text-gray-200 bg-gray-800 rounded"
                  />
                  <button 
                    type="button" 
                    onClick={handleSignIn} 
                    className="px-4 py-2 mt-2 font-semibold text-white bg-gray-800 rounded hover:bg-gray-700"
                  >
                    Sign In
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
