import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'
import { useNavigate, Link } from 'react-router-dom'

export function AdminLogin() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState<string | null>(null)
	const [loading, setLoading] = useState(false)
	const navigate = useNavigate()

	async function onSubmit(e: React.FormEvent) {
		e.preventDefault()
		setError(null)
		setLoading(true)
		
		console.log('Attempting login with:', { email, password: '***' })
		console.log('Firebase config check:', {
			apiKey: import.meta.env.VITE_FIREBASE_API_KEY ? 'Set' : 'Missing',
			authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ? 'Set' : 'Missing',
			projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID ? 'Set' : 'Missing'
		})
		
		try {
			const userCredential = await signInWithEmailAndPassword(auth, email, password)
			console.log('Login successful:', userCredential.user.email)
			navigate('/admin')
		} catch (err: any) {
			console.error('Login error:', err)
			let message = 'Login failed'
			
			// More specific error messages
			switch (err.code) {
				case 'auth/user-not-found':
					message = 'No user found with this email address'
					break
				case 'auth/wrong-password':
					message = 'Incorrect password'
					break
				case 'auth/invalid-email':
					message = 'Invalid email format'
					break
				case 'auth/user-disabled':
					message = 'This user account has been disabled'
					break
				case 'auth/too-many-requests':
					message = 'Too many failed attempts. Try again later'
					break
				case 'auth/network-request-failed':
					message = 'Network error. Check your internet connection'
					break
				case 'auth/invalid-credential':
					message = 'Invalid email or password'
					break
				default:
					message = `${err.code}: ${err.message}`
			}
			
			setError(message)
		} finally {
			setLoading(false)
		}
	}

	return (
		<div className="container-px max-w-md mx-auto py-16">
			<div className="flex justify-between items-center mb-6">
				<h1 className="section-title">Admin Login</h1>
				<Link 
					to="/" 
					className="inline-flex items-center px-4 py-2 bg-[#4b0e55] text-white text-sm font-medium rounded-md hover:bg-[#6b1f75] transition-colors duration-200"
				>
					<svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
					</svg>
					Back to Homepage
				</Link>
			</div>
			<form onSubmit={onSubmit} className="space-y-4 bg-white rounded-xl border border-gray-100 shadow-sm p-6">
				<div>
					<label className="block text-sm text-gray-600 mb-1">Email</label>
					<input className="w-full border border-gray-300 rounded-md px-3 py-2" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
				</div>
				<div>
					<label className="block text-sm text-gray-600 mb-1">Password</label>
					<input className="w-full border border-gray-300 rounded-md px-3 py-2" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
				</div>
				{error && <p className="text-sm text-red-600">{error}</p>}
				<button className="btn-primary w-full" type="submit" disabled={loading}>{loading ? 'Signing in...' : 'Sign In'}</button>
			</form>
		</div>
	)
}
