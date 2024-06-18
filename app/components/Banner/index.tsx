import Link from "next/link";

const Banner = () => {
    return (
        <div className="banner">
            {/* <img src="/images/banner/bannerpic.png" alt="hero-image" className="" /> */}
            <img src="/images/services/fireAlarms.webp" alt="hero-image" className="blur" />

        
            <div className='centered absolute top-20 max-w-7xl lg:p-32 md:p-10 p-5'>

                        <h1 className='w-fit sm:font-bold font-semibold sm:px-5 sm:py-1 px-2 rounded-3xl tracking-wider text-white bg-red sm:text-lg text-xs hover:text-red hover:bg-[#fee2e2] hover:shadow-xl sm:mt-22 mt-20 typewriter'>YOUR PROBLEM SOLVING COMPANY</h1>
                        <h1 className='font-black text-white lg:text-6xl md:text-5xl sm:text-4xl text-xl py-3 banner_title_animation mb-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>
                            Cisco Fire Security Communication
                        </h1>

    <div className='grid grid-cols-4 gap-1' >
        <div>

            <div className="bg-white px-1 py-1 shadow-lg rounded-t-xl h-22">
                <img src='/images/services/fireAlarms.webp' alt="fire alarms" 
            className="inline-block m-auto rounded-xl w-full object-cover h-20" />
            </div>
            
            <div className="bg-red h-14 rounded-b-xl">
                <h4 className='text-xs font-semibold pt-1 text-black'>Fire Alarms</h4>
            </div>
        </div>

        <div>

            <div className="bg-white px-1 py-1 shadow-lg rounded-t-xl h-22">
                <img src='/images/services/accessControl.webp' alt="fire alarms" 
                className="inline-block m-auto rounded-xl w-full object-cover h-20" />
            </div>

            <div className="bg-red h-14 rounded-b-xl">
                <h4 className='text-xs font-semibold pt-1 text-black'>Access Control</h4>
            </div>

        </div>

        <div>

            <div className="bg-white px-1 py-1 shadow-lg rounded-t-xl h-22">
                <img src='/images/services/videoIntercom.jpg' alt="fire alarms" 
                className="inline-block m-auto rounded-xl w-full object-cover h-20" />
            </div>

            <div className="bg-red h-14 rounded-b-xl">
                <h4 className='text-xs font-semibold pt-1 text-black'>Video Intercom</h4>
            </div>

        </div>

        <div>

            <div className="bg-white px-1 py-1 shadow-lg rounded-t-xl h-22">
                <img src='/images/services/CCTV.jpg' alt="fire alarms" 
                className="inline-block m-auto rounded-xl w-full object-cover h-20" />
            </div>

            <div className="bg-red h-14 rounded-b-xl">
                <h4 className='text-xs font-semibold pt-1 text-black'>CCTV</h4>
            </div>

        </div>

        <div>

            <div className="bg-white px-1 py-1 shadow-lg rounded-t-xl h-22">
                <img src='/images/services/intrusionAlarms.jpg' alt="fire alarms" 
                className="inline-block m-auto rounded-xl w-full object-cover h-20" />
            </div>

            <div className="bg-red h-14 rounded-b-xl">
                <h4 className='text-xs font-semibold pt-1 text-black'>Intrusion Alarms</h4>
            </div>

        </div>

        <div>

            <div className="bg-white px-1 py-1 shadow-lg rounded-t-xl h-22">
                <img src='/images/services/slidingDoor.jpg' alt="fire alarms" 
                className="inline-block m-auto rounded-xl w-full object-cover h-20" />
            </div>

            <div className="bg-red h-14 rounded-b-xl">
                <h4 className='text-xs font-semibold pt-1 text-black'>Sliding Doors/ Swing Doors Operators</h4>
            </div>

        </div>

        <div>

            <div className="bg-white px-1 py-1 shadow-lg rounded-t-xl h-22">
                <img src='/images/services/magneticLocks.jpg' alt="fire alarms" 
                className="inline-block m-auto rounded-xl w-full object-cover h-20" />
            </div>

            <div className="bg-red h-14 rounded-b-xl">
                <h4 className='text-xs font-semibold pt-1 text-black'>Magnetic Locks/ Security Locks</h4>
            </div>

        </div>

        <div className="">

            <div className="bg-white px-1 py-1 shadow-lg rounded-t-xl h-22">
                <img src='/images/services/NetWServers.jpg' alt="fire alarms" 
                className="inline-block m-auto rounded-xl w-full object-cover h-20" />
            </div>

            <div className="bg-red h-14 rounded-b-xl">
                <h4 className='text-xs font-semibold pt-1 text-black'>Networking/ Wiring Server</h4>
            </div>

        </div>







</div>
                        
        </div>
        </div>

    )
}

export default Banner;
