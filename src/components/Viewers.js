// import styled from "styled-components";
import React from "react";
import "./Viewers.css";
import imgViewDisney from "../images/viewers-disney.png";
import imgViewPixar from "../images/viewers-pixar.png";
import imgViewMarvel from "../images/viewers-marvel.png";
import imgViewStarWars from "../images/viewers-starwars.png";
import imgViewNational from "../images/viewers-national.png";
import videoDisney from "../videos/1564674844-disney.mp4";
import videoPixar from "../videos/1564676714-pixar.mp4";
import videoMarvel from "../videos/1564676115-marvel.mp4";
import videStarWars from "../videos/1608229455-star-wars.mp4";
import videoNational from "../videos/1564676296-national-geographic.mp4";

const Viewers = () => {
  return (
    <div className="viewers">
      <div className="viewers__wrap">
        <img src={imgViewDisney} alt="" />
        <video
          src={videoDisney}
          type="video/mp4"
          autoPlay
          loop
          playsInline
        ></video>
      </div>
      <div className="viewers__wrap">
        <img src={imgViewPixar} alt="" />
        <video
          src={videoPixar}
          type="video/mp4"
          autoPlay
          loop
          playsInline
        ></video>
      </div>
      <div className="viewers__wrap">
        <img src={imgViewMarvel} alt="" />
        <video
          src={videoMarvel}
          type="video/mp4"
          autoPlay
          loop
          playsInline
        ></video>
      </div>
      <div className="viewers__wrap">
        <img src={imgViewStarWars} alt="" />
        <video
          src={videStarWars}
          type="video/mp4"
          autoPlay
          loop
          playsInline
        ></video>
      </div>
      <div className="viewers__wrap">
        <img src={imgViewNational} alt="" />
        <video
          src={videoNational}
          type="video/mp4"
          autoPlay
          loop
          playsInline
        ></video>
      </div>
    </div>
  );
};

export default Viewers;
