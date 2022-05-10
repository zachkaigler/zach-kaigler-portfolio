import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { AiFillGithub, AiFillYoutube } from 'react-icons/ai';
import { MdWebAsset } from 'react-icons/md';
import { Snack } from '../..';
import './ProjectModal.scss';

const ProjectModal = ({ project, handleClose }) => {
  return (
    <div className='ProjectModal vivify fadeInTop'>
      <div className='ProjectModal__Close' onClick={handleClose}><FontAwesomeIcon icon={faX} /></div>
      <div className='ProjectModal__Title'>{project.name}</div>
      <img className='ProjectModal__Screenshot' src={project.image} alt={project.name} />
      <div className='ProjectModal__Desc'>{project.desc}</div>
      <div className='ProjectModal__Tools'>
        {project.tools.map((tool) => <Snack label={tool} key={tool} />)}
      </div>
      <div className='ProjectModal__Links'>
        {project.video && (
          <a href={project.video} target='_blank' rel='noreferrer'><AiFillYoutube /></a>
        )}
        {project.linkUrl && (
          <a href={project.linkUrl} target='_blank' rel='noreferrer'><MdWebAsset /></a>
        )}
        {project.githubUrl && (
          <a href={project.githubUrl} target='_blank' rel='noreferrer'><AiFillGithub /></a>
        )}
      </div>
    </div>
  );
};

export default ProjectModal;
