import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { decode } from "he";
import { cards } from "./cards";
import { PointContext } from "./context";

const Question = ({ match }) => {
  const [points, setPoints] = useContext(PointContext);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [random, setRandom] = useState([]);

  const fetchData = async () => {
    const id = match.params.id;
    const card = cards.find((card) => card.to === "/" + id);
    const response = await axios.get(
      `https://opentdb.com/api.php?amount=20&category=${card.category}&type=multiple`
    );
    setLoading(false);
    setQuestions([...response.data.results]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (questions.length > 1) {
      const { correct_answer, incorrect_answers } = questions[currentPage - 1];
      const shuffledOptions = [correct_answer, ...incorrect_answers].sort(
        () => Math.random() - 0.5
      );
      setRandom([...shuffledOptions]);
    }
  }, [questions, currentPage]);

  useEffect(() => {
    localStorage.setItem("points", JSON.stringify(points));
  }, [points]);

  const clickHandler = (e) => {
    const buttons = document.getElementsByClassName("option-btns");
    let flag = false;
    for (let i = 0; i < 4; i++) {
      if (buttons[i].style.background === "green") {
        flag = true;
      }
    }
    if (
      e.target.value === questions[currentPage - 1].correct_answer &&
      e.target.style.background !== "green" &&
      e.target.style.background !== "red"
    ) {
      e.target.style.background = "green";
      e.target.style.color = "white";
      setPoints((points) => points + 1);
    } else if (
      e.target.style.background !== "red" &&
      e.target.style.background !== "green" &&
      !flag
    ) {
      e.target.style.background = "red";
      e.target.style.color = "white";
      setPoints((points) => points - 1);
    } else {
      return;
    }
  };

  const changeStyles = () => {
    let options = document.getElementsByClassName("option-btns");
    for (let i = 0; i < 4; i++) {
      options[i].style.background = "white";
      options[i].style.color = "black";
    }
  };

  return !loading && questions.length > 1 ? (
    <div className="question-card">
      <p className="question">{decode(questions[currentPage - 1].question)}</p>
      <div className="options">
        {random.map((rand, index) => (
          <input
            key={index}
            onClick={(e) => clickHandler(e)}
            type="button"
            value={decode(rand)}
            className="option-btns"
          />
        ))}
      </div>
      <div className="move">
        <button
          className="prev"
          onClick={() => {
            changeStyles();
            setCurrentPage((page) => page - 1);
          }}
          style={{ display: currentPage === 1 ? "none" : "inline-block" }}
        >
          Prev
        </button>
        <button
          className="next"
          onClick={() => {
            changeStyles();
            setCurrentPage((page) => page + 1);
          }}
          style={{ display: currentPage === 20 ? "none" : "inline-block" }}
        >
          Next
        </button>
      </div>
    </div>
  ) : (
    <div className="loading">
      <h2>Loading...</h2>
    </div>
  );
};

export default Question;
