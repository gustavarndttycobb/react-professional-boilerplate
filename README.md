# 🧱 React Professional Boilerplate

A modern, opinionated boilerplate to kickstart production-grade React applications with a focus on scalability, maintainability, and developer experience.

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/react-professional-boilerplate.git
cd react-professional-boilerplate
````

### 2. Install Dependencies

```bash
npm install
# or
yarn
```

### 3. Run the App

```bash
npm run dev
# or
yarn dev
```

> The app starts in development mode with mock services enabled via `.env` flags.

---

## 📜 Available Scripts

| Command           | Description                                |
| ----------------- | ------------------------------------------ |
| `dev`             | Starts the development server              |
| `build`           | Builds the app for production              |
| `preview`         | Serves the production build locally        |
| `lint`            | Runs ESLint for code linting               |
| `test`            | Runs unit tests with Vitest                |
| `coverage`        | Runs unit tests and generates coverage     |
| `storybook`       | Starts Storybook for UI component previews |
| `build-storybook` | Builds Storybook for static hosting        |
| `prepare`         | Installs Git hooks via Husky               |

---

## ⚙️ Why This Boilerplate is Production-Ready

This boilerplate is packed with modern libraries and tooling for building professional React applications:

### 🔧 Included Tools and Why They Matter

* **Vite** – Ultra-fast build tool for development and production.
* **React Router** – Declarative routing for applications.
* **TypeScript** – Static typing improves code quality and IDE support.
* **Material UI (MUI)** – A robust, customizable UI component library based on Google's Material Design.

  > ℹ️ Feel free to swap MUI for any other UI framework (e.g. TailwindCSS, Chakra UI) according to your project’s needs. Becareful, when you use another UI framework different configuration realted to storybook, etc. might be needed.
* **React Hook Form + Zod** – Declarative, performant form handling and schema validation.
* **Zod-i18n-map** – Translates validation errors based on active language.
* **i18next** – Internationalization with runtime language switching (supports `pt` and `en` out of the box).
* **MSW (Mock Service Worker)** – API mocking via service workers for isolated frontend development.
* **Vitest** – Fast, modern unit testing framework compatible with Vite.
* **Storybook** – Visual UI development and documentation platform.
* **ESLint** – Enforces consistent code quality and formatting.
* **Husky** – Git hooks for pre-commit checks like linting and testing.

---

## 🧱 Feature-Based Architecture

This project suggest to follow a **feature-based folder structure**, organizing code by domain:

```
src/
│
├─ features/
│   ├─ auth/
│   ├─ posts/
│   └─ comments/
│
├─ shared/
│   ├─ components/
│   ├─ hooks/
│   └─ utils/
```

### ✅ Benefits

* Encourages **modularity** and **scalability**
* Promotes **separation of concerns**
* Simplifies onboarding for new developers
* Allows parallel development per feature

---

## 🧪 Mock API Services

This boilerplate supports API mocking using **MSW**, controlled by an environment flag:

```env
VITE_MOCK_FLAG=true
```

When enabled, API requests are intercepted and mocked using `msw`, which is useful for:

* Offline development
* Isolated frontend work
* Simulating error states and edge cases

---

## 🌗 Theme Support (Dark/Light Mode)

The boilerplate includes a basic light/dark theme toggle system:

* Built with **Material UI**'s theming system
* Persists theme choice via `localStorage`
* Can respect system preference
* Easily extendable or replaceable with other UI frameworks

---

## 🌍 Internationalization (i18n)

Internationalization is handled using **i18next**, with:

* Multi-language support
* Runtime language switching
* Integration with Zod for localized validation messages

---

## 🧪 Testing & Developer Experience

This setup supports high developer productivity and confidence through:

* ✅ **Mocked APIs** (MSW)
* ✅ **Typed and validated forms** (React Hook Form + Zod)
* ✅ **Unit tests** (Vitest)
* ✅ **Code linting** (ESLint)
* ✅ **Component development** (Storybook)
* ✅ **Pre-commit checks** (Husky)

---

## 🛠 Environment Variables

Example `.env` file:

```env
VITE_FEATURE_FLAG_MOCKS=true
VITE_API_URL=http://localhost:3000
```

You can use `.env.local`, `.env.production`, etc., depending on your environment.

---

## 🧩 Example Feature Included

The boilerplate includes an example feature (login feature) demonstrating:

* Feature-based architecture
* Dark/light theming
* Internationalization
* Form validation with Zod
* Mock API integration using MSW

Use this as a foundation to expand your application following professional patterns.

---

## 🚧 Optional Improvements

Here are some optional enhancements you can implement to elevate this boilerplate even further:

### 🔌 State Management

- Zustand, Jotai, or Redux Toolkit integration
- Modular and feature-scoped store examples

### ⚙️ Dev Tooling & DX

- CLI generator for feature scaffolding (Plop.js)

### 🛠️ CI/CD

- GitHub Actions workflow (lint, test, coverage)
- Pre-release hooks and versioning automation


## 🤝 Contributing

Feel free to fork this project and customize it for your needs.

---

## 📄 License

MIT – Free to use in commercial and personal projects.

---


