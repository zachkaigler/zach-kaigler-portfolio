import React, { useState, useEffect, useRef } from 'react';
import './Home.scss';

const Home = ({ animateOut }) => {
  const introRef = useRef();
  const [isLoaded, setIsLoaded] = useState(false);

  const generateIntro = () => {
    if (introRef.current) return;
    const dict = {
      1: 'Howdy.',
      2: 'Hi.',
      3: 'Yo.',
      4: 'Hey.',
      5: 'Heyo.',
      6: 'Hiya.',
      7: 'Eyy!',
      8: "Suh dude?",
      9: 'Hey there.',
      10: "What up?",
    };
    const num = Math.floor(Math.random() * Object.values(dict).length) + 1;
    introRef.current = dict[num];
  };

  useEffect(() => {
    generateIntro();
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return;

  return (
    <div className='Home__Page Float'>
      <h1 className={`Home__Lead vivify fadeInLeft ${animateOut  ? 'fadeOutRight' : ''}`}>{introRef.current}</h1>
      <h2 className={`Home__Sub Italic vivify fadeInLeft delay-100 ${animateOut ? 'fadeOutRight' : ''}`}>My name's Zach.</h2>
      <h2 className={`Home__Sub vivify fadeInLeft delay-200 ${animateOut ? 'fadeOutRight' : ''}`}>I'm a software engineer.</h2>
    </div>
  );
};

export default Home;
