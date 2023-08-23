import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  Nav,
  ProjectDetail,
  Error404,
} from '../..';
import { NavigationProvider, useNavigation } from '../../../hooks';
import './App.scss';

const Main = () => {
  const {
    isLoaded,
    navActions,
    activePage,
    nextBg,
    pages,
    animateOut,
    pageTransitionDelay,
  } = useNavigation();

  if (!isLoaded) return;

  return (
    <div className='App__Container'>
      <div className={`App__BgNext ${nextBg}`}/>
      <div
        className={`App__BgCurrent ${activePage} ${animateOut ? 'hide' : ''}`}
        style={{ transition: `opacity ${pageTransitionDelay + 500}ms ease` }}
      />
      <div className='App'>
        <Nav actions={navActions} activePage={activePage} />
        <div className='Main'>
          {pages[activePage].component}
        </div>
      </div>
    </div>
  );
};

const App = () => (
  <NavigationProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/work/:project" element={<ProjectDetail />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  </NavigationProvider>
);

export default App;
