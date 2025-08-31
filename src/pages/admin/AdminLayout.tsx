import { Outlet, Link, useNavigate } from 'react-router-dom'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { auth } from '../../firebase'

const ALLOWED_ADMIN_EMAILS = ['vedant.purkar05@gmail.com']

export function AdminLayout() {
	const [checking, setChecking] = useState(true)
	const [authed, setAuthed] = useState(false)
	const navigate = useNavigate()

	useEffect(() => {
		const unsub = onAuthStateChanged(auth, async (user) => {
			if (!user) {
				setAuthed(false)
				setChecking(false)
				navigate('/admin/login')
				return
			}
			const isAllowed = !!user.email && ALLOWED_ADMIN_EMAILS.includes(user.email)
			if (!isAllowed) {
				await signOut(auth)
				setAuthed(false)
				setChecking(false)
				navigate('/admin/login')
				return
			}
			setAuthed(true)
			setChecking(false)
		})
		return () => unsub()
	}, [navigate])

	if (checking) return <div className="container-px max-w-7xl mx-auto py-10">Loading...</div>
	if (!authed) return null

	return (
		<div>
			<header className="border-b bg-white">
				<div className="container-px max-w-7xl mx-auto h-14 flex items-center justify-between">
					<nav className="flex items-center gap-4 text-sm">
						<Link to="/admin" className="link-muted">Dashboard</Link>
						<Link to="/admin/products" className="link-muted">Products</Link>
						<Link to="/admin/categories" className="link-muted">Categories</Link>
						<Link to="/admin/slides" className="link-muted">Slides</Link>
						<Link to="/admin/completed-orders" className="link-muted">Completed Orders</Link>
					</nav>
					<div className="flex items-center gap-4">
						<Link 
							to="/" 
							className="inline-flex items-center px-4 py-2 bg-[#4b0e55] text-white text-sm font-medium rounded-md hover:bg-[#6b1f75] transition-colors duration-200"
						>
							<svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
							</svg>
							Back to Homepage
						</Link>
						<button className="text-sm text-gray-600 hover:text-gray-900" onClick={() => signOut(auth)}>Sign out</button>
					</div>
				</div>
			</header>
			<main>
				<Outlet />
			</main>
		</div>
	)
}
