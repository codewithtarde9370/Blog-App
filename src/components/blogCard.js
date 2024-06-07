import React from 'react';
import './blog-card.css'


function BlogCard({blogImg,title,about,author}) {
  return (
    <div className='blog-Card'>
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
    </div>
  )
}

export default BlogCard