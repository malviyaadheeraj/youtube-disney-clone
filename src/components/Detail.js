import React, { useEffect, useState } from "react";
import "./Detail.css";
import imgPlayIcon from "../images/play-icon-black.png";
import imgTrailerIcon from "../images/play-icon-white.png";
import imgGroupIcon from "../images/group-icon.png";
import axios from "axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const API_KEY = "9f9076158baa1526af5c4cf189980da9";

const Detail = (props) => {
  const [movie, setMovie] = useState({});
  const [trailerUrl, setTrailerUrl] = useState("");

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${props.match.params.id}?api_key=${API_KEY}&language=en-US`
      )
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(movie);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  const opts = {
    height: "390px",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          // https://www.youtube.com/watch?v=XtMThy8QKqU
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="detail">
      <div className="detail__background">
        <img src={`${base_url}${movie.backdrop_path}`} alt="" />
      </div>
      <div className="detail__movieTitle">
        <h1>{movie?.name || movie?.title || movie?.original_name}</h1>
      </div>
      <div className="detail__content">
        <div className="detail__controls">
          <button className="detail__player">
            <img src={imgPlayIcon} alt="" />
            <span>Play</span>
          </button>
          <button
            onClick={() => handleClick(movie)}
            className="detail__trailer"
          >
            <img src={imgTrailerIcon} alt="" />
            <span>Trailer</span>
          </button>
          <div className="detail__addList">
            <span></span>
            <span></span>
          </div>
          <div className="detail__groupWatch">
            <div>
              <img src={imgGroupIcon} alt="" />
            </div>
          </div>
        </div>
        <div className="detail__description">
          {truncate(movie?.overview, 150)}
        </div>
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Detail;
