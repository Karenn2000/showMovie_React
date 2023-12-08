// TitleNam.js

import React, { useState } from "react";
import "./title.css";
import titleImg from "../assets/FeaturedTitleImage.png";
import data from "../data.json";
import MyCarousel from "../carusel/carousel";

const TitleNam = () => {
  const convertSeconds = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
  };

  const [clickedTitle, setClickedTitle] = useState("");
  const [titleImageClicked, setTitleImageClicked] = useState(titleImg);
  const [clickedImage, setClickedImage] = useState(false);
    
  const handleImageClick = (title) => {
    setClickedImage(true);
    setClickedTitle(title);
    setTitleImageClicked(title);
  };

  return (
    <>
      <div className="containerTitle">
        <div>
          <h4 className="movie">MOVIE</h4>
          <img className="title" src={titleImg}/>
          <div>
            <p className="times">{`
              ${data.Featured.ReleaseYear}
              ${data.Featured.MpaRating}
              ${convertSeconds(data.Featured.Duration)}
            `}</p>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>
        {clickedImage && (
          <div>
            <p className="clickedTitle">{clickedTitle}</p>
          </div>
        )}
        <p className="trend">Trending Now</p>
        <MyCarousel data={data} onImageClick={handleImageClick} />
      </div>
    </>
  );
};

export default TitleNam;
