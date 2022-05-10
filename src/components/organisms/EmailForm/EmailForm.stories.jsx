import React from 'react';
import EmailForm from './EmailForm';

export default {
  title: 'Organisms / EmailForm',
  component: EmailForm,
  argTypes: {
  },
};

const Template = (args) => <EmailForm {...args} />;

export const EmailFormPrimary = Template.bind({});

EmailFormPrimary.args = {
};