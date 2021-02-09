import React, {createRef, Fragment} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {addConsItem, addProsItem} from "../../store/actions";

const InputDefault = {
  points: 0,
  text: ``,
};

const clearInputs = (pointsRef, textRef) => {
  pointsRef.current.value = InputDefault.points;
  textRef.current.value = InputDefault.text;
};

const DecisionInputRow = (props) => {
  const decisionPointsRef = createRef();
  const decisionTextRef = createRef();

  const {addProsItemActionHandler, addConsItemActionHandler} = props;

  const decisionAddHandler = () => {
    const decisionPoints = Number(decisionPointsRef.current.value);
    const decisionText = decisionTextRef.current.value;

    if (decisionPoints > 0) {
      addProsItemActionHandler(decisionText, decisionPoints);
    } else {
      addConsItemActionHandler(decisionText, decisionPoints * -1);
    }

    clearInputs(decisionPointsRef, decisionTextRef);
  };

  return (
    <Fragment>
      <fieldset className="decisions-list__fieldset">
        <legend className="decisions-list__fieldset-label">Enter your pros/cons. For cons use negative values.</legend>

        <input
          ref={decisionTextRef}
          className="decisions-list__text-input"
          type="text"
          id="decision-text"
          placeholder="Decision text here..."
        />
        <input
          ref={decisionPointsRef}
          className="decisions-list__decision-value"
          type="number"
          id="decision-value"
          defaultValue="0"
        />
        <button
          onClick={decisionAddHandler}
          className="decisions-list__add-button"
          type="button"
        >
          Add
        </button>
      </fieldset>
    </Fragment>
  );
};

DecisionInputRow.propTypes = {
  addProsItemActionHandler: PropTypes.func,
  addConsItemActionHandler: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  addProsItemActionHandler(description, points) {
    dispatch(addProsItem(description, points));
  },
  addConsItemActionHandler(description, points) {
    dispatch(addConsItem(description, points));
  },
});

export {DecisionInputRow};
export default connect(null, mapDispatchToProps)(DecisionInputRow);
