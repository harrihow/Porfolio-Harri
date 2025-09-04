# Portfolio-Harri-2025

A personal portfolio website built with modern web technologies to showcase skills, projects, and services.

## 🚀 Tech Stack

- **Frontend**: React 19.1.1, React Router DOM
- **Build Tool**: Vite 7.1.2
- **Styling**: Tailwind CSS 3.4.17
- **Animation**: Framer Motion 12.23.12
- **UI Components**: Radix UI, Lucide React
- **Linting**: ESLint

## 📁 Project Structure

```
Portfolio-Harri-2025/
├── public/                 # Static assets
├── src/
│   ├── components/        # React components
│   │   ├── layout/        # Navbar and Footer components
│   │   ├── pages/         # Page components (About, Projects, etc.)
│   │   └── Main.jsx       # Main homepage component
│   ├── assets/            # Images and fonts
│   ├── styles/            # CSS files
│   ├── App.jsx            # Main app with routing
│   └── main.jsx           # App entry point
├── package.json           # Dependencies and scripts
└── vite.config.js         # Vite configuration
```

## 🛠️ Development

### Setup
```bash
npm install
```

### Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Build Locally
```bash
npm run preview
```

### Deploy to GitHub Pages
```bash
npm run deploy
```

## 🎨 Design Approach

This portfolio uses a simple, direct approach:

- Each page directly imports Navbar and Footer components
- No complex layout wrappers
- Clear, straightforward component structure
- Easy to understand and maintain

## 📱 Features

- Responsive design with Tailwind CSS
- Smooth animations with Framer Motion
- Client-side routing with React Router
- Fast development with Vite
- Deployable to GitHub Pages