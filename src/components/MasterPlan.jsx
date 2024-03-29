const MasterPlan = () => {

  return (
    <>
<section
  id="MasterPlan"
  className="text-white mt-4 body-font h-full w-full flex items-center">
  <div className="container mx-auto flex flex-col md:flex-row items-center px-5 py-1">
    <div className="xl:flex-grow xl:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
        MASTERPLAN
        <br className="hidden lg:inline-block" />
      </h1>
      <p className="mb-8 leading-relaxed">Conocé nuestra propuesta</p>
      <a className="flex justify-center" href="/#Contacto">
        <button
          // onClick={() => verMasterPlan()}
          className="inline-flex text-white bg-yellow-600 border-0 py-2 px-6 focus:outline-none 
          hover:bg-yellow-500 hover:border-black rounded text-lg transition duration-300 ease-in-out 
          transform hover:-translate-y-1 hover:shadow-md">
          Solicitar más información
        </button>
      </a>
      <a className="flex justify-center">
        <p className="mt-8 leading-relaxed">¡¡¡Descargá el Master Plan ahora!!!</p>
      </a>
    </div>
    {/* <div className="xl:max-w-lg xl:w-full w-5/6">
        <img
          loading="lazy"
          className="object-cover object-center rounded"
          alt="hero"
          src="imagenes/masterPlan/Royal_Plano_2.png"
          style={{ height: "50%" }}
        />
      </div> */}
  </div>
</section>


    </>
  );
};

export default MasterPlan;
