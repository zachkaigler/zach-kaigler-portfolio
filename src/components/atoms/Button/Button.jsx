import React from 'react';
import './Button.scss';

const Button = ({ icon, onClick, isActive }) => (
  <button className={`Button ${isActive ? 'Active' : ''}`} onClick={onClick}>
    <div className='Button__Icon'>
      {icon}
    </div>
  </button>
);

export default Button;
