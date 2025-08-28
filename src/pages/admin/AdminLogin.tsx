import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'
import { useNavigate } from 'react-router-dom'

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
		try {
			await signInWithEmailAndPassword(auth, email, password)
			navigate('/admin')
		} catch (err: any) {
			const message = err?.code || err?.message || 'Login failed'
			setError(message)
		} finally {
			setLoading(false)
		}
	}

	return (
		<div className="container-px max-w-md mx-auto py-16">
			<h1 className="section-title mb-6">Admin Login</h1>
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
