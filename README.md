# Form Validation Demo (React + Vite)

A small demo app that showcases a clean login & signup flow with client-side validation and a landing/home page.

Built with:
- React 19
- Vite
- Bootstrap 5

---

## 🚀 Features
- Login form with validation and error messages
- Sign-up (registration) form with live field validation
- Show / hide password controls (login and signup)
- Landing-style Home page (hero, features, CTA, footer)
- Navbar & Footer components
- Simple client-side navigation (view switching)

---

## 📁 Project structure (important files)
```
form-validation/
├─ src/
│  ├─ App.jsx             # Main app and view switching
│  ├─ LogIn.jsx          # Login component
│  ├─ form.tsx           # Registration form (TypeScript)
│  ├─ Home.jsx           # Landing / Home page
│  ├─ components/
│  │  ├─ Navbar.jsx
│  │  └─ Footer.jsx
│  └─ assets/ etc.
├─ package.json
└─ README.md
```

---

## 💻 Setup & Development
### Prerequisites
- Node.js: For best compatibility with the Vite plugins used here prefer **Node >= 22.12.0** or **Node 20.19.0**. You may see EBADENGINE warnings if your Node version is older.
- npm (or yarn)

### Install
```bash
npm install
# or
# yarn
```

### Run Dev Server
```bash
npm run dev
# open http://localhost:5173
```

### Build & Preview
```bash
npm run build
npm run preview
```

### Lint
```bash
npm run lint
```

---

## 🧪 Manual Testing
- Start dev server and verify the app loads.
- Default landing view: **Login**. Try:
  - Enter invalid email / empty fields → see validation messages
  - Toggle **Show password** checkbox to reveal password
  - Click **Sign up** to switch to registration form
  - Register with valid data → an alert confirms success and you will be redirected to Login
  - Log in with valid email/password → redirected to Home
  - Click **Logout** in navbar → returns to Login

---

## 💡 Notes & Next Steps
- Currently authentication is client-side only (no backend). You can integrate an auth API or OAuth providers.
- Consider adding React Router for per-route navigation (/login, /signup, /home).
- Where appropriate, add unit/integration tests (e.g., React Testing Library).
- If you saw warnings like `EBADENGINE` when installing plugins, upgrade Node to a supported version.

---

## 📞 Contact / Contributing
Feel free to open PRs or file issues for improvements. Keep changes focused and add tests where possible.

---

**Enjoy building!** ✨## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
