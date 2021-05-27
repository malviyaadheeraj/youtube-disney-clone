import React, { useEffect, useState } from "react";
import "./RomanceMovies.css";
import requests from "../Requests";
import axios from "../axios";
import { Link } from "react-router-dom";

const RomanceMovies = () => {
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchRomanceMovies);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [requests.fetchRomanceMovies]);

  return (
    <div className="romanceMovies">
      <h4>Romance Movies</h4>
      <div className="romanceMovies__content">
        {movies.map((movie, key) => (
          <div  className="romanceMovies__wrap">
             
            <Link to={`/detail/${movie.id}`}>
              <img
                src={`${base_url}${movie.poster_path}`}
              key={movie.id} 
                alt={movie.name}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RomanceMovies;
