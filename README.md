# PopX - Authentication UI

A pixel-perfect, mobile-first authentication application built with React and Vite. Features a clean, centered mobile frame interface with seamless navigation between pages. The mobile frame is responsive and always fits within the laptop screen.

## 📋 Overview

PopX is a modern authentication system with a focused mobile app interface displayed as a centered phone frame on desktop. It includes welcome, login, signup, and account settings pages with smooth transitions and professional styling. The mobile frame uses flexbox to ensure it always fits perfectly within any screen size.

## ✨ Features

- **Pixel-Perfect Design** - Exact mockup implementation with iPhone-like mobile frame
- **Responsive Mobile Frame** - Always fits within laptop screen using aspect-ratio & flexbox
- **Seamless Navigation** - React Router for smooth page transitions with fade-in animations
- **Clean Code** - Well-organized components and modular CSS
- **Form Validation** - Built-in form handling with state management
- **Modern Styling** - Purple accent colors (#6366f1), smooth interactions, focus states
- **Accessibility** - Semantic HTML, proper labels, keyboard navigation support

## 🏗️ Project Structure

```
src/
├── App.jsx                    # Main router component
├── pages/
│   ├── Welcome.jsx           # Landing page with CTA buttons
│   ├── Login.jsx             # Sign-in form
│   ├── Signup.jsx            # Registration form with agency selection
│   └── AccountSettings.jsx   # User profile page
├── styles/
│   ├── App.css               # Mobile frame layout & global styles
│   └── pages.css             # Page animations & utilities
├── index.css                 # Global reset & base styles
├── main.jsx                  # React entry point
└── vite.config.js            # Vite configuration

package.json                  # Dependencies & scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Navigate to project:**
   ```bash
   cd d:\Educase
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   - The app will be available at `http://localhost:5173` (or next available port)
   - Mobile frame fits perfectly within any screen size

## 📱 Pages & Navigation

### 1. Welcome (`/`)
- Landing page with PopX branding
- Hero gradient background
- Two action buttons:
  - **Create Account** → Navigates to Signup
  - **Already Registered? Login** → Navigates to Login

### 2. Login (`/login`)
- Email and password form fields
- Submit button redirects to Account Settings
- Minimalist form design
- Gray submit button with hover effects

### 3. Signup (`/signup`)
- Complete registration form:
  - Full Name (required)
  - Phone Number (required)
  - Email Address (required)
  - Password (required)
  - Company Name (optional)
  - Agency Selection (radio buttons)
- Purple primary action button
- Form validation on all required fields

### 4. Account Settings (`/account-settings`)
- User profile display
- Avatar image with purple badge
- User information (name & email)
- Profile description
- Clean, card-based layout

## 🎨 Design System

### Colors
- **Primary Purple**: `#6366f1` - Buttons, labels, accents
- **Secondary Lavender**: `#e9d5ff` - Alternative buttons
- **Gray Neutral**: `#999` - Tertiary elements
- **Background**: Gradient blue (`#f5f7fa` to `#c3cfe2`)

### Typography
- **Font Family**: System UI (`-apple-system, BlinkMacSystemFont, 'Segoe UI'`)
- **Heading Font Size**: 24-28px, font-weight 700
- **Body Font Size**: 13-15px, font-weight 400-600
- **Label Font Size**: 11px, uppercase, font-weight 600

### Mobile Frame Sizing
- **Aspect Ratio**: 360:720 (slim iPhone proportion)
- **Max Width**: 360px (slim design)
- **Max Height**: calc(100vh - 40px) (fits screen with padding)
- **Bezel**: 12px solid black border
- **Notch**: Simulated with pseudo-element
- **Border Radius**: 40px
- **Shadow**: `0 20px 60px rgba(0, 0, 0, 0.3)`

## 💻 Technology Stack

- **Framework**: React 19.2.6
- **Build Tool**: Vite 8.0.12
- **Router**: React Router DOM 6
- **Language**: JavaScript (ES6+)
- **Styling**: CSS3 with modern features

## 📦 Available Scripts

### Development
```bash
npm run dev
```
Starts the Vite development server with hot module replacement (HMR).

### Build
```bash
npm run build
```
Creates an optimized production build in the `dist/` directory.

### Preview
```bash
npm run preview
```
Previews the production build locally.

### Linting
```bash
npm run lint
```
Checks code quality with ESLint.

## 🎯 Usage

### Navigate Between Pages

**Programmatic Navigation** (in components):
```jsx
import { useNavigate } from 'react-router-dom'

function MyComponent() {
  const navigate = useNavigate()
  
  return (
    <button onClick={() => navigate('/login')}>
      Go to Login
    </button>
  )
}
```

### Form Handling

**Example with State Management**:
```jsx
const [formData, setFormData] = useState({ email: '', password: '' })

const handleChange = (e) => {
  const { name, value } = e.target
  setFormData(prev => ({ ...prev, [name]: value }))
}

const handleSubmit = (e) => {
  e.preventDefault()
  // Process form data
  navigate('/account-settings')
}
```

## 🔧 Customization

### Changing Colors

Edit the color values in `src/styles/App.css`:
```css
.btn-primary {
  background-color: #6366f1; /* Change this */
}
```

### Adjusting Mobile Frame Size

Update dimensions in `src/styles/App.css`:
```css
.mobile-frame {
  max-width: 360px;        /* Adjust max width */
  aspect-ratio: 360/720;   /* Maintain aspect ratio */
  max-height: calc(100vh - 40px);
}
```

### Adding New Pages

1. Create new component in `src/pages/`
2. Add route in `src/App.jsx`
3. Use `useNavigate()` to add navigation

## 📱 Responsive Behavior

- **Desktop (1200px+)**: Full-size mobile frame centered
- **Laptop (768px-1200px)**: Frame scales with adjusted bezels
- **Tablet (480px-768px)**: Responsive frame with smaller bezels
- **Mobile (<480px)**: Frame adapts to small screens

The mobile frame always fits within the viewport using:
- `max-height: calc(100vh - 40px)` - Ensures it fits with padding
- `aspect-ratio: 360/720` - Maintains slim iPhone proportion
- `max-width: 360px` - Keeps frame slim and elegant
- `flex` layout - Centers perfectly on screen

## ♿ Accessibility Features

- Semantic HTML structure
- Proper label associations with form inputs
- Focus states on all interactive elements
- Keyboard navigation support
- Color contrast compliance
- ARIA-ready structure

## 🐛 Troubleshooting

### Frame Still Too Tall
- Clear browser cache (`Ctrl+Shift+Delete`)
- Restart dev server: `npm run dev`
- The frame uses flexbox and max-height to fit all screens

### Port Already in Use
If port 5173 is in use, Vite automatically tries the next available port.

### Styles Not Updating
Clear cache and refresh:
```bash
npm run dev
```

### Navigation Not Working
Ensure `react-router-dom` is installed:
```bash
npm install react-router-dom
```

## 📋 File Descriptions

| File | Purpose |
|------|---------|
| `App.jsx` | Main routing and app wrapper component |
| `index.css` | Global styles and CSS reset |
| `styles/App.css` | Mobile frame layout and component styles |
| `styles/pages.css` | Page animations and utilities |
| `pages/*.jsx` | Individual page components |

## 🔐 Security Notes

- Form data is currently demo-only
- Implement proper backend authentication for production
- Add HTTPS for login/signup flows
- Validate all inputs server-side
- Store sensitive data securely

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
1. Connect GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Development Notes

### Code Quality
- Clean, consistent formatting (handled by ESLint)
- Modular component structure
- Separated concerns (logic, styling, routing)
- Well-commented CSS

### Best Practices Applied
- Functional components with React Hooks
- Proper state management
- CSS organization and reusability
- Mobile-first responsive design
- Semantic HTML structure
- Flexbox-based responsive frame

### Mobile Frame Layout
The mobile frame uses modern CSS techniques:
- **Aspect Ratio**: Maintains 360:720 proportion (slim design)
- **Flex Layout**: Centers perfectly on screen
- **Max Height**: `calc(100vh - 40px)` ensures it fits
- **Max Width**: 360px for slim appearance
- **Responsive**: Scales smoothly on all devices

## 📞 Support

For issues or questions:
1. Check the troubleshooting section
2. Review component files for implementation details
3. Verify all dependencies are installed
4. Ensure the mobile frame sizing is working (check browser DevTools)

---

**Version**: 1.0.0  
**Last Updated**: June 2026  
**Status**: Production Ready ✓
