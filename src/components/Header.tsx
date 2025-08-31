import { Link, NavLink, useNavigate } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import { SiGoogledrive } from "react-icons/si";
// import {FaSearch} from 'react-icons/fa'
import { MegaMenu } from './MegaMenu'
import Logo from '../assets/Logo.svg'

export function Header() {
	const navigate = useNavigate()
	return (
		<header className="shadow-lg bg-gradient-to-r from-[#4b0e55] to-[#6b1f75]">
			<div className="bg-gradient-to-r from-[#4b0e55] to-[#6b1f75] text-white text-sm">
				<div className="container-px max-w-7xl mx-auto flex items-center justify-center h-10">
					<div className="flex items-center gap-2">
						<a 
							href="https://drive.google.com/drive/folders/15WYrv1QFB9VFeFILiPUM8qsqJXCYZbL6?usp=sharing"
							target="_blank" 
							rel="noopener noreferrer"
							className="flex items-center gap-2 hover:text-amber-300 transition-colors cursor-pointer"
						>
							<SiGoogledrive className="w-4 h-4" />
							<span className="text-amber-100">Browse Our Catalog</span>
						</a>
					</div>
				</div>
			</div>

			<div className="container-px max-w-7xl mx-auto flex items-center justify-between h-20">
				<Link to="/" className="flex items-center gap-3 -ml-8 group">
					<img src={Logo} alt="Chavan Jewellers" className="h-16 w-auto transition-transform group-hover:scale-105" />
					<span className="text-3xl font-gotu tracking-wide text-white group-hover:text-amber-200 transition-colors">Chavan Jewellers</span>
				</Link>

				<nav className="hidden md:flex items-center gap-8 text-sm">
					<NavLink to="/" className={({isActive}) => isActive ? 'text-amber-300 font-semibold' : 'text-white hover:text-amber-200 transition-colors'}>Home</NavLink>
					<div className="px-2">
						<MegaMenu />
					</div>
					<NavLink to="/new-arrivals" className={({isActive}) => isActive ? 'text-amber-300 font-semibold' : 'text-white hover:text-amber-200 transition-colors'}>New Arrivals</NavLink>
					<NavLink to="/bestsellers" className={({isActive}) => isActive ? 'text-amber-300 font-semibold' : 'text-white hover:text-amber-200 transition-colors'}>Bestsellers</NavLink>
					<NavLink to="/about" className={({isActive}) => isActive ? 'text-amber-300 font-semibold' : 'text-white hover:text-amber-200 transition-colors'}>About Us</NavLink>
				</nav>

				<div className="flex items-center gap-5 text-white">
					<button aria-label="Search" className="hover:text-amber-200 transition-colors p-2 rounded-full hover:bg-[#6b1f75]" onClick={() => navigate('/search')}><FaSearch /></button>
				</div>
			</div>
		</header>
	)
}


