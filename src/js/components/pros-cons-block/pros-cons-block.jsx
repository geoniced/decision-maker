import React from "react";
import PropTypes from "prop-types";
import ProsConsRow from "../pros-cons-row/pros-cons-row";
import {connect} from "react-redux";
import {getCons, getPros} from "../../store/selectors";
import {deleteConsItem, deleteProsItem} from "../../store/actions";

const ProsConsBlock = (props) => {
  const {pros, cons, deleteProsItemAction, deleteConsItemAction} = props;

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
              onDelete={() => {
                deleteProsItemAction(item);
              }}
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
              onDelete={() => {
                deleteConsItemAction(item);
              }}
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
  deleteProsItemAction: PropTypes.func,
  deleteConsItemAction: PropTypes.func,
};

const mapStateToProps = (state) => ({
  pros: getPros(state),
  cons: getCons(state),
});

const mapDispatchToProps = (dispatch) => ({
  deleteProsItemAction(item) {
    dispatch(deleteProsItem(item));
  },
  deleteConsItemAction(item) {
    dispatch(deleteConsItem(item));
  },
});

export {ProsConsBlock};
export default connect(mapStateToProps, mapDispatchToProps)(ProsConsBlock);
