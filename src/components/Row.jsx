import React from 'react';
import { Button } from '.';

export default ({ columns, handleButtonPress, firstRow }) => {
  return (
    <div
      className={`row`}
      style={{
        width: '100%',
        display: 'flex',
      }}
    >
      {columns.map((label, columnIndex) => (
        <Button
          key={columnIndex}
          onClick={handleButtonPress}
          label={label}
          firstRow={firstRow}
          lastInRow={columnIndex === columns.length - 1}
        ></Button>
      ))}
    </div>
  );
};
