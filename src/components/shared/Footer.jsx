
const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-5 mx-auto flex md:items-center lg:items-start xl:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">

        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left mb-1">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img src="../../Logo_AceroCorp.svg" className="w-14 h-14 text-white p-2 bg-white rounded-full">
            </img>
            <span className="text-3xl text-black"> <b>Acero</b> </span>
            <span className="text-3xl text-AceroCorp"> <b>Corp</b> </span>

          </a>
        </div>
        {/* <div className="flex-grow flex flex-wrap lg:pl-20 -mb-10 md:mt-0 mt-5 lg:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <a href="/#Conocenos"> <h2 className="title-font font-medium tracking-widest text-sm mb-3  hover:text-blue-400 transition-colors duration-300 border-b-2 hover:border-blue-400 transition-colors duration-300">CONOCENOS</h2></a>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <a href="/#SteelFraming"> <h2 className="title-font font-medium tracking-widest text-sm mb-3 hover:text-blue-400 transition-colors duration-300 border-b-2 hover:border-blue-400 transition-colors duration-300">STEEL FRAMING</h2></a>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <a href="/#Obras"> <h2 className="title-font font-medium tracking-widest text-sm mb-3 hover:text-blue-400 transition-colors duration-300 border-b-2 hover:border-blue-400 transition-colors duration-300">NUESTRAS OBRAS</h2></a>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <a href="/#Consultanos"> <h2 className="title-font font-medium tracking-widest text-sm mb-3 hover:text-blue-400 transition-colors duration-300 border-b-2 hover:border-blue-400 transition-colors duration-300">CONSULTANOS</h2></a>
          </div>
        </div> */}
      </div>
      <div className="bg-AceroCorp">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col md:flex-row">
        <span className="text-white inline-flex text-center md:ml-auto md:mt-0 mt-2 justify-center md:justify-start">© 2024 AceroCorp</span>
          <div className="text-white inline-flex md:ml-auto md:mt-0 mt-2 justify-center md:justify-start">
            <span> Dirección: Juan Florio 3549</span>
          </div>
          <div className="text-white inline-flex md:ml-auto md:mt-0 mt-2 justify-center md:justify-start">
            <span> WhatsApp: +54-9-11-7888-8881</span>
          </div>
          <span className="inline-flex md:ml-auto md:mt-0 mt-2 justify-center md:justify-start">
            {/* Facebook */}
            <a className="text-white">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            {/* Instagram */}
            <a className="ml-3 text-white">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            {/* Email */}
            <a className="ml-3 text-white" href="mailto:info@acerocorp.com.ar">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
