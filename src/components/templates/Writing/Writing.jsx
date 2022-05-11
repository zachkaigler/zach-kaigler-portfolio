import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { BsMedium } from 'react-icons/bs';
import { BlogCard } from '../..';
import { format } from 'date-fns';
import { usePreventMobileFlicker } from '../../../hooks';
import './Writing.scss';

const Writing = ({ animateOut }) => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loaded, setLoaded] = useState(false);

  const { hidden } = usePreventMobileFlicker();

  useEffect(() => {
    setLoading(true);
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40zachkaigler&api_key=jvucslukdc1fzxrukznmegrpqo1imimzy921eykk')
      .then(resp => resp.json())
      .then(data => {
        if (data.status === 'ok') {
          setBlogs([...data.items]);
          setLoading(false);
          setLoaded(true);
        } else {
          setError(true);
          setLoading(false);
          setLoaded(true);
        }
      }
    );
  }, []);

  const displayArr = blogs.filter((blog, i) => i < 3);

  return (
    <div className={`Writing__Page Float ${hidden ? 'Hidden' : ''}`}>
      <div className={`Writing__CardContainer vivify fadeInLeft ${animateOut  ? 'fadeOutRight' : ''}`}>
        {loading && (
          <div className='Writing__Loading'>
            <FontAwesomeIcon icon={faCircleNotch} spin />
          </div>
        )}
        {!loading && loaded && !error && (
          displayArr.map((blog) => (
            <BlogCard
              key={blog.pubDate}
              title={blog.title}
              url={blog.link}
              date={format(new Date(blog.pubDate.replace(/-/g, "/")), 'M/d/y')}
              categories={blog.categories}
            />
          ))
        )}
        {error && (
          <div className='Writing__Error'>
            <div className='Writing__ErrorHead'>Oops!</div>
            <div className='Writing__ErrorText'>We're having some trouble finding these.</div>
          </div>
        )}
      </div>
      {!loading && (
        <a
          className={`Writing__Medium vivify fadeInLeft delay-100 ${animateOut ? 'fadeOutRight' : ''}`}
          target='_blank'
          rel='noreferrer'
          href='https://zachkaigler.medium.com/'
        >
          <BsMedium />
        </a>
      )}
    </div>
  );
};

export default Writing;
