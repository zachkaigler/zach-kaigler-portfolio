import React, { useState } from 'react';
import { ReactIcon, JSIcon, FigmaIcon } from '../..';
import { SiTypescript, SiRedux, SiStorybook, SiAdobephotoshop } from 'react-icons/si';
import { FaNodeJs, FaSass } from 'react-icons/fa';
import selfie from '../../../images/me.jpg';
import mustacheGif from '../../../images/mustache.gif';
import { data } from './Me.constants.jsx';
import { useResponsiveLayout } from '../../../hooks';
import './Me.scss';

const Me = ({ animateOut }) => {
  const [showMustache, setShowMustache] = useState(false);
  const { isDesktop } = useResponsiveLayout(700);
  const icons = {
    react: <ReactIcon />,
    redux: <SiRedux />,
    javascript: <JSIcon />,
    typescript: <SiTypescript />,
    nodejs: <FaNodeJs />,
    sass: <FaSass />,
    storybook: <SiStorybook />,
    figma: <FigmaIcon />,
    photoshop: <SiAdobephotoshop />,
  };
  const makeSmaller = ['redux', 'typescript', 'nodejs', 'sass', 'storybook', 'figma', 'photoshop'];

  return (
    <div className='Me__Page Float'>
      <div className={`Me__BioContainer ${isDesktop ? 'vivify fadeInLeft' : ''} ${animateOut ? 'fadeOutRight' : ''}`}>
        <div className={`Me__PicContainer ${animateOut ? 'fadeOutRight' : ''} ${!isDesktop ? 'vivify fadeInLeft' : ''}`} onClick={() => setShowMustache(true)}>
          {!isDesktop && <h2 className='Me__BioHeader'>This Guy</h2>}
          <img className='Me__Pic' src={selfie} alt='Me' />
          {showMustache && <img className='Me__Mustache' src={mustacheGif} alt='Mustache' />}
        </div>
        <div className={`Me__Bio ${animateOut ? 'fadeOutRight' : ''} ${!isDesktop ? 'vivify fadeInLeft delay-100' : ''}`}>
          {isDesktop && <h2 className='Me__BioHeader'>This Guy</h2>}
          {data.bio}
        </div>
      </div>
      <div className={`Me__ToolsContainer vivify fadeInLeft delay-${isDesktop ? '100' : '200'} ${animateOut ? 'fadeOutRight' : ''}`}>
        <h3 className='Me__ToolsHeader'>Tools I Use</h3>
        <div className='Me__Tools'>
          {Object.entries(icons).map((icon) => (
            <span key={icon[0]} className={`Me__ToolIcon ${makeSmaller.includes(icon[0]) ? 'Smaller' : ''}`}>{icon[1]}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Me;
