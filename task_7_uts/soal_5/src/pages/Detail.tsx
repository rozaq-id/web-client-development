import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Pokemon, getPokemonFromStorage } from "../data/pokemon";
import Header from "../components/Header";

function Detail() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    const pokemonList = getPokemonFromStorage();
    const foundPokemon = pokemonList.find((p) => p.id === `#${id}`);
    console.log(foundPokemon);
    setPokemon(foundPokemon || null);
  }, [id]);

  if (!pokemon) {
    return (
      <div className="min-h-screen bg-slate-900/90 text-white p-4">
        Pokemon not found
      </div>
    );
  }

  // Calculate health percentage for the progress bar
  const healthPercentage = (pokemon.health / pokemon.maxHealth) * 100;

  return (
    <div className="min-h-screen bg-slate-900/90">
      <Header
        searchTerm=""
        setSearchTerm={() => {}}
        viewMode="grid"
        setViewMode={() => {}}
        sortBy="default"
        setSortBy={() => {}}
        isDetailPage={true}
      />

      <div className="p-4 max-w-md mx-auto">
        <div className="overflow-hidden">
          <div className="p-4">
            <div className="text-slate-400 font-medium">{pokemon.id}</div>
          </div>

          <div className="relative px-4 flex justify-center">
            <img
              src={pokemon.image}
              alt={pokemon.name}
              className="h-48 w-auto"
            />
          </div>

          <div className="pb-6 space-y-4">
            <div className="relative px-4">
              <div className="flex justify-between items-center">
                <h2 className="text-white text-2xl font-bold">
                  {pokemon.name}
                </h2>
                <div>
                  <img
                    src={pokemon.image}
                    alt={pokemon.name}
                    className="h-14 w-auto"
                  />
                </div>
              </div>
            </div>
            <div className="bg-slate-900 rounded-lg p-4 space-y-4">
              <div>
                <div className="flex justify-between items-center">
                  <h3 className="text-slate-400 font-medium">Health</h3>
                </div>
                <div className="mt-2 bg-slate-800 rounded-full h-1.5 w-full">
                  <div
                    className="bg-green-500 h-full rounded-full"
                    style={{ width: `${healthPercentage}%` }}
                  ></div>
                </div>
                <div className="flex items-center mt-1">
                  <div className="text-white text-2xl font-bold mr-2">{pokemon.health}</div>
                  <div className="text-slate-400 text-lg">from {pokemon.maxHealth}</div>
                </div>
              </div>
              <hr className="border-slate-800" />
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-slate-400">Attack</h3>
                  <div className="text-white text-2xl font-bold">{pokemon.attack}</div>
                </div>
                <div>
                  <h3 className="text-slate-400">Defense</h3>
                  <div className="text-white text-2xl font-bold">{pokemon.defense}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
