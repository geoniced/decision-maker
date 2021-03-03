import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {countPoints} from "../../const";
import {getCons, getPros} from "../../store/selectors";
import ProsConsBlock from "../pros-cons-block/pros-cons-block";
import DecisionTitleForm from "../decision-title-form/decision-title-form";
import PointsTotalScreen from "../points-total-screen/points-total-screen";

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
      <div className="main-content__wrapper">
        <section className="main-content__points points">
          <PointsTotalScreen pointsByProsCons={pointsByProsCons} />

          <DecisionTitleForm />

          <ProsConsBlock />
        </section>
      </div>
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
