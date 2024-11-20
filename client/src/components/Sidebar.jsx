import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Iconos
import { FiChevronDown, FiChevronsRight } from "react-icons/fi";
import { FaChartBar, FaTasks, FaUserCog, FaCog, FaHome } from "react-icons/fa";
import { MdDashboard, MdNotifications, MdOutlineTimeline } from "react-icons/md";

export const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <motion.nav
      layout
      className="sticky top-0 h-screen p-2 border-r border-zinc-800 bg-zinc-950 shrink-0"
      style={{
        width: open ? "225px" : "fit-content",
      }}
    >
      <TitleSection open={open} />

      <div className="space-y-1">
        <Option
          Icon={MdDashboard}
          title="Dashboard"
          selected={selected}
          setSelected={setSelected}
          open={open}
          link="/dashboard/dashboardcontent"
        />
        <Option
          Icon={MdNotifications}
          title="Notificaciones"
          selected={selected}
          setSelected={setSelected}
          open={open}
          notifs={3}
          //link="/dashboard/notifications"
        />
        <Option
          Icon={FaChartBar}
          title="Analytics"
          selected={selected}
          setSelected={setSelected}
          open={open}
          link="/dashboard/analytics"
        />
        <Option
          Icon={MdOutlineTimeline}
          title="Historial"
          selected={selected}
          setSelected={setSelected}
          open={open}
          link="/dashboard/history"
        />
        <Option
          Icon={FaTasks}
          title="Tareas"
          selected={selected}
          setSelected={setSelected}
          open={open}
          link="/dashboard/tasks"
        />
        <Option
          Icon={FaUserCog}
          title="Perfil"
          selected={selected}
          setSelected={setSelected}
          open={open}
          //link="/dashboard/profile"
        />
        <Option
          Icon={FaCog}
          title="Configuración"
          selected={selected}
          setSelected={setSelected}
          open={open}
          //link="/dashboard/settings"
        />
        <Option
          Icon={FaHome}
          title="Volver"
          selected={selected}
          setSelected={setSelected}
          open={open}
          link="/"
        />
      </div>

      <ToggleClose open={open} setOpen={setOpen} />
    </motion.nav>
  );
};


const Option = ({ Icon, title, selected, setSelected, open, notifs, link }) => {
  return (
    <motion.button
      layout
      className={`relative flex h-10 w-full items-center rounded-md transition-colors ${selected === title ? "bg-zinc-800 text-zinc-400" : "text-zinc-500 hover:bg-zinc-900"}`}
    >
      <motion.div
        layout
        className="grid w-10 h-full text-lg place-content-center"
      >
        <Icon />
      </motion.div>
      {open && (
        <motion.span
          layout
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.125 }}
          className="text-xs font-medium"
        >
          {title}
        </motion.span>
      )}

      {notifs && open && (
        <motion.span
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          style={{ y: "-50%" }}
          transition={{ delay: 0.5 }}
          className="absolute text-xs text-white bg-orange-600 rounded right-2 top-1/2 size-4"
        >
          {notifs}
        </motion.span>
      )}
      
      <div className="absolute top-0 left-0 w-full h-full">
        <Link
          to={link}
          onClick={() => setSelected(title)}
          className="block w-full h-full" // Aseguramos que solo el área del enlace sea clickeable
        />
      </div>
    </motion.button>
  );
};

const TitleSection = ({ open }) => {
  return (
    <div className="pb-3 mb-3 border-b border-zinc-800">
      <div className="flex items-center justify-between transition-colors rounded-md cursor-pointer hover:bg-zinc-900">
        <div className="flex items-center gap-2">
          <Logo />
          {open && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.125 }}
            >
              <span className="block text-xs font-semibold text-white">NazaWork</span>
              <span className="block text-xs text-zinc-500">CheckFor</span>
            </motion.div>
          )}
        </div>
        {open && <FiChevronDown className="mr-2 text-white" />}
      </div>
    </div>
  );
};

const Logo = () => {
  // Temp logo from https://logoipsum.com/
  return (
    <motion.div
      layout
      className="grid bg-orange-600 rounded-md size-10 shrink-0 place-content-center"
    >
      <svg
        width="24"
        height="auto"
        viewBox="0 0 50 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-slate-50"
      >
        <path
          d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
          stopColor="#000000"
        ></path>
        <path
          d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
          stopColor="#000000"
        ></path>
      </svg>
    </motion.div>
  );
};

const ToggleClose = ({ open, setOpen }) => {
  return (
    <motion.button
      layout
      onClick={() => setOpen((pv) => !pv)}
      className="absolute bottom-0 left-0 right-0 transition-colors border-t border-zinc-800 hover:bg-zinc-900"
    >
      <div className="flex items-center p-2">
        <motion.div
          layout
          className="grid text-lg size-10 place-content-center"
        >
          <FiChevronsRight
            className={`transition-transform text-zinc-500 ${open && "rotate-180"}`}
          />
        </motion.div>
        {open && (
          <motion.span
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.125 }}
            className="text-xs font-medium text-zinc-500"
          >
            Ocultar
          </motion.span>
        )}
      </div>
    </motion.button>
  );
};