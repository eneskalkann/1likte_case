"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface SearchContextProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchContext = createContext<SearchContextProps | undefined>(undefined);

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
};
