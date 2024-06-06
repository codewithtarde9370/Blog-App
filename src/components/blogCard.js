import React from 'react';
import './blog-card.css'

function blogCard({blogImg,title,about,author}) {
  return (
    <div className='blog-Card'>
        <div className='blog-img'>{blogImg}</div>
        <div className='blog-desc'>
            <h1 className='blog-title'>{title}</h1>
            <p className='blog-content'>{about}</p>
            <div className='blog-author'>
                {author}
            </div>

        </div>
    </div>
  )
}

export default blogCard