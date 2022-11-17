import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './ProjectCard.scss';

const ProjectCard = ({ project, handleClick }) => (
  <div className={`ProjectCard ${project.path ? 'Outline' : ''}`} onClick={handleClick}>
    {project.path && (
      <div className='ProjectCard__Icon'>
        <FontAwesomeIcon icon={faStar} title="Featured Work" />
      </div>
    )}
    {project.name}
    <div className='ProjectCard__Desc'>{project.desc}</div>
  </div>
);

export default ProjectCard;
