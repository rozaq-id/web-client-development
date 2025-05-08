import bulbasaurImage from "../assets/1001.png";
import kabutoImage from "../assets/1002.png";

export interface Pokemon {
    id: string;
    name: string;
    type: string;
    image: string;
    health: number;
    maxHealth: number;
    attack: number;
    defense: number;
  }
  
export const defaultPokemonData: Pokemon[] = [
    {
      id: "#1001",
      name: "Bulbasaur Bulbasaur",
      type: "Grass",
      image: bulbasaurImage,
      health: 155,
      maxHealth: 1000,
      attack: 49,
      defense: 65
    },
    {
      id: "#1002",
      name: "Kabuto Kabuto",
      type: "Rock",
      image: kabutoImage,
      health: 180,
      maxHealth: 1000,
      attack: 80,
      defense: 90
    }
];

// Local storage key
const POKEMON_STORAGE_KEY = 'pokemon_data';

// Get Pokemon data from local storage or use default data if not available
export const getPokemonFromStorage = (): Pokemon[] => {
  const storedData = localStorage.getItem(POKEMON_STORAGE_KEY);
  if (storedData) {
    return JSON.parse(storedData);
  }
  
  // If no data in local storage, initialize with default data
  savePokemonToStorage(defaultPokemonData);
  return defaultPokemonData;
};

// Save Pokemon data to local storage
export const savePokemonToStorage = (pokemonData: Pokemon[]): void => {
  localStorage.setItem(POKEMON_STORAGE_KEY, JSON.stringify(pokemonData));
};

// For backward compatibility
export const pokemonData = getPokemonFromStorage();
