import React from "react";
import PropTypes from "prop-types";
import DecisionInputRow from "../decision-input-row/decision-input-row";

const DecisionsList = (props) => {
  const {labelText, addCollectionItem} = props;
  return (
    <div className="main-content__decisions-list decisions-list">
      <form className="decisions-list__form">
        <DecisionInputRow labelText={labelText} addCollectionItem={addCollectionItem} />
      </form>
    </div>
  );
};

DecisionsList.propTypes = {
  labelText: PropTypes.string.isRequired,
  addCollectionItem: PropTypes.func.isRequired,
};

export default DecisionsList;
