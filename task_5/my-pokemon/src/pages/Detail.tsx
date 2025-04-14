import { useParams } from "react-router-dom";
import { pokemonData } from "../data/pokemon";
import Header from "../components/Header";

function Detail() {
  const { id } = useParams();

  const pokemon = pokemonData.find((p) => p.id === `#${id}`);

  if (!pokemon) {
    return (
      <div className="min-h-screen bg-slate-900/90 text-white p-4">
        Pokemon not found
      </div>
    );
  }

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
                    style={{ width: "14.4%" }}
                  ></div>
                </div>
                <div className="flex items-center mt-1">
                  <div className="text-white text-2xl font-bold mr-2">144</div>
                  <div className="text-slate-400 text-lg">from 1000</div>
                </div>
              </div>
              <hr className="border-slate-800" />
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-slate-400">Attack</h3>
                  <div className="text-white text-2xl font-bold">32</div>
                </div>
                <div>
                  <h3 className="text-slate-400">Defense</h3>
                  <div className="text-white text-2xl font-bold">50</div>
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
