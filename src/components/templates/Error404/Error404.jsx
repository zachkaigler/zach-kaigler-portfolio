import React, { useState, useEffect, useMemo } from 'react'
import { delay } from '../../../helpers';
import './Error404.scss';

const Error404 = () => {
  const elements = useMemo(() => [
    { id: 1, value: '4' },
    { id: 2, value: '0' },
    { id: 3, value: '4' },
    { id: 4, value: 'Did you type something silly in the URL? 🤔' },
  ], []);

  const [renderStates, setRenderStates] = useState(elements.reduce((accum, val) => {
    return { ...accum, [val.id]: false };
  }, {}));

  const [renderMessage, setRenderMessage] = useState(false);

  useEffect(() => {
    const updateStates = async () => {
      for (let i = 0; i < elements.length; i++) {
        if (i > 0) {
          await delay(250);
        }
        setRenderStates((prev) => ({
          ...prev,
          [i]: true,
        })); 
      };
    };
    const initialDelay = setTimeout(() => updateStates(), 110);
    return () => clearTimeout(initialDelay);
  }, [elements.length]);

  useEffect(() => {
    let delay;

    if (renderStates[elements[2].id]) {
      delay = setTimeout(() => setRenderMessage(true), 250);
    };

    return () => clearTimeout(delay);
  }, [elements, renderStates])

  return (
    <div className='Error404__Page'>
      <div className='Error404__Main'>
        <div className='Error404__Header'>
          <span className={`${renderStates[elements[0].id] ? 'Loaded' : ''}`}>{elements[0].value}</span>
          <span className={`${renderStates[elements[1].id] ? 'Loaded' : ''}`}>{elements[1].value}</span>
          <span className={`${renderStates[elements[2].id] ? 'Loaded' : ''}`}>{elements[2].value}</span>
        </div>
        <div className={`Error404__SubHeader ${renderMessage ? 'Loaded' : ''}`}>
          <p>{elements[3].value}</p>
        </div>
      </div>
    </div>
  );
};

export default Error404;
