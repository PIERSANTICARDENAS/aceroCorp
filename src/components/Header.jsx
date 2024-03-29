import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };


  return (
    <div className="bg-white fixed left-0 top-0 w-full z-10 ease-in">
      <div className="max-w-[1240px] m-auto flex justify-center items-center text-white">
        <ul className="hidden sm:flex text-primary">
          <li className="px-4 pt-2">
            <a href="#">Inicio</a>
          </li>
          <li className="px-4 pt-2">
            <a href="/#Amenities">Amenities</a>
          </li>
          <li className="px-4 pt-2">
            <a href="/#Gallery">Galería</a>
          </li>
          <li className="px-4 pt-2">
            <a href="/#MasterPlan">Masterplan</a>
          </li>
          <li className="px-4 pt-2">
            <a href="/#Contacto">Contacto</a>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden mt-5 z-10">
          {nav ? (
            <AiOutlineClose size={25} className="text-primary" />
          ) : (
            <AiOutlineMenu size={25} className="text-primary" />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "text-primary sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300"
              : "text-primary sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300"
          }>
          <ul>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-blue-500">
              <a href="#">Inicio</a>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-blue-500">
              <a href="/#MasterPlan">Masterplan</a>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-blue-500">
              <a href="/#Gallery">Galeria</a>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-blue-500">
              <a href="/#Contacto">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
