import React, { useState, useEffect } from 'react';
import { projects } from './Work.constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { ProjectCard } from '../../molecules';
import { useResponsiveLayout } from '../../../hooks';
import { Modal, ProjectModal } from '..';
import './Work.scss';

const Work = ({ animateOut }) => {
  const { isDesktop } = useResponsiveLayout(900);

  const [activeProject, setActiveProject] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  const [page, setPage] = useState(1);
  const cardLimit = isDesktop ? 6 : 3;
  const displayArr = projects.slice(page === 1 ? 0 : (cardLimit * page) - cardLimit, cardLimit * page);

  const [fadeOut, setFadeOut] = useState(null);

  useEffect(() => {
    if (displayArr.length === 0) {
      setPage(page - 1);
    }
  }, [displayArr, page]);

  const timers = [];

  const handleNextPage = () => {
    timers.forEach((timer) => clearTimeout(timer));
    const timer1 = setTimeout(() => {
      setFadeOut(false);
    }, 500);
    timers.push(timer1);
    setFadeOut(true);
    const timer2 = setTimeout(() => {
      setPage(page + 1);
    }, 500);
    timers.push(timer2);
  };

  const handlePrevPage = () => {
    timers.forEach((timer) => clearTimeout(timer));
    const timer1 = setTimeout(() => {
      setFadeOut(false);
    }, 500);
    timers.push(timer1);
    setFadeOut(true);
    const timer2 = setTimeout(() => {
      setPage(page - 1);
    }, 500);
    timers.push(timer2);
  };

  const handleCardClick = (proj) => {
    setActiveProject(proj);
    setModalOpen(true);
  };

  const handleCloseModal = () => setModalOpen(false);

  return (
    <>
      {modalOpen && (
        <Modal handleClose={handleCloseModal}>
          <ProjectModal project={activeProject} handleClose={handleCloseModal} />
        </Modal>
      )}
      <div className='Work__Page Float'>
        <div className={`Work__CardContainer vivify ${fadeOut === null ? 'fadeInLeft' : ''} ${animateOut  ? 'fadeOutRight' : ''} ${fadeOut ? 'fadeOut' : 'fadeIn'}`}>
          {displayArr.map((proj) => <ProjectCard project={proj} key={proj.name} handleClick={() => handleCardClick(proj)} />)}
        </div>
        {!(displayArr.length >= projects.length) && (
          <div className={`Work__NavContainer vivify fadeInLeft delay-100 ${animateOut  ? 'fadeOutRight' : ''}`}>
            {page > 1 && (
              <div className='Work__Prev' onClick={handlePrevPage}><FontAwesomeIcon icon={faChevronLeft} /></div>
            )}
            {displayArr[displayArr.length - 1] !== projects[projects.length - 1] && (
              <div className='Work__Next' onClick={handleNextPage}><FontAwesomeIcon icon={faChevronRight} /></div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Work;
