const mathOperations = {
  '-': (firstValue, secondValue) => Number(firstValue) - Number(secondValue),
  '+': (firstValue, secondValue) => Number(firstValue) + Number(secondValue),
  '*': (firstValue, secondValue) => Number(firstValue) * Number(secondValue),
  '/': (firstValue, secondValue) => Number(firstValue) / Number(secondValue),
};
export const resolveMathOperation = (firstValue, operation, secondValue) => {
  console.log({ firstValue, operation, secondValue });
  return mathOperations[operation](firstValue, secondValue);
};
