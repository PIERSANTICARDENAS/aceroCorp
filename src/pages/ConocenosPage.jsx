
import { Link } from 'react-router-dom';
import {motion } from 'framer-motion';

export const ConocenosPage = () => {
  return (
    
			<div className="lg:h-screen xl:h-screen w-full h-full overflow-hidden relative"
				style={{
					backgroundImage: 'url(./../imagenes/SteelFraming.jpg)',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}>
		<div className="lg:h-screen lg:flex lg:items-center lg:justify-center xl:h-screen xl:flex xl:items-center xl:justify-center h-full flex w-full items-center justify-center bg-black bg-opacity-50 ">
      <div className="container px-6 py-24 mx-auto">

        <div className="lg:w-full xl:w-full flex justify-center sm:flex-row sm:items-center items-center mx-auto">
                  <a href="#" className="hidden sm:flex text-AceroCorp ml-10 items-center">
              <img loading="lazy" className="w-10 h-10 items-center m-1" src="./Logo_AceroCorp.svg" />

            </a>
          <motion.h1
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.5 }}
           transition={{ delay: 0.2, duration: 0.5 }}
           variants={{
             hidden: { opacity: 0, x: -50 },
             visible: { opacity: 1,x: 0 }
           }}  
          className="flex-grow sm:pr-16 text-5xl font-medium title-font text-white">
          AceroCorp
          </motion.h1>
          
         </div>
        <div className="flex flex-col mt-5">
          <div className="h-1 mt-5 bg-gray-200 rounded overflow-hidden">
            <div className="w-24 h-full bg-AceroCorp"></div>
          </div>
          <div className="flex w-full items-center justify-center  mt-5 flex-wrap sm:flex-row flex-col py-6 mb-6">
            <motion.h1
                         initial="hidden"
                         whileInView="visible"
                         viewport={{ once: true, amount: 0.5 }}
                         transition={{ delay: 0.3, duration: 0.5 }}
                         variants={{
                           hidden: { opacity: 0, x: -50 },
                           visible: { opacity: 1,x: 0 }
                         }} 
            className="flex w-full items-center justify-center sm:w-2/5 text-white font-medium title-font text-2xl mb-2 sm:mb-0">Construyendo hogares excepcionales para tus sueños y aspiraciones inmobiliarias.</motion.h1>
            <motion.p
                       initial="hidden"
                       whileInView="visible"
                       viewport={{ once: true, amount: 0.5 }}
                       transition={{ delay: 0.4, duration: 0.5 }}
                       variants={{
                         hidden: { opacity: 0, x: -50 },
                         visible: { opacity: 1,x: 0 }
                       }} 
            className="flex w-full items-center justify-center sm:w-3/5 leading-relaxed text-white sm:pl-10 pl-0">Bienvenido a Acero Corp, líder en la fabricación y construcción de viviendas familiares y emprendimientos inmobiliarios de élite. Con una trayectoria de excelencia y un compromiso inquebrantable con la calidad y la innovación, en Acero Corp nos enorgullecemos de crear hogares que van más allá de las expectativas.</motion.p>
          </div>
        
        </div>
        <Link to="/" className="text-white py-2 px-8 focus:outline-none hover:bg-blue-900 rounded text-lg mt-10 sm:mt-0 ">Volver</Link>
   
      </div>
    </div>
			</div>
  )
}
