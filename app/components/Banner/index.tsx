import Link from "next/link";

const Banner = () => {
    return (
        <div className="banner">
            {/* <img src="/images/banner/bannerpic.png" alt="hero-image" className="" /> */}
            <div className="">
            <img src="/images/services/fireAlarms.webp" alt="hero-image" className="blur-lg object-cover w-full" />

            </div>

        
            <div className='centered absolute m-auto left-0 right-0 top-20 xl:p-72 lg:p-32 md:p-10 p-5'>

                        <h1 className='w-fit sm:font-bold font-semibold sm:px-5 lg:py-5 sm:py-1 px-2 rounded-full tracking-wider text-white bg-red lg:text-4xl sm:text-lg text-xs hover:text-red hover:bg-[#fee2e2] hover:shadow-xl sm:mt-22 mt-20 typewriter'>YOUR PROBLEM SOLVING COMPANY</h1>
                        <h1 className='font-black text-white md:text-5xl lg:text-8xl sm:text-4xl text-xl lg:py-10 py-3 banner_title_animation mb-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>
                            Cisco Fire Security Communication
                        </h1>

    <div className='grid grid-cols-4 lg:gap-3 gap-1' >
        <div className="transition ease-in-out delay-150 hover:-translate-y-5 cursor-pointer">

            <div className="bg-white px-1 py-1 shadow-lg rounded-t-xl lg:h-32 h-22">
                <img src='/images/services/fireAlarms.webp' alt="fire alarms" 
            className="inline-block m-auto rounded-xl w-full object-cover lg:h-full h-20" />
            </div>
            
            <div className="bg-red h-14 rounded-b-xl">
                <h4 className='lg:text-lg text-xs font-semibold pt-1 text-white'>Fire Alarms</h4>
            </div>
        </div>

        <div className="transition ease-in-out delay-150 hover:-translate-y-5 cursor-pointer">

            <div className="bg-white px-1 py-1 shadow-lg rounded-t-xl lg:h-32 h-22">
                <img src='/images/services/accessControl.webp' alt="fire alarms" 
                className="inline-block m-auto rounded-xl w-full object-cover lg:h-full h-20" />
            </div>

            <div className="bg-red h-14 rounded-b-xl">
                <h4 className='lg:text-lg text-xs font-semibold pt-1 text-white'>Access Control</h4>
            </div>

        </div>

        <div className="transition ease-in-out delay-150 hover:-translate-y-5 cursor-pointer">

            <div className="bg-white px-1 py-1 shadow-lg rounded-t-xl lg:h-32 h-22">
                <img src='/images/services/videoIntercom.jpg' alt="fire alarms" 
                className="inline-block m-auto rounded-xl w-full object-cover lg:h-full h-20" />
            </div>

            <div className="bg-red h-14 rounded-b-xl">
                <h4 className='lg:text-lg text-xs font-semibold pt-1 text-white'>Video Intercom</h4>
            </div>

        </div>

        <div className="transition ease-in-out delay-150 hover:-translate-y-5 cursor-pointer">

            <div className="bg-white px-1 py-1 shadow-lg rounded-t-xl lg:h-32 h-22">
                <img src='/images/services/CCTV.jpg' alt="fire alarms" 
                className="inline-block m-auto rounded-xl w-full object-cover lg:h-full h-20" />
            </div>

            <div className="bg-red h-14 rounded-b-xl">
                <h4 className='lg:text-lg text-xs font-semibold pt-1 text-white'>CCTV</h4>
            </div>

        </div>

        <div className="transition ease-in-out delay-150 hover:-translate-y-5 cursor-pointer">

            <div className="bg-white px-1 py-1 shadow-lg rounded-t-xl lg:h-32 h-22">
                <img src='/images/services/intrusionAlarms.jpg' alt="fire alarms" 
                className="inline-block m-auto rounded-xl w-full object-cover lg:h-full h-20" />
            </div>

            <div className="bg-red h-14 rounded-b-xl">
                <h4 className='lg:text-lg text-xs font-semibold pt-1 text-white'>Intrusion Alarms</h4>
            </div>

        </div>

        <div className="transition ease-in-out delay-150 hover:-translate-y-5 cursor-pointer">

            <div className="bg-white px-1 py-1 shadow-lg rounded-t-xl lg:h-32 h-22">
                <img src='/images/services/slidingDoor.jpg' alt="fire alarms" 
                className="inline-block m-auto rounded-xl w-full object-cover lg:h-full h-20" />
            </div>

            <div className="bg-red h-14 rounded-b-xl">
                <h4 className='lg:text-lg text-xs font-semibold pt-1 text-white'>Sliding Doors/ Swing Doors Operators</h4>
            </div>

        </div>

        <div className="transition ease-in-out delay-150 hover:-translate-y-5 cursor-pointer">

            <div className="bg-white px-1 py-1 shadow-lg rounded-t-xl lg:h-32 h-22">
                <img src='/images/services/magneticLocks.jpg' alt="fire alarms" 
                className="inline-block m-auto rounded-xl w-full object-cover lg:h-full h-20" />
            </div>

            <div className="bg-red h-14 rounded-b-xl">
                <h4 className='lg:text-lg text-xs font-semibold pt-1 text-white'>Magnetic Locks/ Security Locks</h4>
            </div>

        </div>

        <div className="transition ease-in-out delay-150 hover:-translate-y-5 cursor-pointer">

            <div className="bg-white px-1 py-1 shadow-lg rounded-t-xl lg:h-32 h-22">
                <img src='/images/services/NetWServers.jpg' alt="fire alarms" 
                className="inline-block m-auto rounded-xl w-full object-cover lg:h-full h-20" />
            </div>

            <div className="bg-red h-14 rounded-b-xl">
                <h4 className='lg:text-lg text-xs font-semibold pt-1 text-white'>Networking/ Wiring Server</h4>
            </div>

        </div>







</div>
                        
        </div>
        </div>

    )
}

export default Banner;
