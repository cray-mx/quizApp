import axios from "axios";
import React, { useEffect, useState } from "react";

const Cs = () => {
  const [questions, setQuestions] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(
      "https://opentdb.com/api.php?amount=50&category=18"
    );
    setQuestions([...response.data.results]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="option">
      {questions.map((ques, index) => (
        <div key={index}>{ques.question}</div>
      ))}
    </div>
  );
};

export default Cs;
