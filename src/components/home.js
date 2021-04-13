import { Fragment } from "react";
import { Link } from "react-router-dom";
import { cards } from "./cards";

const Home = () => {
  return (
    <Fragment>
      <div className="categories">
        {cards.map((card, index) => (
          <Link className="card" to={card.to} key={index}>
            <img src={card.image} alt="" />
            <p>{card.name}</p>
          </Link>
        ))}
      </div>
    </Fragment>
  );
};

export default Home;
