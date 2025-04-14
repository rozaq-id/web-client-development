import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Grid, List, X } from "lucide-react";
import pokemonLogo from "../assets/pokemon-logo.png";

interface HeaderProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  viewMode: "grid" | "list";
  setViewMode: (mode: "grid" | "list") => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  isDetailPage?: boolean;
}

function Header({
  searchTerm,
  setSearchTerm,
  viewMode,
  setViewMode,
  sortBy,
  setSortBy,
  isDetailPage = false,
}: HeaderProps) {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-10 backdrop-blur-sm border-b border-slate-700/50">
      <div className="flex items-center h-16 px-4 py-2">
        <div className="flex items-center gap-4 w-full">
          <div 
            className="text-white text-2xl font-bold tracking-wider flex items-center mr-14 cursor-pointer" 
            onClick={() => navigate("/")}
          >
            <img
              src={pokemonLogo}
              alt="Pokemon"
              className="h-8"
            />
          </div>
          {!isDetailPage && (
            <div className="flex-1 flex justify-end">
              {isSearchVisible ? (
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full h-9 bg-white text-slate-800 rounded-xl pl-4 pr-10 outline-none placeholder-slate-400 border border-slate-300"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    autoFocus
                  />
                  <button 
                    onClick={() => setIsSearchVisible(false)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700"
                  >
                    <X size={18} />
                  </button>
                </div>
              ) : (
                <button 
                  onClick={() => setIsSearchVisible(true)}
                  className="w-9 h-9 flex items-center justify-center text-white hover:bg-slate-700 transition-colors"
                >
                  <Search size={18} />
                </button>
              )}
            </div>
          )}
        </div>
      </div>
      {!isDetailPage && (
        <div className="flex items-center gap-2 px-4 py-2 border-t border-slate-700/50">
          <select
            className="flex-1 h-9 bg-slate-700/50 text-white rounded-xl px-4 outline-none appearance-none cursor-pointer border border-slate-600 mr-16"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 0.5rem center",
              backgroundSize: "1.5em",
              paddingRight: "2.5rem",
            }}
          >
            <option value="default">Sort by</option>
            <option value="id">Number</option>
            <option value="name">Name</option>
            <option value="type">Type</option>
          </select>
          <div className="flex bg-slate-700/50 rounded-md border border-slate-600">
            <button
              onClick={() => setViewMode("list")}
              className={`w-9 h-9 flex items-center justify-center ${
                viewMode === "list"
                  ? "bg-slate-600 text-white"
                  : "text-slate-400"
              }`}
            >
              <List size={18} />
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`w-9 h-9 flex items-center justify-center ${
                viewMode === "grid"
                  ? "bg-slate-600 text-white"
                  : "text-slate-400"
              }`}
            >
              <Grid size={18} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;