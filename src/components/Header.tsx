import { Link, NavLink, useNavigate } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import { SiGoogledrive } from "react-icons/si";
// import {FaSearch} from 'react-icons/fa'
import { MegaMenu } from './MegaMenu'

export function Header() {
	const navigate = useNavigate()
	return (
		<header className="border-b border-gray-200">
			<div className="bg-gray-50 text-gray-600 text-sm">
				<div className="container-px max-w-7xl mx-auto flex items-center justify-between h-10">
					<div className="flex items-center gap-4">
						
						<a 
							href="https://drive.google.com/your-catalog-link"
							target="_blank" 
							rel="noopener noreferrer"
							className="flex items-center gap-2 hover:text-amber-700"
						>
							<SiGoogledrive className="w-4 h-4" />
							
						</a>
					</div>
					<p className="hidden sm:block">Browse Our Catalog</p>
					<div className="w-16" />
				</div>
			</div>

			<div className="container-px max-w-7xl mx-auto flex items-center justify-between h-20">
				<Link to="/" className="text-3xl font-gotu tracking-wide">चव्हाण ज्वेलर्स</Link>

				<nav className="hidden md:flex items-center gap-6 text-sm">
					<NavLink to="/" className={({isActive}) => isActive ? 'text-amber-700' : ''}>Home</NavLink>
					<MegaMenu />
					<NavLink to="/new-arrivals" className={({isActive}) => isActive ? 'text-amber-700' : ''}>New Arrivals</NavLink>
					<NavLink to="/bestsellers" className={({isActive}) => isActive ? 'text-amber-700' : ''}>Bestsellers</NavLink>
					<NavLink to="/about" className={({isActive}) => isActive ? 'text-amber-700' : ''}>About Us</NavLink>
				</nav>

				<div className="flex items-center gap-5 text-gray-700">
					<button aria-label="Search" className="hover:text-amber-700" onClick={() => navigate('/search')}><FaSearch /></button>
				</div>
			</div>
		</header>
	)
}


