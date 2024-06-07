import React from 'react';
import './blog-card.css'
import {Link} from 'react-router-dom';


function BlogCard({id,blogImg,title,about,author}) {
  return (
    <Link className='blog-Card' to={`/blog/${id}`}>
        <div className='blog-img'><img src={blogImg} alt='blogImage'></img></div>
        <div className='blog-desc'>
            <h1 className='blog-title'>{title}</h1>
            <p className='blog-content'>{about.substring(0,150)} . . . . . . . . . .</p>
            <div className='blog-author'>
              <img src={author.authorImg} alt='authorImg' className='authorImg'></img>
                <span>{author.name}</span>
                <span className='date'>{author.date}</span>
            </div>

        </div>
    </Link>
  )
}

export default BlogCard