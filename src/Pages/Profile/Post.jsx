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
            <div className="w-full p-8 grid grid-cols-3 bg-gray-200 text-gray-800">
                <div color="blue" className="h-56 col-span-1">
                    <img
                        src={imgLink}
                        alt="img-blur-shadow"
                        className="h-full w-full"
                    />
                </div>
                <div className="text-justify col-span-2">
                    <h3 className="mb-2 text-3xl font-bold">
                        Cozy 5 Stars Apartment
                    </h3>
                    <p>
                        {postText}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Post;