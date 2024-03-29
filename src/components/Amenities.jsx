import { useState } from "react";

const Amenities = () => {
  const [isAmenitiesVisible, setIsAmenitiesVisible] = useState(false);

  const toggleAmenities = () => {
    setIsAmenitiesVisible(!isAmenitiesVisible);
  };


  return (
    <section
      id="Amenities"
      className="text-white body-font 
       h-full w-full bg-clip-padding backdrop-filter backdrop-blur bg-opacity-20 backdrop-saturate-50 backdrop-contrast-150">
      <div className="container px-1 py-12 md:py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-10">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            AMENITIES
          </h1>
          <p>Descubre un mundo de comodidades y exclusividad en nuestra sección de Amenities.
            <br></br>
            Sumérgete en un estilo de vida único, con espacios recreativos, instalaciones deportivas de primera categoría y áreas verdes 
            exquisitamente diseñadas para tu disfrute en el corazón de nuestro prestigioso barrio privado.</p>
        </div>
        <button
          style={{ height: '40px', width: '100%' }}
          className=" text-center text-white bg-yellow-600 border-0 py-2 focus:outline-none hover:bg-yellow-500 rounded text-lg mb-5"
          onClick={toggleAmenities}>
          {isAmenitiesVisible ? "Ocultar Amenities" : "Mostrar Amenities"}
        </button>
        {isAmenitiesVisible && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-2">
            {/* Primera Fila */}
            <>
              {/* Salas de Coworking */}
              <div className="p-2 lg:w-1/10 md:w-1/10">
                <div className="h-full flex flex-col items-center text-center">
                  <i className="fas fa-comments"></i>
                  {/* <img alt="team" className="flex-shrink-0 rounded-lg w-full h-20 object-cover object-center mb-4" src="imagenes/Amenities/CoWorking.png"/> */}
                  <div className="w-full">
                    <p className="small-text mb-4 leading-relaxed text-white text-center">
                      {" "}
                      Salas de
                      <br /> Coworking{" "}
                    </p>
                  </div>
                </div>
              </div>
              {/*Salón usos múltiples */}
              <div className="p-2 lg:w-1/10 md:w-1/10">
                <div className="h-full flex flex-col items-center text-center">
                  <i className="fas fa-people-roof"></i>
                  {/* <img alt="team" className="flex-shrink-0 rounded-lg w-full h-20 object-cover object-center mb-4" src="imagenes/Amenities/SalonUsosMultiples.png"/> */}
                  <div className="w-full">
                    <p className="small-text mb-4 leading-relaxed text-white text-center">
                      Salón usos
                      <br /> múltiples{" "}
                    </p>
                  </div>
                </div>
              </div>
              {/*Bar/ Restaurant */}
              <div className="p-2 lg:w-1/10 md:w-1/10">
                <div className="h-full flex flex-col items-center text-center">
                  <i className="fas fa-champagne-glasses"></i>
                  {/* <img alt="team" className="flex-shrink-0 rounded-lg w-full h-20 object-cover object-center mb-4" src="imagenes/Amenities/Bar.png"/> */}
                  <div className="w-full">
                    <p className="small-text mb-4 leading-relaxed text-white text-center">
                      Bar <br /> Restaurant{" "}
                    </p>
                  </div>
                </div>
              </div>
              {/*Biblioteca */}
              <div className="p-2 lg:w-1/10 md:w-1/10">
                <div className="h-full flex flex-col items-center text-center">
                  <i className="fas fa-book"></i>
                  {/* <img alt="team" className="flex-shrink-0 rounded-lg w-full h-20 object-cover object-center mb-4" src="imagenes/Amenities/Biblioteca.png"/> */}
                  <div className="w-full">
                    <p className="small-text mb-4 leading-relaxed text-white text-center">
                      Biblioteca{" "}
                    </p>
                  </div>
                </div>
              </div>
              {/*Kids Club */}
              <div className="p-2 lg:w-1/10 md:w-1/10">
                <div className="h-full flex flex-col items-center text-center">
                  <i className="fas fa-children"></i>
                  {/* <img alt="team" className="flex-shrink-0 rounded-lg w-full h-20 object-cover object-center mb-4" src="imagenes/Amenities/KidsClub.png"/> */}
                  <div className="w-full">
                    <p className="small-text mb-4 leading-relaxed text-white text-center">
                      Kids Club{" "}
                    </p>
                  </div>
                </div>
              </div>
              {/*Huerta orgánica */}
              <div className="p-2 lg:w-1/10 md:w-1/10">
                <div className="h-full flex flex-col items-center text-center">
                  <i className="fas fa-leaf"></i>
                  {/* <img alt="team" className="flex-shrink-0 rounded-lg w-full h-20 object-cover object-center mb-4" src="imagenes/Amenities/Huerta.png"/> */}
                  <div className="w-full">
                    <p className="small-text mb-4 leading-relaxed text-white text-center">
                      Huerta
                      <br /> orgánica{" "}
                    </p>
                  </div>
                </div>
              </div>
              {/*Oficina de sustentabilidad */}
              <div className="p-2 lg:w-1/10 md:w-1/10">
                <div className="h-full flex flex-col items-center text-center">
                  <i className="fas fa-recycle"></i>
                  {/* <img alt="team" className="flex-shrink-0 rounded-lg w-full h-20 object-cover object-center mb-4" src="imagenes/Amenities/Sustentabilidad.png"/> */}
                  <div className="w-full">
                    <p className="small-text mb-4 leading-relaxed text-white text-center">
                      Oficina de
                      <br /> sustentabilidad{" "}
                    </p>
                  </div>
                </div>
              </div>
              {/*Depósito de compras online */}
              <div className="p-2 lg:w-1/10 md:w-1/10">
                <div className="h-full flex flex-col items-center text-center">
                  <i className="fas fa-warehouse"></i>
                  {/* <img alt="team" className="flex-shrink-0 rounded-lg w-full h-20 object-cover object-center mb-4" src="imagenes/Amenities/Deposito.png"/> */}
                  <div className="w-full">
                    <p className="small-text mb-4 leading-relaxed text-white text-center">
                      Depósito de
                      <br /> compras online{" "}
                    </p>
                  </div>
                </div>
              </div>
              {/*Paseo comercial */}
              <div className="p-2 lg:w-1/10 md:w-1/10">
                <div className="h-full flex flex-col items-center text-center">
                  <i className="fas fa-bag-shopping"></i>
                  {/* <img alt="team" className="flex-shrink-0 rounded-lg w-full h-20 object-cover object-center mb-4" src="imagenes/Amenities/PaseoComercial.png"/> */}
                  <div className="w-full">
                    <p className="small-text mb-4 leading-relaxed text-white text-center">
                      Paseo
                      <br /> comercial{" "}
                    </p>
                  </div>
                </div>
              </div>
              {/*Paseo deportivo */}
              <div className="p-2 lg:w-1/10 md:w-1/10">
                <div className="h-full flex flex-col items-center text-center">
                  <i className="fas fa-person-running"></i>
                  {/* <img alt="team" className="flex-shrink-0 rounded-lg w-full h-20 object-cover object-center mb-4" src="imagenes/Amenities/PaseoDeportivo.png"/> */}
                  <div className="w-full">
                    <p className="small-text mb-4 leading-relaxed text-white text-center">
                      Paseo
                      <br /> deportivo{" "}
                    </p>
                  </div>
                </div>
              </div>
            </>

            {/* Segunda Fila */}
            <>
              {/* Spa*/}
              <div className="p-2 lg:w-1/10 md:w-1/10">
                <div className="h-full flex flex-col items-center text-center">
                  <i className="fas fa-hand-sparkles"></i>
                  {/* <img alt="team" className="flex-shrink-0 rounded-lg w-full h-20 object-cover object-center mb-4" src="imagenes/Amenities/Spa.png"/> */}
                  <div className="w-full">
                    <p className="small-text mb-4 leading-relaxed text-white text-center">
                      Spa
                    </p>
                  </div>
                </div>
              </div>
              {/*GYM */}
              <div className="p-2 lg:w-1/10 md:w-1/10">
                <div className="h-full flex flex-col items-center text-center">
                  <i className="fas fa-dumbbell"></i>
                  {/* <img alt="team" className="flex-shrink-0 rounded-lg w-full h-20 object-cover object-center mb-4" src="imagenes/Amenities/Gym.png"/> */}
                  <div className="w-full">
                    <p className="small-text mb-4 leading-relaxed text-white text-center">
                      GYM{" "}
                    </p>
                  </div>
                </div>
              </div>
              {/*Vestuarios y duchas */}
              <div className="p-2 lg:w-1/10 md:w-1/10">
                <div className="h-full flex flex-col items-center text-center">
                  <i className="fas fa-shower"></i>
                  {/* <img alt="team" className="flex-shrink-0 rounded-lg w-full h-20 object-cover object-center mb-4" src="imagenes/Amenities/Vestuarios.png"/> */}
                  <div className="w-full">
                    <p className="small-text mb-4 leading-relaxed text-white text-center">
                      Vestuarios y<br /> duchas{" "}
                    </p>
                  </div>
                </div>
              </div>
              {/*Asistencia médica */}
              <div className="p-2 lg:w-1/10 md:w-1/10">
                <div className="h-full flex flex-col items-center text-center">
                  <i className="fas fa-user-doctor"></i>
                  {/* <img alt="team" className="flex-shrink-0 rounded-lg w-full h-20 object-cover object-center mb-4" src="imagenes/Amenities/Medico.png"/> */}
                  <div className="w-full">
                    <p className="small-text mb-4 leading-relaxed text-white text-center">
                      Asistencia
                      <br /> médica{" "}
                    </p>
                  </div>
                </div>
              </div>
              {/*Pileta climatizada */}
              <div className="p-2 lg:w-1/10 md:w-1/10">
                <div className="h-full flex flex-col items-center text-center">
                  <i className="fas fa-water-ladder"></i>
                  {/* <img alt="team" className="flex-shrink-0 rounded-lg w-full h-20 object-cover object-center mb-4" src="imagenes/Amenities/PiletaClimatizada.png"/> */}
                  <div className="w-full">
                    <p className="small-text mb-4 leading-relaxed text-white text-center">
                      Pileta
                      <br /> climatizada{" "}
                    </p>
                  </div>
                </div>
              </div>
              {/*Cancha de fútbol */}
              <div className="p-2 lg:w-1/10 md:w-1/10">
                <div className="h-full flex flex-col items-center text-center">
                  <i className="fas fa-futbol"></i>
                  {/* <img alt="team" className="flex-shrink-0 rounded-lg w-full h-20 object-cover object-center mb-4" src="imagenes/Amenities/CanchaFutbol.png"/> */}
                  <div className="w-full">
                    <p className="small-text mb-4 leading-relaxed text-white text-center">
                      Cancha de
                      <br /> fútbol{" "}
                    </p>
                  </div>
                </div>
              </div>
              {/*Cancha de tenis */}
              <div className="p-2 lg:w-1/10 md:w-1/10">
                <div className="h-full flex flex-col items-center text-center">
                  <i className="fas fa-baseball"></i>
                  {/* <img alt="team" className="flex-shrink-0 rounded-lg w-full h-20 object-cover object-center mb-4" src="imagenes/Amenities/CanchaTenis.png"/> */}
                  <div className="w-full">
                    <p className="small-text mb-4 leading-relaxed text-white text-center">
                      Cancha de
                      <br /> tenis{" "}
                    </p>
                  </div>
                </div>
              </div>
              {/*Cancha de paddle */}
              <div className="p-2 lg:w-1/10 md:w-1/10">
                <div className="h-full flex flex-col items-center text-center">
                  <i className="fas fa-table-tennis-paddle-ball"></i>
                  {/* <img alt="team" className="flex-shrink-0 rounded-lg w-full h-20 object-cover object-center mb-4" src="imagenes/Amenities/CanchaPaddle.png"/> */}
                  <div className="w-full">
                    <p className="small-text mb-4 leading-relaxed text-white text-center">
                      Cancha de
                      <br /> paddle
                    </p>
                  </div>
                </div>
              </div>
              {/*Complejo de piletas*/}
              <div className="p-2 lg:w-1/10 md:w-1/10">
                <div className="h-full flex flex-col items-center text-center">
                  <i className="fas fa-umbrella-beach"></i>
                  {/* <img alt="team" className="flex-shrink-0 rounded-lg w-full h-20 object-cover object-center mb-4" src="imagenes/Amenities/ComplejoPiletas.png"/> */}
                  <div className="w-full">
                    <p className="small-text mb-4 leading-relaxed text-white text-center">
                      Complejo de
                      <br /> piletas
                    </p>
                  </div>
                </div>
              </div>
            </>
          </div>
        )}

      </div>
    </section>
  );
};

export default Amenities;
