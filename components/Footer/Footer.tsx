import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <div className="bg-grey">
            <div className="mx-auto max-w-2xl pt-48 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="my-24 grid grid-cols-1 gap-y-10 gap-x-14 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">

                    {/* COLUMN-1 */}

                    <div className='col-span-4 md:col-span-12 lg:col-span-4'>
                        <div className="bg-lightblue rounded-3xl">
                            <img src={'/images/CiscoLogo.png'} alt="logo" className='w-48 m-auto py-5' />
                        </div>
                        <div className='flex gap-4 my-5'>
                            <Link href="https://facebook.com" className='footer-fb-icons'>
                                <Image src={'/images/footer/facebook.svg'} alt="facebook" width={15} height={20} />
                            </Link>
                            <Link href="https://twitter.com" className='footer-icons'>
                                <Image src={'/images/footer/twitter.svg'} alt="twitter" width={20} height={20} />
                            </Link>
                            <Link href="https://instagram.com" className='footer-icons'>
                                <Image src={'/images/footer/instagram.svg'} alt="instagram" width={20} height={20} />
                            </Link> 
                        </div>
                    </div>

                    {/* CLOUMN-2/3 */}

                   
                        <div className="group relative col-span-2 md:col-span-4 lg:col-span-2">
                            <ul>
                                
                                    <li className='mb-5'>
                                            <Link href='/' className="text-white text-sm font-normal mb-6 space-links">Home</Link>
                                    </li>
                                    <li className='mb-5'>
                                            <Link href='/aboutus' className="text-white text-sm font-normal mb-6 space-links">About Us</Link>
                                    </li>
                                    <li className='mb-5'>
                                            <Link href='/architects' className="text-white text-sm font-normal mb-6 space-links">Architects</Link>
                                    </li>
                                    <li className='mb-5'>
                                            <Link href='/contractors' className="text-white text-sm font-normal mb-6 space-links">Contractors</Link>
                                    </li>
                                    <li className='mb-5'>
                                            <Link href='/electricians' className="text-white text-sm font-normal mb-6 space-links">Electricians</Link>
                                    </li>
                                    <li className='mb-5'>
                                            <Link href='/realestateagents' className="text-white text-sm font-normal mb-6 space-links">Real Estate Agents</Link>
                                    </li>
                                    <li className='mb-5'>
                                            <Link href='/buildingmanagers' className="text-white text-sm font-normal mb-6 space-links">Building Managers</Link>
                                    </li>
                            </ul>
                        </div>

                        <div className="group relative col-span-2 md:col-span-4 lg:col-span-2">
                            <ul>
                                
                                    <li className='mb-5'>
                                            <Link href='/firealarms' className="text-white text-sm font-normal mb-6 space-links">Fire Alarms</Link>
                                    </li>
                                    <li className='mb-5'>
                                            <Link href='/accesscontrol' className="text-white text-sm font-normal mb-6 space-links">Access Control</Link>
                                    </li>
                                    <li className='mb-5'>
                                            <Link href='/videointercom' className="text-white text-sm font-normal mb-6 space-links">Video Intercom</Link>
                                    </li>
                                    <li className='mb-5'>
                                            <Link href='/cctv' className="text-white text-sm font-normal mb-6 space-links">CCTV</Link>
                                    </li>
                                    <li className='mb-5'>
                                            <Link href='/intrusionalarms' className="text-white text-sm font-normal mb-6 space-links">Intrusion Alarms</Link>
                                    </li>
                                    <li className='mb-5'>
                                            <Link href='/slidingswingdoors' className="text-white text-sm font-normal mb-6 space-links">Sliding/ Swing Doors</Link>
                                    </li>
                                    <li className='mb-5'>
                                            <Link href='/magneticsecuritylocks' className="text-white text-sm font-normal mb-6 space-links">Magnetic Locks</Link>
                                    </li>
                                    <li className='mb-5'>
                                            <Link href='/networkingwiring' className="text-white text-sm font-normal mb-6 space-links">Networking/ Wiring Servers</Link>
                                    </li>
                            </ul>
                        </div>

                    {/* CLOUMN-4 */}

                    <div className='col-span-4 md:col-span-4 lg:col-span-4'>
                        <div className="flex gap-2">
                            <Image src={'/images/footer/mask.svg'} alt="mask-icon" width={24} height={24} />
                            <h5 className="text-base font-normal text-offwhite">123 Main Street
New York, NY 10001</h5>
                        </div>
                        <div className="flex gap-4 mt-10">
                            <Image src={'/images/footer/telephone.svg'} alt="telephone-icon" width={24} height={24} />
                            <div>
                            <h5 className="text-base font-normal text-offwhite"><span className="font-bold">NJ</span> 201-250-3672</h5>
                            <h5 className="text-base font-normal text-offwhite"><span className="font-bold">NY</span> 718-427-4881</h5>
                            <h5 className="text-base font-normal text-offwhite"><span className="font-bold">LI</span> 516-800-2757</h5>
                            <h5 className="text-base font-normal text-offwhite"><span className="font-bold">UPSTATE NY</span> 914-760-2100</h5>
                            <h5 className="text-base font-normal text-offwhite"><span className="font-bold">SUFFOLK COUNTY</span> 631-784-5440</h5>
                            



                            </div>
                           
                        </div>
                        <div className="flex gap-2 mt-10">
                            <Image src={'/images/footer/email.svg'} alt="email-icon" width={24} height={24} />
                            <h5 className="text-base font-normal text-offwhite">ciscofiresystems@gmail.com</h5>
                        </div>
                    </div>

                </div>

                {/* All Rights Reserved */}

                <div className='py-10 lg:flex items-center justify-between border-t border-t-lightblue'>
                    <h4 className='text-offwhite text-sm text-center lg:text-start font-normal'>@2024 Fae (Pvt) Ltd. All Rights Reserved by <Link className="font-semibold text-black" href="https://faeglobalbiz.wordpress.com" target="_blank"> Fae.com</Link></h4>
                    <div className="flex gap-5 mt-5 lg:mt-0 justify-center lg:justify-start">
                        <h4 className='text-offwhite text-sm font-normal'><Link href="/" target="_blank">Privacy policy</Link></h4>
                        <div className="h-5 bg-black w-0.5"></div>
                        <h4 className='text-offwhite text-sm font-normal'><Link href="/" target="_blank">Terms & conditions</Link></h4>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer;
