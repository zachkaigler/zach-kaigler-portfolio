import React from 'react';
import DetailTabber from './DetailTabber';
import { jobs } from '../../templates/Experience/Experience.constants';

export default {
  title: 'Organisms / DetailTabber',
  component: DetailTabber,
  argTypes: {
  },
};

const Template = (args) => <DetailTabber {...args} />;

export const DetailTabberPrimary = Template.bind({});

DetailTabberPrimary.args = {
  data: jobs,
};