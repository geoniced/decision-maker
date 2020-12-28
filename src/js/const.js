export const DecisionType = {
  POSITIVE: `POSITIVE`,
  NEGATIVE: `NEGATIVE`,
  NEUTRAL: `NEUTRAL`,
};

export const DecisionTextMap = {
  [DecisionType.POSITIVE]: `Your decision is positive, you should do that!`,
  [DecisionType.NEGATIVE]: `Your decision has some flaws! You would better not to do it!`,
  [DecisionType.NEUTRAL]: `Your decision has no cons and no pros! It would not make your life easier nor it make it harder`,
};

export const TotalScoreClass = {
  DEFAULT: ``,
  POSITIVE: `points__total-screen--positive`,
  NEGATIVE: `points__total-screen--negative`,
};

export const getDecisionType = (points) => {
  if (points > 0) {
    return DecisionType.POSITIVE;
  } else if (points < 0) {
    return DecisionType.NEGATIVE;
  }

  return DecisionType.NEUTRAL;
};

export const getDecision = (points) => {
  return DecisionTextMap[getDecisionType(points)];
};

export const countPoints = (prevValue, item) => {
  return prevValue + item.point;
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const mockPros = [{
  description: `Good`,
  point: 5,
}, {
  description: `Nice`,
  point: 2,
}];

export const mockCons = [{
  description: `Bad`,
  point: 3,
}];

export const deleteItem = (array, deletableItem) => {
  const arrayCopy = array.slice();
  const deleteItemIndex = arrayCopy.findIndex((item) => item === deletableItem);
  const arrayWithoutDeletedItem = [
    ...arrayCopy.slice(0, deleteItemIndex),
    ...arrayCopy.slice(deleteItemIndex + 1)
  ];

  return arrayWithoutDeletedItem;
};
