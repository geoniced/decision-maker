import React from "react";

const NewItemForm = () => {
  return (
    <form action="" className="new-item__form new-item-form">
      <label htmlFor="new-item-positive">New positive side</label>
      <input id="new-item-positive" type="text"/>

      <button type="button" className="new-item-form__add-button">Add</button>
    </form>
  );
};

export default NewItemForm;
