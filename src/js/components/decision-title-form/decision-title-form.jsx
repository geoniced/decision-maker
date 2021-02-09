import React from "react";

const DecisionTitleForm = () => {
  return (
    <form action="#" className="points points__decision-title-form decision-title-form">
      <label htmlFor="decision-title" className="decision-title-form__input-label">
        Enter a decision name
      </label>

      <input
        id="decision-title"
        name="decision-title"
        type="text"
        className="decision-title-form__input-title"
      />
    </form>
  );
};

export default DecisionTitleForm;
