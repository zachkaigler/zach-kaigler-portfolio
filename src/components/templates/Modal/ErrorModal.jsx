import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import './ProjectModal.scss';
import './ErrorModal.scss';

const ErrorModal = ({ handleClose }) => {
  return (
    <div className='ProjectModal vivify fadeInTop'>
      <div className='ProjectModal__Close' onClick={handleClose}><FontAwesomeIcon icon={faX} /></div>
      <div className='ErrorModal__Header'>Oops!</div>
      <div className='ErrorModal__Body'>Something went wonky with that request. Feel free to reach out directly at <a href='mailto:zjkaig@gmail.com?subject=Hey hey! 👋'>zjkaig@gmail.com</a>.</div>
    </div>
  );
};

export default ErrorModal;
