import { useState } from 'react';
import Button from './Button';
import Count from './Count';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className='p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow'>
      <Count count={count} />

      <div className='flex space-x-3'>
        <Button type='danger' handler={handleDecrement}>
          Decrement
        </Button>
        <Button handler={handleIncrement}>Increment</Button>
      </div>
    </div>
  );
};

export default Counter;
