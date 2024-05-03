import { useEffect } from "react";
import HeaderBasico from "../components/HeaderBasico"

export const ObrasPage = () => {
  useEffect(() => {
    const resetScrollPosition = () => {
      window.scrollTo(0, 0);
    };
    // Restablecer la posición del scroll cuando se carga una nueva página
    resetScrollPosition();
  }, []);


  return (
    <div className="w-full h-full relative">
      <HeaderBasico></HeaderBasico>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col">
         <div className="h-1 bg-gray-200 rounded overflow-hidden">
           <div className="w-40 h-full bg-AceroCorp"></div>
         </div>
         <div className="flex flex-wrap sm:flex-row flex-col py-3 mb-4">
           <h1 
           className="sm:w-2/5 text-gray-900 font-medium title-font text-3xl mb-1 sm:mb-0">CANING</h1>
           {/* <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Conocé e inspirate.</p> */}
         </div>
       </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="/imagenes/Obras/casaCannin/Caning_Portada_Sol.jpeg" alt="content" />
                <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font">Frente</h3>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6"  src="/imagenes/Obras/casaCannin/Caning_Estructura.jpeg" alt="content" />
                <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font">Estructura</h3>

              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="/imagenes/Obras/casaCannin/Caning_Pileta.jpeg" alt="content" />
                <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font">Pileta</h3>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="/imagenes/Obras/casaCannin/Caning_Int_1.jpeg" alt="content" />
                <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font">Interior</h3>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="/imagenes/Obras/casaCannin/Caning_Int_2.jpeg" alt="content" />
                <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font">Frente</h3>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6"  src="/imagenes/Obras/casaCannin/Caning_Int_3.jpeg" alt="content" />
                <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font">Pileta</h3>

              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="/imagenes/Obras/casaCannin/Caning_Int_4.jpeg" alt="content" />
                <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font">Galeria</h3>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="/imagenes/Obras/casaCannin/Caning_Const_1.jpeg" alt="content" />
                <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font">Interior</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Obra 2 */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col">
         <div className="h-1 bg-gray-200 rounded overflow-hidden">
           <div className="w-40 h-full bg-AceroCorp"></div>
         </div>
         <div className="flex flex-wrap sm:flex-row flex-col py-3 mb-4">
           <h1 
           className="sm:w-2/5 text-gray-900 font-medium title-font text-3xl mb-1 sm:mb-0">SAN VICENTE</h1>
           {/* <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Conocé e inspirate.</p> */}
         </div>
       </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="/imagenes/Obras/CasaSanVicente/Casa_Portada.jpeg" alt="content" />
                <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font">Frente</h3>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6"  src="/imagenes/Obras/CasaSanVicente/CasaSanV_Int_1.jpeg" alt="content" />
                <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font">Living</h3>

              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="/imagenes/Obras/CasaSanVicente/Casa_SanV_Int_2.jpeg" alt="content" />
                <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font">Cocina</h3>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="/imagenes/Obras/CasaSanVicente/Casa_Int_3.jpeg" alt="content" />
                <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font">Baño</h3>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="/imagenes/Obras/CasaSanVicente/imagen1.jpeg" alt="content" />
                <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font">Frente</h3>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6"  src="/imagenes/Obras/CasaSanVicente/imagen2.jpeg" alt="content" />
                <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font">Pileta</h3>

              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="/imagenes/Obras/CasaSanVicente/Imagen3.jpeg" alt="content" />
                <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font">Galeria</h3>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="/imagenes/Obras/CasaSanVicente/imagen4.jpeg" alt="content" />
                <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font">Interior</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <small className="absolute w-20 h-20 bg-black rounded-full -bottom-10 -right-10"></small>
    </div>
  )
}
