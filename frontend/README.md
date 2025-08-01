# Retail Data Analyzer - Frontend

A modern React application built with Vite, TypeScript, and Tailwind CSS for retail data analysis and management.

## Features

- 🚀 **Fast Development** - Built with Vite for lightning-fast development
- 🎨 **Modern UI** - Styled with Tailwind CSS for beautiful, responsive design
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- 🔄 **Type Safety** - Full TypeScript support for better development experience
- 🧭 **Routing** - React Router for seamless navigation
- 📊 **Analytics Dashboard** - Comprehensive analytics and insights
- 📦 **Product Management** - Complete product catalog management

## Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icons
- **Axios** - HTTP client for API calls

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/     # Reusable UI components
│   └── Navbar.tsx
├── pages/         # Page components
│   ├── Home.tsx
│   ├── Products.tsx
│   └── Analytics.tsx
├── App.tsx        # Main app component
├── main.tsx       # App entry point
└── index.css      # Global styles with Tailwind
```

## Pages

- **Home** - Dashboard with key metrics and quick actions
- **Products** - Product management with search and CRUD operations
- **Analytics** - Comprehensive analytics dashboard with charts

## API Integration

The app is ready to integrate with your backend API. Update the API endpoints in the components to connect with your backend services.

## Customization

- Modify `tailwind.config.js` to customize the design system
- Add new routes in `App.tsx`
- Create new components in the `components/` directory
- Add new pages in the `pages/` directory

## Deployment

Build the project for production:

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.
