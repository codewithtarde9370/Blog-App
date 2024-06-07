import React from 'react';
import BlogData from '../../data';
import BlogCard from '../../components/blogCard';
import Navbar from '../../components/navbar';

function Home() {
    return (
        
<div>
<Navbar/>
            {
                BlogData.map((obj, index) => {
                    const{
                            id,
                            title,
                            blogImg,
                            about,
                            author,
                            name,
                            authorImg,
                            date
                        }= obj;
                       return(
                        <>
                        
                        
                        <BlogCard 
                        key={index}
                        id={id}
                        title={title}
                        blogImg={blogImg}
                        about={about}
                        author={author}
                        name={name}
                        authorImg={authorImg}
                        date={date}
                        /></>
                        
                        );
                    })
                }
    
</div>
        
)}

export default Home;