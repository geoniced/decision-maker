
export const ActionType = {
  ADD_PROS_ITEM: `ADD_PROS_ITEM`,
  ADD_CONS_ITEM: `ADD_CONS_ITEM`,
};

export const addProsItem = (description, point) => ({
  type: ActionType.ADD_PROS_ITEM,
  payload: {
    description,
    point,
  },
});

export const addConsItem = (description, point) => ({
  type: ActionType.ADD_CONS_ITEM,
  payload: {
    description,
    point,
  },
});

