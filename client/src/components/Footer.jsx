import { FaQuestionCircle, FaEnvelope } from 'react-icons/fa';
import Logo2 from "../public/img/Logo_IPF.png"
import Logo3 from "../public/img/Logo_gob.png"
//import Logo4 from "../public/img/Logo_mch.png"



export const Footer = () => {
  return (
    <footer className="py-3 text-white bg-black ">
      <div className="flex flex-col justify-between px-4 mx-auto md:flex-row md:mx-16">
        <div className="flex flex-col items-start">
          <h1 className="py-3 text-3xl text-left text-orange-600" style={{ fontFamily: "Kdam Thmor Pro, sans-serif" }}>
            CheckFor
          </h1>
          
          <div className="flex mb-5 space-x-8">
            <div className="text-left">
              <h2 className="mb-2 font-semibold">Soporte</h2>
              <ul className="space-y-1">
                <li>
                  <a href="/faq" className="flex items-center hover:text-orange-400">
                    <FaQuestionCircle className="mr-1" />
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="/contact" className="flex items-center hover:text-orange-400">
                    <FaEnvelope className="mr-1" />
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-left">
              <h2 className="mb-2 font-semibold">Legal</h2>
              <ul className="space-y-1">
                <li>
                  <a href="/privacy-policy" className="hover:text-orange-400">Política de privacidad</a>
                </li>
                <li>
                  <a href="/terms" className="hover:text-orange-400">Términos de servicio</a>
                </li>
              </ul>
            </div>
          </div>

          {/* <div className="text-center">
            <hr className="w-48 mx-auto mb-2 ml-0 border-t-2 border-gray-400 rounded-lg" />
            <h2 className="text-gray-400">© 2024 CheckFor. Todos los derechos reservados</h2>
          </div>  */}

        </div>
        <div className="flex items-center justify-center space-x-3 md:justify-end">
          <img className="object-cover h-[62px] md:w-full" src={Logo2}/>
          <img className="object-cover h-[62px] md:w-full" src={Logo3}/>
        </div>
      </div>

      <div className="mt-6 text-center ">
        <hr className="w-48 mx-auto mb-2 border-t-2 border-gray-400 rounded-lg" />
        <h2 className="text-gray-400">© 2024 CheckFor. Todos los derechos reservados</h2>
      </div>
    </footer>
  );
};

