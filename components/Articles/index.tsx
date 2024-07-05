"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";

// CAROUSEL DATA

// interface DataType {
//     time: string;
//     heading: string;
//     heading2: string;
//     date: string;
//     imgSrc: string;
//     name: string;
// }

// const postData: DataType[] = [
//     {
//         time: "Fire Alarms",
//         heading: 'We Launch Delia',
//         heading2: 'Webflow this Week!',
//         name: "Published on Startupon",
//         date: 'August 19, 2021',
//         imgSrc: '/images/services/fireAlarms.webp',
//     },
//     {
//         time: "5 min",
//         heading: 'We Launch Delia',
//         heading2: 'Webflow this Week!',
//         name: "Published on Startupon",
//         date: 'August 19, 2021',
//         imgSrc: '/images/articles/article2.png',
//     },
//     {
//         time: "5 min",
//         heading: 'We Launch Delia',
//         heading2: 'Webflow this Week!',
//         name: "Published on Startupon",
//         date: 'August 19, 2021',
//         imgSrc: '/images/articles/article3.png',
//     },
//     {
//         time: "5 min",
//         heading: 'We Launch Delia',
//         heading2: 'Webflow this Week!',
//         name: "Published on Startupon",
//         date: 'August 19, 2021',
//         imgSrc: '/images/articles/article.png',
//     },
//     {
//         time: "5 min",
//         heading: 'We Launch Delia',
//         heading2: 'Webflow this Week!',
//         name: "Published on Startupon",
//         date: 'August 19, 2021',
//         imgSrc: '/images/articles/article2.png',
//     },
//     {
//         time: "5 min",
//         heading: 'We Launch Delia',
//         heading2: 'Webflow this Week!',
//         name: "Published on Startupon",
//         date: 'August 19, 2021',
//         imgSrc: '/images/articles/article3.png',
//     },
// ]

// CAROUSEL SETTINGS


export default class MultipleItems extends Component {

    render() {
        // const settings = {
        //     dots: false,
        //     infinite: true,
        //     slidesToShow: 3,
        //     // centerMode: true,
        //     slidesToScroll: 2,
        //     arrows: false,
        //     autoplay: false,
        //     speed: 500,
        //     cssEase: "linear",
        //     responsive: [
        //         {
        //             breakpoint: 1200,
        //             settings: {
        //                 slidesToShow: 2,
        //                 slidesToScroll: 1,
        //                 infinite: true,
        //                 dots: false
        //             }
        //         },
        //         {
        //             breakpoint: 600,
        //             settings: {
        //                 slidesToShow: 1,
        //                 slidesToScroll: 1,
        //                 infinite: true,
        //                 dots: false
        //             }
        //         }
        //     ]
        // };


        return (
            <div className="bg-lightgrey absolute py-20" id="blog-section">
                <div className='mx-auto max-w-7xl sm:py-4 lg:px-8 '>

                    <div className="text-center">
                        <h3 className="text-red text-lg font-normal tracking-widest">OUR SERVICES</h3>
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
        );
    }
}
