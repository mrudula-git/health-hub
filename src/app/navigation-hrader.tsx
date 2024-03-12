"use client";
import { Popover, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function NavigationHeader() {
  const [isShowing, setIsShowing] = useState(false);
  const [option, setOption] = useState("");

  return (
    <div className="relative">
      <div className="max-w-screen-lg mx-auto flex items-center ">
        <div className="mr-4">
          <a href="/">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR626dWTlyoEAmxjBE7JrME7qbYFNpwyk10ZA&usqp=CAU"
              alt="logo"
              className="h-10 w-10"
            />
          </a>
        </div>
        <Popover className="">
          <>
            <>
              <div>
                <Popover.Button
                  as="div"
                  className={`
                    ${isShowing ? "" : "bg-white"}`}
                  onMouseLeave={() => {
                    setIsShowing(false);
                  }}
                >
                  <div className="container mx-auto py-2">
                    <button
                      className={`px-4 py-1 border-b-2 border-transparent hover:bg-gray-200 hover:border-black`}
                      onMouseEnter={() => {
                        setIsShowing(true); 
                        setOption("About Us");                        
                      }}
                    >
                      About us
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
                    <button
                      className={`px-4 py-1 border-b-2  border-transparent hover:bg-gray-200 hover:border-black`}
                      // onMouseEnter={() => {
                      //   setOption("More");
                      //   setIsShowing(true);                      
                      // }}
                    >
                      More
                    </button>
                  </div>
                </Popover.Button>
              </div>
            </>
            <Popover.Panel
                className="h-fit"
                onMouseEnter={() => {
                  setIsShowing(true);
                }}
                onMouseLeave={() => {
                  setIsShowing(false);
                }}
              >
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

                <div className="absolute inset-x-0">
                  <div className="bg-white -z-10 rounded-md shadow-md">
                    <div className="container mx-auto py-8">
                      {option === "About Us" && (
                        <div className="grid grid-cols-2 gap-4">
                          <div className="col-span-1">
                            <h2 className="text-lg font-semibold text-gray-700 mb-2">
                              Submenu 1 - Column 1
                            </h2>
                            <ul className="space-y-2">
                              <li className="hover:text-gray-900 hover:bg-purple-700 hover:text-white p-2 rounded-md">
                                <a href="/about-us">About us</a>
                              </li>
                              <li className="hover:text-gray-900 hover:bg-purple-700 hover:text-white p-2 rounded-md">
                                <a href="/contact-us">Contact us</a>
                              </li>
                              <li className="hover:text-gray-900 hover:bg-purple-700 hover:text-white p-2 rounded-md">
                                <a href="/services">Services</a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-span-1">
                            <h2 className="text-lg font-semibold text-gray-700 mb-2">
                              Submenu 1 - Column 2
                            </h2>
                            <ul className="space-y-2">
                              <li className="hover:text-gray-900 hover:bg-purple-700 hover:text-white p-2 rounded-md">Item 4</li>
                              <li className="hover:text-gray-900 hover:bg-purple-700 hover:text-white p-2 rounded-md">Item 5</li>
                              <li className="hover:text-gray-900 hover:bg-purple-700 hover:text-white p-2 rounded-md">Item 6</li>
                            </ul>
                          </div>
                        </div>
                      )}
                      {option === "Solution" && (
                        <div className="grid grid-cols-3 gap-4">
                          <div className="col-span-1">
                            <h2 className="text-lg font-semibold text-gray-700 mb-2">
                              Submenu 2 - Column 1
                            </h2>
                            <ul className="space-y-2">
                              <li className="hover:text-gray-900 hover:bg-purple-700 hover:text-white p-2 rounded-md">Item 1</li>
                              <li className="hover:text-gray-900 hover:bg-purple-700 hover:text-white p-2 rounded-md">Item 2</li>
                              <li className="hover:text-gray-900 hover:bg-purple-700 hover:text-white p-2 rounded-md">Item 3</li>
                            </ul>
                          </div>
                          <div className="col-span-1">
                            <h2 className="text-lg font-semibold text-gray-700 mb-2">
                              Submenu 2 - Column 2
                            </h2>
                            <ul className="space-y-2">
                              <li className="hover:text-gray-900 hover:bg-purple-700 hover:text-white p-2 rounded-md">Item 4</li>
                              <li className="hover:text-gray-900 hover:bg-purple-700 hover:text-white p-2 rounded-md">Item 5</li>
                              <li className="hover:text-gray-900 hover:bg-purple-700 hover:text-white p-2 rounded-md">Item 6</li>
                            </ul>
                          </div>
                          <div className="col-span-1">
                            <h2 className="text-lg font-semibold text-gray-700 mb-2">
                              Submenu 2 - Column 3
                            </h2>
                            <ul className="space-y-2">
                              <li className="hover:text-gray-900 hover:bg-purple-700 hover:text-white p-2 rounded-md">Item 7</li>
                              <li className="hover:text-gray-900 hover:bg-purple-700 hover:text-white p-2 rounded-md">Item 8</li>
                              <li className="hover:text-gray-900 hover:bg-purple-700 hover:text-white p-2 rounded-md">Item 9</li>
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
             
            </Transition>
            </Popover.Panel>
          </>
        </Popover>
      </div>
    </div>
  );
}
