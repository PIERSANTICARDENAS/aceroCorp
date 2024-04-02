import { useState } from 'react';
import { Cards } from './shared/Cards';
import {motion }from 'framer-motion';

const MAXPropuestas=3;

const SeccionSteelFraming = () => {
  const [data] = useState([
    {
      id: '1',
      titulo: 'CASA ALMERIA',
      subTitulo: '158 metros cuadrados',
      imagen: '/imagenes/Propuestas/Almeria.png',
    },
    {
      id: '2',
      titulo: 'CASA AMELIE',
      subTitulo: '126 metros cuadrados',
      imagen: '/imagenes/Propuestas/Amelie.png',
    },
    {
      id: '3',
      titulo: 'COSTA AZUL',
      subTitulo: '181 metros cuadrados',
      imagen: '/imagenes/Propuestas/CostaAzul.png',
    },
    {
      id: '4',
      titulo: 'CASA SAN DIEGO',
      subTitulo: '183 metros cuadrados',
      imagen: '/imagenes/Propuestas/SanDiego.png',
    },
    {
      id: '5',
      titulo: 'CASA SANTA BARBARA',
      subTitulo: '140 metros cuadrados',
      imagen: '/imagenes/Propuestas/SantaBarbara.png',
    },
    {
      id: '6',
      titulo: 'CASA VICTORIA',
      subTitulo: '151 metros cuadrados',
      imagen: '/imagenes/Propuestas/Victoria.png',
    },
    {
      id: '7',
      titulo: 'CASA MERIDA',
      subTitulo: '210 metros cuadrados',
      imagen: '/imagenes/Propuestas/Merida.png',
    },
    {
      id: '8',
      titulo: 'CASA CASTAÑO',
      subTitulo: '210 metros cuadrados',
      imagen: '/imagenes/Propuestas/Castaño.png',
    },
    {
      id: '9',
      titulo: 'DORMIES',
      subTitulo: 'Duplex - 2 AMB',
      imagen: '/imagenes/Propuestas/Dormies.png',
    },
    {
      id: '10',
      titulo: 'HARAS I',
      subTitulo: '171 metros cuadrados',
      imagen: '/imagenes/Propuestas/HarasI.png',
    },
    {
      id: '11',
      titulo: 'HARAS II',
      subTitulo: '283 metros cuadrados',
      imagen: '/imagenes/Propuestas/HarasII.png',
    },
    {
      id: '12',
      titulo: 'MEDITERRÁNEA',
      subTitulo: '328 metros cuadrados',
      imagen: '/imagenes/Propuestas/Mediterranea.png',
    },
    {
      id: '13',
      titulo: 'SANTO DOMINGO',
      subTitulo: '203 metros cuadrados',
      imagen: '/imagenes/Propuestas/SantoDomingo.png',
    },
    {
      id: '14',
      titulo: 'CONTEMPORÁNEA',
      subTitulo: '254 metros cuadrados',
      imagen: '/imagenes/Propuestas/Contemporanea.png',
    },
    {
      id: '15',
      titulo: 'AMENABAR',
      subTitulo: '300 metros cuadrados',
      imagen: '/imagenes/Propuestas/Amenabar.png',
    },
  ]);
 // Estado para controlar si se muestra el resto de las tarjetas o no
 const [showAll, setShowAll] = useState(false);

 // Función para alternar la visualización del resto de las tarjetas
 const toggleShowAll = () => {
   setShowAll(!showAll);
 };

 return (
   <section className="text-gray-600 h-full">
     <div className="container px-4 py-16 mx-auto">
       <div className="flex flex-col">
         <div className="h-1 bg-gray-200 rounded overflow-hidden">
           <div className="w-40 h-full bg-AceroCorp"></div>
         </div>
         <div className="flex flex-wrap sm:flex-row flex-col py-3 mb-1">
           <motion.h1 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
           className="sm:w-2/5 text-gray-900 font-medium title-font text-3xl mb-1 sm:mb-0">Steel Framing</motion.h1>
           <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
           className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Propuestas para todas las necesidades</motion.p>
         </div>
       </div>
       <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">

         {data.slice(0, MAXPropuestas).map((item, index) => (
           <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.5 }}
           transition={{ delay: 0.4, duration: 0.7 }}
           variants={{
             hidden: { opacity: 0, x: -50 },
             visible: { opacity: 1, x: 0 }
           }}
           key={index} className="w-full lg:w-1/3 xl:w-1/3">
             <Cards
               key={index}
               item={item}
             />
           </motion.div>
         ))}
         {data.length > MAXPropuestas && (
           <div className="w-full flex justify-content-center ">
             <button onClick={toggleShowAll} className="bg-AceroCorp text-white py-2 px-4 rounded">
               {showAll ? 'Continuar recorriendo...' : 'Mostrar más propuestas'}
             </button>
           </div>
         )}
         {showAll && data.slice(MAXPropuestas).map((item, index) => (
           <div key={index} className="w-full lg:w-1/3 xl:w-1/3">
             <Cards
               key={index}
               item={item}
               />
           </div>
         )
         )
         }
       </div>
     </div>
   </section>
 );
};

export default SeccionSteelFraming;
