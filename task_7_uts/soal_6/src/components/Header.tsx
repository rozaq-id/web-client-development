import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Grid, List, ArrowUpDown } from "lucide-react";
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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSortChange = (value: string) => {
    setSortBy(value);
    setIsDropdownOpen(false);
  };

  // Handle click outside to close dropdown and search
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
      
      if (isSearchVisible && searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchVisible(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSearchVisible]);

  // Focus search input when search becomes visible
  useEffect(() => {
    if (isSearchVisible && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchVisible]);

  // Helper function to get display text for current sort option
  const getSortDisplayText = () => {
    switch (sortBy) {
      case "id": return "Number";
      case "name": return "Name";
      case "type": return "Type";
      default: return "Sort by";
    }
  };

  return (
    <header className="sticky top-0 z-10 backdrop-blur-sm border-b border-slate-700/50">
      <div className="flex items-center h-16 px-4 py-2">
        <div className="flex items-center gap-4 w-full">
          <div 
            className="text-white text-2xl font-bold tracking-wider flex items-center cursor-pointer" 
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
              <div className="relative" ref={searchRef}>
                <div className="flex items-center">
                  <button 
                    onClick={() => setIsSearchVisible(!isSearchVisible)}
                    className="w-9 h-9 text-white flex items-center justify-center z-10"
                  >
                    <Search size={18} />
                  </button>
                  <div 
                    className={`absolute top-0 right-0 transition-all duration-300 ease-in-out flex items-center
                    ${isSearchVisible ? 'w-48 opacity-100' : 'w-0 opacity-0 hidden'}`}
                  >
                    <input
                      ref={searchInputRef}
                      type="text"
                      placeholder="Search..."
                      className={`h-9 bg-white text-slate-800 rounded-xl pl-4 pr-8 outline-none placeholder-slate-400 border border-slate-300 w-full`}
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {!isDetailPage && (
        <div className="flex items-center gap-2 px-4 py-2 border-t border-slate-700/50">
          <div className="flex-1 relative mr-16" ref={dropdownRef}>
            <div 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="h-9 bg-slate-700/50 text-white rounded-xl px-4 outline-none cursor-pointer border border-slate-600 flex items-center justify-between transition-colors hover:bg-slate-600/70"
            >
              <span className="text-sm font-medium">{getSortDisplayText()}</span>
              <ArrowUpDown size={16} className="ml-2 text-slate-300" />
            </div>
            
            {isDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-slate-800 rounded-xl shadow-lg border border-slate-600 overflow-hidden z-20 animate-fadeIn">
                <div 
                  className={`py-2 px-4 cursor-pointer hover:bg-slate-700 transition-colors ${sortBy === "default" ? "bg-slate-700 text-white font-medium" : "text-slate-300"}`}
                  onClick={() => handleSortChange("default")}
                >
                  Sort by
                </div>
                <div 
                  className={`py-2 px-4 cursor-pointer hover:bg-slate-700 transition-colors ${sortBy === "id" ? "bg-slate-700 text-white font-medium" : "text-slate-300"}`}
                  onClick={() => handleSortChange("id")}
                >
                  Number
                </div>
                <div 
                  className={`py-2 px-4 cursor-pointer hover:bg-slate-700 transition-colors ${sortBy === "name" ? "bg-slate-700 text-white font-medium" : "text-slate-300"}`}
                  onClick={() => handleSortChange("name")}
                >
                  Name
                </div>
                <div 
                  className={`py-2 px-4 cursor-pointer hover:bg-slate-700 transition-colors ${sortBy === "type" ? "bg-slate-700 text-white font-medium" : "text-slate-300"}`}
                  onClick={() => handleSortChange("type")}
                >
                  Type
                </div>
              </div>
            )}
          </div>
          
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