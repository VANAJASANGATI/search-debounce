import { useState, useEffect } from "react";
export const SearchBar = () => {
  const [results, setResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [cache, setCache] = useState({});
  useEffect(() => {
    if (cache[searchInput]) {
      setResults((prev)=>);
    }
    const timeId = setTimeout(() => {
      console.log("debiunce");
      fetchData();
    }, 500);
    return () => {
      clearTimeout(timeId);
    };
  }, [searchInput]);

  async function fetchData() {
    const reciepiesJsonData = await fetch(
      `https://dummyjson.com/recipes/search?q=+${searchInput}`
    );
    const data = await reciepiesJsonData.json();
    setResults(data.recipes);
    setCache((prev) => ({ ...prev, [searchInput]: data }));
  }

  return (
    <div style={{ width: "100%" }}>
      <input
        style={{ width: "100%" }}
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <div style={{ border: "1px solid black", padding: 10, width: "100%" }}>
        {results.map((item) => (
          <p key={item.id}>{item.name}</p>
        ))}
      </div>
    </div>
  );
};
