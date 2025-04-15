# My Pokemon App

A React application that displays Pokemon data with filtering, sorting, and detailed view capabilities. Designed with a mobile-first approach for optimal viewing on smartphones and tablets.

## Live Demo

Check out the live demo of the application here:
[https://rozaq-id-wcd07-task-6.netlify.app/](https://rozaq-id-wcd07-task-6.netlify.app/)

## Features

- View Pokemon in a responsive grid or list layout
- Search Pokemon by name, type, or ID
- Sort Pokemon by different criteria
- View detailed information about each Pokemon
- Mobile-optimized interface with touch-friendly elements
- Fully responsive design with Tailwind CSS
- Data persistence with browser's local storage
- Ability to modify and update Pokemon data that persists between sessions

## Tech Stack

- React 19
- TypeScript
- Vite
- React Router v7
- Tailwind CSS
- Lucide React (for icons)

## Mobile Design Features

The application is specifically designed for mobile devices with:
- Touch-friendly UI components
- Optimized layout for small screens
- Responsive grid that adapts to different screen sizes
- Appropriate text sizes and spacing for mobile viewing

## Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

## Installation
1. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

## Running the Application

### Development Mode

To run the application in development mode with hot-reload:

```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

### Production Build

To create a production build:

```bash
npm run build
# or
yarn build
```

To preview the production build locally:

```bash
npm run preview
# or
yarn preview
```

## Linting

To run the linter:

```bash
npm run lint
# or
yarn lint
```

## Project Structure

- `src/`: Source code
  - `assets/`: Images and static resources
  - `components/`: Reusable React components
  - `data/`: Pokemon data
  - `pages/`: Page components
    - `Home.tsx`: Main Pokemon listing page
    - `Detail.tsx`: Individual Pokemon detail page
  - `App.tsx`: Main application component
  - `main.tsx`: Application entry point

## Local Storage Implementation

The application uses browser local storage to persist Pokemon data between sessions:

- Pokemon data is initially loaded from default values if no data exists in local storage
- When you change, add, or remove Pokemon, these changes are saved to your browser's storage
- Data persists even after closing the browser or refreshing the page
- The implementation uses the key `pokemon_data` in local storage
- The storage functionality is handled in `src/data/pokemon.ts` with helper functions for reading and writing data
