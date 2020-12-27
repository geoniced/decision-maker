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

