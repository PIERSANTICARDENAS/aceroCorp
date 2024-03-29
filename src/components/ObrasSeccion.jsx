import React from 'react'
import { Link } from 'react-router-dom'

export const ObrasSeccion = () => {
  return (
    <section className="h-screen w-full bg-black bg-opacity-50 lg:flex lg:items-center lg:justify-center">
    <div className="container px-6 py-10 mx-auto">
    <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
      <h1 className="flex-grow sm:pr-16 text-4xl font-medium title-font text-white">Recorré nuestras obras.</h1>
      <Link to="/ObrasPage" className="flex-shrink-0 text-white bg-blue-600 border-0 py-2 px-8 focus:outline-none hover:bg-blue-900 rounded text-lg mt-10 sm:mt-0">Ver más</Link>
    </div>
    <div className="flex flex-col mt-5">
      <div className="h-1 mt-5 bg-gray-200 rounded overflow-hidden">
        <div className="w-24 h-full bg-blue-600"></div>
      </div>
      <div className="flex  mt-5 flex-wrap sm:flex-row flex-col py-6 mb-6">
        <h1 className="sm:w-2/5 text-white font-medium title-font text-2xl mb-2 sm:mb-0">Descubre Nuestro Portafolio</h1>
        <p className="sm:w-3/5 leading-relaxed text-white sm:pl-10 pl-0">"Explora nuestras obras destacadas: testimonio de calidad y excelencia. Descubre nuestra experiencia en construcción a través de una galería de proyectos emblemáticos que reflejan nuestro compromiso y profesionalismo en cada detalle."</p>
      </div>
    </div>
  </div>
</section>
  )
}
