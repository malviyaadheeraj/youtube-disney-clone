import React, { useEffect, useState } from "react";
import "./ImgSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import requests from "../Requests";
import axios from "../axios";

const ImgSlider = (props) => {
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [requests.fetchNetflixOriginals]);

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Slider {...settings}>
      {movies.map((movie) => (
        <div className="imgSlider__wrap">
          <a>
            <img
              src={`${base_url}${movie.backdrop_path}`}
              key={movie.id}
              alt={movie.name}
            />
          </a>
        </div>
      ))}
    </Slider>
  );
};

export default ImgSlider;
