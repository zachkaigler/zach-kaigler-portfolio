import React, { useState, createContext, useContext, useEffect, useRef } from 'react';
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
  Home,
  Me,
  Contact,
  Work,
  Writing,
} from '../../components';
import resume from '../../documents/kaigler_resume_2025.pdf';
import { useResponsiveLayout } from '../useResponsiveLayout';

const NavigationContext = createContext(undefined);

export const NavigationProvider = ({ children }) => {
  const [animateOut, setAnimateOut] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const iconRef = useRef();

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
  }, [setIsLoaded]);

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
    Experience: {
      label: 'Resume',
      destination: resume,
      icon: <FontAwesomeIcon icon={faBriefcase} />,
    },
  };

  const [activePage, setActivePage] = useState(pages.Home.label);
  const [nextBg, setNextBg] = useState(pages.Home.label);

  return (
    <NavigationContext.Provider
      value={{
        pages,
        animateOut,
        setAnimateOut,
        activePage,
        setActivePage,
        nextBg,
        setNextBg,
        isLoaded,
        setIsLoaded,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);

  if (!context) throw new Error('useNavigation must be called within a NavigationProvider');

  const {
    pages,
    animateOut,
    setAnimateOut,
    activePage,
    setActivePage,
    nextBg,
    setNextBg,
    isLoaded,
    setIsLoaded,
  } = context;

  const { isDesktop } = useResponsiveLayout(600);

  const pageTransitionDelay = isDesktop ? 700 : 600;
  const timers = [];

  const navActions = Object.values(pages).map((page, i) => ({
    ...page,
    id: i,
    onClick: page.destination
      ? () => window.open(page.destination, '_blank')
      : () => {
      if (activePage === page.label) return;
      setNextBg(page.label);
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

  return {
    pages,
    animateOut,
    setAnimateOut,
    activePage,
    setActivePage,
    nextBg,
    isLoaded,
    setIsLoaded,
    navActions,
    pageTransitionDelay,
  };
};
