import React, { useState, useEffect, useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./carouselImg.css";
import TitleNam from "../TitleNam";

const MyCarousel = ({ data, onImageClick }) => {
  const { TendingNow } = data;
  const [currentVideo, setCurrentVideo] = useState(null);

  const handleImageClick = (item) => {
    const lastClickedItemId = localStorage.getItem("lastClickedItemId");

  if (lastClickedItemId === item.Id && currentVideo) {
      const video = currentVideo.querySelector("video");
      if (video) {
        video.pause();
        video.currentTime = 0;
      }

      document.body.removeChild(currentVideo);
      setCurrentVideo(null);
      localStorage.removeItem("lastClickedItemId");
    } else {
      if (currentVideo) {
        const video = currentVideo.querySelector("video");
        if (video) {
          video.pause();
          video.currentTime = 0;
        }

        document.body.removeChild(currentVideo);
      }

      onImageClick(item.Title);
      const imageUrl = require(`../assets/${item.CoverImage}`);
      document.body.style.backgroundImage = `url(${imageUrl})`;

      const videoContainer = document.createElement("div");
      videoContainer.style.position = "absolute";
      videoContainer.style.top = "0";
      videoContainer.style.left = "0";
      videoContainer.style.width = "100%";
      videoContainer.style.height = "100%";
      videoContainer.style.zIndex = "-1";

      const video = document.createElement("video");
      video.src = item.VideoUrl;
      video.controls = false;
      video.muted = true;
      video.style.width = "107%";
      video.style.height = "100%";
      video.style.display = "none"; //

      videoContainer.appendChild(video);
      document.body.appendChild(videoContainer);

      setCurrentVideo(videoContainer);
      localStorage.setItem("lastClickedItemId", item.Id);

      setTimeout(() => {
        video.style.display = "block";
        video.play();
      }, 2000);
    }
  };

  useEffect(() => {
    const lastClickedItemId = localStorage.getItem("lastClickedItemId");
    if (lastClickedItemId) {
      const lastClickedItem = TendingNow.find(
        (item) => item.Id === lastClickedItemId
      );
      if (lastClickedItem) {
        handleImageClick(lastClickedItem);
      }
    }
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      responsive={responsive}
      containerClass="carousel-container"
      itemClass="carousel-item"
      customTransition="transform 0.5s ease-in-out"
      className="container_carousel"
    >
      {TendingNow.map((item) => (
        <div
          key={item.Id}
          className="titleCarousel"
          onClick={() => handleImageClick(item)}
        >
          <img
            style={{
              height: "150px",
              width: "140px",
            }}
            src={require(`../assets/${item.CoverImage}`)}
            alt={item.TitleImage}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default MyCarousel;
