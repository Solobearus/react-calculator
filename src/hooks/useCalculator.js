import { useState, useRef, useEffect, useCallback } from 'react';
import { ACTIONS } from '../utils/consts';
import { resolveMathOperation } from '../utils/utils';

export default () => {
  const [value, setValue] = useState(0);
  const currentMathOperation = useRef(null);
  const previousValue = useRef(0);
  const beforeErase = useRef(false);
  const dotExist = useRef(false);

  useEffect(() => {
    dotExist.current = !Number.isSafeInteger(value);
  }, [value]);

  const savePreviousValueAndOperation = (label) => {
    currentMathOperation.current = label;
    previousValue.current = value;
    console.log({ currentMathOperation, previousValue });
  };
  const resetPreviousValueAndOperation = () => {
    currentMathOperation.current = null;
    previousValue.current = 0;
    beforeErase.current = false;
  };
  const resolveEquation = () => {
    setValue(
      resolveMathOperation(
        previousValue.current,
        currentMathOperation.current,
        value
      )
    );
  };
  const onMathOperationButtonClick = (label) => {
    beforeErase.current = true;
    savePreviousValueAndOperation(label);
  };
  const onResolveButtonClick = () => {
    if (currentMathOperation.current) {
      resolveEquation();
      resetPreviousValueAndOperation();
    }
  };
  const onResetButtonClick = () => {
    setValue(0);
    resetPreviousValueAndOperation();
  };

  const onNumberButtonClick = (label) => {
    if (beforeErase.current) {
      setValue(Number(label));
      beforeErase.current = false;
    } else {
      setValue((value) => Number(`${value}${label}`));
    }
  };

  const onDotButtonClick = () => {
    if (dotExist.current) return;
    if (beforeErase.current) {
      setValue(`0.`);
      beforeErase.current = false;
    } else {
      setValue((value) => `${value}.`);
    }
  };

  const handleButtonPress = (label) => {
    switch (ACTIONS[label]) {
      case 'dot':
        onDotButtonClick();
        break;
      case 'number':
        onNumberButtonClick(label);
        break;
      case 'mathOperation':
        onMathOperationButtonClick(label);
        break;
      case 'result':
        onResolveButtonClick(label);
        break;
      case 'erase':
        onResetButtonClick();
        break;
    }
  };

  return {
    handleButtonPress,
    value,
  };
};
