"use client";
import { useSearch } from "@/utils/searchContext";
import data from "@/utils/data.json";
import CategoryCard from "@/components/categoryCard";

export default function Home() {
  const { searchQuery } = useSearch();

  const filteredCategories = searchQuery
    ? data?.categories?.filter((category) =>
        category.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : data?.categories;

  return (
    <div className="container max-w-full md:min-h-screen overflow-y-auto">
      {filteredCategories && filteredCategories.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 md:gap-y-7 md:gap-x-5 mt-[30px] md:mb-[97px] h-full">
          {filteredCategories.map((category, index) => (
            <div key={index} className="h-full">
              <CategoryCard category={category} />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-black font-semibold my-20 text-3xl">
          Kategori Bulunamadı
        </p>
      )}
    </div>
  );
}
