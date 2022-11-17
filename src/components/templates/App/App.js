import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faUser,
  faUserAstronaut,
  faUserNinja,
  faUserTie,
  faBriefcase,
  faLaptopCode,
  faPencil,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
  Nav,
  Home,
  Me,
  Contact,
  Experience,
  Work,
  Writing,
  ProjectDetail,
} from '../../../components';
import { useResponsiveLayout } from '../../../hooks';
import './App.scss';

const App = () => {
  const iconRef = useRef();
  const [animateOut, setAnimateOut] = useState(false);
  const { isDesktop } = useResponsiveLayout(600);

  const pages = {
    Home: {
      label: 'Home',
      component: <Home animateOut={animateOut} />,
      icon: <FontAwesomeIcon icon={faHouse} />,
    },
    Me: {
      label: 'Me',
      component: <Me animateOut={animateOut} />,
      icon: <FontAwesomeIcon icon={iconRef.current} />,
    },
    Experience: {
      label: 'Experience',
      component: <Experience animateOut={animateOut} />,
      icon: <FontAwesomeIcon icon={faBriefcase} />,
    },
    Work: {
      label: 'Work',
      component: <Work animateOut={animateOut} />,
      icon: <FontAwesomeIcon icon={faLaptopCode} />,
    },
    Writing: {
      label: 'Writing',
      component: <Writing animateOut={animateOut} />,
      icon: <FontAwesomeIcon icon={faPencil} />,
    },
    Contact: {
      label: 'Contact',
      component:  <Contact animateOut={animateOut} />,
      icon: <FontAwesomeIcon icon={faEnvelope} />,
    },
  };

  const [activePage, setActivePage] = useState(pages.Home.label);
  const [isLoaded, setIsLoaded] = useState(false);

  const generateRandomIcon = () => {
    if (iconRef.current) return;
    const dict = {
      1: faUser,
      2: faUserAstronaut,
      3: faUserNinja,
      4: faUserTie,
    };
    const num = Math.floor(Math.random() * Object.values(dict).length) + 1;
    iconRef.current = dict[num];
  };

  useEffect(() => {
    generateRandomIcon();
    setIsLoaded(true);
  }, []);

  const pageTransitionDelay = isDesktop ? 700 : 600;
  const timers = [];

  const navActions = Object.values(pages).map((page, i) => ({
    ...page,
    id: i,
    onClick: () => {
      if (activePage === page.label) return;
      timers.forEach((timer) => {
        clearTimeout(timer);
      });
      const timer1 = setTimeout(() => {
        setActivePage(page.label);
      }, pageTransitionDelay);
      timers.push(timer1);
      setAnimateOut(true);
      const timer2 = setTimeout(() => {
        setAnimateOut(false);
      }, pageTransitionDelay);
      timers.push(timer2);
    },
  }));

  const Main = () => (
    <div className={`App ${activePage}`}>
      <Nav actions={navActions} activePage={activePage} />
      <div className='Main'>
        {pages[activePage].component}
      </div>
    </div>
  );

  if (!isLoaded) return;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/work/:project" element={<ProjectDetail />} />
        {/* TODO: fun 404 page */}
        <Route path="/*" element={<>not found</>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
