import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './ProjectCard.scss';

const ProjectCard = ({ project, handleClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showLabel, setShowLabel] = useState(false);

  const initDelay = 100;
  const labelDelay = 250;

  const timers = useRef([]);

  const handleMouseEnter = () => {
    const timer1 = setTimeout(() => {
      setIsHovered(true);
    }, initDelay);

    const timer2 = setTimeout(() => {
      setShowLabel(true);
    }, initDelay + labelDelay);

    timers.current.push(timer1);
    timers.current.push(timer2);
  };

  const handleMouseLeave = () => {
    timers.current.forEach((timer) => clearTimeout(timer));

    setTimeout(() => {
      setIsHovered(false);
    }, labelDelay);

    setShowLabel(false);
  };

  return (
    <div
      className={`ProjectCard ${project.path ? 'Outline' : ''}`}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {project.path && (
        <div className={`ProjectCard__Icon ${isHovered ? 'Hovered' : ''}`}>
          <FontAwesomeIcon icon={faStar} title="Featured Work" />
          <p className={`ProjectCard__Label ${showLabel ? 'Show' : ''}`}>Featured Work</p>
        </div>
      )}
      {project.name}
      <div className='ProjectCard__Desc'>{project.desc}</div>
    </div>
  );
};

export default ProjectCard;
