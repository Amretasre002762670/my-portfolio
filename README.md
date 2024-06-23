# My Portfolio

This is my personal portfolio project, built using React.js and Vite. The portfolio showcases my skills, projects, and experience. It utilizes CSS modules for styling and is deployed on Netlify.

## Features

- **React + Vite**: A fast development environment with hot module replacement (HMR).
- **CSS Modules**: Scoped and maintainable CSS.
- **Netlify Deployment**: Continuous deployment and hosting.

## Live Demo

You can view the live portfolio at: [My Portfolio](https://your-portfolio-url.netlify.app)

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/my-portfolio.git
   cd my-portfolio
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

### Running the App Locally

To start the application locally, use the following command:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:3000` to see the portfolio.

### Building for Production

To build the application for production, use the following command:

```bash
npm run build
```

This will create an optimized production build in the `dist` directory.

## Project Structure

```
my-portfolio/
├── src/
│   ├── components/        # Reusable components
│   │   ├── Experience.jsx
│   │   └── Header.jsx
│   ├── data/              # Data files
│   │   └── experienceData.js
│   ├── App.jsx            # Main application component
│   ├── App.module.css     # CSS module for App component
│   ├── index.css          # Global CSS
│   ├── main.jsx           # Application entry point
│   ├── utils.js           # Utility functions
│   └── vars.css           # CSS variables
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## CSS Modules

CSS Modules are used to provide scoped and maintainable CSS. For example, the `App.module.css` file contains styles specific to the `App` component and is imported in `App.jsx` like this:

```jsx
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      {/* Your content here */}
    </div>
  );
}
```

## ESLint and Code Quality

This project uses ESLint for maintaining code quality and consistency. The ESLint rules are specified in the `.eslintrc.js` file. To run the linter, use the following command:

```bash
npm run lint
```

## Deployment

The application is deployed using Netlify. Each commit to the main branch triggers a new deployment.

1. **Netlify Setup**

   - Go to [Netlify](https://www.netlify.com/) and create an account.
   - Create a new site from Git and connect your repository.
   - Set the build command to `npm run build` and the publish directory to `dist`.

2. **Automatic Deployment**

   - Push your changes to the main branch.
   - Netlify will automatically build and deploy the updated site.

## Commands

Here are some useful commands for development and deployment:

- **Start Development Server**

  ```bash
  npm run dev
  ```

- **Preview Production Build**

  ```bash
  npm run preview
  ```

- **Build for Production**

  ```bash
  npm run build
  ```

- **Lint Code**

  ```bash
  npm run lint
  ```

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
