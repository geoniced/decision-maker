import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {countPoints, getDecision} from "../../const";
import {getCons, getPros} from "../../store/selectors";
import DecisionsList from "../decisions-list/decisions-list";
import ProsConsBlock from "../pros-cons-block/pros-cons-block";

const getPointsByProsCons = (pros, cons) => {
  const prosTotal = pros.reduce(countPoints, 0);
  const consTotal = cons.reduce(countPoints, 0);

  return prosTotal - consTotal;
};

const MainContent = (props) => {
  const {pros, cons} = props;

  const pointsByProsCons = getPointsByProsCons(pros, cons);

  return (
    <main className="main-content">
      <div className="main-content__points points">
        <div className="points__total">{pointsByProsCons} points</div>
        <div className="points__decision">{getDecision(pointsByProsCons)}</div>

        <ProsConsBlock
          pros={pros}
          cons={cons}
        />
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
