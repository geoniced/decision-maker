import React from "react";
import PropTypes from "prop-types";

const ProsConsRow = (props) => {
  const {description, point} = props;

  return (
    <tr className="pros-cons__row">
      <td className="pros-cons__cell pros-cons__cell--description">{description}</td>
      <td className="pros-cons__cell pros-cons__cell--point">{point}</td>
    </tr>
  );
};

ProsConsRow.propTypes = {
  description: PropTypes.string.isRequired,
  point: PropTypes.number.isRequired,
};

export default ProsConsRow;
