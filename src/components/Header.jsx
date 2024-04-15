import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
	const [nav, setNav] = useState(false);

	const handleNav = () => {
		setNav(!nav);
	};

	return (
		<div className='bg-white fixed left-0 top-0 w-full z-10 ease-in xs:h-12 md:h-12 sm:h-12 lg:h-auto xl:h-auto mx-auto m-auto mb-4 md:mb-5 flex flex-wrap items-center justify-center'>
			<a
				href='/#Home'
				className='sm:flex sm:mb-4 text-AceroCorp items-center mx-5'>
				<img
					loading='lazy'
					className='w-10 h-13 items-right mt-4 mx-2'
					src='./Logo_AceroCorp.svg'
				/>
				<div className='flex items-center mt-3'>
					<span className='text-5xl text-black'>
						{' '}
						<b>Acero</b>{' '}
					</span>
					<span className='text-5xl text-AceroCorp'>
						{' '}
						<b>Corp</b>{' '}
					</span>
				</div>
			</a>
			<nav className='md:ml-auto flex flex-wrap items-center text-xl justify-center mr-2'>
				<ul className='hidden sm:flex'>
					<li className='px-4 hover:text-blue-400 transition-colors duration-300 border-b-2 hover:border-blue-400 '>
						<a href='/#Conocenos'>Conocenos</a>
					</li>
					<li className='px-4 hover:text-blue-400 transition-colors duration-300 border-b-2 hover:border-blue-400 '>
						<a href='/#SteelFraming'>Steel Framing</a>
					</li>
					<li className='px-4 hover:text-blue-400 transition-colors duration-300 border-b-2 hover:border-blue-400 '>
						<a href='/#Obras'>Nuestas Obras</a>
					</li>
					<li className='px-4 hover:text-blue-400 transition-colors duration-300 border-b-2 hover:border-blue-400'>
						<a href='/#Consultanos'>Consultanos</a>
					</li>
				</ul>
			</nav>
			{/* Mobile Button */}
			<div
				onClick={handleNav}
				className='block sm:hidden mt-2 z-10 items-center justify-center'>
				{nav ? (
					<AiOutlineClose size={25} className='text-AceroCorp' />
				) : (
					<AiOutlineMenu size={25} className='text-AceroCorp' />
				)}
			</div>
			{/* Mobile Menu */}
			<div
				className={
					nav
						? 'text-AceroCorp sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center justify-center w-full h-screen bg-white text-center ease-in duration-300'
						: 'text-AceroCorp sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center justify-center w-full h-screen bg-white text-center ease-in duration-300'
				}>
				<ul>
					<li onClick={handleNav} className='flex p-4 justify-center'>
						<a href='/#Home'>
							<img
								loading='lazy'
								className='w-15 h-15'
								src='./Logo_AceroCorp.svg'
							/>
						</a>
					</li>
					<li
						onClick={handleNav}
						className='p-4 text-2xl hover:text-blue-400 transition-colors duration-300 border-b-2 hover:border-blue-400 transition-colors duration-300'>
						<a href='/#Conocenos'>Conocenos</a>
					</li>
					<li
						onClick={handleNav}
						className='p-4 text-2xl hover:text-blue-400 transition-colors duration-300 border-b-2 hover:border-blue-400 transition-colors duration-300'>
						<a href='/#SteelFraming'>Steel Framing</a>
					</li>
					<li
						onClick={handleNav}
						className='p-4 text-2xl hover:text-blue-400 transition-colors duration-300 border-b-2 hover:border-blue-400 transition-colors duration-300'>
						<a href='/#Obras'>Nuestas Obras</a>
					</li>
					<li
						onClick={handleNav}
						className='p-4 text-2xl hover:text-blue-400 transition-colors duration-300 border-b-2 hover:border-blue-400 transition-colors duration-300'>
						<a href='/#Consultanos'>Consultanos</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
