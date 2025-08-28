import { Link } from 'react-router-dom'

export function Dashboard() {
	return (
		<div className="container-px max-w-7xl mx-auto py-8">
			<h1 className="section-title mb-6">Admin Dashboard</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
				<Link to="/admin/products" className="product-card p-6"><div className="font-medium">Manage Products</div></Link>
				<Link to="/admin/categories" className="product-card p-6"><div className="font-medium">Manage Categories</div></Link>
				<Link to="/admin/slides" className="product-card p-6"><div className="font-medium">Manage Slides</div></Link>
				<Link to="/admin/completed-orders" className="product-card p-6"><div className="font-medium">Completed Orders</div></Link>
			</div>
		</div>
	)
}
