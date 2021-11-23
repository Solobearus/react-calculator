import React from 'react';

export default ({ onClick, label, lastInRow, firstRow }) => {
  return (
    <div className={`buttonWrapper ${label === '0' ? 'zero' : null}`}>
      <button
        className={`button ${lastInRow ? 'lastInRow' : null} ${
          firstRow ? 'firstRow' : null
        } `}
        onClick={() => onClick(label)}
      >
        {label}
      </button>
    </div>
  );
};
