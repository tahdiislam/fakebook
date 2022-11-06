import React, { useContext } from 'react';
import { UserContext } from '../../Context/AuthProvider';
import { Avatar, Button, Tooltip } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import { RiEditFill } from 'react-icons/ri';
import Posts from './Posts';

const Profile = () => {
    const { user } = useContext(UserContext)
    
    return (
        <div>
            <div className="bg-blue-400 rounded-lg relative h-64">
                <div className="absolute top-10 left-1/2">
                    <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 bg-gray-50 text-gray-800 border absolute -left-32">
                        <img src="https://source.unsplash.com/150x150/?portrait?3" alt="" className="w-32 h-32 mx-auto rounded-full bg-gray-500 aspect-square" />
                        <div className="space-y-4 text-center divide-y divide-gray-300">
                            <div className="my-2 space-y-1">
                                <h2 className="text-xl font-semibold sm:text-2xl">{user?.name || "username"}</h2>
                                <p className="px-5 text-xs sm:text-base text-gray-600">{user?.email}</p>
                            </div>
                            <div className="flex justify-center pt-2 space-x-4 align-center">
                                <Link to="/editprofile">
                                    <Button>Edit</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className='bg-gray-700 text-gray-200 min-h-min'>
                <div className='py-16 pl-20'>
                    <Tooltip content="Create a Post">
                        <Link to="/create-post">
                            <Button variant="gradient" color="amber">
                                <RiEditFill className='text-xl' />
                            </Button>
                        </Link>
                    </Tooltip>
                </div>
                <div className='grid grid-cols-6 gap-4 px-6'>
                    <div className='col-span-2'>
                        <Button>hello world</Button>
                        <Button>hello world</Button>
                        <Button>hello world</Button>
                        <Button>hello world</Button>
                        <Button>hello world</Button>
                        <Button>hello world</Button>
                        <Button>hello world</Button>
                    </div>
                    <div className='col-span-4 '>
                        <Posts />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;