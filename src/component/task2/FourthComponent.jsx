import React from 'react'
import { useState } from 'react';

export default function FourthComponent() {
  const [count1, setCount1] = useState(0)
const addCount = () => {
  setCount1((prev) => prev + 1);
};
const removeCount = () => {
  setCount1((prev) => prev - 1);
};
  return (
    <div className="B_component">
      <h1>B component</h1>
      <div>
        <h1>Count: {count1}</h1>
        <button className='btn btn-info' onClick={addCount}>+</button>
        <button className='btn btn-info' onClick={removeCount}>-</button>
      </div>
    </div>
  );
}
