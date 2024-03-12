"use client"
// import { Popover, Transition } from '@headlessui/react'
// import { Button } from '@mui/material';
// import { useState } from 'react';

// function Header() {
//   const [isShowing, setIsShowing] = useState(false);
//   const [option, setOption] = useState("");

//   return (
//     <Popover>
//       <Popover.Button>
//        <header className="text-gray-600 body-font">
//        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
//            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
//              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
//            </svg>
//            <span className="ml-3 text-xl">Heal Hub</span>
//          </a>
//          <nav className="flex flex-wrap items-center text-base justify-center md:justify-end w-full md:w-auto mt-4 md:mt-0">
//            <Button
//              // aria-owns={open ? 'mouse-over-popover-two-columns' : undefined}
//              aria-haspopup="true"             
//              onMouseEnter={() => {
//               setIsShowing(true);
//               setOption("Features");
//             }}
//              // onMouseLeave={handlePopoverClose}
//              variant="text"
//              className='text-slate-900 font-semibold hover:underline hover:text-purple-700'
//            >
//              Third Link
//            </Button>
//            <Button
//              // aria-owns={open ? 'mouse-over-popover-two-columns' : undefined}
//              aria-haspopup="true"
//              onMouseEnter={() => {
//               setIsShowing(true);
//               setOption("Solution");
//             }}
//              // onMouseLeave={handlePopoverClose}
//              variant="text"
//              className='text-slate-900 font-semibold hover:underline hover:text-purple-700'
//            >
//              Fourth Link
//            </Button>
//          </nav>
//        </div>
//      </header> 

//       </Popover.Button>
      

//       <Transition
//         enter="transition duration-100 ease-out"
//         enterFrom="transform scale-95 opacity-0"
//         enterTo="transform scale-100 opacity-100"
//         leave="transition duration-75 ease-out"
//         leaveFrom="transform scale-100 opacity-100"
//         leaveTo="transform scale-95 opacity-0"
//       >
//         <Popover.Panel>
//           <div className="absolute inset-x-0">
//             <div className="bg-gray-500 z-10">
//               <div className="container mx-auto py-8">
//                 <div>Panel {option}</div>
//               </div>
//             </div>
//           </div>
//         </Popover.Panel>
//       </Transition>
//     </Popover>
//   )
// }
// export default Header;

import { Popover, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function Header() {
  const [isShowing, setIsShowing] = useState(false);
  const [option, setOption] = useState("");

  return (
    <div>
      <Popover className="relative">
        <>
          <>
            <div>
              <Popover.Button
                as="div"
                className={`
                    ${isShowing ? "bg-gray-200" : "bg-gray-50"}`}
                onMouseLeave={() => {
                  setIsShowing(false);
                }}
              >
                <div className="container mx-auto py-2">
                  <button
                    className={`px-4 py-1 border-b-2 border-transparent hover:bg-gray-200 hover:border-black`}
                    onMouseEnter={() => {
                      setIsShowing(true);
                      setOption("Features");
                    }}
                  >
                    Features
                  </button>
                  <button
                    className={`px-4 py-1 border-b-2 border-transparent hover:bg-gray-200 hover:border-black`}
                    onMouseEnter={() => {
                      setIsShowing(true);
                      setOption("Solution");
                    }}
                  >
                    Solution
                  </button>
                </div>
              </Popover.Button>
            </div>
          </>

          <Transition
            as={Fragment}
            show={isShowing}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 height-0 -translate-y-8"
            enterTo="opacity-100 height-100 translate-y-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100 height-100 translate-y-0"
            leaveTo="opacity-0 height-0 -translate-y-8"
          >
            <Popover.Panel
              className="h-fit"
              onMouseEnter={() => {
                setIsShowing(true);
              }}
              onMouseLeave={() => {
                setIsShowing(false);
              }}
            >
              <div className="absolute inset-x-0 h-full">
                <div className="bg-gray-100 -z-10">
                  <div className="container mx-auto py-10">
                    <div>Panel {option}</div>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      </Popover>
    </div>
  );
}

