import { Fragment } from "react";
import movieIcon from "../images/video.svg";
import codingIcon from "../images/coding.svg";
import sportsIcon from "../images/sports.svg";
import historyIcon from "../images/history-book.svg";
import geographyIcon from "../images/earth-globe.svg";
import animalIcon from "../images/lion.svg";
import politicsIcon from "../images/speech.svg";
import mathIcon from "../images/math.svg";
import vehicleIcon from "../images/sport-car.svg";
import gameIcon from "../images/game-controller.svg";
import scienceIcon from "../images/atom.svg";
import generalIcon from "../images/thought.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Fragment>
      <div className="categories">
        <Link className="card" to="/gk">
          <img src={generalIcon} alt="" />
          <p>General Knowledge</p>
        </Link>
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
        <Link className="card" to="/politics">
          <img src={politicsIcon} alt="" />
          <p>Politics</p>
        </Link>
        <Link className="card" to="/math">
          <img src={mathIcon} alt="" />
          <p>Mathematics</p>
        </Link>
        <Link className="card" to="/vehicles">
          <img src={vehicleIcon} alt="" />
          <p>Vehicles</p>
        </Link>
        <Link className="card" to="/games">
          <img src={gameIcon} alt="" />
          <p>Video Games</p>
        </Link>
        <Link className="card" to="/science">
          <img src={scienceIcon} alt="" />
          <p>Science</p>
        </Link>
      </div>
    </Fragment>
  );
};

export default Home;
