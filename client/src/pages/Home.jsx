import React, { useEffect, useState } from "react";

import { Banner } from "../components/Banner.jsx";
import { Marquee } from "../components/Marquee.jsx";
import { Slider } from "../components/Slider";
import { Overview } from "../components/Overview.jsx";
import { RegSection } from "../components/Regulation.jsx";
import { AboutUs } from "../components/AboutUs.jsx";
import { Footer } from "../components/Footer.jsx"; 

import { Navbar } from "../components/Navbar.jsx";
import { NavbarNotSession } from "../components/NavbarNotSession.jsx";
import { verifyJWT } from "../services/verifyJWT.js";


export const Home = () => {
  
  const [isToken, setToken] = useState(false)

  useEffect(() => {
    verifyJWT()
      .then(respuesta => {
        console.log(respuesta);
        setToken(respuesta)
      })
  }, [])

return (
  <>
      {isToken ? <Navbar /> : <NavbarNotSession />}

      <div className="overflow-hidden bg-slate-300">
          <Banner />
          <Marquee />

          <div>
              <Slider />
          </div>

          <div className="px-4 py-8 text-white bg-gradient-to-b from-black to-gray-900">
              <Overview />
          </div>

          <RegSection />
          <AboutUs />
          <Footer />
      </div>
  </>
);
};
