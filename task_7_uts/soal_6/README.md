# Project Report

## Overview
This project is based on a Figma design that focuses on implementing React Hooks. The design can be accessed [here](https://www.figma.com/design/S1iYVBgIO2eGKPR9Sj15PN/react-hooks). The project demonstrates the use of modern React features to build a functional and interactive web application.

## Screenshots
Below are some screenshots of the project, located in the `screenshot` folder:

<img src="./screenshot/1.%20home-large.png" alt="Home Large" width="400" />
<img src="./screenshot/2.%20home-small.png" alt="Home Small" width="400" />
<img src="./screenshot/3.%20detail.png" alt="Detail" width="400" />
<img src="./screenshot/4.%20local-storage.png" alt="Local Storage"/>

## Project Structure
The project is organized as follows:

```
soal_6/
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── public/
│   └── vite.svg
└── src/
    ├── App.tsx
    ├── index.css
    ├── main.tsx
    └── ...
```

## How I Use State Management in This Project
This project leverages state management techniques to efficiently handle application state and interactions. Below are detailed examples of how state management is implemented in the `Home` component:

1. **useState**:
   - **Location**: `src/pages/Home.tsx`
   - **Usage**: Manages multiple states:
     - `searchTerm`: Tracks the search input for filtering Pokémon.
     - `viewMode`: Toggles between "grid" and "list" views.
     - `sortBy`: Determines the sorting criteria for Pokémon (e.g., by ID, name, or type).
     - `pokemonList`: Stores the list of Pokémon fetched from local storage.
   - **Example**:
     ```tsx
     const [searchTerm, setSearchTerm] = useState("");
     const [viewMode, setViewMode] = useState<"grid" | "list">("list");
     const [sortBy, setSortBy] = useState("default");
     const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
     ```

2. **useEffect**:
   - **Location**: `src/pages/Home.tsx`
   - **Usage**: Executes a side effect to load Pokémon data from local storage when the component mounts.
   - **Example**:
     ```tsx
     useEffect(() => {
       setPokemonList(getPokemonFromStorage());
     }, []);
     ```

3. **useNavigate**:
   - **Location**: `src/pages/Home.tsx`
   - **Usage**: Provides navigation functionality to redirect users to the Pokémon detail page when a Pokémon card is clicked.
   - **Example**:
     ```tsx
     const navigate = useNavigate();
     onClick={() => navigate(`/pokemon/${pokemon.id.replace("#", "")}`)}
     ```

## How I Use Local Storage to Manage Pokémon List
This project uses local storage to persistently store and manage the Pokémon list. Here's how the implementation works:

1. **Initial Data Loading**:
   - When the application first loads, we check if Pokémon data exists in local storage.
   - If no data exists, we initialize it with our default Pokémon dataset.
   - Example:
     ```tsx
     const initializePokemonData = () => {
       if (!localStorage.getItem("pokemonList")) {
         localStorage.setItem("pokemonList", JSON.stringify(defaultPokemonData));
       }
       return getPokemonFromStorage();
     };
     ```

2. **Reading from Local Storage**:
   - We retrieve the Pokémon list whenever we need to display or manipulate the data.
   - Example:
     ```tsx
     const getPokemonFromStorage = () => {
       return JSON.parse(localStorage.getItem("pokemonList") || "[]");
     };
     ```

3. **Adding a New Pokémon**:
   - To add a new Pokémon to the collection:
     ```tsx
     const addPokemon = (newPokemon) => {
       const currentList = getPokemonFromStorage();
       const updatedList = [...currentList, newPokemon];
       localStorage.setItem("pokemonList", JSON.stringify(updatedList));
       setPokemonList(updatedList); // Update state to reflect changes
     };
     ```

4. **Updating an Existing Pokémon**:
   - To update a Pokémon's details:
     ```tsx
     const updatePokemon = (id, updatedData) => {
       const currentList = getPokemonFromStorage();
       const updatedList = currentList.map(pokemon => 
         pokemon.id === id ? { ...pokemon, ...updatedData } : pokemon
       );
       localStorage.setItem("pokemonList", JSON.stringify(updatedList));
       setPokemonList(updatedList); // Update state to reflect changes
     };
     ```

5. **Removing a Pokémon**:
   - To remove a Pokémon from the collection:
     ```tsx
     const removePokemon = (id) => {
       const currentList = getPokemonFromStorage();
       const updatedList = currentList.filter(pokemon => pokemon.id !== id);
       localStorage.setItem("pokemonList", JSON.stringify(updatedList));
       setPokemonList(updatedList); // Update state to reflect changes
     };
     ```

6. **State Management with Hooks**:
   - We use React's useState hook to maintain the current state of the Pokémon list.
   - The useEffect hook ensures we load data from local storage when the component mounts.
   - Example:
     ```tsx
     const [pokemonList, setPokemonList] = useState([]);
     
     useEffect(() => {
       setPokemonList(initializePokemonData());
     }, []);
     ```

## Conclusion
This project demonstrates the effective use of React Hooks and state management techniques to build a modern and interactive web application. By leveraging features like `useState`, `useEffect`, and `useNavigate`, the application achieves a clean and maintainable structure. Additionally, the tutorial for modifying the Pokémon list in local storage provides a practical guide for managing dynamic data. This project serves as a valuable resource for learning and implementing best practices in React development.