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
			<div id="Home" className="h-screen w-full">
				<Header />
				<Hero />
			</div>

			<div className="h-screen w-full bg-gray-200">
				<SeccionConocenos />
			</div>

			<div id="SteelFraming" className="w-full">
				<SeccionSteelFraming />
			</div>

			<div id="Obras" className="h-screen w-full relative"
				style={{
					backgroundImage: 'url(./../imagenes/SteelFraming.jpg)',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}>
				<SeccionObras />
			</div>
			<div id="Consultanos" className="h-screen w-full">
				<SeccionConsultanos />
			</div>
			<div className="h-1 bg-gray-200 rounded overflow-hidden mt-2">
           <div className="w-40 h-full bg-AceroCorp"></div>
         </div>
			<div className="h-full w-full">
				<Footer />
			</div>

		</>


	);
};

export default HomePages;
