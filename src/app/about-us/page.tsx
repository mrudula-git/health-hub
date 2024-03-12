import React from 'react';
import VideoSection from './video';

const AboutUs = () => {
    return (
        <div>
            <div className="about-us-container">
                <section className="text-gray-700 body-font border-t border-gray-200">
                    <div className="max-w-screen-lg mx-auto py-16 mx-auto flex flex-wrap">
                        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                            <img alt="feature" className="object-cover object-center h-full w-full" src="https://t4.ftcdn.net/jpg/05/71/06/03/360_F_571060336_lRFo9ZoUUYDzcKb6dHKMs8unl2TM98rr.jpg" />
                        </div>
                        <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                            <div className="flex flex-col mb-10 lg:items-start items-center">
                                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                    </svg>
                                </div>
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Passion</h2>
                                    <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                                    <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="max-w-screen-lg mx-auto bg-gradient-to-r from-rose-500 to-indigo-600 p-8 shadow-lg rounded-md">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                        <div>
                            <h2 className='text-2xl flex justify-center my-4'>vision</h2>
                            <p className="text-white leading-relaxed">
                                Welcome to our creative space where innovation meets passion.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                        <div className="mb-4">
                            <img
                                className="w-full h-64 object-cover rounded-md shadow-md"
                                src="https://placekitten.com/800/400"
                                alt="About Us"
                            />
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
            </div>
            <VideoSection/>
            <br/>
        </div>
    );
};

export default AboutUs;
