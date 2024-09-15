"use client"
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useRef, useState } from 'react';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Contactusform = () => {

    let [isOpen, setIsOpen] = useState(false)

    const closeModal = () => {
        setIsOpen(false)
    }

    const openModal = () => {
        setIsOpen(true)
    }

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID, process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID, form.current, {
            publicKey: process.env.NEXT_PUBLIC_EMAIL_USER_ID
        }).then(
            () => {
                toast.success("Thank you for your interest!");
                closeModal();
            },
            (error) => {
                toast.error('Error...');
            },
        );
    };

    return (
        <>
                                            <ToastContainer />

            <div className=" inset-y-0 right-0 flex items-center sm:static sm:inset-auto md:ml-6">
        {/* <ToastContainer stacked /> */}

                {/* LINKS */}

                <div className="hidden lg:flex items-center ">
                    <div className="flex justify-end space-x-10 mr-5 font-bold ">
                            <a href='/home' className='hover:text-darkgrey'>Home</a>
                            <a href='/aboutus' className='hover:text-darkgrey'>About Us</a>
                    </div>

                </div>

                <div className=''>
                    <button type="button" className='mx-10 border-2 border-red text-sm font-semibold py-2 px-5 lg:px-5 rounded-2xl bg-red text-white hover:bg-transparent  hover:text-red hover:border-2' onClick={openModal}>
                        <p className=''>Contact Us</p>
                    </button>
                </div>
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

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex items-center justify-center text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="my-10 transform overflow-hidden rounded-2xl bg-grey text-left align-middle shadow-xl transition-all">

                                    <div className="p-10">
                                        <div className="items-center justify-center">
                                            <h1 className='text-center sm:text-4xl pt-10 text-xl font-black text-white md:pb-10 pb-0'>
                                                Cisco Fire Security Communication
                                            </h1>

                                        </div>

                                        <div className='grid md:grid-cols-2'>
                                            <div className="md:border-r border-lightgrey md:border-b-0 border-b px-10 md:pb-0 pb-5">

                                            <p className=" md:mt-0 mt-10 text-center text-white bg-navyblue p-2 rounded-2xl md:text-lg text-sm">Contact us now?</p>
            
                                                <div className="py-8 lg:py-8 mx-auto">

                    
                                                    <div className="bg-darkgrey p-1 rounded-full text-white font-bold flex gap-5 mb-5">
                                                        <div className='p-1 bg-grey rounded-full'>
                                                            <PhoneIcon />
                                                        </div> 

                                                        <div className="top-0 bottom-0 my-auto">CONTACT NUMBERS</div>
                                                    </div>

                    
                                                    <p className="mb-10 text-center text-white">
                                                        <span className='font-bold text-black'>NJ</span> 201-250-3672 <br/>
                                                        <span className='font-bold text-black'>NY</span> 718-527-4881 <br/>
                                                        <span className='font-bold text-black'>LI</span> 516-800-2757 <br/>
                                                        <span className='font-bold text-black'>UNY</span> 914-760-2100 <br/>
                                                        <span className='font-bold text-black'>SUFFOLK COUNTY</span> 631-784-5440 <br/>

                                                    </p>

                                                    <div className="bg-darkgrey p-1 rounded-full text-white font-bold flex gap-5 mb-5">
                                                        <div className='p-1 bg-grey rounded-full'>
                                                            <EmailIcon />
                                                        </div> 
                                                        <div className="top-0 bottom-0 my-auto">EMAIL</div>
                                                    </div>

                                                    <p className="text-center mb-10 text-white">
                                                        CISCOFIRESYSTEMS@GMAIL.COM
                                                    </p>

                                                    <div className="bg-darkgrey p-1 rounded-full text-white font-bold flex gap-5 mb-5">
                                                        <div className='p-1 bg-grey rounded-full'>
                                                            <AccessTimeFilledIcon />
                                                        </div> 
                                                        <div className="top-0 bottom-0 my-auto">BUSINESS HOURS</div>
                                                    </div>

                                                    <p className="text-center text-white">
                                                        MONDAY — FRIDAY 9AM – 5PM <br/>
                                                        SATURDAY — 10AM – 3PM <br/>
                                                        SUNDAY — CLOSED

                                                    </p>

                                                </div>
                                            </div>
                                            
                                            <div className='px-10'>

                                                <form ref={form} 
                                                onSubmit={sendEmail}
                                                className="space-y-8 md:border-0 border-t-1 border-grey">

                                                <p className="text-center text-white bg-navyblue p-2 rounded-2xl md:text-lg text-sm md:mt-0 mt-10">Want to get more information?</p>

                                                    <div>
                                                        <label htmlFor="user_name" className="block mb-2 text-sm font-medium text-white">Your Name</label>
                                                        <input
                                                            id="user_name"
                                                            name="user_name"
                                                            // value={inputValues.user_name}
                                                            // onChange={handleChange}
                                                            type="text"
                                                            // autoComplete="current-password"
                                                            required
                                                            className="relative block w-full  appearance-none  rounded-3xl border border-linegrey px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                            placeholder="Name..."
                                                        />
                                                    </div>

                                                    <div>
                                                        <label htmlFor="user_email" className="block mb-2 text-sm font-medium text-white">Your email</label>
                                                        <input
                                                            id="user_email"
                                                            name="user_email"
                                                            // value={inputValues.user_email}
                                                            // onChange={handleChange}
                                                            type="email"
                                                            autoComplete="current-password"
                                                            required
                                                            className="relative block w-full appearance-none  rounded-full border border-linegrey px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                            placeholder="xyz@email.com"
                                                        />
                                                    </div>

                                                    <div className="sm:col-span-2">
                                                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">Your message</label>
                                                        <textarea
                                                            id="message"
                                                            name="message"
                                                            // value={inputValues.message}
                                                            // onChange={handleChange}
                                                            className="relative block w-full appearance-none  rounded-lg border border-linegrey px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Leave a comment..."></textarea>
                                                        </div>
                                                        <button type="submit"
                                                            // onClick={handleClick}
                                                            className="py-3 px-5 text-sm font-medium w-full text-center text-white rounded-3xl bg-red border-2 border-red hover:bg-white hover:text-red cursor-pointer">Send message
                                                        </button>

                                                    </form>
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

export default Contactusform;
