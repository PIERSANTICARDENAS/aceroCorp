import { motion } from 'framer-motion';

const SeccionHero = () => {
	return (
		<section className='h-full w-full text-gray-600 body-font pt-10 overflow-hidden items-center justify-center flex'>
			<div className='flex py-24 h-full w-full md:flex-row md:h-full md:w-full flex-col items-center justify-center relative'>
				<div className='flex px-5 py-5 lg:flex-grow xl:flex-grow md:w-1/2 lg:pr-24 md:pr-16  flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center justify-center'>
					<motion.h1
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, amount: 0.5 }}
						transition={{ delay: 0.2, duration: 0.5 }}
						variants={{
							hidden: { opacity: 0, y: 50 },
							visible: { opacity: 1, y: 0 },
						}}
						className='title-font text-2xl sm:text-4xl mb-4 font-medium flex w-full items-center justify-center text-gray-900'>
						Construcciones confiables
					</motion.h1>
					<motion.p
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, amount: 0.5 }}
						transition={{ delay: 0.3, duration: 0.5 }}
						variants={{
							hidden: { opacity: 0, y: 50 },
							visible: { opacity: 1, y: 0 },
						}}
						className='mb-8 leading-relaxed flex w-auto items-center justify-center text-2xl'>
						Una empresa dedicada a la industria de la construcción, tanto en
						Argentina como en otros países, a través de sus empresas
						subsidiarias.
					</motion.p>
					<motion.div
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, amount: 0.5 }}
						transition={{ delay: 0.4, duration: 0.5 }}
						variants={{
							hidden: { opacity: 0, x: -50 },
							visible: { opacity: 1, x: 0 },
						}}
						className='flex items-center justify-center w-full'>
						<a
							href='/#SeccionConsultanos'
							className='text-white bg-AceroCorp border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg'>
							Consultanos
						</a>
					</motion.div>
				</div>
				<motion.div
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.5 }}
					transition={{ delay: 0.5, duration: 0.7 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}
					className='lg:max-w-lg lg:w-full xl:max-w-lg xl:w-full md:w-1/2 flex w-full justify-center items-center p-2'>
					<img
						className='object-cover object-center rounded'
						alt='hero'
						src='./AceroCorp.svg'
					/>
				</motion.div>
				<small className='absolute w-40 h-40 bg-AceroCorp rounded-full -top-7 -right-20'></small>
			</div>
		</section>
	);
};

export default SeccionHero;
