import React, { useState, useEffect } from "react";
import "./ComedyMovies.css";
import { Link } from "react-router-dom";
import requests from "../Requests";
import axios from "../axios";

const ComedyMovies = () => {
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchComedyMovies);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [requests.fetchComedyMovies]);

  return (
    <div className="comedyMovies">
      <h4>Comedy Movies</h4>
      <div className="comedyMovies__content">
        {movies.map((movie, key) => (
          <div className="comedyMovies__wrap">
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

export default ComedyMovies;
