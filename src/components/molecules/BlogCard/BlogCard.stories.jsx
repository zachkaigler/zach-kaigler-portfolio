import React from 'react';
import BlogCard from './BlogCard';
import { dummyData } from './BlogCard.constants';

export default {
  title: 'Molecules / BlogCard',
  component: BlogCard,
  argTypes: {
  },
};

const Template = (args) => <BlogCard {...args} />;

export const BlogCardPrimary = Template.bind({});

BlogCardPrimary.args = { ...dummyData };