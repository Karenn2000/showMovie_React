import React from "react";
import "./Css/style.css";
import IconButton from "../IconButton";
import SearchIcon from "../../assets/icons/ICON - Search.png";
import HomeIcon from "../../assets/icons/Home.png";
import TvIcon from "../../assets/icons/Group 47.png";
import MovieIcon from "../../assets/icons/Group 53.png";
import GenresIcon from "../../assets/icons/Group 54.png";
import WatchIcon from "../../assets/icons/Group 56.png";
import Avatar from "../../assets/icons/Sung-Gi-Hoon.png";

const SideBar = () => {
  return (
    <main className="cd__main">
      <nav className="main-menu">
        <div className="settings">
          <img className="avatar" src={Avatar} alt="User Avatar" />
          <h3>Daniel</h3>
        </div>
        <ul>
          <li>
            <a>
              <IconButton icon={SearchIcon} title={"Search"} />
            </a>
          </li>
          <li>
            <a>
              <IconButton className="asd" icon={HomeIcon} title={"Home"} />
            </a>
          </li>
          <li>
            <a>
              <IconButton icon={TvIcon} title={"TV Shows"} />
            </a>
          </li>
          <li>
            <a>
              <IconButton icon={MovieIcon} title={"Movie"} />
            </a>
          </li>
          <li>
            <a>
              <IconButton icon={GenresIcon} title={"Genres"} />
            </a>
          </li>
          <li>
            <a>
              <IconButton icon={WatchIcon} title={"Watch Later"} />
            </a>
          </li>
          <div className="container_settings">
            <span>Language</span>
            <span>get help</span>
            <span>Exit</span>
          </div>
        </ul>
      </nav>
    </main>
  );
};

export default SideBar;
