import { motion } from 'framer-motion';

const SeccionHero = () => {
  return (
    <section className="text-gray-600 body-font pt-10">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <motion.h1 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
            className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Construcciones confiables</motion.h1>
          <motion.p
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.5 }}
             transition={{ delay: 0.3, duration: 0.5 }}
             variants={{
               hidden: { opacity: 0, y: 50 },
               visible: { opacity: 1, y: 0 }
             }}
          className="mb-8 leading-relaxed">Una empresa dedicada a la industria de la construcción, tanto en Argentina como en otros países, a través de sus empresas subsidiarias.</motion.p>
          <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.5 }}
             transition={{ delay: 0.4, duration: 0.5 }}
             variants={{
               hidden: { opacity: 0, x: -50 },
               visible: { opacity: 1, x: 0 }
             }}
          className="flex items-center justify-center w-full">
            <a href="/#Consultanos" className="text-white bg-AceroCorp border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Consultanos</a>
          </motion.div>
        </div>
        <motion.div
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.5 }}
           transition={{ delay: 0.5, duration: 0.7 }}
           variants={{
             hidden: { opacity: 0, x: -50 },
             visible: { opacity: 1, x: 0 }
           }}
        className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center rounded" alt="hero" src="./AceroCorp.svg" />
        </motion.div>
      </div>
    </section>
  );
};

export default SeccionHero;
