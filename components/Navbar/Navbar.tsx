"use client"
import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Contactusform from './Contactus';

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

// const navigation: NavigationItem[] = [
//     { name: 'Home', href: '#aboutus-section', current: false },
//     { name: 'Architects', href: '#services-section', current: false },
//     { name: 'Computer Servers', href: '#faq-section', current: false },
//     { name: 'Fire Alarms', href: '#blog-section', current: false },
//     { name: 'Pre K Fire Alarm', href: '#testimonial-section', current: false },
//     { name: 'Pre K Fire Alarm', href: '#testimonial-section', current: false },
// ]

const navigation: NavigationItem[] = [
    { name: 'Home', href: '/home', current: false },
    { name: 'About Us', href: '/aboutus', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {

    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <Disclosure as="nav" className="navbar">
            <>
                <div className="mx-auto max-w-7xl p-3 md:p-4 lg:px-8">
                    <div className="relative flex h-12 sm:h-20 items-center">
                        <div className="flex flex-1 items-center sm:justify-between">

                            {/* LOGO */}

                            <div className="flex flex-shrink-0 pr-5">

                                    <div className="flex" id="navbar-sticky">
                                    <a className='sm:w-52 w-36' href='/'>
                                    <img src='/images/CiscoLogo.png' className='' />
                                    </a>
                                    </div>
                            </div>


                            {/* <button className='hidden lg:flex justify-end text-xl font-semibold bg-transparent py-4 px-6 lg:px-12 navbutton rounded-full hover:bg-navyblue hover:text-white'>Contact us</button> */}
                            <Contactusform />
                        </div>


                        {/* DRAWER FOR MOBILE VIEW */}

                        {/* DRAWER ICON */}

                        <div className='block lg:hidden'>
                            <Bars3Icon className="block h-6 w-6 text-navyblue" aria-hidden="true" onClick={() => setIsOpen(true)} />
                        </div>

                        {/* DRAWER LINKS DATA */}

                        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                            <Drawerdata />
                        </Drawer>

                    </div>
                </div>
            </>
        </Disclosure>
    )
}

export default Navbar;
