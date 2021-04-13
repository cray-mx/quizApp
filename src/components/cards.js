import generalIcon from "../images/thought.svg";
import codingIcon from "../images/coding.svg";
import movieIcon from "../images/clapperboard.svg";
import sportsIcon from "../images/sports.svg";
import historyIcon from "../images/history-book.svg";
import geographyIcon from "../images/earth-globe.svg";
import animalIcon from "../images/lion.svg";
import politicsIcon from "../images/speech.svg";
import mathIcon from "../images/math.svg";
import vehicleIcon from "../images/sport-car.svg";
import gameIcon from "../images/game-controller.svg";
import scienceIcon from "../images/atom.svg";

export const cards = [
  {
    name: "General Knowledge",
    to: "/gk",
    image: generalIcon,
    category: 9,
  },
  {
    name: "Science",
    to: "/science",
    image: scienceIcon,
    category: 17,
  },

  {
    name: "Animals",
    to: "/animals",
    image: animalIcon,
    category: 27,
  },
  {
    name: "Geography",
    to: "/geography",
    image: geographyIcon,
    category: 22,
  },
  {
    name: "History",
    to: "/history",
    image: historyIcon,
    category: 23,
  },
  {
    name: "Movies",
    to: "/movies",
    image: movieIcon,
    category: 11,
  },
  {
    name: "Computer Science",
    to: "/cs",
    image: codingIcon,
    category: 18,
  },

  {
    name: "Politics",
    to: "/politics",
    image: politicsIcon,
    category: 24,
  },
  {
    name: "Mathematics",
    to: "/math",
    image: mathIcon,
    category: 19,
  },
  {
    name: "Vehicles",
    to: "/vehicles",
    image: vehicleIcon,
    category: 28,
  },
  {
    name: "Video Games",
    to: "/games",
    image: gameIcon,
    category: 15,
  },
  {
    name: "Sports",
    to: "/sports",
    image: sportsIcon,
    category: 21,
  },
];
