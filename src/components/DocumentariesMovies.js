import React, { useState, useEffect } from "react";
import "./DocumentariesMovies.css";
import { Link } from "react-router-dom";
import requests from "../Requests";
import axios from "../axios";

const DocumentariesMovies = () => {
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchDocumentaries);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [requests.fetchDocumentaries]);

  return (
    <div className="documentariesMovies">
      <h4>Documentaries Movies</h4>
      <div className="documentariesMovies__content">
        {movies.map((movie, key) => (
          <div className="documentariesMovies__wrap">
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

export default DocumentariesMovies;
