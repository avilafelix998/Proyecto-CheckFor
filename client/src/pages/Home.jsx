import React, { useEffect, useState } from "react";

import { Banner } from "../components/Banner.jsx";
import { Marquee } from "../components/Marquee.jsx";
import { Slider } from "../components/Slider";
import { Overview } from "../components/Overview.jsx";
import { Welcome } from "../components/Welcome.jsx";
import { RegSection } from "../components/Regulation.jsx";
import { AboutUs } from "../components/AboutUs.jsx";
import { Footer } from "../components/Footer.jsx";
import { SpringModal } from "../components/Modal.jsx";

import { Navbar } from "../components/Navbar.jsx";
import { NavbarNotSession } from "../components/NavbarNotSession.jsx";
import { verifyJWT } from "../services/verifyJWT.js";


export const Home = () => {
  
  const [isToken, setToken] = useState(false)
  const [isModalOpen, setModalOpen] = useState(false); // Estado del modal

  useEffect(() => {
    verifyJWT()
      .then(respuesta => {
        console.log(respuesta);
        setToken(respuesta)
      })
  }, [])

return (
  <>
      {isToken ? <Navbar setIsModalOpen={setModalOpen}/> : <NavbarNotSession />}

      <div className="overflow-hidden bg-slate-300">
          <SpringModal isOpen={isModalOpen} setIsOpen={setModalOpen}/>
          <Banner />
          <Marquee />

          <div>
              <Slider />
          </div>

          <div className="px-4 py-8 text-white bg-gradient-to-b from-black to-gray-900">
              <Overview />
          </div>
          
          <Welcome />

          <RegSection />
          <AboutUs />
          <Footer />
      </div>
  </>
);
};
