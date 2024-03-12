import React from 'react';
import ImageInfo from '../landing/image-info';

function Services() {
    return (
        <div>
            <div className='bg-gradient-to-r from-rose-500 to-indigo-600'>
                <div className="max-w-screen-lg mx-auto ">
                    <br/>
                    <br/>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white p-6 border border-gray-300 rounded-md">
                            {/* Card content for the first column */}
                            <h3 className="text-lg font-semibold mb-2">Service 1</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Maecenas faucibus mollis interdum.</p>
                        </div>

                        <div className="bg-white p-6 border border-gray-300 rounded-md">
                            {/* Card content for the second column */}
                            <h3 className="text-lg font-semibold mb-2">Service 2</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Maecenas faucibus mollis interdum.</p>
                        </div>

                        <div className="bg-white p-6 border border-gray-300 rounded-md">
                            {/* Card content for the third column */}
                            <h3 className="text-lg font-semibold mb-2">Service 3</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Maecenas faucibus mollis interdum.</p>
                        </div>

                        <div className="bg-white p-6 border border-gray-300 rounded-md">
                            {/* Card content for the third column */}
                            <h3 className="text-lg font-semibold mb-2">Service 4</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Maecenas faucibus mollis interdum.</p>
                        </div>

                        <div className="bg-white p-6 border border-gray-300 rounded-md">
                            {/* Card content for the third column */}
                            <h3 className="text-lg font-semibold mb-2">Service 5</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Maecenas faucibus mollis interdum.</p>
                        </div>

                        <div className="bg-white p-6 border border-gray-300 rounded-md">
                            {/* Card content for the third column */}
                            <h3 className="text-lg font-semibold mb-2">Service 6</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Maecenas faucibus mollis interdum.</p>
                        </div>
                        <br/>
                        <br/>
                    </div>
                </div>
            </div>
            <br/>
            <ImageInfo/>
            <br/>
        </div>
    );
}

export default Services;
