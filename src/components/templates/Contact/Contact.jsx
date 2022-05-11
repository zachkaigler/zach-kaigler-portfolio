import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai';
import EmailForm from '../../organisms/EmailForm/EmailForm';
import { useResponsiveLayout, usePreventMobileFlicker } from '../../../hooks';
import './Contact.scss';

const Contact = ({ animateOut }) => {
  const { isDesktop } = useResponsiveLayout(600);
  const { hidden } = usePreventMobileFlicker();

  return (
    <div className={`Contact__Page Float ${hidden ? 'Hidden' : ''}`}>
      <div className={`Contact__IconContainer vivify fadeInLeft ${animateOut  ? 'fadeOutRight' : ''}`}>
          <a
            className='Contact__Icon vivify fadeInLeft'
            target='_blank'
            rel='noreferrer'
            href='https://github.com/zachkaigler'
          >
            <AiFillGithub />
          </a>
          <a
            className='Contact__Icon vivify fadeInLeft'
            target='_blank'
            rel='noreferrer'
            href='https://www.linkedin.com/in/zachkaigler/'
          >
            <AiFillLinkedin />
          </a>
          <a
            className='Contact__Icon vivify fadeInLeft'
            target='_blank'
            rel='noreferrer'
            href='https://www.instagram.com/zkaigz/'
          >
            <AiOutlineInstagram />
          </a>
      </div>
      <div className={`Contact__Form vivify fadeInLeft ${!isDesktop ? 'delay-100' : ''} ${animateOut  ? 'fadeOutRight' : ''}`}>
        <EmailForm />
      </div>
    </div>
  );
};

export default Contact;
