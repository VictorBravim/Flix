import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Contextpage from '../Contextpage';
import { HiX } from "react-icons/hi";
import { CgMenuGridO } from "react-icons/cg";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import logo from "../assets/img/logo.webp";
import User from "../assets/img/user.webp";

function Navbar() {
    const { header, user } = useContext(Contextpage);
    const [activemobile, setActivemobile] = useState(false);
    const [selectedItem, setSelectedItem] = useState("Lançamento");
  
    const Navdata = [
      {
        id: 1,
        headername: "Upcoming Movies",
        Name: "Lançamento",
        link: "/",
      },
      {
        id: 2,
        headername: "Trending Movies",
        Name: "Popular",
        link: "/trending",
      },
      {
        id: 3,
        headername: "Genres Movies",
        Name: "Generos",
        link: "/Container",
      },
      {
        id: 4,
        headername: "Favorite Movies",
        Name: "Favoritos",
        link: "/favorite",
      },
    ];
  
    const toggleMobileMenu = () => {
      setActivemobile(!activemobile);
    };
  
    const handleItemClick = (headerName) => {
      setSelectedItem(headerName);
      toggleMobileMenu(); 
    };
  
    return (
      <>
        <button
          className="z-40 text-3xl text-black fixed right-0 bottom-0 m-6 p-4 duration-150 rounded-full active:scale-90 bg-white block md:hidden"
          onClick={toggleMobileMenu}
        >
          {activemobile ? <HiX /> : <CgMenuGridO />}
        </button>
  
        <nav
          className={`${
            activemobile ? "block" : "hidden"
          } fixed bg-black md:bg-black h-full w-full md:w-[15rem] z-30 md:block`}
        >
          <motion.div
            animate={{ scale: 1 }}
            initial={{ scale: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              to="/"
              className="logo flex flex-col justify-center items-center m-7 gap-2"
              onClick={toggleMobileMenu}
            >
              <img src={logo} alt="logo" className="w-24" />
            </Link>
          </motion.div>
  
          <ul className="text-white font-semibold text-[16px] text-center px-5">
            {Navdata.map((data) => (
              <Link key={data.id} to={data.link}>
                <li
                  className="my-2 px-4 py-3 relative cursor-pointer"
                  onClick={() => handleItemClick(data.Name)}
                >
                  <span
                    className={`${
                      selectedItem === data.Name ? "block" : "hidden"
                    } absolute left-5 top-1/2 transform -translate-y-1/2 w-1 h-5 bg-white`}
                  ></span>
                  {data.Name}
                </li>
              </Link>
            ))}
          </ul>
  
          <div className="absolute bottom-0 w-full p-5 md:p-2 text-white">
            {user ? (
              <>
                <div className="w-full bg-black px-5 py-2 gap-4 rounded-xl flex items-center font-semibold border-2 border-blue-100/40">
                  <img
                    src={user.photoURL || User}
                    alt="user"
                    className="h-10 rounded-full"
                  />
                  <h1>{user.displayName}</h1>
                </div>
  
                <div
                  className="cursor-pointer bg-red-600 flex justify-center items-center p-2 rounded-xl mt-2"
                  onClick={() => {
                    auth.signOut();
                    toast.error("Logout com sucesso");
                  }}
                >
                  <h1>Logout</h1>
                </div>
              </>
            ) : (
              <Link
                to="/login"
                className="w-full bg-balck py-2 gap-4 rounded-xl flex items-center justify-center font-semibold border-2 border-blue-100/40"
                onClick={toggleMobileMenu}
              >
                <h1>Log in</h1>
              </Link>
            )}
          </div>
        </nav>
      </>
    );
  }
  
  export default Navbar;