
import React, { useEffect, useMemo, useState } from "react";
import { fetchAllCountries } from "../api/api";
import CountryCard from "../components/CountryCard";
import Filters from "../components/Filters";
import Pagination from "../components/Pagination";
import Loading from "../components/Loading";
import ErrorBox from "../components/ErrorBox";
import { useDebounce } from "../hooks/useDebounce";

export default function Home() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const [region, setRegion] = useState("All");
  const [sortBy, setSortBy] = useState("none");
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 300);


  const [page, setPage] = useState(1);
  const pageSize = 20;

  useEffect(() => {
    setLoading(true);
    fetchAllCountries()
      .then((data) => {

        const normalized = data.map((c) => ({
          ...c,
          cca2:
            c.cca2 ||
            (c.cca3
              ? c.cca3.slice(0, 2)
              : c.name?.common?.slice(0, 2).toUpperCase()),
        }));
        setCountries(normalized);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to fetch countries. Try again later.");
        setLoading(false);
      });
  }, []);

  const filtered = useMemo(() => {
    let list = countries;
    if (region !== "All") list = list.filter((c) => c.region === region);
    if (debouncedSearch) {
      const q = debouncedSearch.toLowerCase();
      list = list.filter((c) => {
        const name = c.name?.common?.toLowerCase() || "";
        const capital = (c.capital && c.capital[0])?.toLowerCase() || "";
        return name.includes(q) || capital.includes(q);
      });
    }
    if (sortBy === "population")
      list = list.slice().sort((a, b) => b.population - a.population);
    if (sortBy === "area")
      list = list.slice().sort((a, b) => (b.area || 0) - (a.area || 0));
    return list;
  }, [countries, region, debouncedSearch, sortBy]);

  const totalPages = Math.ceil(filtered.length / pageSize);
  const pageItems = filtered.slice((page - 1) * pageSize, page * pageSize);

  if (loading) return <Loading />;
  if (error) return <ErrorBox message={error} />;

  return (
    <div>
      <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex gap-2">
          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            placeholder="Search by country or capital"
            className="px-3 py-2 border rounded w-72"
          />
        </div>
        <Filters
          region={region}
          setRegion={setRegion}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {pageItems.map((c) => (
          <CountryCard key={c.cca2 || c.name.common} country={c} />
        ))}
      </div>

      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  );
}
