import React, { useState } from 'react';
import { send } from 'emailjs-com';
import { AiOutlineSend, AiOutlineCheck } from 'react-icons/ai';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { Modal, ErrorModal } from '../../templates/Modal';
import './EmailForm.scss';

const EmailForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');

  const [waiting, setWaiting] = useState(false);
  const [error, setError] = useState(false);
  const [showCheck, setShowCheck] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);
    setWaiting(true);
    send(
      'service_hlzdmuc',
      'template_9arks8n',
      {
        to_name: 'Zach',
        from_name: name,
        from_email: email,
        reply_to: email,
        message: body,
      },
      'pMujvsZar0cuARlGB',
    )
    .then((response) => {
      setWaiting(false);
      setShowCheck(true);
      setName('');
      setEmail('');
      setBody('');
    })
    .catch((err) => {
      setWaiting(false);
      setError(true);
    });
  };

  const handleChange = (e, setterFunc) => {
    setShowCheck(false);
    setterFunc(e.target.value);
  };

  return (
    <>
      {error && (
        <Modal handleClose={() => setError(false)}>
          <ErrorModal handleClose={() => setError(false)}/>
        </Modal>
      )}
      <div className='EmailForm'>
        <form
          className='EmailForm__Container'
          onSubmit={handleSubmit}
        >
          <input
            className='EmailForm__Input'
            placeholder='Name'
            value={name}
            onChange={(e) => handleChange(e, setName)}
            required
          />
          <input
            className='EmailForm__Input'
            placeholder='Email'
            type='email'
            value={email}
            onChange={(e) => handleChange(e, setEmail)}
            required
          />
          <textarea
            className='EmailForm__Textarea'
            placeholder="Let's talk shop!"
            value={body}
            onChange={(e) => handleChange(e, setBody)}
            required
          />
          <button
            className='EmailForm__Submit'
            type='submit'
          >
            {!waiting && !showCheck && <AiOutlineSend />}
            {waiting && <FontAwesomeIcon icon={faCircleNotch} spin />}
            {showCheck && <AiOutlineCheck />}
          </button>
        </form>
      </div>
    </>
  );
};

export default EmailForm;
