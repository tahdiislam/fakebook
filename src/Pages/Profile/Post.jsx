import React from 'react';
import {
    Button,
} from "@material-tailwind/react";
import axios from 'axios';
import toast from 'react-hot-toast';

const Post = ({ post }) => {
    const {imgLink, postText, _id} = post;

    // delete post handler
    const handleDeletePost = id => {
        const proceed = window.confirm("Are you sure you wand to delete this post?")
        if(proceed){
            axios.delete(`http://localhost:5000/posts/${id}`)
            .then(res => {
                if (res.data.deletedCount){
                    toast.success("Product Deleted successfully")
                }
            })
            .catch(err => {
                console.log(err);
            })
        }
    }
    return (
        <div className='relative'>
            <div className='absolute right-1 flex gap-2 top-1'>
                <Button color="green">Edit</Button>
                <Button onClick={() => handleDeletePost(_id)} color="red">Delete</Button>
            </div>
            <div className="w-full p-8 grid grid-cols-1 md:grid-cols-3 bg-gray-200 text-gray-800">
                <div color="blue" className="h-56 col-span-1 md:col-span-1">
                    <img
                        src={imgLink}
                        alt="img-blur-shadow"
                        className="h-60 w-60 rounded-md"
                    />
                </div>
                <div className="col-span-1 md:col-span-2">
                    <h3 className="my-2 text-center text-3xl font-bold">
                        Cozy 5 Stars Apartment
                    </h3>
                    <p className='text-justify px-4'>
                        {postText.length >= 430 ? <>{postText.slice(0,430)}</> : postText}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Post;