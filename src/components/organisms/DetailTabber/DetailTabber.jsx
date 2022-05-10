import React, { useState } from 'react';
import { useResponsiveLayout } from '../../../hooks';
import './DetailTabber.scss';

const DetailTabber = ({ data }) => {
  const [activeItem, setActiveItem] = useState(data[0]);
  const { isDesktop } = useResponsiveLayout(600);

  const tabs = data.map((item) => (
    <span
      key={item.company}
      className={`DetailTabber__Tab ${activeItem === item ? 'Active' : ''} ${data.indexOf(item) === 0 ? 'First' : ''} ${data.indexOf(item) === data.length - 1 ? 'Last' : ''}`}
      onClick={() => setActiveItem(item)}
    >
      {item.company}
    </span>
  ));

  return (
    <div className='DetailTabber'>
      <div className='DetailTabber__Header'>
        {tabs}
      </div>
      <div className='DetailTabber__Content'>
        <h2 className='DetailTabber__Company'>{activeItem.company}</h2>
        <div className='DetailTabber__TitleDate Italic'>
          <span className='DetailTabber__Title'>{activeItem.title}</span>
          {isDesktop && <span className='DetailTabber__Pipe'>|</span>}
          <span className='DetailTabber__Dates'>{activeItem.dates}</span>
        </div>
        <div className='DetailTabber__Details'>
          {activeItem.responsibilities.map((item) => (
            <div className='DetailTabber__Point' key={item}>
              <span>•</span>
              <span className='DetailTabber__Item'>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailTabber;
