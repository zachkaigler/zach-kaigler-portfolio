import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../../templates/Work/Work.constants';

export default {
  title: 'Molecules / ProjectCard',
  component: ProjectCard,
  argTypes: {
  },
};

const Template = (args) => <ProjectCard {...args} />;

export const ProjectCardPrimary = Template.bind({});

ProjectCardPrimary.args = {
  project: projects[1],
};