import React from "react";
import PropTypes from "prop-types";
import ProsConsRow from "../pros-cons-row/pros-cons-row";

const ProsConsTable = (props) => {
  const {title, collection, deleteCollectionItem} = props;
  return (
    <table className="pros-cons__table pros-cons__table--pros">
      <caption className="pros-cons__caption">{title}</caption>

      <tbody>
        {collection.map((item, i) => (
          <ProsConsRow
            key={`pros-item-${i}`}
            description={item.description}
            point={item.point}
            onDelete={() => {
              deleteCollectionItem(item);
            }}
          />
        ))}
      </tbody>
    </table>
  );
};

ProsConsTable.propTypes = {
  title: PropTypes.string.isRequired,
  collection: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string.isRequired,
    point: PropTypes.number.isRequired,
  })),
  deleteCollectionItem: PropTypes.func.isRequired,
};

export default ProsConsTable;
