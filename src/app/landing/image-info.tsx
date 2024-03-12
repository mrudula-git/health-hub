"use client"
import { Description } from '@mui/icons-material';
import React, { useState } from 'react';

function ImageInfo() {
    return (
        <div className=''>
            {/* add title here with tailwind css */}
            <div className='max-w-screen-lg mx-auto'>
            <h1 className="text-5xl font-bold mb-4 text-center">Title Here</h1>
            {/* First Section */}
            <div className="flex flex-col md:flex-row p-4 md:p-4 sm:p-2">
                <div className="md:w-1/2 md:pr-8 mb-5 md:mb-0 text-center flex items-center order-2 md:order-1">
                    <div>
                        <p className="text-lg font-semibold mb-2">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                        <p className=" mb-4">
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                </div>
                <div className="md:w-1/2 order-1 md:order-2">
                    <div>
                        <img className="w-full h-64 md:h-96 object-cover rounded-md mb-5" src="https://shorturl.at/efPT4" alt="image" />
                    </div>
                </div>
            </div>
            </div>
            {/* Second Section */}
            <div className='bg-slate-300'>
                <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row p-4 md:p-4 sm:p-2 ">
                    <div className="md:w-1/2">
                        <div>
                            <img className="w-full h-64 md:h-96 object-cover rounded-md mb-5" src="https://t3.ftcdn.net/jpg/05/71/06/76/360_F_571067620_JS5T5TkDtu3gf8Wqm78KoJRF1vobPvo6.jpg" alt="another image" />
                        </div>
                    </div>
                    <div className="md:w-1/2 mb-4 md:mb-0 text-center flex items-center">
                        <div className='ms-5'>
                            <p className="text-lg font-semibold mb-2">
                                Section Heading
                            </p>
                            <p className=" mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ImageInfo;
