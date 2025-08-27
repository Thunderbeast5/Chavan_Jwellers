import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage.tsx'
import { ProductListPage } from './pages/ProductListPage.tsx'
import { ProductDetailPage } from './pages/ProductDetailPage.tsx'
import { AboutPage } from './pages/AboutPage.tsx'
import { Layout } from './components/Layout.tsx'
import { CartPage } from './pages/CartPage.tsx'
import { SearchPage } from './pages/SearchPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="category/:slug" element={<ProductListPage />} />
          <Route path="product/:id" element={<ProductDetailPage />} />
          <Route path="bestsellers" element={<ProductListPage bestseller />} />
          <Route path="new-arrivals" element={<ProductListPage newest />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="search" element={<SearchPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
