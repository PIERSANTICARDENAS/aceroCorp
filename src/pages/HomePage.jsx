//Componentes
import Header from '../components/Header';
import Hero from '../components/SeccionHero';
import SeccionConocenos from '../components/SeccionConocenos';
import SeccionSteelFraming from '../components/SeccionSteelFraming';
import SeccionObras from '../components/SeccionObras';
import SeccionConsultanos from '../components/SeccionConsultanos';
import Footer from '../components/Footer';



const HomePages = () => {

	return (
		<>
			<div id="Home" className="lg:h-screen xl:h-screen w-full h-full overflow-hidden relative">
				<Header />
				<Hero />
				<small className="absolute w-20 h-20 bg-black rounded-full -bottom-10 -right-10"></small>
			</div>

			<div id="Conocenos" className="lg:h-screen xl:h-screen w-full h-full overflow-hidden relative bg-gray-200">
				<SeccionConocenos />
			</div>

			<div id="SteelFraming" className="lg:h-screen xl:h-screen w-full">
				<SeccionSteelFraming propuestas={3}/>
			</div>

			<div id="Obras" className="lg:h-screen xl:h-screen w-full h-full overflow-hidden relative"
				style={{
					backgroundImage: 'url(./../imagenes/SteelFraming.jpg)',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}>
				<SeccionObras />
			</div>
			<div id="Consultanos" className="lg:h-1/2 xl:h-1/2 md:h-screen w-full">
				<SeccionConsultanos />
			</div>
			<div className="h-1 bg-gray-200 rounded overflow-hidden md:mt-2">
           <div className="w-40 h-full bg-AceroCorp"></div>
         </div>
			<div className="h-full w-full">
				<Footer />
			</div>

		</>


	);
};

export default HomePages;
