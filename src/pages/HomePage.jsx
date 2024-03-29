import { useState } from 'react';

//Componentes
import Header from '../components/Header';
import Hero from '../components/Hero';
import { ConocenosSeccion } from '../components/ConocenosSeccion';
import { ObrasSeccion } from '../components/ObrasSeccion';
import { CatalogoSFSeccion } from '../components/CatalogoSFSeccion';
import Carousel from '../components/Carousel';

const HomePages = () => {
	const [data] = useState([
		{
			id: '1',
			titulo: 'UNA NUEVA FORMA DE VIVIR',
			subTitulo: (
				<>
					Entre la elegancia propia de una arquitectura moderna, la belleza
					orgánica de sus lagos, su arquitectura y la delicadeza otorgada por la
					naturaleza y sus ventajas sustentables.
					<br />
					La naturaleza, sustentabilidad, versatilidad y las formas orgánicas
					son los pilares en Royal Village, a tan solo 50 minutos de la Ciudad
					de Buenos Aires y 25 minutos del Aeropuerto Internacional de Ezeiza.
				</>
			),
			imagen: 'imagenes/FondoSecciones/clubHouseIngreso2.jpg',
		},
		{
			id: '2',
			titulo: 'ARQUITECTURA & NATURALEZA',
			subTitulo: (
				<>
					Royal Village, se destaca por su arquitectura diseñada para que cada
					uno de sus habitantes se sientan en un lugar único, a través de un
					planteamiento urbanístico pensado para todos, donde los lotes dan a
					vistas especiales: lagos, avenidas o corredores verdes y sustentables.
					<br />
					Con un diseño paisajístico singular en la región.
				</>
			),
			imagen: 'imagenes/FondoSecciones/Render_clubhouse_frente.jpg',
		},
		{
			id: '3',
			titulo: 'CLUB DEPORTIVO',
			subTitulo: (
				<>
					Explora la excelencia deportiva y sumérgete en un mundo de diversión.
					Nuestro exclusivo club de última generación ofrece una amplia gama de
					instalaciones y servicios para satisfacer todas tus necesidades
					deportivas y de ocio: Pileta olímpica climatizada, canchas de fútbol
					11 y 7, tenis, paddle, actividades náuticas , espacio para clases
					grupales y pasar tiempo con amigos. Son solo algunas de nuestras
					instalaciones destacadas.
				</>
			),
			imagen: 'imagenes/FondoSecciones/INTERIOR_PILETA.jpg',
		},
	]);

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

		</>


	);
};

export default HomePages;
