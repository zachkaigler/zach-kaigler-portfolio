import React, { useState, useEffect } from 'react';
import { Button, Tooltip } from '../../../components';
import { useResponsiveLayout } from '../../../hooks';
import { delay } from '../../../helpers';
import './Nav.scss';

const Nav = ({ actions, activePage }) => {
  const [renderStates, setRenderStates] = useState(actions.reduce((accum, val) => {
    return {...accum, [val.id]: false};
  }, {}));

  const { isDesktop } = useResponsiveLayout(600);

  useEffect(() => {
    const updateStates = async () => {
      for (let i = 0; i < actions.length; i++) {
        if (i > 0) {
          await delay(110);
        }
        setRenderStates((prev) => ({
          ...prev,
          [i]: true,
        })); 
      };
    };
    const initialDelay = setTimeout(() => updateStates(), 1000);
    return () => clearTimeout(initialDelay);
  }, [actions.length]);

  return (
    <div className='Nav'>
      {actions.map((act) => (
        <div className={`Nav__Button ${renderStates[act.id] ? 'Visible' : ''}`} key={act.id}>
          <Tooltip label={act.label} orientation={isDesktop ? 'right' : 'bottom'}>
            <Button icon={act.icon} onClick={act.onClick} orientation='right' isActive={act.label === activePage} />
          </Tooltip>
        </div>
      ))}
    </div>
  );
};

export default Nav;
