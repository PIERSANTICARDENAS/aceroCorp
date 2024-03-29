import PropTypes from "prop-types";

const Contenido_Izq = ({ titulo, subTitulo, imagen }) => {
  return (

    <div className="text-gray-600 body-font w-full h-full">
      <div className="mx-auto flex px-5 py-1 md:flex-row flex-col items-center  w-full h-full ">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            {titulo}
            <br className="hidden lg:inline-block" />
          </h1>
          <p className="mb-8 leading-relaxed text-white text-justify">
            {subTitulo}
          </p>
        </div>
        <div className="mx-auto flex px-5 lg:w-full md:w-1/2 w-5/6  w-full h-full">
          <img loading="lazy"
            className="object-cover object-center rounded"
            alt="hero"
            src={imagen}
          />
        </div>
      </div>
    </div>

  );
};

Contenido_Izq.propTypes = {
  titulo: PropTypes.string.isRequired,
  subTitulo: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  imagen: PropTypes.string.isRequired,
};

export default Contenido_Izq;
