import React from 'react';
import './Button.scss';

const Button = ({ icon, onClick, isActive, highlight }) => (
  <button className={`Button ${isActive ? 'Active' : ''} ${highlight ? 'Highlight' : ''}`} onClick={onClick}>
    <div className='Button__Icon'>
      {icon}
    </div>
  </button>
);

export default Button;
