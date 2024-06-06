import React from 'react';
import BlogData from '../../data';
import BlogCard from './../../components/blogCard'; // Adjust the path according to your project structure

function Home() {
    return (
        <>
            <div>
                {
                    BlogData.map((obj, index) => {
                        console.log(index, obj);
                        return (
                            <BlogCard 
                                key={index}
                                blogImg={obj.blogImg}
                                title={obj.title}
                                about={obj.about}
                                author={obj.author}
                            />
                        );
                    })
                }
            </div>
        </>
    );
}

export default Home;
