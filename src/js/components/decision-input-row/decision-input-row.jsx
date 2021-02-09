import React, {createRef, Fragment} from "react";
import PropTypes from "prop-types";

const InputDefault = {
  points: 0,
  text: ``,
};

const clearInputs = (textRef, pointsRef) => {
  textRef.current.value = InputDefault.text;
  pointsRef.current.value = InputDefault.points;
};

const DecisionInputRow = (props) => {
  const decisionPointsRef = createRef();
  const decisionTextRef = createRef();

  const {labelText, addCollectionItem} = props;

  const decisionAddHandler = () => {
    const decisionPoints = Number(decisionPointsRef.current.value);
    const decisionText = decisionTextRef.current.value;

    addCollectionItem(decisionText, decisionPoints);
    clearInputs(decisionTextRef, decisionPointsRef);
  };

  return (
    <Fragment>
      <fieldset className="decisions-list__fieldset">
        <legend className="decisions-list__fieldset-label">{labelText}</legend>

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
          min="0"
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
  labelText: PropTypes.string.isRequired,
  addCollectionItem: PropTypes.func,
};

export {DecisionInputRow};
export default DecisionInputRow;
