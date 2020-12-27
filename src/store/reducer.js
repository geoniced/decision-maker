import {extend, mockCons, mockPros} from "../const";
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
  }

  return state;
};

export {reducer};
