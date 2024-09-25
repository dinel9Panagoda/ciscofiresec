"use client"
import { Fragment, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useRouter } from "next/navigation";

import Image from "next/image";
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { ToastContainer, toast } from 'react-toastify';

const Beliefs = () => {

    const form = useRef();

    const router = useRouter();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID, process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID, form.current, {
            publicKey: process.env.NEXT_PUBLIC_EMAIL_USER_ID
        }).then(
            () => {
                toast.success("Thank you for your interest!");
                router.push('/');

            },
            (error) => {
                toast.error('Error...');
            },
        );
    };


    return (
        <>
                                            <ToastContainer />

                <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 rounded-3xl'>


<div className="text-center">
                    <h3 className="text-red text-lg font-normal tracking-widest">CONTACT US. WE ARE READY TO HELP</h3>
                    <h2 className="text-4xl sm:text-6xl font-bold my-6 leading-10"> Take advantage of <span className="text-red">40</span> years experience</h2>
                    <p className="text-lightblack text-base font-normal">Our dedicated team of experts brings together extensive experience and a deep understanding of re safety regulations and best practices.</p>
                </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 my-16 mx-5 gap-5'>

                {/* COLUMN-1 */}

                <div className="bg-lightblue bg-beliefs pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl">
                    <h2 className="text-lg font-normal text-navyblue tracking-widest mb-5 text-center sm:text-start">SEND US A MESSAGE</h2>
                    <div className="py-8 lg:py-8 px-4 mx-auto max-w-screen-md mb-20">

<form  ref={form} 
                                                onSubmit={sendEmail} className="space-y-8" 
>
    <div>
        <label htmlFor="user_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Name</label>
        <input
            id="user_name"

            name="user_name"
            // value={inputValues.input1}
            // onChange={handleChange}

            type="text"
            required
            className="relative block w-full appearance-none  rounded-3xl border border-linegrey px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            placeholder="Name..."
        />
    </div>
    <div>
        <label htmlFor="user_email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
        <input
            id="user_email"
            name="user_email"
            // value={inputValues.input2}
            // onChange={handleChange}

            type="email"
            required
            className="relative block w-full appearance-none  rounded-full border border-linegrey px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            placeholder="xyz@email.com"
        />
    </div>
    <div className="sm:col-span-2">
        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
        <textarea
            id="message"
            name="message"
            // value={inputValues.input3}
            // onChange={handleChange}
            className="relative block w-full appearance-none  rounded-lg border border-linegrey px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Leave a comment..."></textarea>
    </div>
    <button type="submit"
        // onClick={handleClick}
        // disabled={isDisabled}
        className="py-3 px-5 text-sm font-medium w-full text-center text-white rounded-3xl bg-red border-2 border-red hover:bg-white hover:text-red cursor-pointer">Send message</button>

</form>

</div>
                </div>

                {/* COLUMN-2 */}


                <div className="bg-lightgrey bg-build pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl">
                    <h2 className="text-lg font-normal text-navyblue tracking-widest mb-5 text-center sm:text-start">GET IN TOUCH</h2>
                    <div className="py-8 lg:py-8 px-4 mx-auto max-w-screen-md mb-20">

                    
                    <div className="bg-navyblue p-3 rounded-full text-white font-bold flex gap-5 mb-5">
                    <div className='footer-icons'>
                                <PhoneIcon />
                            </div> 
                         <div className="top-0 bottom-0 my-auto">NUMBERS</div>
                    </div>

                    
                    <p className="pl-3 mb-10 text-center">
                    <span className='font-bold text-navyblue'>NJ</span> 201-250-3672 <br/>
                    <span className='font-bold text-navyblue'>NY</span> 718-527-4881 <br/>
                    <span className='font-bold text-navyblue'>LI</span> 516-800-2757 <br/>
                    <span className='font-bold text-navyblue'>UPSTATE NY</span> 914-760-2100 <br/>
                    <span className='font-bold text-navyblue'>SUFFOLK COUNTY</span> 631-784-5440 <br/>

                    </p>

                    <div className="bg-navyblue p-3 rounded-full text-white font-bold flex gap-5 mb-5">
                    <div className='footer-icons'>
                                <EmailIcon />
                            </div> 
                         <div className="top-0 bottom-0 my-auto">EMAIL</div>
                    </div>

                    <p className="text-center mb-10">
                        CISCOFIRESYSTEMS@GMAIL.COM
                    </p>

                    <div className="bg-navyblue p-3 rounded-full text-white font-bold flex gap-5 mb-5">
                    <div className='footer-icons'>
                                <AccessTimeFilledIcon />
                            </div> 
                         <div className="top-0 bottom-0 my-auto">BUSINESS HOURS</div>
                    </div>

                    <p className="text-center mb-10">
                    MONDAY — FRIDAY 9AM – 5PM <br/>
                    SATURDAY — 10AM – 3PM <br/>
                    SUNDAY — CLOSED

                    </p>

</div>
                </div>

            </div>
        </div>
        </>

    )
}

export default Beliefs;
