import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";

const Post = ({ post }) => {
    const {imgLink, _id, postText} = post;
    return (
        <div>
            <div className="w-full p-8 grid grid-cols-1 md:grid-cols-3 bg-gray-200 text-gray-800">
                <div color="blue" className="h-56 col-span-1 md:col-span-1">
                    <img
                        src={imgLink}
                        alt="img-blur-shadow"
                        className="h-60 w-60 rounded-md"
                    />
                </div>
                <div className="col-span-1 md:col-span-2">
                    <h3 className="mb-2 text-center text-3xl font-bold">
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