import React from 'react';
import { Link } from 'react-router-dom';

const SinglePost = ({ post }) => {
    const { imgLink, postText, email } = post;
    return (
            <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-md p-3 hover:shadow-xl">
                <Link to="/" aria-label="Article">
                {!imgLink ? <div className='object-cover w-full h-64 rounded bg-blue-400'></div> : <img
                        src={imgLink}
                        className="object-cover w-full h-64 rounded"
                        alt=""
                    />}
                </Link>
                <div className="py-5">
                    <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
                        13 Jul 2020
                    </p>
                    <Link
                        to="/"
                        aria-label="Article"
                        className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                    >
                        <p className="text-xl font-bold leading-5">{email}</p>
                    </Link>
                    <p className="mb-4 text-gray-700">
                        {postText.length <= 275 ? postText : <>{postText.slice(0, 275)}<Link to="/">Read more</Link></>}
                    </p>
                    <div className="flex space-x-4">
                        <Link
                            to="/"
                            aria-label="Likes"
                            className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                        >
                            <div className="mr-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                                >
                                    <polyline
                                        points="6 23 1 23 1 12 6 12"
                                        fill="none"
                                        strokeMiterlimit="10"
                                    />
                                    <path
                                        d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeMiterlimit="10"
                                    />
                                </svg>
                            </div>
                            <p className="font-semibold">7.4K</p>
                        </Link>
                        <Link
                            to="/"
                            aria-label="Comments"
                            className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                        >
                            <div className="mr-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                                >
                                    <polyline
                                        points="23 5 23 18 19 18 19 22 13 18 12 18"
                                        fill="none"
                                        strokeMiterlimit="10"
                                    />
                                    <polygon
                                        points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeMiterlimit="10"
                                    />
                                </svg>
                            </div>
                            <p className="font-semibold">81</p>
                        </Link>
                    </div>
                </div>
            </div>
    );
};

export default SinglePost;