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
					<button className="text-sm" onClick={() => signOut(auth)}>Sign out</button>
				</div>
			</header>
			<main>
				<Outlet />
			</main>
		</div>
	)
}
