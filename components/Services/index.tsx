import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from '@heroicons/react/20/solid'

interface datatype {
    heading: string;
    imgSrc: string;
    paragraph: string;
    link: string;
}

const Servicedata: datatype[] = [
    {
        heading: "Fire Alarms",
        imgSrc: "/images/services/imgOne.svg",
        paragraph: 'Established in 1982, our company has been at the forefront of re security communication for over four decades. With a steadfast commitment to innovation and excellence, we have evolved into a leading provider of comprehensive re security solutions.',
        link: 'Learn more'
    },
    {
        heading: "Services.",
        imgSrc: "/images/aboutus/imgTwo.svg",
        paragraph: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem',
        link: 'Learn more'
    },
    // {
    //     heading: "Our Works.",
    //     imgSrc: "/images/aboutus/imgThree.svg",
    //     paragraph: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem',
    //     link: 'Learn more'
    // },
]

const OurServices = () => {
    return (

        <div id="services-section">
            <div className='mx-auto px-4 py-24 lg:px-10 bg-lightblue rounded-3xl relative -top-5'>
            <div className='mx-auto max-w-7xl sm:py-4 lg:px-8 '>

<div className="text-center">
    <h3 className="text-red text-lg font-normal tracking-widest sm:pt-0 pt-64">OUR SERVICES</h3>
    <h3 className="text-4xl sm:text-6xl font-bold mb-10">What services we offer</h3>
</div>


{/* <Slider {...settings}> */}
    {/* {postData.map((items, i) => ( */}
<div className='grid lg:grid-cols-4 sm:grid-cols-3 sm:mx-5 mx-14' >
    <div >

        <div className='bg-white m-3 px-3 pt-3 pb-3 shadow-lg rounded-3xl relative'>
            <img src='/images/services/fireAlarms.webp' alt="gaby" 
            className="inline-block m-auto rounded-3xl w-full h-56 object-cover" />


            <h4 className='text-2xl font-bold pt-6 text-black'>Fire Alarms</h4>
            <div>
                <Link href="/">
                <h3 className="bg-red text-white hover:bg-black hover:shadow-xl py-3 px-6 rounded-full mt-7 article-img transition ease-in-out delay-150 hover:-translate-y-5">Read More ... </h3>
            </Link>
            </div>


        </div>

    </div>

    <div >

        <div className='bg-white m-3 px-3 pt-3 pb-3 shadow-lg rounded-3xl relative'>
            <img src='/images/services/accessControl.png' alt="gaby" 
            className="inline-block m-auto rounded-3xl w-full h-56 object-cover" />


            <h4 className='text-2xl font-bold pt-6 text-black'>Access Control</h4>
            <div>
                <Link href="/">
                <h3 className="bg-red text-white hover:bg-black hover:shadow-xl py-3 px-6 rounded-full mt-7 article-img transition ease-in-out delay-150 hover:-translate-y-5">Read More ... </h3>
            </Link>
            </div>


        </div>

    </div>

    <div >

<div className='bg-white m-3 px-3 pt-3 pb-3 shadow-lg rounded-3xl relative'>
<img src='/images/services/videoIntercom.jpg' alt="gaby" 
className="inline-block m-auto rounded-3xl w-full h-56 object-cover" />


<h4 className='text-2xl font-bold pt-6 text-black'>Video Intercom</h4>
<div>
<Link href="/">
<h3 className="bg-red text-white hover:bg-black hover:shadow-xl py-3 px-6 rounded-full mt-7 article-img transition ease-in-out delay-150 hover:-translate-y-5">Read More ... </h3>
</Link>
</div>


</div>

</div>

<div >

<div className='bg-white m-3 px-3 pt-3 pb-3 shadow-lg rounded-3xl relative'>
<img src='/images/services/CCTV.jpg' alt="gaby" 
className="inline-block m-auto rounded-3xl w-full h-56 object-cover" />


<h4 className='text-2xl font-bold pt-6 text-black'>CCTV</h4>
<div>
<Link href="/">
<h3 className="bg-red text-white hover:bg-black hover:shadow-xl py-3 px-6 rounded-full mt-7 article-img transition ease-in-out delay-150 hover:-translate-y-5">Read More ... </h3>
</Link>
</div>


</div>

</div>

<div >

<div className='bg-white m-3 px-3 pt-3 pb-3 shadow-lg rounded-3xl relative'>
<img src='/images/services/intrusionAlarms.jpg' alt="gaby" 
className="inline-block m-auto rounded-3xl w-full h-56 object-cover" />


<h4 className='text-2xl font-bold pt-6 text-black'>Intrusion Alarms</h4>
<div>
<Link href="/">
<h3 className="bg-red text-white hover:bg-black hover:shadow-xl py-3 px-6 rounded-full mt-7 article-img transition ease-in-out delay-150 hover:-translate-y-5">Read More ... </h3>
</Link>
</div>


</div>

</div>

<div >

<div className='bg-white m-3 px-3 pt-3 pb-3 shadow-lg rounded-3xl relative'>
<img src='/images/services/slidingDoor.jpeg' alt="gaby" 
className="inline-block m-auto rounded-3xl w-full h-56 object-cover" />


<h4 className='lg:text-2xl sm:text-xl font-bold pt-6 text-black'>Sliding Doors/ Swing Doors Operators</h4>
<div>
<Link href="/">
<h3 className="bg-red text-white hover:bg-black hover:shadow-xl py-3 px-6 rounded-full mt-7 article-img transition ease-in-out delay-150 hover:-translate-y-5">Read More ... </h3>
</Link>
</div>


</div>

</div>

<div >

<div className='bg-white m-3 px-3 pt-3 pb-3 shadow-lg rounded-3xl relative'>
<img src='/images/services/magneticLocks.jpg' alt="gaby" 
className="inline-block m-auto rounded-3xl w-full h-56 object-cover" />


<h4 className='lg:text-2xl sm:text-xl font-bold pt-6 text-black'>Magnetic Locks/ Security Locks</h4>
<div>
<Link href="/">
<h3 className="bg-red text-white hover:bg-black hover:shadow-xl py-3 px-6 rounded-full mt-7 article-img transition ease-in-out delay-150 hover:-translate-y-5">Read More ... </h3>
</Link>
</div>


</div>

</div>

<div >

<div className='bg-white m-3 px-3 pt-3 pb-3 shadow-lg rounded-3xl relative'>
<img src='/images/services/NetWServers.jpeg' alt="gaby" 
className="inline-block m-auto rounded-3xl w-full h-56 object-cover" />


<h4 className='lg:text-2xl sm:text-xl font-bold pt-6 text-black'>Networking/ Wiring Server</h4>
<div>
<Link href="/">
<h3 className="bg-red text-white hover:bg-black hover:shadow-xl py-3 px-6 rounded-full mt-7 article-img transition ease-in-out delay-150 hover:-translate-y-5">Read More ... </h3>
</Link>
</div>


</div>

</div>




</div>
    {/* ))} */}
{/* </Slider> */}
<div />
</div>
            </div>
        </div>

    )
}

export default OurServices;