
const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-10 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">

        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left mb-4">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img src="../../Logo_AceroCorp.svg" className="w-10 h-10 text-white p-2 bg-white rounded-full">
            </img>
            <span className="text-xl text-black"> <b>Acero</b> </span>
            <span className="text-xl text-AceroCorp"> <b>Corp</b> </span>

          </a>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <a href="/#Conosenos"> <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CONOCENOS</h2></a>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <a href="/#SteelFraming"> <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">STEEL FRAMING</h2></a>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <a href="/#Obras"> <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">NUESTRAS OBRAS</h2></a>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <a href="/#Consultanos"> <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CONSULTANOS</h2></a>
          </div>
        </div>
      </div>
      <div className="bg-AceroCorp">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-white text-sm text-center sm:text-left">© 2024 AceroCorp</p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
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
            <a className="ml-3 text-white">
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
