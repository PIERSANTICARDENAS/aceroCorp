import { useEffect, useState } from 'react';
import { Cards } from './shared/Cards';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";



const SeccionDesarrollos = ({propuestas}) => {
  useEffect(() => {
    const resetScrollPosition = () => {
      window.scrollTo(0, 0);
    };
    // Restablecer la posición del scroll cuando se carga una nueva página
    resetScrollPosition();
  }, []);
  const MAXPropuestas=propuestas|| 3;
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

 return (
   <div className="text-gray-600 h-full flex w-full items-center justify-center">
     <div className="container px-4 py-24 mx-auto">
       <div className="flex flex-col">
         <div className="h-1 bg-gray-200 rounded overflow-hidden">
           <div className="w-40 h-full bg-AceroCorp"></div>
         </div>
         <div className="flex flex-wrap sm:flex-row flex-col py-3 mb-4">
           <h1 
           className="sm:w-2/5 text-gray-900 font-medium title-font text-3xl mb-1 sm:mb-0">Desarrollos</h1>
           <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Sumérgete en nuestra exclusiva galería de casas y descubre una amplia selección de diseños residenciales excepcionales.</p>
         </div>
       </div>
 
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">

          {data.slice(0, MAXPropuestas).map((item, index) => (
            <div
            key={index} className="w-full lg:w-1/3 xl:w-1/3 mt-3">
              <Cards
                item={item}
              />
            </div>
          ))}
          {data.length > MAXPropuestas && (
            <div className="w-full flex justify-content-center ">
              <Link to="/DesarrollosPage" className="bg-AceroCorp text-white py-2 px-4 rounded">
               Ver más desarrollos
              </Link>
            </div>
          )}
 
        </div>
      
    
     </div>
   </div>
 );
};

export default SeccionDesarrollos;

SeccionDesarrollos.propTypes = {
  propuestas: PropTypes.number.isRequired,
};
