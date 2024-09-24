import Link from "next/link";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const Banner = () => {
    return (

        <div className="">

            {/* <div className="bg-grey"> */}
                {/* <img src="/images/banner/bannerpic.jpg" alt="hero-image" className="blur-sm object-cover w-full" /> */}
            {/* </div> */}
    
            <div className='centered m-auto left-0 right-0 top-0 bottom-0 2xl-72 xl:p-32 lg:p-12 md:p-10 p-5 bg-darkgrey sm:py-32 py-20'>

                    <h1 className='w-fit sm:font-bold font-semibold sm:px-5 2xl:py-5 sm:py-1 px-2 rounded-full tracking-wider text-white bg-red 2xl:text-4xl sm:text-lg text-xs hover:text-red hover:bg-[#fee2e2] hover:shadow-xl sm:mt-22 mt-20 typewriter'>YOUR PROBLEM SOLVING COMPANY</h1>

                    <h1 className='font-black text-white md:text-5xl 2xl:text-8xl sm:text-4xl text-xl 2xl:py-20 sm:py-10  py-5 banner_title_animation mb-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-center'>
                        Cisco Fire Security Communication
                    </h1>


                    



                    <div className='grid sm:grid-cols-4 grid-cols-2 gap-3' >

                        <div className="transition rounded-3xl ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-grey shadow-3xl shadow-black">

                            <a href="/firealarms">

                            <div className="relative pt-2 shadow-lg rounded-3xl lg:h-56 h-32 mx-2">
                            <img src='/images/services/firealarms/fireAlarmsBanner.jpeg' alt="Fire Alarms" className="inline-block m-auto rounded-t-3xl rounded-b-xl w-full object-cover h-full" />
                            <span className="glassmorphism absolute lg:text-sm text-xs bottom-1 right-1 text-white py-1 px-3 rounded-full">
                                        <div>More Info <ArrowCircleRightIcon className="lg:text-4xl md:text-3xl sm:text-2xl inline-block fill-white" /></div>
                                        
                                    </span>

                                </div>

                                <div className="bg-grey lg:h-14 h-10 rounded-b-2xl mb-2 flex items-center justify-center mx-2 text-center">
                                    <h4 className='lg:text-sm text-xs font-semibold text-white pt-2 uppercase drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>Fire Alarms</h4>
                                </div>
                            </a>
                        </div> 
                        
                        <div className="transition rounded-3xl ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-grey shadow-3xl shadow-black">

                            <a href="/accesscontrol">

                            <div className="relative pt-2 shadow-lg rounded-3xl lg:h-56 h-32 mx-2">
                            <img src='/images/services/accesscontrol/AccessControlBanner.jpeg' alt="Access Control" className="inline-block m-auto rounded-t-3xl rounded-b-xl w-full object-cover h-full" />
                            <span className="glassmorphism absolute lg:text-sm text-xs bottom-1 right-1 text-white py-1 px-3 rounded-full">
                                        <div>More Info <ArrowCircleRightIcon className="lg:text-4xl md:text-3xl sm:text-2xl inline-block fill-white" /></div>
                                        
                                    </span>

                                </div>

                                <div className="bg-grey lg:h-14 h-10 rounded-b-2xl mb-2 flex items-center justify-center mx-2 text-center">
                                    <h4 className='lg:text-sm text-xs font-semibold text-white pt-2 uppercase drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>Access Control</h4>
                                </div>
                            </a>
                        </div>  

                        
                        <div className="transition rounded-3xl ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-grey shadow-3xl shadow-black">

                            <a href="/videointercom">

                            <div className="relative pt-2 shadow-lg rounded-3xl lg:h-56 h-32 mx-2">
                            <img src='/images/services/videointercom/HomeVideoIntrecom.png' alt="Video Intercom" className="inline-block m-auto rounded-t-3xl rounded-b-xl w-full object-cover h-full" />
                            <span className="glassmorphism absolute lg:text-sm text-xs bottom-1 right-1 text-white py-1 px-3 rounded-full">
                                        <div>More Info <ArrowCircleRightIcon className="lg:text-4xl md:text-3xl sm:text-2xl inline-block fill-white" /></div>
                                        
                                    </span>

                                </div>

                                <div className="bg-grey lg:h-14 h-10 rounded-b-2xl mb-2 flex items-center justify-center mx-2 text-center">
                                    <h4 className='lg:text-sm text-xs font-semibold text-white pt-2 uppercase drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>Video Intercom</h4>
                                </div>
                            </a>
                        </div>  
                        
                        <div className="transition rounded-3xl ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-grey shadow-3xl shadow-black">

                            <a href="/cctv">

                            <div className="relative pt-2 shadow-lg rounded-3xl lg:h-56 h-32 mx-2">
                            <img src='/images/services/cctv/CCTV.jpg' alt="CCTV" className="inline-block m-auto rounded-t-3xl rounded-b-xl w-full object-cover h-full" />
                            <span className="glassmorphism absolute lg:text-sm text-xs bottom-1 right-1 text-white py-1 px-3 rounded-full">
                                        <div>More Info <ArrowCircleRightIcon className="lg:text-4xl md:text-3xl sm:text-2xl inline-block fill-white" /></div>
                                        
                                    </span>

                                </div>

                                <div className="bg-grey lg:h-14 h-10 rounded-b-2xl mb-2 flex items-center justify-center mx-2 text-center">
                                    <h4 className='lg:text-sm text-xs font-semibold text-white pt-2 uppercase drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>CCTV</h4>
                                </div>
                            </a>
                        </div>  
           
                        <div className="transition rounded-3xl ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-grey shadow-3xl shadow-black">

                            <a href="/intrusionalarms">

                            <div className="relative pt-2 shadow-lg rounded-3xl lg:h-56 h-32 mx-2">
                            <img src='/images/services/intrusionalarms/IntrusionAlarmBanner.jpeg' alt="Intrusion Alarms" className="inline-block m-auto rounded-t-3xl rounded-b-xl w-full object-cover h-full" />
                            <span className="glassmorphism absolute lg:text-sm text-xs bottom-1 right-1 text-white py-1 px-3 rounded-full">
                                        <div>More Info <ArrowCircleRightIcon className="lg:text-4xl md:text-3xl sm:text-2xl inline-block fill-white" /></div>
                                        
                                    </span>

                                </div>

                                <div className="bg-grey lg:h-14 h-10 rounded-b-2xl mb-2 flex items-center justify-center mx-2 text-center">
                                    <h4 className='lg:text-sm text-xs font-semibold text-white pt-2 uppercase drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>Intrusion Alarms</h4>
                                </div>
                            </a>
                        </div>  
    
                        <div className="transition rounded-3xl ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-grey shadow-3xl shadow-black">

                            <a href="/slidingswingdoors">

                            <div className="relative pt-2 shadow-lg rounded-3xl lg:h-56 h-32 mx-2">
                            <img src='/images/services/slidingdoors/SlidingDoorBanner.jpeg' alt="Sliding Doors/ Swing Doors Operators" className="inline-block m-auto rounded-t-3xl rounded-b-xl w-full object-cover h-full" />
                            <span className="glassmorphism absolute lg:text-sm text-xs bottom-1 right-1 text-white py-1 px-3 rounded-full">
                                        <div>More Info <ArrowCircleRightIcon className="lg:text-4xl md:text-3xl sm:text-2xl inline-block fill-white" /></div>
                                        
                                    </span>

                                </div>

                                <div className="bg-grey lg:h-14 h-10 rounded-b-2xl mb-2 flex items-center justify-center mx-2 text-center">
                                    <h4 className='lg:text-sm text-xs font-semibold text-white pt-2 uppercase drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>Sliding Doors/ Swing Doors Operators</h4>
                                </div>
                            </a>
                        </div>     
                        
                        <div className="transition rounded-3xl ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-grey shadow-3xl shadow-black">

                            <a href="/magneticsecuritylocks">

                            <div className="relative pt-2 shadow-lg rounded-3xl lg:h-56 h-32 mx-2">
                            <img src='/images/services/magneticdoors/MagneticDoorBanner.jpeg' alt="Magnetic Locks/ Security Locks" className="inline-block m-auto rounded-t-3xl rounded-b-xl w-full object-cover h-full" />
                            <span className="glassmorphism absolute lg:text-sm text-xs bottom-1 right-1 text-white py-1 px-3 rounded-full">
                                        <div>More Info <ArrowCircleRightIcon className="lg:text-4xl md:text-3xl sm:text-2xl inline-block fill-white" /></div>
                                        
                                    </span>

                                </div>

                                <div className="bg-grey lg:h-14 h-10 rounded-b-2xl mb-2 flex items-center justify-center mx-2 text-center">
                                    <h4 className='lg:text-sm text-xs font-semibold text-white pt-2 uppercase drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>Magnetic Locks/ Security Locks</h4>
                                </div>
                            </a>
                        </div>
                                    
                        <div className="transition rounded-3xl ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-grey shadow-3xl shadow-black">

                            <a href="/networkingwiring">

                                <div className="relative pt-2 shadow-lg rounded-3xl lg:h-56 h-32 mx-2">
                                    <img src='/images/services/netservers/NetWServers.jpeg' alt="Networking/ Wiring Server" className="inline-block m-auto rounded-t-3xl rounded-b-xl w-full object-cover h-full" />

                                    <span className="glassmorphism absolute lg:text-sm text-xs bottom-1 right-1 text-white py-1 px-3 rounded-full">
                                        <div>More Info <ArrowCircleRightIcon className="lg:text-4xl md:text-3xl sm:text-2xl inline-block fill-white" /></div>
                                        
                                    </span>


                                    {/* <p className=" w-full py-1 rounded-t-3xl text-sm text-white absolute -bottom-2 glassmorphism border-x-2 border-t-2 border-linegrey text-center"><ArrowCircleRightIcon /></p> */}
                                </div>

                                <div className="bg-grey lg:h-14 h-10 rounded-b-2xl mb-2 flex items-center justify-center mx-2 text-center">
                                    <h4 className='lg:text-sm text-xs font-semibold text-white pt-2 uppercase drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>Networking/ Wiring Server</h4>
                                </div>
                            </a>
                        </div>







</div>
                    
    </div>
    </div>

//         <div className="banner">
//             {/* <img src="/images/banner/bannerpic.png" alt="hero-image" className="" /> */}
//             <div className="">
//             <img src="/images/banner/bannerpic.jpg" alt="hero-image" className="blur-sm object-cover w-full" />
            

//             </div>

        
//             <div className='centered absolute m-auto left-0 right-0 top-0 bottom-0 2xl-72 xl:p-32 lg:p-12 md:p-10 p-5'>

//                         <h1 className='w-fit sm:font-bold font-semibold sm:px-5 2xl:py-5 sm:py-1 px-2 rounded-full tracking-wider text-white bg-red 2xl:text-4xl sm:text-lg text-xs hover:text-red hover:bg-[#fee2e2] hover:shadow-xl sm:mt-22 mt-20 typewriter'>YOUR PROBLEM SOLVING COMPANY</h1>
//                         <h1 className='font-black text-white md:text-5xl 2xl:text-8xl sm:text-4xl text-xl 2xl:py-10 py-3 banner_title_animation mb-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>
//                             Cisco Fire Security Communication
//                         </h1>

//     <div className='grid grid-cols-4 xl:gap-10 lg:gap-3 gap-1 uppercase' >
//         <div className="transition ease-in-out delay-150 hover:-translate-y-5 cursor-pointer">

// <a href="/firealarms">
//             <div className="bg-white px-1 py-1 shadow-lg rounded-xl lg:h-56 h-22">

//                 <img src='/images/services/fireAlarms.webp' alt="fire alarms" 
//             className="inline-block m-auto rounded-xl w-full object-cover lg:h-full h-20" />
//             </div>

            
//             <div className="bg-grey lg:h-14 h-10 rounded-full mt-1 flex items-center justify-center mb-3">
//                 <h4 className='lg:text-lg text-xs font-semibold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>Fire Alarms</h4>
//             </div>
//             </a>
//         </div>

//         <div className="transition ease-in-out delay-150 hover:-translate-y-5 cursor-pointer">

// <a href="/accesscontrol">

//             <div className="bg-white px-1 py-1 shadow-lg rounded-xl lg:h-56 h-22">
//                 <img src='/images/services/accessControl.png' alt="fire alarms" 
//                 className="inline-block m-auto rounded-xl w-full object-cover lg:h-full h-20" />
//             </div>

//             <div className="bg-grey lg:h-14 h-10 rounded-full mt-1 flex items-center justify-center">
//                 <h4 className='lg:text-lg text-xs font-semibold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>Access Control</h4>
//             </div>
//             </a>

//         </div>

//         <div className="transition ease-in-out delay-150 hover:-translate-y-5 cursor-pointer">
// <a href="/videointercom">

//             <div className="bg-white px-1 py-1 shadow-lg rounded-xl lg:h-56 h-22">
//                 <img src='/images/services/videoIntercom.jpg' alt="fire alarms" 
//                 className="inline-block m-auto rounded-xl w-full object-cover lg:h-full h-20" />
//             </div>

//             <div className="bg-grey lg:h-14 h-10 rounded-full mt-1 flex items-center justify-center">
//                 <h4 className='lg:text-lg text-xs font-semibold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>Video Intercom</h4>
//             </div>
//             </a>

//         </div>

//         <div className="transition ease-in-out delay-150 hover:-translate-y-5 cursor-pointer">
// <a href="/cctv">

//             <div className="bg-white px-1 py-1 shadow-lg rounded-xl lg:h-56 h-22">
//                 <img src='/images/services/CCTV.jpg' alt="fire alarms" 
//                 className="inline-block m-auto rounded-xl w-full object-cover lg:h-full h-20" />
//             </div>

//             <div className="bg-grey lg:h-14 h-10 rounded-full mt-1 flex items-center justify-center">
//                 <h4 className='lg:text-lg text-xs font-semibold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>CCTV</h4>
//             </div>
//             </a>

//         </div>

//         <div className="transition ease-in-out delay-150 hover:-translate-y-5 cursor-pointer">
// <a href="/intrusionalarms">

//             <div className="bg-white px-1 py-1 shadow-lg rounded-xl lg:h-56 h-22">
//                 <img src='/images/services/intrusionAlarms.jpg' alt="fire alarms" 
//                 className="inline-block m-auto rounded-xl w-full object-cover lg:h-full h-20" />
//             </div>

//             <div className="bg-grey lg:h-14 h-10 rounded-full mt-1 flex items-center justify-center">
//                 <h4 className='lg:text-lg text-xs font-semibold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>Intrusion Alarms</h4>
//             </div>
//             </a>

//         </div>

//         <div className="transition ease-in-out delay-150 hover:-translate-y-5 cursor-pointer">
// <a href="/slidingswingdoors">

//             <div className="bg-white px-1 py-1 shadow-lg rounded-xl lg:h-56 h-22">
//                 <img src='/images/services/slidingDoor.jpeg' alt="fire alarms" 
//                 className="inline-block m-auto rounded-xl w-full object-cover lg:h-full h-20" />
//             </div>

//             <div className="bg-grey lg:h-14 h-10 rounded-full mt-1 flex items-center justify-center">
//                 <h4 className='lg:text-lg sm:text-xs text-xss font-semibold px-1 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>Sliding Doors/ Swing Doors Operators</h4>
//             </div>
//             </a>

//         </div>

//         <div className="transition ease-in-out delay-150 hover:-translate-y-5 cursor-pointer">
// <a href="/magneticsecuritylocks">

//             <div className="bg-white px-1 py-1 shadow-lg rounded-xl lg:h-56 h-22">
//                 <img src='/images/services/magneticLocks.jpg' alt="fire alarms" 
//                 className="inline-block m-auto rounded-xl w-full object-cover lg:h-full h-20" />
//             </div>

//             <div className="bg-grey lg:h-14 h-10 rounded-full mt-1 flex items-center justify-center">
//                 <h4 className='lg:text-lg sm:text-xs text-xss font-semibold p-1 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>Magnetic Locks/ Security Locks</h4>
//             </div>
//             </a>

//         </div>

//         <div className="transition ease-in-out delay-150 hover:-translate-y-5 cursor-pointer">
// <a href="/networkingwiring">

//             <div className="bg-white px-1 py-1 shadow-lg rounded-xl lg:h-56 h-22">
//                 <img src='/images/services/NetWServers.jpeg' alt="fire alarms" 
//                 className="inline-block m-auto rounded-xl w-full object-cover lg:h-full h-20" />
//             </div>

//             <div className="bg-grey lg:h-14 h-10 rounded-full mt-1 flex items-center justify-center">
//                 <h4 className='lg:text-lg sm:text-xs text-xss font-semibold pt-1 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>Networking/ Wiring Server</h4>
//             </div>
//             </a>

//         </div>







// </div>
                        
//         </div>
//         </div>

    )
}

export default Banner;
