import { useState } from 'react';
import { Cards } from './shared/Cards'

const CatalogoSFSeccion = () => {
  const [data] = useState([
    {
      id: '1',
      titulo: 'CASA ALMERIA',
      subTitulo: '158 metros cuadrados',
      imagen: 'imagenes/FondoSecciones/clubHouseIngreso2.jpg',
    },
    {
      id: '2',
      titulo: 'CASA AMELIE',
      subTitulo: '126 metros cuadrados',
      imagen: 'imagenes/FondoSecciones/Render_clubhouse_frente.jpg',
    },
    {
      id: '3',
      titulo: 'COSTA AZUL',
      subTitulo: '181 metros cuadrados',
      imagen: 'imagenes/FondoSecciones/INTERIOR_PILETA.jpg',
    },
    {
      id: '4',
      titulo: 'CASA SAN DIEGO',
      subTitulo: '183 metros cuadrados',
      imagen: 'imagenes/FondoSecciones/INTERIOR_PILETA.jpg',
    },
    {
      id: '5',
      titulo: 'CASA SANTA BARBARA',
      subTitulo: '140 metros cuadrados',
      imagen: 'imagenes/FondoSecciones/INTERIOR_PILETA.jpg',
    },
    {
      id: '6',
      titulo: 'CASA VICTORIA',
      subTitulo: '151 metros cuadrados',
      imagen: 'imagenes/FondoSecciones/INTERIOR_PILETA.jpg',
    },
    {
      id: '7',
      titulo: 'CASA MERIDA',
      subTitulo: '210 metros cuadrados',
      imagen: 'imagenes/FondoSecciones/INTERIOR_PILETA.jpg',
    },
    {
      id: '8',
      titulo: 'CASA CASTAÑO',
      subTitulo: '210 metros cuadrados',
      imagen: 'imagenes/FondoSecciones/INTERIOR_PILETA.jpg',
    },
    {
      id: '9',
      titulo: 'DORMIES',
      subTitulo: 'Duplex - 2 AMB',
      imagen: 'imagenes/FondoSecciones/INTERIOR_PILETA.jpg',
    },
    {
      id: '10',
      titulo: 'HARAS I',
      subTitulo: '171 metros cuadrados',
      imagen: 'imagenes/FondoSecciones/INTERIOR_PILETA.jpg',
    },
    {
      id: '11',
      titulo: 'HARAS II',
      subTitulo: '283 metros cuadrados',
      imagen: 'imagenes/FondoSecciones/INTERIOR_PILETA.jpg',
    },
    {
      id: '12',
      titulo: 'MEDITERRÁNEA',
      subTitulo: '328 metros cuadrados',
      imagen: 'imagenes/FondoSecciones/INTERIOR_PILETA.jpg',
    },
    {
      id: '13',
      titulo: 'SANTO DOMINGO',
      subTitulo: '203 metros cuadrados',
      imagen: 'imagenes/FondoSecciones/INTERIOR_PILETA.jpg',
    },
    {
      id: '14',
      titulo: 'CONTEMPORÁNEA',
      subTitulo: '254 metros cuadrados',
      imagen: 'imagenes/FondoSecciones/INTERIOR_PILETA.jpg',
    },
    {
      id: '15',
      titulo: 'AMENABAR',
      subTitulo: '300 metros cuadrados',
      imagen: 'imagenes/FondoSecciones/INTERIOR_PILETA.jpg',
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
           <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-3xl mb-1 sm:mb-0">Steel Framing</h1>
           <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Propuestas para todas las necesidades</p>
         </div>
       </div>
       <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">

         {data.slice(0, 6).map((item, index) => (
           <div key={index} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3">
             <Cards
               key={index}
               titulo={item.titulo}
               subTitulo={item.subTitulo}
             />
           </div>
         ))}
         {data.length > 6 && (
           <div className="w-full flex justify-content-center ">
             <button onClick={toggleShowAll} className="bg-AceroCorp text-white py-2 px-4 rounded">
               {showAll ? 'Continuar recorriendo...' : 'Mostrar más propuestas'}
             </button>
           </div>
         )}
         {showAll && data.slice(6).map((item, index) => (
           <div key={index} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3">
             <Cards
               key={index}
               titulo={item.titulo}
               subTitulo={item.subTitulo}
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

export default CatalogoSFSeccion;
