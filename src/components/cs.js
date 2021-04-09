import axios from "axios";
import React, { useEffect, useState } from "react";

const Cs = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    const response = await axios.get(
      "https://opentdb.com/api.php?amount=50&category=18"
    );
    setQuestions(response.data.results);
    console.log(response.data);
    console.log(questions);
  };

  return <div></div>;
};

export default Cs;
