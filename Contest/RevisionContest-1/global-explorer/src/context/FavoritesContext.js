
import React, { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);
  const addFavorite = (country) => {
    if (!favorites.find((c) => c.cca2 === country.cca2)) {
      setFavorites([...favorites, country]);
    }
  };
  const removeFavorite = (cca2) => {
    setFavorites(favorites.filter((c) => c.cca2 !== cca2));
  };
  const isFavorite = (cca2) => favorites.some((c) => c.cca2 === cca2);

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export const useFavorites = () => useContext(FavoritesContext);
