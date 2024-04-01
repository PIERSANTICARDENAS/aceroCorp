import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };


  return (
    <div className="bg-white fixed left-0 top-0 w-full z-10 ease-in h-12 mx-auto">
      <div className="max-w-[1240px] m-auto mb-4 md:mb-0 flex flex-wrap items-center">
      <a href="/#Home" className="hidden sm:flex text-AceroCorp ml-10 items-center">
              <img loading="lazy" className="w-10 h-10 items-right m-1" src="./Logo_AceroCorp.svg" />
              <span className="ml-3 text-xl text-black"> <b>Acero</b> </span>
              <span className="ml-3 text-xl text-AceroCorp"> <b>Corp</b> </span>
            </a>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <ul className="hidden sm:flex text-AceroCorp">
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
      </nav>
        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden mt-5 z-10 justify-center">
          {nav ? (
            <AiOutlineClose size={25} className="text-AceroCorp" />
          ) : (
            <AiOutlineMenu size={25} className="text-AceroCorp" />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "text-AceroCorp sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center justify-center w-full h-screen bg-white text-center ease-in duration-300"
              : "text-AceroCorp sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center justify-center w-full h-screen bg-white text-center ease-in duration-300"
          }>

          <ul>
            <li
              onClick={handleNav}
              className="flex justify-center">
              <a href="/#Home" >
                <img loading="lazy" className="w-10 h-10" src="./Logo_AceroCorp.svg" />
              </a>
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
