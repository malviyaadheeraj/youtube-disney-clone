import React, { useState, useEffect } from "react";
import "./Recommends.css";
import { Link } from "react-router-dom";
import requests from "../Requests";
import axios from "../axios";

const Recommends = () => {
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchActionMovies);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [requests.fetchActionMovies]);

  return (
    <div className="recommends">
      <h4>Recommended for You</h4>
      <div className="recommends__content">
        {movies.map((movie, key) => (
          <div className="recommends__wrap">
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

export default Recommends;
