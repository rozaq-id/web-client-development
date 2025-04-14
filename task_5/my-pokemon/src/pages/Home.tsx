import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { pokemonData } from "../data/pokemon";
import Header from "../components/Header";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("list");
  const [sortBy, setSortBy] = useState("default");
  const navigate = useNavigate();

  const filteredPokemon = pokemonData.filter(
    (pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pokemon.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pokemon.id.includes(searchTerm)
  );

  return (
    <div className="min-h-screen bg-slate-900/90">
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        viewMode={viewMode}
        setViewMode={setViewMode}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      {/* Pokemon Grid/List */}
      <div
        className={`p-4 ${
          viewMode === "grid" ? "grid grid-cols-2 gap-4" : "flex flex-col gap-4"
        }`}
      >
        {filteredPokemon.map((pokemon) => (
          <div
            key={pokemon.id}
            className="bg-white/80 rounded-2xl p-4 cursor-pointer shadow-md relative"
            onClick={() => navigate(`/pokemon/${pokemon.id.replace("#", "")}`)}
          >
            {viewMode === "list" && (
              <div className="flex justify-between items-start mb-2">
              <span className="text-green-500 font-bold text-xl">{pokemon.type}</span>
              <span className="text-gray-700 font-bold text-xl">{pokemon.id}</span>
              </div>
            )}
            <div className="flex justify-center items-center py-2">
              <img
                src={pokemon.image}
                alt={pokemon.name}
                className="w-3/4 h-auto"
              />
            </div>
            <div className="text-center mt-2">
              <div className="text-lg font-bold text-gray-800">{pokemon.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
