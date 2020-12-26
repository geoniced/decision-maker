import React, {useState} from "react";
import {getDecision} from "../../const";
import DecisionsList from "../decisions-list/decisions-list";
import ProsConsBlock from "../pros-cons-block/pros-cons-block";

const MainContent = () => {
  const [points, setPoints] = useState(0);

  const increasePoints = () => setPoints((prevPoints) => prevPoints + 1);
  const decreasePoints = () => setPoints((prevPoints) => prevPoints - 1);

  return (
    <main className="main-content">
      <div className="main-content__points points">
        <div className="points__total">{points} points</div>
        <div className="points__decision">{getDecision(points)}</div>

        <ProsConsBlock
          pros={[{
            description: `Good`,
            point: 5,
          }, {
            description: `Nice`,
            point: 2,
          }]}
          cons={[{
            description: `Bad`,
            point: 3,
          }]}
        />

        <button
          className="points__button points__button--decrease"
          type="button"
          onClick={decreasePoints}
        >
          dec
        </button>
        <button
          className="points__button points__button--increase"
          type="button"
          onClick={increasePoints}
        >
          inc
        </button>
      </div>


      <DecisionsList />
    </main>
  );
};

export default MainContent;
