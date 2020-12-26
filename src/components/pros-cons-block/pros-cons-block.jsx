import React from "react";
import PropTypes from "prop-types";
import ProsConsRow from "../pros-cons-row/pros-cons-row";

const ProsConsBlock = (props) => {
  const {pros, cons} = props;

  return (
    <div className="points__pros-cons pros-cons">
      <table className="pros-cons__table pros-cons__table--pros">
        <caption className="pros-cons__caption">Pros</caption>

        <tbody>
          {pros.map((item, i) => (
            <ProsConsRow
              key={`pros-item-${i}`}
              description={item.description}
              point={item.point}
            />
          ))}
        </tbody>
      </table>

      <table className="pros-cons__table pros-cons__table--cons">
        <caption className="pros-cons__caption">Cons</caption>

        <tbody>
          {cons.map((item, i) => (
            <ProsConsRow
              key={`cons-item-${i}`}
              description={item.description}
              point={item.point}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

ProsConsBlock.propTypes = {
  pros: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string.isRequired,
    point: PropTypes.number.isRequired,
  })).isRequired,
  cons: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string.isRequired,
    point: PropTypes.number.isRequired,
  })).isRequired,
};

export default ProsConsBlock;
