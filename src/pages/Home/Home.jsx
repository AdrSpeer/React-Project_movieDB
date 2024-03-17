import "./Home.css";
import data from "../../../public/data.js";
import Searchbar from "../../components/Searchbar/Searchbar.jsx";
import StarIcon from "@mui/icons-material/Star";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  console.log(data);
  const [movieData, setMovieData] = useState(data);
  // Kopie des Datenarrays erstllen
  const sortedData = [...data];

  //   Sortierfunktionen
  const ascending = () => {
    sortedData.sort((a, b) => a.year - b.year);
    setMovieData(sortedData);
  };

  const descending = () => {
    sortedData.sort((a, b) => b.year - a.year);
    setMovieData(sortedData);
  };

  const bestRate = () => {
    sortedData.sort((a, b) => b.rate - a.rate);
    setMovieData(sortedData);
  };

  const aFirst = () => {
    sortedData.sort((a, b) => a.title.localeCompare(b.title));
    setMovieData(sortedData);
  };

  const zFirst = () => {
    sortedData.sort((a, b) => b.title.localeCompare(a.title));
    setMovieData(sortedData);
  };

  return (
    <section className="home">
      <h1>Movie DB</h1>
      <Searchbar />
      <section className="sort-btn">
        <button onClick={ascending}>Sort by Date Ascending</button>
        <button onClick={descending}>Sort by Date Descending</button>
        <button onClick={bestRate}>Best Rate</button>
        <button onClick={aFirst}>A-Z</button>
        <button onClick={zFirst}>Z-A</button>
      </section>
      <div className="movie-wrapper">
        {movieData?.map((allData, index) => (
          <div className="movie-box" key={index}>
            <Link to={`/detail/${allData.title}`}>
              <div className="movie-content">
                <h4>{allData.title}</h4>
                <p>{allData.year}</p>
                <p>{allData.director}</p>
              </div>
              <div className="movie-rate">
                <StarIcon style={{ color: "#FFE639" }} />
                <p>{allData.rate}</p>
              </div>
              {allData.genre.map((allGenres, index) => (
                <div className="movie-genres" key={index}>
                  <p>{allGenres}</p>
                </div>
              ))}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;
