import React from "react";
import PropTypes from "prop-types";
import {getDecision, TotalScoreClass} from "../../const";

const getDecisionClassName = (points) => {
  let className = TotalScoreClass.DEFAULT;

  if (points > 0) {
    className = TotalScoreClass.POSITIVE;
  } else if (points < 0) {
    className = TotalScoreClass.NEGATIVE;
  }

  return className;
};

const PointsTotalScreen = (props) => {
  const {pointsByProsCons} = props;
  return (
    <div className={`points__total-screen ${getDecisionClassName(pointsByProsCons)}`}>
      <p className="points__total">
        <strong>{pointsByProsCons} points</strong>
      </p>
      <p className="points__decision">{getDecision(pointsByProsCons)}</p>
    </div>
  );
};

PointsTotalScreen.propTypes = {
  pointsByProsCons: PropTypes.number.isRequired,
};

export default PointsTotalScreen;
