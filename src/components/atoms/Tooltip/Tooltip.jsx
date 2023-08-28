import React, { useState } from 'react';
import './Tooltip.scss';

const Tooltip = ({ children, label, orientation = 'right' }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={`Tooltip__Container ${orientation}`}>
      <div
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
      </div>
      <div className={`Tooltip__Inner ${orientation} ${isHovered ? 'Visible' : ''}`}>
        {orientation === 'right' && <div className={`Tooltip__PointLeft ${isHovered ? 'Visible' : ''}`} />}
        {orientation === 'bottom' && <div className={`Tooltip__PointUp ${isHovered ? 'Visible' : ''}`} />}
        <div className={`Tooltip ${orientation} ${isHovered ? 'Visible' : ''}`}>
          {label}
        </div>
        {orientation === 'top' && <div className={`Tooltip__PointDown ${isHovered ? 'Visible' : ''}`} />}
      </div>
    </div>
  );
};

export default Tooltip;
