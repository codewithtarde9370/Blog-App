import React from 'react';
import BlogData from '../../data';
import BlogCard from './../../components/blogCard';

function Home() {
  return (
    <div>
      {BlogData.map((obj, index) => (
        <BlogCard
          key={index}
          title={obj.title}
          blogImg={obj.blogImg}
          about={obj.about}
          author={obj.author}
        />
      ))}
    </div>
  );
}

export default Home;
