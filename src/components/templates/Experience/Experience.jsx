import React from 'react';
import { DetailTabber } from '../..';
import { jobs } from './Experience.constants';
import resume from '../../../documents/kaigler_resume_SE_2022.pdf'
import './Experience.scss';

const Experience = ({ animateOut }) => (
  <div className='Experience__Page Float'>
    <div className={`Experience__Tabber vivify fadeInLeft ${animateOut  ? 'fadeOutRight' : ''}`}>
      <DetailTabber data={jobs} />
      <div className={`Experience__ResumeLink vivify fadeInLeft delay-100 ${animateOut  ? 'fadeOutRight' : ''}`}>
        <a href={resume} target="_blank" rel="noreferrer">View Resume</a>
      </div>
    </div>
  </div>
);

export default Experience;