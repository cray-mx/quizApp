import { Fragment } from "react";
import movieIcon from "../images/video.svg";
import codingIcon from "../images/coding.svg";
import sportsIcon from "../images/sports.svg";
import historyIcon from "../images/history-book.svg";
import geographyIcon from "../images/earth-globe.svg";
import animalIcon from "../images/lion.svg";
import "../css/main.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Fragment>
      <div className="categories">
        <div className="container">
          <Link className="card" to="/cs">
            <img src={codingIcon} alt="" />
            <p>Computer Science</p>
          </Link>
          <Link className="card" to="/animals">
            <img src={animalIcon} alt="" />
            <p>Animals</p>
          </Link>
          <Link className="card" to="/geography">
            <img src={geographyIcon} alt="" />
            <p>Geography</p>
          </Link>
          <Link className="card" to="/history">
            <img src={historyIcon} alt="" />
            <p>History</p>
          </Link>
          <Link className="card" to="/movies">
            <img src={movieIcon} alt="" />
            <p>Movies</p>
          </Link>
          <Link className="card" to="/sports">
            <img src={sportsIcon} alt="" />
            <p>Sports</p>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
