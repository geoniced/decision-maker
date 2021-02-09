import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getCons, getPros} from "../../store/selectors";
import {addConsItem, addProsItem, deleteConsItem, deleteProsItem} from "../../store/actions";
import DecisionsList from "../decisions-list/decisions-list";
import ProsConsTable from "../pros-cons-table/pros-cons-table";
import {DecisionPartText, LabelText} from "../../const";

const ProsConsBlock = (props) => {
  const {
    pros,
    cons,
    addProsItemActionHandler,
    addConsItemActionHandler,
    deleteProsItemAction,
    deleteConsItemAction
  } = props;

  return (
    <div className="points__pros-cons pros-cons">
      <div className="pros-cons__wrapper">
        <ProsConsTable
          title={DecisionPartText.PROS}
          collection={pros}
          deleteCollectionItem={deleteProsItemAction}
        />

        <DecisionsList
          labelText={LabelText.PROS}
          addCollectionItem={addProsItemActionHandler}
        />
      </div>

      <div className="pros-cons__wrapper">
        <ProsConsTable
          title={DecisionPartText.CONS}
          collection={cons}
          deleteCollectionItem={deleteConsItemAction}
        />

        <DecisionsList
          labelText={LabelText.CONS}
          addCollectionItem={addConsItemActionHandler}
        />
      </div>

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
  addProsItemActionHandler: PropTypes.func,
  addConsItemActionHandler: PropTypes.func,
  deleteProsItemAction: PropTypes.func,
  deleteConsItemAction: PropTypes.func,
};

const mapStateToProps = (state) => ({
  pros: getPros(state),
  cons: getCons(state),
});

const mapDispatchToProps = (dispatch) => ({
  addProsItemActionHandler(description, points) {
    dispatch(addProsItem(description, points));
  },
  addConsItemActionHandler(description, points) {
    dispatch(addConsItem(description, points));
  },
  deleteProsItemAction(item) {
    dispatch(deleteProsItem(item));
  },
  deleteConsItemAction(item) {
    dispatch(deleteConsItem(item));
  },
});

export {ProsConsBlock};
export default connect(mapStateToProps, mapDispatchToProps)(ProsConsBlock);
