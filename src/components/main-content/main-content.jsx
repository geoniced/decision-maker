import React from "react";
import NewItemForm from "../new-item-form/new-item-form";

const MainContent = () => {
  return (
    <main className="main-content">
      <section className="main-content__section new-item">
        <NewItemForm />

        <NewItemForm />
      </section>
    </main>
  );
};

export default MainContent;
