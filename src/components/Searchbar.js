// Searchbar.jsx
import React, { useState } from "react";
import Card from "./Card";

const Searchbar = ({ userType }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://127.0.0.1:5000/recommend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          book_name: query,
        }),
      });

      if (!response.ok) {
        throw new Error("Search failed");
      }

      const data = await response.json();
      console.log("Recommendations------", data);
      setResults(data || []);
      console.log("Results are set as --------", results); // Use empty array if recommendations are undefined
    } catch (error) {
      setError(error.message || "Search failed");
    }

    setLoading(false);
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row w-50">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={handleChange}
          className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  w-2/3"
        />
        <button
          onClick={handleSearch}
          className="bg-indigo-500 text-white px-4 py-2 rounded-r-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 hover:bg-indigo-600 w-1/3 "
        >
          Search
        </button>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <div className="flex flex-wrap justify-center">
        {results.map((book, index) => (
          <Card key={index} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Searchbar;
