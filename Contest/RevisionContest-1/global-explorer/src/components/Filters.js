
import React from "react";

const regions = [
  "All",
  "Africa",
  "Americas",
  "Asia",
  "Europe",
  "Oceania",
  "Antarctic",
];

export default function Filters({ region, setRegion, sortBy, setSortBy }) {
  return (
    <div className="flex gap-3 items-center">
      <select
        className="px-2 py-1 border rounded"
        value={region}
        onChange={(e) => setRegion(e.target.value)}
      >
        {regions.map((r) => (
          <option key={r} value={r}>
            {r}
          </option>
        ))}
      </select>

      <select
        className="px-2 py-1 border rounded"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="none">Sort</option>
        <option value="population">Population (desc)</option>
        <option value="area">Area (desc)</option>
      </select>
    </div>
  );
}
