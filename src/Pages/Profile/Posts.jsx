import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../Context/AuthProvider';

const Posts = () => {
    const [posts, setPosts] = useState([])
    const { user } = useContext(UserContext)
    useEffect(() => {
        axios.get(`http://localhost:5000/posts?email=${user?.email}`)
            .then(res => {
                setPosts(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    return (
        <div className='text-justify'>
            <h3 className='text-2xl font-bold text-gray-200'>You {posts.length} {posts.length <= 1 ? "post." : "posts"}</h3>
            
        </div>
    );
};

export default Posts;