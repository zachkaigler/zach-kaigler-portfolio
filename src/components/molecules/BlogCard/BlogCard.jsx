import React from 'react';
import { Snack } from '../../atoms';
import './BlogCard.scss';

const BlogCard = ({ title, url, date, categories }) => (
  <a href={url} target='_blank' rel='noreferrer'>
    <div className='BlogCard'>
      <div className='BlogCard__Title'>{title}</div>
      {categories.length > 0 && (
        <div className='BlogCard__Categories'>
          {categories.map((cat) => <Snack key={cat} label={cat} />)}
        </div>
      )}
      <div className='BlogCard__Date'>{date}</div>
    </div>
  </a>
);

export default BlogCard;
