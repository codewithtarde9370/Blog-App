import React from 'react';
import { useParams } from 'react-router-dom';
import BlogData from '../../data';
import './blog.css';

function Blog() {
    const { id } = useParams();
    const selectedBlog = BlogData.find((blog) => blog.id === id);

    return (
        <div className="selected-blog ">
            <h1>{selectedBlog.title}</h1>
            <div className='author-data'>
                <span className='author-name'>{selectedBlog.author.name}</span>|
                <span className='date'>{selectedBlog.author.date}</span>
            </div>
              <img src={selectedBlog.blogImg} alt='blog' className='blog-image'></img>
            <p className='content'>{selectedBlog.about}</p>
            
        </div>
    );
}

export default Blog;
