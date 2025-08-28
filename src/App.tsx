import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage.tsx'
import { ProductListPage } from './pages/ProductListPage.tsx'
import { ProductDetailPage } from './pages/ProductDetailPage.tsx'
import { AboutPage } from './pages/AboutPage.tsx'
import { Layout } from './components/Layout.tsx'
import { CartPage } from './pages/CartPage.tsx'
import { SearchPage } from './pages/SearchPage'
import { BrandStoryPage } from './pages/BrandStoryPage.tsx'
import { CustomerReviewsPage } from './pages/CustomerReviewsPage.tsx'
import { BlogsPage } from './pages/BlogsPage.tsx'
import { BulkInquiryPage } from './pages/BulkInquiryPage.tsx'
import { TermsConditionsPage } from './pages/TermsConditionsPage.tsx'
import { FAQsPage } from './pages/FAQsPage.tsx'
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage.tsx'
import { ReturnRefundPolicyPage } from './pages/ReturnRefundPolicyPage.tsx'
import { AdminLogin } from './pages/admin/AdminLogin'
import { AdminLayout } from './pages/admin/AdminLayout'
import { Dashboard } from './pages/admin/Dashboard'
import { ProductsAdmin } from './pages/admin/ProductsAdmin'
import { CategoriesAdmin } from './pages/admin/CategoriesAdmin'
import { SlidesAdmin } from './pages/admin/SlidesAdmin'
import { CompletedOrdersAdmin } from './pages/admin/CompletedOrdersAdmin'

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
          <Route path="brand-story" element={<BrandStoryPage />} />
          <Route path="customer-reviews" element={<CustomerReviewsPage />} />
          <Route path="blogs" element={<BlogsPage />} />
          <Route path="bulk-inquiry" element={<BulkInquiryPage />} />
          <Route path="terms-conditions" element={<TermsConditionsPage />} />
          <Route path="faqs" element={<FAQsPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="return-refund-policy" element={<ReturnRefundPolicyPage />} />
        </Route>

        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<ProductsAdmin />} />
          <Route path="categories" element={<CategoriesAdmin />} />
          <Route path="slides" element={<SlidesAdmin />} />
          <Route path="completed-orders" element={<CompletedOrdersAdmin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
