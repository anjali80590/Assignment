// src/components/Header.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useFavorites } from "../context/FavoritesContext";

export default function Header() {
  const { theme, toggle } = useTheme();
  const { favorites } = useFavorites();
  const loc = useLocation();

  return (
    <header className="bg-white dark:bg-gray-800 shadow">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold">
          Global Explorer
        </Link>
        <nav className="flex gap-4 items-center">
          <Link
            to="/"
            className={loc.pathname === "/" ? "font-medium" : "opacity-80"}
          >
            Home
          </Link>
          <Link to="/favorites" className="relative">
            Favorites
            {favorites?.length > 0 && (
              <span className="ml-1 inline-block bg-red-500 text-white rounded-full px-2 text-xs">
                {favorites.length}
              </span>
            )}
          </Link>
          <button onClick={toggle} className="ml-3 p-2 border rounded">
            {theme === "light" ? "Dark" : "Light"}
          </button>
        </nav>
      </div>
    </header>
  );
}
