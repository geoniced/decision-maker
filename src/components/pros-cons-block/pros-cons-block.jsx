import React from "react";
import ProsConsRow from "../pros-cons-row/pros-cons-row";

const ProsConsBlock = () => {


  return (
    <div className="points__pros-cons pros-cons">
      <table className="pros-cons__table pros-cons__table--pros">
        <caption className="pros-cons__caption">Pros</caption>

        <tbody>
          <ProsConsRow
            description={`Good`}
            point={5}
          />
        </tbody>
      </table>

      <table className="pros-cons__table pros-cons__table--cons">
        <caption className="pros-cons__caption">Cons</caption>

        <tbody>
          <ProsConsRow
            description={`Bad`}
            point={2}
          />
        </tbody>
      </table>
    </div>
  );
};

export default ProsConsBlock;
