import React, {createRef, Fragment} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {addConsItem, addProsItem} from "../../store/actions";

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
  };

  return (
    <Fragment>
      <input
        ref={decisionTextRef}
        className="decisions-list__text-input"
        type="text"
        placeholder="Decision text here..."
      />
      <input
        ref={decisionPointsRef}
        className="decisions-list__decision-value"
        type="number"
        defaultValue="0"
      />
      <button
        onClick={decisionAddHandler}
        className="decisions-list__add-button"
        type="button"
      >
        Add
      </button>
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
