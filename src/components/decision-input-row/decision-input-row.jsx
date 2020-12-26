import React, {Fragment} from "react";

const DecisionInputRow = () => {
  return (
    <Fragment>
      <input
        className="decisions-list__text-input"
        type="text"
        placeholder="Decision text here..."
      />
      <input
        className="decisions-list__decision-value"
        type="number"
        defaultValue="0"
      />
      <button
        className="decisions-list__add-button"
        type="button"
      >
        Add
      </button>
    </Fragment>
  );
};

export default DecisionInputRow;
