"use client"
import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

import Slider from "react-slick";

// CAROUSEL DATA

interface DataType {
    // profession: string;
    // name: string;
    imgSrc: string;
}

const postData: DataType[] = [
    {
        // profession: 'Co-founder',
        // name: 'John Doe',
        imgSrc: '/images/services/CCTV/cctv1.jpg'
    },
    {
        // profession: 'Co-founder',
        // name: 'John Doe',
        imgSrc: '/images/services/CCTV/cctv2.jpg'
    },
    {
        // profession: 'Co-founder',
        // name: 'John Doe',
        imgSrc: '/images/services/CCTV/cctv3.jpg'
    },
    {
        // profession: 'Co-founder',
        // name: 'John Doe',
        imgSrc: '/images/services/CCTV/cctv1.jpg'
    },
    {
        // profession: 'Co-founder',
        // name: 'John Doe',
        imgSrc: '/images/services/CCTV/cctv2.jpg'
    },
    {
        // profession: 'Co-founder',
        // name: 'John Doe',
        imgSrc: '/images/services/CCTV/cctv3.jpg'
    },
]

const CCTV = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        // centerMode: true,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }
        ]
    };

  return (
    <section className='py-32 bg-cctv'>

<div className='sm:px-10 px-5'>
<h1 className='text-red font-semibold text-5xl Wittgenstein text-center pb-20 xl:text-6xl'>CCTV</h1>

      

<div className='grid sm:grid-cols-2 gap-7'>
    <div>
        <img src='/images/services/CCTV.jpg' alt="CCTV" className="inline-block rounded-3xl w-full" />
    </div>
    <div className='text-justify'>
    Closed-circuit television (CCTV) systems are ubiquitous in today's society, serving as a crucial tool for surveillance, security, and monitoring in various settings. Consisting of cameras, monitors, and recording devices, CCTV systems enable the capture and observation of video footage within a designated area, whether it's a public space, commercial establishment, or residential property.

    </div>

</div>

<h6 className='text-red text-center pt-20 pb-5'>Recent CCTV Units We Did For Our Clients...</h6>

</div>

        

<Slider {...settings}>
                    {postData.map((items, i) => (
                        <div key={i}>
                            <div className='bg-white m-3 mb-32 mt-10 text-center shadow-3xl rounded-3xl'>
                                <div className='relative'>
                                    <img src={items.imgSrc} alt="gaby"  className="inline-block m-auto rounded-3xl w-full" />
                                    {/* <Image src={'/images/wework/linkedin.svg'} alt="greenbg" width={120} height={120} className=" absolute inline-block position-linkedin" /> */}
                                </div>
                                {/* <h4 className='text-4xl font-bold pt-14'>{items.name}</h4> */}
                                {/* <h3 className='text-2xl font-normal pt-4 pb-2 opacity-50'>{items.profession}</h3> */}
                            </div>
                        </div>
                    ))}
                </Slider>

    </section>
  )
}

export default CCTV