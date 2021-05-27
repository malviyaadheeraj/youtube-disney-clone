import React, { useEffect, useState } from "react";
import "./HorrorMovies.css";
import requests from "../Requests";
import axios from "../axios";
import { Link } from "react-router-dom";

const HorrorMovies = () => {
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchHorrorMovies);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [requests.fetchHorrorMovies]);

  return (
    <div className="horrorMovies">
      <h4>Horror Movies</h4>
      <div className="horrorMovies__content">
        {movies.map((movie, key) => (
          <div className="horrorMovies__wrap">
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

export default HorrorMovies;
