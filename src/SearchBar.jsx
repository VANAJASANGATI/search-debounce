import { useState, useEffect } from "react";
export const SearchBar = () => {
  const [results, setResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    fetchData();
  }, [searchInput]);
  async function fetchData() {
    const reciepiesJsonData = await fetch(
      `https://dummyjson.com/recipes/search?q=+${searchInput}`
    );
    const data = await reciepiesJsonData.json();
    console.log("data", data);
  }
  //fetchData();
  console.log("searchInput", searchInput);

  return (
    <div>
      <input
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
    </div>
  );
};
