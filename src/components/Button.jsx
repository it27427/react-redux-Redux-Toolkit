import React from 'react';

const Button = ({ children, type, handler }) => {
  const btnClasses =
    type === 'danger'
      ? 'bg-red-500 text-white px-3 py-2 rounded shadow'
      : 'bg-green-500 text-white px-3 py-2 rounded shadow';

  return (
    <button type={type} className={btnClasses} onClick={handler}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: 'button',
};

export default Button;
