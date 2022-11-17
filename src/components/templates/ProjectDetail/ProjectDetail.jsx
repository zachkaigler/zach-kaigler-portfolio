import React, { useState, useEffect } from 'react';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams } from 'react-router-dom';
import { projects } from './ProjectDetail.constants';
import { Snack } from '../..';
import { Error404 } from '..'
import { useResponsiveLayout } from '../../../hooks';
import './ProjectDetail.scss';

const ProjectDetail = () => {
  const { project } = useParams();

  const { isDesktop } = useResponsiveLayout(600);

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (isDesktop) setDrawerOpen(true);
  }, [isDesktop]);

  const selectedProject = projects[project];

  if (!selectedProject) return <Error404 />;

  return (
    <div className='ProjectDetail__Page'>
      <div className={`ProjectDetail__Drawer ${drawerOpen ? 'Open' : ''}`}>
        <div
          className='ProjectDetail__DrawerHandle'
          onClick={() => setDrawerOpen(!drawerOpen)}
          onKeyDown={() => setDrawerOpen(!drawerOpen)}
          role="button"
          tabIndex={0}
        >
          <FontAwesomeIcon
            icon={faChevronRight}
            size="2x"
            style={{
              transform: drawerOpen ? 'rotate(180deg)' : '',
              transition: 'transform 500ms ease',
            }}
          />
        </div>
        <div className={`ProjectDetail__DrawerContent ${drawerOpen ? 'Open' : ''}`}>
          <p className='ProjectDetail__DrawerContentHeader'>
            FEATURED WORK
          </p>
          <p className='ProjectDetail__ProjectTitle'>
            {selectedProject.title}
          </p>
          <div className='Line' />
          <div className='ProjectDetail__ProjectDesc'>
            {selectedProject.description}
          </div>
          <div className='ProjectDetail__SubHead'>
            ROLE
          </div>
          <div className='ProjectDetail__ProjectDesc'>
            {selectedProject.role}
          </div>
          <div className='ProjectDetail__SubHead'>
            CONTRIBUTIONS
          </div>
          <div className='ProjectDetail__ProjectDesc'>
            {selectedProject.contributions.map((item) => (
              <p className='ProjectDetail__Bullet' key={item}>
                <span>•</span>
                {item}
              </p>
            ))}
          </div>
          <div className='ProjectDetail__SubHead'>
            KEY TOOLS
          </div>
          <div className='ProjectDetail__Tools'>
            {selectedProject.tools.map((tool) => <Snack label={tool} key={tool} />)}
          </div>
        </div>
      </div>
      <div className='ProjectDetail__Main'>
        <div
          className='ProjectDetail__VideoContainer'
          style={{
            opacity: loaded ? 1 : 0,
          }}
        >
          <div className='ProjectDetail__Monitor'>
            <div className='ProjectDetail__MonitorScreen'>
              <video
                width="100%"
                height="100%"
                autoPlay
                loop
                muted
                onCanPlay={() => setLoaded(true)}
              >
                <source src={selectedProject.video} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;