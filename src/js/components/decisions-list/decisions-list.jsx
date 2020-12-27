import React from "react";
import DecisionInputRow from "../decision-input-row/decision-input-row";

const DecisionsList = () => {
  return (
    <div className="main-content__decisions-list decisions-list">
      <form className="decisions-list__form">
        <DecisionInputRow />
      </form>
    </div>
  );
};

export default DecisionsList;
