import bulbasaurImage from "../assets/1001.png";
import kabutoImage from "../assets/1002.png";

export interface Pokemon {
    id: string;
    name: string;
    type: string;
    image: string;
  }
  
  export const pokemonData: Pokemon[] = [
    {
      id: "#1001",
      name: "Bulbasaur Bulbasaur",
      type: "Grass",
      image: bulbasaurImage
    },
    {
      id: "#1002",
      name: "Kabuto Kabuto",
      type: "Rock",
      image: kabutoImage
    }
  ];