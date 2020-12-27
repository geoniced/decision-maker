import {deleteItem, extend, mockCons, mockPros} from "../const";
import {ActionType} from "./actions";

const initialState = {
  pros: mockPros,
  cons: mockCons,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD_PROS_ITEM:
      const extendedPros = state.pros.slice();
      extendedPros.push(action.payload);

      return extend(state, {
        pros: extendedPros,
      });
    case ActionType.ADD_CONS_ITEM:
      const extendedCons = state.cons.slice();
      extendedCons.push(action.payload);

      return extend(state, {
        cons: extendedCons,
      });
    case ActionType.DELETE_PROS_ITEM:
      const prosWithDeletedItem = deleteItem(state.pros, action.payload);

      return extend(state, {
        pros: prosWithDeletedItem,
      });
    case ActionType.DELETE_CONS_ITEM:
      const consWithDeletedItem = deleteItem(state.cons, action.payload);

      return extend(state, {
        cons: consWithDeletedItem,
      });
  }

  return state;
};

export {reducer};
