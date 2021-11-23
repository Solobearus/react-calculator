import React from 'react';
import '../style.css';
import { KEYS } from '../utils/consts';
import { Row } from '../components';

const KeyPad = ({ handleButtonPress }) => {
  return KEYS.map((row, rowIndex) => (
    <Row
      key={rowIndex}
      columns={row}
      handleButtonPress={handleButtonPress}
      firstRow={rowIndex === 0}
    />
  ));
};

export default KeyPad;
