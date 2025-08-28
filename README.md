# चव्हाण ज्वेलर्स (Chavan Jewellers) - E-commerce Website

A modern, responsive e-commerce website for Chavan Jewellers, built with React, TypeScript, and Vite. Features a comprehensive admin dashboard for managing products, categories, and content.

## 🚀 Features

- **Modern E-commerce**: Clean, premium design with responsive layout
- **Admin Dashboard**: Complete CRUD operations for products, categories, slides, and reviews
- **Cloudinary Integration**: Image upload and management
- **Firebase Backend**: Authentication, Firestore database, and real-time updates
- **WhatsApp Integration**: Direct ordering through WhatsApp
- **Search & Filtering**: Advanced product search with category filters
- **SEO Optimized**: Proper meta tags and structured content

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS v4
- **Backend**: Firebase (Authentication, Firestore, Storage)
- **Image Hosting**: Cloudinary
- **Icons**: React Icons
- **Routing**: React Router DOM
- **State Management**: Zustand

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd jwellers
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` with your actual credentials:
   ```env
   # Firebase Configuration
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id

   # Cloudinary Configuration
   VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
   VITE_CLOUDINARY_UPLOAD_PRESET=your_upload_preset

   # WhatsApp Business Number
   VITE_WHATSAPP_NUMBER=your_whatsapp_number
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

## 🔧 Configuration

### Firebase Setup
1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication (Email/Password)
3. Create Firestore database
4. Set up Storage (optional, for image uploads)
5. Add your Firebase config to `.env`

### Cloudinary Setup
1. Create a Cloudinary account
2. Create an unsigned upload preset
3. Add your cloud name and preset to `.env`

### Admin Access
- Default admin email: `vedant.purkar05@gmail.com`
- Password: Set during Firebase Authentication setup

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Page components
│   ├── admin/         # Admin dashboard pages
│   └── ...            # Public pages
├── lib/               # Utility functions and services
├── store/             # State management
├── data/              # Static data and types
└── firebase.ts        # Firebase configuration
```

## 🎨 Key Components

- **Header**: Navigation with mega menu and search
- **HomePage**: Hero carousel, featured products, categories
- **ProductListPage**: Product grid with filtering and sorting
- **ProductDetailPage**: Detailed product view with WhatsApp integration
- **AdminDashboard**: Complete content management system

## 🔐 Security

- Environment variables for sensitive credentials
- Firebase Authentication for admin access
- Secure image upload through Cloudinary
- Input validation and sanitization

## 📱 Responsive Design

- Mobile-first approach
- Tablet and desktop optimized
- Touch-friendly interface
- Fast loading times

## 🚀 Deployment

1. **Build for production**
   ```bash
   npm run build
   ```

2. **Deploy to your preferred hosting service**
   - Vercel (recommended)
   - Netlify
   - Firebase Hosting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary software for Chavan Jewellers.

## 📞 Support

For support, contact:
- Email: support@chavanjwellers.com
- Phone: +91-97301-70189
- WhatsApp: +91-9876543210
