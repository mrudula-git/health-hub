// "use client"
// import React, { useState } from 'react';

// const SubmenuLayout = ({ onClose }) => (
//     <div className="absolute top-full left-0 w-64 p-4 bg-white border border-gray-300 rounded-lg shadow-lg">
//         <div className="grid grid-cols-3 gap-4">
//             <div>
//                 <h2>Column 1</h2>
//                 <p>Info for Column 1</p>
//             </div>
//             <div>
//                 <h2>Column 2</h2>
//                 <p>Info for Column 2</p>
//             </div>
//             <div>
//                 <h2>Column 3</h2>
//                 <p>Info for Column 3</p>
//             </div>
//         </div>
//         <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded" onClick={onClose}>
//             Close
//         </button>
//     </div>
// );

// const HomeLayout = ({ openSubmenu, closeSubmenu }) => (
//     <div>
//         <h1>Home Page</h1>
//         {openSubmenu && <SubmenuLayout onClose={closeSubmenu} />}
//     </div>
// );

// const FeaturesLayout = () => (
//     <div>
//         <h1>Features Page</h1>

//     </div>
// );

// const PricingLayout = () => (
//     <div>
//         <h1>Pricing Page</h1>

//     </div>
// );

// const DocumentationLayout = () => (
//     <div>
//         <h1>Documentation Page</h1>

//     </div>
// );

// const MyComponent = () => {
//     const [selectedMenu, setSelectedMenu] = useState(null);

//     const handleMenuClick = (menu) => {
//         setSelectedMenu(menu);
//     };

//     return (
//         <div className='relative'>
//             <nav className="bg-gray-800 p-4 z-10">
//                 <div className="container mx-auto flex justify-between items-center">
//                     <div className="text-white font-bold text-xl">Your Logo</div>
//                     <div className="hidden lg:flex space-x-4">
//                         <button className="text-white" onClick={() => handleMenuClick('home')}>
//                             Home
//                         </button>
//                         <button className="text-white" onClick={() => handleMenuClick('features')}>
//                             Features
//                         </button>
//                         <button className="text-white" onClick={() => handleMenuClick('pricing')}>
//                             Pricing
//                         </button>
//                         <button className="text-white" onClick={() => handleMenuClick('documentation')}>
//                             Documentation
//                         </button>
//                     </div>
//                 </div>
//             </nav>

//             <div className="content">
//                 {selectedMenu === 'home' && <HomeLayout />}
//                 {selectedMenu === 'features' && <FeaturesLayout />}
//                 {selectedMenu === 'pricing' && <PricingLayout />}
//                 {selectedMenu === 'documentation' && <DocumentationLayout />}
//             </div>
//         </div>
//     );
// };

// export default MyComponent;
"use client"
import React, { useState } from 'react';
import { Link } from '@mui/material';


const MyComponent = () => {

    return (
        <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
                <span className="ml-3 text-xl">Heal Hub</span>
            </a>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <Link href="/"><a className="mr-5 hover:text-gray-900">Home</a></Link>
                <Link href="/"><a className="mr-5 hover:text-gray-900">Second Link</a></Link>
                <Link href="/"><a className="mr-5 hover:text-gray-900">Third Link</a></Link>
                <Link href="/"><a className="mr-5 hover:text-gray-900">Fourth Link</a></Link>
            </nav>
        </div>
    </header>
    );
};

export default MyComponent;

