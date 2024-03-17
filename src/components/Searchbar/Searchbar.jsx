import "./Searchbar.css";
import data from "../../../public/data.js";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

// Suche nach allen Filmen
const Searchbar = () => {
  //   useState
  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [placeholderVisible, setPlaceholderVisible] = useState(true);

  //   Placeholder onFocus leeren/füllen
  const handleFocus = () => {
    setPlaceholderVisible(false);
  };
  const handleBlur = () => {
    setPlaceholderVisible(true);
  };

  //   Suchfunktion
  const searchAll = (e) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);
    const filteredData = data.filter((item) =>
      item.title.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredData(filteredData);
    console.log(filteredData);
  };

  return (
    <section className="searchbar">
      <div className="searchbar-box">
        <SearchRoundedIcon style={{ color: "white" }} />
        <input
          onChange={searchAll}
          value={searchInput}
          placeholder={placeholderVisible ? "Search all Movies" : ""}
          type="text"
          onFocus={handleFocus}
          onBlur={handleBlur}
          name="searchbar"
          autoComplete="off"
        />
        <div
          id="results-search"
          className={searchInput < 1 ? "hidden" : "suggestions"}
        >
          {filteredData.length > 0 ? (
            filteredData.map((movie, index) => (
              <Link to={`/detail/${movie.title}`} key={index}>
                {movie.title}
              </Link>
            ))
          ) : (
            <p>No results</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Searchbar;
