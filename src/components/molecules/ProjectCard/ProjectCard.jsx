import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';
import './ProjectCard.scss';

const ProjectCard = ({ project, handleClick }) => (
  <div className='ProjectCard' onClick={handleClick}>
    <div className='ProjectCard__Icon'>
      <FontAwesomeIcon icon={faChevronCircleUp} />
    </div>
    {project.name}
    <div className='ProjectCard__Desc'>{project.desc}</div>
  </div>
);

export default ProjectCard;
