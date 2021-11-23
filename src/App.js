import React, { useMemo } from 'react';
import './style.css';
import useCalculator from './hooks/useCalculator';
import { KEYS } from './utils/consts';
import { KeyPad } from './components';

export default () => {
  const { handleButtonPress, value } = useCalculator();

  return (
    <div className={'wrapper'}>
      <div
        className={`calculatorScreen ${
          value.toString().length > 9 ? 'smallerFont' : null
        }`}
      >
        {value}
      </div>
      <KeyPad handleButtonPress={handleButtonPress} />
    </div>
  );
};
