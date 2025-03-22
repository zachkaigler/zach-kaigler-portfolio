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
          <a
            target='_blank'
            rel='noreferrer'
            href='https://zachkaigler.darkroom.com/'
          >
            <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" id="darkroom" class="Contact__Icon vivify fadeInLeft">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0.993221 14.7078C0.700328 14.4149 0.700327 13.94 0.993221 13.6471L13.94 0.70031C14.2329 0.407417 14.7078 0.407417 15.0007 0.70031C15.2936 0.993204 15.2936 1.46808 15.0007 1.76097L2.05388 14.7078C1.76099 15.0007 1.28611 15.0007 0.993221 14.7078Z"></path>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0.764705 8.38397C0.471812 8.09107 0.471812 7.6162 0.764705 7.32331L7.24652 0.841497C7.53941 0.548604 8.01428 0.548604 8.30718 0.841497C8.60007 1.13439 8.60007 1.60926 8.30718 1.90216L1.82537 8.38397C1.53247 8.67686 1.0576 8.67686 0.764705 8.38397Z"></path>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M7.31695 14.9363C7.02406 14.6434 7.02406 14.1686 7.31695 13.8757L13.7988 7.39386C14.0917 7.10097 14.5665 7.10097 14.8594 7.39386C15.1523 7.68675 15.1523 8.16163 14.8594 8.45452L8.37761 14.9363C8.08472 15.2292 7.60984 15.2292 7.31695 14.9363Z"></path>
            </svg>
          </a>
      </div>
      <div className={`Contact__Form vivify fadeInLeft ${!isDesktop ? 'delay-100' : ''} ${animateOut  ? 'fadeOutRight' : ''}`}>
        <EmailForm />
      </div>
    </div>
  );
};

export default Contact;
