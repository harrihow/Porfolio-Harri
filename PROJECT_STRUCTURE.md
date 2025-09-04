# Portfolio Project Structure

## Overview
This portfolio project follows a straightforward, easy-to-understand file structure that separates concerns and makes the codebase easy to maintain.

## Directory Structure

```
Portfolio-Harri-2025/
├── public/                     # Static assets served directly
├── src/
│   ├── components/            # React components organized by purpose
│   │   ├── layout/           # Shared layout components
│   │   │   ├── Navbar.jsx    # Navigation component
│   │   │   └── Footer.jsx    # Footer component
│   │   ├── pages/            # Page components
│   │   │   ├── Home/         # Home page components
│   │   │   │   ├── HeroSection.jsx
│   │   │   │   └── CoreSkills.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Services.jsx
│   │   │   └── Contact.jsx
│   │   └── Main.jsx          # Main homepage component
│   ├── assets/               # Static assets
│   │   └── fonts/            # Custom fonts
│   ├── styles/               # CSS files
│   │   ├── fonts.css         # Font definitions
│   │   └── index.css         # Main styles (root)
│   ├── App.jsx               # Main app component with routing
│   └── main.jsx              # App entry point
├── Configuration Files
├── package.json              # Dependencies and scripts
├── tailwind.config.js        # Tailwind CSS configuration
├── vite.config.js           # Vite build configuration
└── README.md                # Project documentation
```

## Key Approach

### Simple Direct Import Pattern
Instead of using a layout wrapper component, each page directly imports the Navbar and Footer components it needs. This approach:

- Is straightforward and easy to understand
- Gives full control over each page's structure
- Has no hidden complexity
- Makes it clear what each page is composed of

Example:
```javascript
// In each page component (About.jsx, Services.jsx, etc.)
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
```

## Benefits of This Structure

1. **Simplicity**: Easy to understand and maintain
2. **Explicit**: Clear what components each page uses
3. **Flexibility**: Each page can have slightly different structures
4. **No Abstraction**: No wrapper components to manage
5. **Beginner-Friendly**: Straightforward for new developers to understand

## Usage Guidelines

### Adding New Pages
1. Create component in `/src/components/pages/`
2. Import Navbar and Footer directly from the layout directory
3. Add route in `/src/App.jsx`

### Adding New Components
1. Place in appropriate directory based on purpose
2. Import using relative paths

This structure provides a solid foundation for a simple, maintainable portfolio project.