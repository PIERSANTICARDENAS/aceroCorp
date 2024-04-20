import {  useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {motion} from 'framer-motion';

const DetallePropuestaPage = () => {
  useEffect(() => {
    const resetScrollPosition = () => {
      window.scrollTo(0, 0);
    };
    // Restablecer la posición del scroll cuando se carga una nueva página
    resetScrollPosition();
  }, []);
  const [data] = useState([
    {
      id: '1',
      titulo: 'CASA ALMERIA',
      subTitulo: '158 metros cuadrados',
      destacar:'4 Dormitorios',
      info:'Descubre esta encantadora casa de dos plantas con cuatro dormitorios, dos baños, y un diseño amplio y funcional que incluye cocina, comedor y garaje. Con una superficie total de 126 metros cuadrados, de los cuales 94 están cubiertos, esta residencia combina comodidad y estilo en cada detalle. Ideal para familias que buscan un hogar espacioso y acogedor, esta propiedad ofrece un ambiente perfecto para crear recuerdos duraderos y disfrutar de la vida en un entorno tranquilo y apacible. ¡Haz de esta casa tu nuevo hogar y comienza una nueva etapa llena de alegría y bienestar!',
      imagen: '/imagenes/Propuestas/Almeria.png',
      imagen_Plano: '/imagenes/Propuestas/Almeria_Plano.png',
      imagen1: '/imagenes/Propuestas/Almeria1.png',
      imagen2: '/imagenes/Propuestas/Almeria2.png',
    },
    {
      id: '2',
      titulo: 'CASA AMELIE',
      subTitulo: '126 metros cuadrados',
      destacar:'4 Dormitorios',
      info:'Descubre esta encantadora casa de dos plantas con cuatro dormitorios, dos baños, y un diseño amplio y funcional que incluye cocina, comedor y garaje. Con una superficie total de 126 metros cuadrados, de los cuales 94 están cubiertos, esta residencia combina comodidad y estilo en cada detalle. Ideal para familias que buscan un hogar espacioso y acogedor, esta propiedad ofrece un ambiente perfecto para crear recuerdos duraderos y disfrutar de la vida en un entorno tranquilo y apacible. ¡Haz de esta casa tu nuevo hogar y comienza una nueva etapa llena de alegría y bienestar!',
      imagen: '/imagenes/Propuestas/Amelie.png',
       imagen_Plano: '/imagenes/Propuestas/Almeria_Plano.png',
      imagen1: '/imagenes/Propuestas/Almeria1.png',
      imagen2: '/imagenes/Propuestas/Almeria2.png',
    },
    {
      id: '3',
      titulo: 'COSTA AZUL',
      subTitulo: '181 metros cuadrados',
      destacar:'4 Dormitorios',
      info:'Descubre esta encantadora casa de dos plantas con cuatro dormitorios, dos baños, y un diseño amplio y funcional que incluye cocina, comedor y garaje. Con una superficie total de 126 metros cuadrados, de los cuales 94 están cubiertos, esta residencia combina comodidad y estilo en cada detalle. Ideal para familias que buscan un hogar espacioso y acogedor, esta propiedad ofrece un ambiente perfecto para crear recuerdos duraderos y disfrutar de la vida en un entorno tranquilo y apacible. ¡Haz de esta casa tu nuevo hogar y comienza una nueva etapa llena de alegría y bienestar!',
      imagen: '/imagenes/Propuestas/CostaAzul.png',    
      imagen_Plano: '/imagenes/Propuestas/Almeria_Plano.png',
      imagen1: '/imagenes/Propuestas/Almeria1.png',
      imagen2: '/imagenes/Propuestas/Almeria2.png',
    },
    {
      id: '4',
      titulo: 'CASA SAN DIEGO',
      subTitulo: '183 metros cuadrados',
      destacar:'4 Dormitorios',
      info:'Descubre esta encantadora casa de dos plantas con cuatro dormitorios, dos baños, y un diseño amplio y funcional que incluye cocina, comedor y garaje. Con una superficie total de 126 metros cuadrados, de los cuales 94 están cubiertos, esta residencia combina comodidad y estilo en cada detalle. Ideal para familias que buscan un hogar espacioso y acogedor, esta propiedad ofrece un ambiente perfecto para crear recuerdos duraderos y disfrutar de la vida en un entorno tranquilo y apacible. ¡Haz de esta casa tu nuevo hogar y comienza una nueva etapa llena de alegría y bienestar!',
      imagen: '/imagenes/Propuestas/SanDiego.png', 
      imagen_Plano: '/imagenes/Propuestas/Almeria_Plano.png',
      imagen1: '/imagenes/Propuestas/Almeria1.png',
      imagen2: '/imagenes/Propuestas/Almeria2.png',
    },
    {
      id: '5',
      titulo: 'CASA SANTA BARBARA',
      subTitulo: '140 metros cuadrados',
      destacar:'4 Dormitorios',
      info:'Descubre esta encantadora casa de dos plantas con cuatro dormitorios, dos baños, y un diseño amplio y funcional que incluye cocina, comedor y garaje. Con una superficie total de 126 metros cuadrados, de los cuales 94 están cubiertos, esta residencia combina comodidad y estilo en cada detalle. Ideal para familias que buscan un hogar espacioso y acogedor, esta propiedad ofrece un ambiente perfecto para crear recuerdos duraderos y disfrutar de la vida en un entorno tranquilo y apacible. ¡Haz de esta casa tu nuevo hogar y comienza una nueva etapa llena de alegría y bienestar!',
      imagen: '/imagenes/Propuestas/SantaBarbara.png', 
      imagen_Plano: '/imagenes/Propuestas/Almeria_Plano.png',
      imagen1: '/imagenes/Propuestas/Almeria1.png',
      imagen2: '/imagenes/Propuestas/Almeria2.png',
    },
    {
      id: '6',
      titulo: 'CASA VICTORIA',
      subTitulo: '151 metros cuadrados',
      destacar:'4 Dormitorios',
      info:'Descubre esta encantadora casa de dos plantas con cuatro dormitorios, dos baños, y un diseño amplio y funcional que incluye cocina, comedor y garaje. Con una superficie total de 126 metros cuadrados, de los cuales 94 están cubiertos, esta residencia combina comodidad y estilo en cada detalle. Ideal para familias que buscan un hogar espacioso y acogedor, esta propiedad ofrece un ambiente perfecto para crear recuerdos duraderos y disfrutar de la vida en un entorno tranquilo y apacible. ¡Haz de esta casa tu nuevo hogar y comienza una nueva etapa llena de alegría y bienestar!',
      imagen: '/imagenes/Propuestas/Victoria.png', 
      imagen_Plano: '/imagenes/Propuestas/Almeria_Plano.png',
      imagen1: '/imagenes/Propuestas/Almeria1.png',
      imagen2: '/imagenes/Propuestas/Almeria2.png',
    },
    {
      id: '7',
      titulo: 'CASA MERIDA',
      subTitulo: '210 metros cuadrados',
      destacar:'4 Dormitorios',
      info:'Descubre esta encantadora casa de dos plantas con cuatro dormitorios, dos baños, y un diseño amplio y funcional que incluye cocina, comedor y garaje. Con una superficie total de 126 metros cuadrados, de los cuales 94 están cubiertos, esta residencia combina comodidad y estilo en cada detalle. Ideal para familias que buscan un hogar espacioso y acogedor, esta propiedad ofrece un ambiente perfecto para crear recuerdos duraderos y disfrutar de la vida en un entorno tranquilo y apacible. ¡Haz de esta casa tu nuevo hogar y comienza una nueva etapa llena de alegría y bienestar!',
      imagen: '/imagenes/Propuestas/Merida.png', 
      imagen_Plano: '/imagenes/Propuestas/Almeria_Plano.png',
      imagen1: '/imagenes/Propuestas/Almeria1.png',
      imagen2: '/imagenes/Propuestas/Almeria2.png',
    },
    {
      id: '8',
      titulo: 'CASA CASTAÑO',
      subTitulo: '210 metros cuadrados',
      destacar:'4 Dormitorios',
      info:'Descubre esta encantadora casa de dos plantas con cuatro dormitorios, dos baños, y un diseño amplio y funcional que incluye cocina, comedor y garaje. Con una superficie total de 126 metros cuadrados, de los cuales 94 están cubiertos, esta residencia combina comodidad y estilo en cada detalle. Ideal para familias que buscan un hogar espacioso y acogedor, esta propiedad ofrece un ambiente perfecto para crear recuerdos duraderos y disfrutar de la vida en un entorno tranquilo y apacible. ¡Haz de esta casa tu nuevo hogar y comienza una nueva etapa llena de alegría y bienestar!',
      imagen: '/imagenes/Propuestas/Castaño.png', 
      imagen_Plano: '/imagenes/Propuestas/Almeria_Plano.png',
      imagen1: '/imagenes/Propuestas/Almeria1.png',
      imagen2: '/imagenes/Propuestas/Almeria2.png',
    },
    {
      id: '9',
      titulo: 'DORMIES',
      subTitulo: 'Duplex - 2 AMB',
      destacar:'4 Dormitorios',
      info:'Descubre esta encantadora casa de dos plantas con cuatro dormitorios, dos baños, y un diseño amplio y funcional que incluye cocina, comedor y garaje. Con una superficie total de 126 metros cuadrados, de los cuales 94 están cubiertos, esta residencia combina comodidad y estilo en cada detalle. Ideal para familias que buscan un hogar espacioso y acogedor, esta propiedad ofrece un ambiente perfecto para crear recuerdos duraderos y disfrutar de la vida en un entorno tranquilo y apacible. ¡Haz de esta casa tu nuevo hogar y comienza una nueva etapa llena de alegría y bienestar!',
      imagen: '/imagenes/Propuestas/Dormies.png', 
      imagen_Plano: '/imagenes/Propuestas/Almeria_Plano.png',
      imagen1: '/imagenes/Propuestas/Almeria1.png',
      imagen2: '/imagenes/Propuestas/Almeria2.png',
    },
    {
      id: '10',
      titulo: 'HARAS I',
      subTitulo: '171 metros cuadrados',
      destacar:'4 Dormitorios',
      info:'Descubre esta encantadora casa de dos plantas con cuatro dormitorios, dos baños, y un diseño amplio y funcional que incluye cocina, comedor y garaje. Con una superficie total de 126 metros cuadrados, de los cuales 94 están cubiertos, esta residencia combina comodidad y estilo en cada detalle. Ideal para familias que buscan un hogar espacioso y acogedor, esta propiedad ofrece un ambiente perfecto para crear recuerdos duraderos y disfrutar de la vida en un entorno tranquilo y apacible. ¡Haz de esta casa tu nuevo hogar y comienza una nueva etapa llena de alegría y bienestar!',
      imagen: '/imagenes/Propuestas/HarasI.png', 
      imagen_Plano: '/imagenes/Propuestas/Almeria_Plano.png',
      imagen1: '/imagenes/Propuestas/Almeria1.png',
      imagen2: '/imagenes/Propuestas/Almeria2.png',
    },
    {
      id: '11',
      titulo: 'HARAS II',
      subTitulo: '283 metros cuadrados',
      destacar:'4 Dormitorios',
      info:'Descubre esta encantadora casa de dos plantas con cuatro dormitorios, dos baños, y un diseño amplio y funcional que incluye cocina, comedor y garaje. Con una superficie total de 126 metros cuadrados, de los cuales 94 están cubiertos, esta residencia combina comodidad y estilo en cada detalle. Ideal para familias que buscan un hogar espacioso y acogedor, esta propiedad ofrece un ambiente perfecto para crear recuerdos duraderos y disfrutar de la vida en un entorno tranquilo y apacible. ¡Haz de esta casa tu nuevo hogar y comienza una nueva etapa llena de alegría y bienestar!',
      imagen: '/imagenes/Propuestas/HarasII.png', 
      imagen_Plano: '/imagenes/Propuestas/Almeria_Plano.png',
      imagen1: '/imagenes/Propuestas/Almeria1.png',
      imagen2: '/imagenes/Propuestas/Almeria2.png',
    },
    {
      id: '12',
      titulo: 'MEDITERRÁNEA',
      subTitulo: '328 metros cuadrados',
      destacar:'4 Dormitorios',
      info:'Descubre esta encantadora casa de dos plantas con cuatro dormitorios, dos baños, y un diseño amplio y funcional que incluye cocina, comedor y garaje. Con una superficie total de 126 metros cuadrados, de los cuales 94 están cubiertos, esta residencia combina comodidad y estilo en cada detalle. Ideal para familias que buscan un hogar espacioso y acogedor, esta propiedad ofrece un ambiente perfecto para crear recuerdos duraderos y disfrutar de la vida en un entorno tranquilo y apacible. ¡Haz de esta casa tu nuevo hogar y comienza una nueva etapa llena de alegría y bienestar!',
      imagen: '/imagenes/Propuestas/Mediterranea.png', 
      imagen_Plano: '/imagenes/Propuestas/Almeria_Plano.png',
      imagen1: '/imagenes/Propuestas/Almeria1.png',
      imagen2: '/imagenes/Propuestas/Almeria2.png',
    },
    {
      id: '13',
      titulo: 'SANTO DOMINGO',
      subTitulo: '203 metros cuadrados',
      destacar:'4 Dormitorios',
      info:'Descubre esta encantadora casa de dos plantas con cuatro dormitorios, dos baños, y un diseño amplio y funcional que incluye cocina, comedor y garaje. Con una superficie total de 126 metros cuadrados, de los cuales 94 están cubiertos, esta residencia combina comodidad y estilo en cada detalle. Ideal para familias que buscan un hogar espacioso y acogedor, esta propiedad ofrece un ambiente perfecto para crear recuerdos duraderos y disfrutar de la vida en un entorno tranquilo y apacible. ¡Haz de esta casa tu nuevo hogar y comienza una nueva etapa llena de alegría y bienestar!',
      imagen: '/imagenes/Propuestas/SantoDomingo.png', 
      imagen_Plano: '/imagenes/Propuestas/Almeria_Plano.png',
      imagen1: '/imagenes/Propuestas/Almeria1.png',
      imagen2: '/imagenes/Propuestas/Almeria2.png',
    },
    {
      id: '14',
      titulo: 'CONTEMPORÁNEA',
      subTitulo: '254 metros cuadrados',
      destacar:'4 Dormitorios',
      info:'Descubre esta encantadora casa de dos plantas con cuatro dormitorios, dos baños, y un diseño amplio y funcional que incluye cocina, comedor y garaje. Con una superficie total de 126 metros cuadrados, de los cuales 94 están cubiertos, esta residencia combina comodidad y estilo en cada detalle. Ideal para familias que buscan un hogar espacioso y acogedor, esta propiedad ofrece un ambiente perfecto para crear recuerdos duraderos y disfrutar de la vida en un entorno tranquilo y apacible. ¡Haz de esta casa tu nuevo hogar y comienza una nueva etapa llena de alegría y bienestar!',
      imagen: '/imagenes/Propuestas/Contemporanea.png', 
      imagen_Plano: '/imagenes/Propuestas/Almeria_Plano.png',
      imagen1: '/imagenes/Propuestas/Almeria1.png',
      imagen2: '/imagenes/Propuestas/Almeria2.png',
    },
    {
      id: '15',
      titulo: 'AMENABAR',
      subTitulo: '300 metros cuadrados',
      destacar:'4 Dormitorios',
      info:'Descubre esta encantadora casa de dos plantas con cuatro dormitorios, dos baños, y un diseño amplio y funcional que incluye cocina, comedor y garaje. Con una superficie total de 126 metros cuadrados, de los cuales 94 están cubiertos, esta residencia combina comodidad y estilo en cada detalle. Ideal para familias que buscan un hogar espacioso y acogedor, esta propiedad ofrece un ambiente perfecto para crear recuerdos duraderos y disfrutar de la vida en un entorno tranquilo y apacible. ¡Haz de esta casa tu nuevo hogar y comienza una nueva etapa llena de alegría y bienestar!',
      imagen: '/imagenes/Propuestas/Amenabar.png', 
      imagen_Plano: '/imagenes/Propuestas/Almeria_Plano.png',
      imagen1: '/imagenes/Propuestas/Almeria1.png',
      imagen2: '/imagenes/Propuestas/Almeria2.png',
    },
  ]);

  const { id } = useParams();

  const item = data.find(item => item.id === id);
  console.warn("item", item);
  return (
    <>
    <div className="lg:h-screen xl:h-screen h-full w-full items-center justify-center mb-4">
      <div className="text-gray-600 w-full items-center justify-center">
        <div className="container px-10 py-4 mx-auto">
          <div className="flex flex-col">
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
              <div className="w-40 h-full bg-AceroCorp"></div>
            </div>
            <Link to="/PropuestasPage" className="hidden sm:flex text-AceroCorp ml-10 items-center">
              {/* <img loading="lazy" className="w-20 h-20 items-right m-1" src="../../public/Logo_AceroCorp.svg" /> */}
              <span className="text-3xl text-black"> <b>Acero</b> </span>
              <span className="text-3xl text-AceroCorp"> <b>Corp</b> </span>
            </Link>

            <div className="h-1 bg-gray-200 rounded overflow-hidden">
              <div className="w-40 h-full bg-AceroCorp"></div>
            </div>

            <div className="mb-1">
              <Link to="/PropuestasPage" className="text-gray-900 font-medium title-font text-md volverLink bg-AceroCorp">
                VOLVER
              </Link>
            </div>
          </div>


        </div>
        <div className="px-5 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={`${item.imagen}`} />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">{item.subTitulo}</h2>
             <motion.h1
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.5 }}
           transition={{ delay: 0.2, duration: 0.5 }}
           variants={{
             hidden: { opacity: 0, x: -50 },
             visible: { opacity: 1,x: 0 }
           }}  
           className="text-gray-900 text-3xl title-font font-medium mb-1">{item.titulo}
          </motion.h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-blue-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-blue-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-blue-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-blue-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-blue-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <motion.span  initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.5 }}
           transition={{ delay: 0.2, duration: 0.5 }}
           variants={{
             hidden: { opacity: 0, x: -50 },
             visible: { opacity: 1,x: 0 }
           }}   className="text-gray-600 ml-3">{item.destacar}</motion.span>
                </span>
              
              </div>
              <motion.p  initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.5 }}
           transition={{ delay: 0.2, duration: 0.5 }}
           variants={{
             hidden: { opacity: 0, x: -50 },
             visible: { opacity: 1,x: 0 }
           }}   className="leading-relaxed">{item.info}.</motion.p>
            </div>
          </div>
        </div>
      </div>
</div>
        
<div className="text-gray-600 lg:h-screen xl:h-screen w-full h-full mt-4 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"> Descubre Nuestros Espacios: </h1>
      </div>
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center"  src={`${item.imagen_Plano}`}/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">THE SUBTITLE</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={`${item.imagen1}`}/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">THE SUBTITLE</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center"  src={`${item.imagen2}`}/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">THE SUBTITLE</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Neptune</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      {/* <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center"  src={`${item.imagen}`}/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">THE SUBTITLE</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Holden Caulfield</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center"  src={`${item.imagen1}`}/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">THE SUBTITLE</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Alper Kamu</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div> */}
    </div>
  </div>
</div>


    </>
  )
}

export default DetallePropuestaPage;
