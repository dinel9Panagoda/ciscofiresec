"use client"
import { Dialog, Transition } from '@headlessui/react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Fragment, useState } from 'react';
import Link from 'next/link';

import PhoneIcon from '@mui/icons-material/Phone';

const index = () => {

    let [isOpen, setIsOpen] = useState(false)
    
    const closeModal = () => {
        setIsOpen(false)
    }

    const openModal = () => {
        setIsOpen(true)
    }

    return (
        <>
        <div className="sidebar rounded-r-3xl border-y-2 border-r-2 shadow-2xl"> 
            <ul className='py-1 pl-2 pr-3'> 
                <li className='cursor-pointer' onClick={openModal}><PhoneIcon /></li>
            </ul> 
        </div> 

        <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto" >
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-fit max-w-md transform overflow-hidden rounded-2xl align-middle transition-all bg-white">

                                    <div className="py-8 lg:py-8 px-4 mx-auto max-w-screen-md">
                                        <div className="flex flex-col flex-shrink-0 items-center justify-center text-center">
                                            <div className='w-52'>
                                            <div className='bg-lightblue pt-3 rounded-t-xl shadow-2xl border-t-2 pb-1 border-x-2 text-navyblue text-xl border-navyblue font-black'><LocationOnIcon /> 
                                            IN NJ
                                            </div>
                                            <div className='bg-red py-2 border-x-2 border-y-2 border-red rounded-b-xl shadow-2xl font-bold text-white'>
                                            201-250-3672
                                            </div>
                                            </div>
                                            
<br/>
                                            <div className='w-52'>
                                            <div className='bg-lightblue pt-3 rounded-t-xl shadow-2xl border-t-2 pb-1 border-x-2 text-navyblue text-xl border-navyblue font-black'><LocationOnIcon /> 
                                            IN NY
                                            </div>
                                            <div className='bg-red py-2 border-x-2 border-y-2 border-red rounded-b-xl shadow-2xl font-bold text-white'>
                                            718-527-4881
                                            </div>
                                            </div>
<br/>

                                            <div className='w-52'>
                                            <div className='bg-lightblue pt-3 rounded-t-xl shadow-2xl border-t-2 pb-1 border-x-2 text-navyblue text-xl border-navyblue font-black'><LocationOnIcon /> 
                                            IN LI
                                            </div>
                                            <div className='bg-red py-2 border-x-2 border-y-2 border-red rounded-b-xl shadow-2xl font-bold text-white'>
                                            516-800-2757
                                            </div>
                                            </div>

                                            <br/>

                                            <div className='w-52'>
                                            <div className='bg-lightblue pt-3 rounded-t-xl shadow-2xl border-t-2 pb-1 border-x-2 text-navyblue text-xl border-navyblue font-black'><LocationOnIcon /> 
                                            IN UPSTATE NY
                                            </div>
                                            <div className='bg-red py-2 border-x-2 border-y-2 border-red rounded-b-xl shadow-2xl font-bold text-white'>
                                            914-760-2100
                                            </div>
                                            </div>

                                            <br/>

                                            <div className='w-52'>
                                            <div className='bg-lightblue pt-3 rounded-t-xl shadow-2xl border-t-2 pb-1 border-x-2 text-navyblue border-navyblue font-black'><LocationOnIcon /> 
                                            IN SUFFOLK COUNTY
                                            </div>
                                            <div className='bg-red py-2 border-x-2 border-y-2 border-red rounded-b-xl shadow-2xl font-bold text-white'>
                                            631-784-5440
                                            </div>
                                            </div>

                                        </div>
                                        
                                    </div>

                                    {/* <div className='flex justify-end'>
                                        <button type="button"
                                            onClick={closeModal}
                                            className="py-3 px-5 mt-2 text-sm font-medium w-50 text-center text-white rounded-lg bg-red hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Close</button>
                                    </div> */}

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
       </> 
    )
}

export default index;
