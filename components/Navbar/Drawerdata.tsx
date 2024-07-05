import React from "react";
import Link from "next/link";
import Contactusform from "./Contactus";

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'Home', href: '/home', current: false },
    { name: 'About Us', href: '/aboutus', current: false },
    { name: 'Architects', href: '/architects', current: false },
    { name: 'Computer Servers', href: '/computer-servers', current: false },
    { name: 'Fire Alarms', href: '/fire-alarms', current: false },
    { name: 'Pre K Fire Alarm', href: '/pre-k-fire-alarm', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Data = () => {
    return (
        <div className="rounded-md max-w-sm w-full mx-auto">
            <div className="flex-1 space-y-4 py-1">
                <div className="sm:block">
                    <div className="space-y-1 px-5 pt-2 pb-3">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                    item.current ? 'bg-gray-900 text-purple' : 'text-black hover:bg-gray-700 hover:text-purple',
                                    'block  py-2 rounded-md text-base font-medium'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="mt-4"></div>
                        <button className="border-2 border-red text-sm font-semibold py-3 px-5 lg:px-5 navbutton rounded-full bg-red text-white w-full hover:bg-transparent  hover:text-red hover:border-2">
                            Contact Us
                        </button>
                        {/* <Contactusform /> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Data;
