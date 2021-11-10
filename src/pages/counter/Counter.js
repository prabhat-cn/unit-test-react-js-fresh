import React, { useState, Fragment } from 'react';
import Table from '../table/Table';

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [error, setError] = useState(false);

  const decrement = () => {
    if (count <= 0) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 1000);
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };
  return (
    <Fragment>
      <div data-test="component-counter" className="counter-app">
        <h1 data-test="title-header">Click Counter</h1>
        <h1 data-test="counter-display">
          Counted Value &nbsp;{' '}
          <span data-test="count" className={`click-count-${count}`}>
            {count}
          </span>
        </h1>
        <p>
          {error && (
            <span style={{ color: 'yellow' }}>
              The value can not decrement than 0
            </span>
          )}
        </p>
        <button
          data-test="increment-button"
          onClick={() => {
            setError(false);
            setCount(count + 1);
          }}
        >
          Increment Counter
        </button>
        &nbsp; &nbsp; &nbsp;
        <button data-test="decrement-button" onClick={decrement}>
          Decrement Counter
        </button>
      </div>
      <br />
      <h3>Table Value To Check 'dive()'</h3>
      <Table />
    </Fragment>
  );
};
