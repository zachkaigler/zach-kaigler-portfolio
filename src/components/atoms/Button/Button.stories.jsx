import React from 'react';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default {
  title: 'Atoms / Button',
  component: Button,
  argTypes: {
  },
};

const Template = (args) => <Button {...args} />;

export const ButtonIcon = Template.bind({});

ButtonIcon.args = {
  icon: <FontAwesomeIcon icon={faSearch} />,
};