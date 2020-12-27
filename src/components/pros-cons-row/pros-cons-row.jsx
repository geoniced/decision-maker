import React from "react";
import PropTypes from "prop-types";

const ProsConsRow = (props) => {
  const {description, point, onDelete} = props;

  return (
    <tr className="pros-cons__row">
      <td className="pros-cons__cell pros-cons__cell--description">{description}</td>
      <td className="pros-cons__cell pros-cons__cell--point">{point}</td>
      <td className="pros-cons__cell pros-cons__cell--delete">
        <button
          onClick={onDelete}
          className="pros-cons__delete-button"
        >
          <span className="visually-hidden">
            del
          </span>
        </button>
      </td>
    </tr>
  );
};

ProsConsRow.propTypes = {
  description: PropTypes.string.isRequired,
  point: PropTypes.number.isRequired,
  onDelete: PropTypes.func,
};

export default ProsConsRow;
