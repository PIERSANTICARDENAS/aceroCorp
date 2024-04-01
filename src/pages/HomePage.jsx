//Componentes
import Header from '../components/Header';
import Hero from '../components/Hero';
import ConocenosSeccion from '../components/ConocenosSeccion';
import ObrasSeccion from '../components/ObrasSeccion';
import CatalogoSFSeccion from '../components/CatalogoSFSeccion';
import Form from '../components/Form';


const HomePages = () => {

	return (
		<>
			<div id="Home" className="h-screen w-full">
				<Header />
				<Hero />
			</div>

			<div className="h-screen w-full bg-gray-200">
				<ConocenosSeccion />
			</div>

			<div className="w-full">
				<CatalogoSFSeccion />
			</div>

			<div className="h-screen w-full relative"
				style={{
					backgroundImage: 'url(./../imagenes/SteelFraming.jpg)',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}>
			
				<ObrasSeccion />
			</div>
			<div className="w-full">
				<Form />
			</div>

		</>


	);
};

export default HomePages;
