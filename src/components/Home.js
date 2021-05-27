import React from "react";
import "./Home.css";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Recommends from "./Recommends";
import ComedyMovies from "./ComedyMovies";
import HorrorMovies from "./HorrorMovies";
import RomanceMovies from "./RomanceMovies";
import DocumentariesMovies from "./DocumentariesMovies";

const Home = () => {
  return (
    <div className="home">
      <ImgSlider />
      <Viewers />
      <Recommends />
      <ComedyMovies />
      <HorrorMovies />
      <RomanceMovies />
      <DocumentariesMovies />
    </div>
  );
};

export default Home;
