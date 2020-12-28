import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {countPoints, getDecision, TotalScoreClass} from "../../const";
import {getCons, getPros} from "../../store/selectors";
import DecisionsList from "../decisions-list/decisions-list";
import ProsConsBlock from "../pros-cons-block/pros-cons-block";

const getPointsByProsCons = (pros, cons) => {
  const prosTotal = pros.reduce(countPoints, 0);
  const consTotal = cons.reduce(countPoints, 0);

  return prosTotal - consTotal;
};

const getDecisionClassName = (points) => {
  let className = TotalScoreClass.DEFAULT;

  if (points > 0) {
    className = TotalScoreClass.POSITIVE;
  } else if (points < 0) {
    className = TotalScoreClass.NEGATIVE;
  }

  return className;
};

const MainContent = (props) => {
  const {pros, cons} = props;

  const pointsByProsCons = getPointsByProsCons(pros, cons);

  return (
    <main className="main-content">
      <div className="main-content__points points">
        <div className={`points__total-screen ${getDecisionClassName(pointsByProsCons)}`}>
          <p className="points__total">
            <strong>{pointsByProsCons} points</strong>
          </p>
          <p className="points__decision">{getDecision(pointsByProsCons)}</p>
        </div>

        <ProsConsBlock />
      </div>

      <DecisionsList />
    </main>
  );
};

MainContent.propTypes = {
  pros: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string.isRequired,
    point: PropTypes.number.isRequired,
  })).isRequired,
  cons: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string.isRequired,
    point: PropTypes.number.isRequired,
  })).isRequired,
};

const mapStateToProps = (state) => ({
  pros: getPros(state),
  cons: getCons(state),
});

export default connect(mapStateToProps)(MainContent);
