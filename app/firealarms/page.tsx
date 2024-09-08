"use client"
import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import Image from "next/image";

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
        imgSrc: '/images/services/firealarms/fa1.jpg'
    },
    {
        // profession: 'Co-founder',
        // name: 'John Doe',
        imgSrc: '/images/services/firealarms/fa2.jpg'
    },
    {
        // profession: 'Co-founder',
        // name: 'John Doe',
        imgSrc: '/images/services/firealarms/fa3.jpg'
    },
    {
        // profession: 'Co-founder',
        // name: 'John Doe',
        imgSrc: '/images/services/firealarms/fa4.jpg'
    },
    {
        // profession: 'Co-founder',
        // name: 'John Doe',
        imgSrc: '/images/services/firealarms/fa1.jpg'
    },
    {
        // profession: 'Co-founder',
        // name: 'John Doe',
        imgSrc: '/images/services/firealarms/fa2.jpg'
    },
    {
        // profession: 'Co-founder',
        // name: 'John Doe',
        imgSrc: '/images/services/firealarms/fa3.jpg'
    },
    {
        // profession: 'Co-founder',
        // name: 'John Doe',
        imgSrc: '/images/services/firealarms/fa4.jpg'
    }
]

const FireAlarms = () => {

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
    <section className='py-32 bg-firealarms'>
        
        <div className='sm:px-10 px-5 '>
        <h1 className='text-red font-semibold text-5xl Wittgenstein text-center pb-20 xl:text-6xl'>FIRE ALARMS</h1>

        {/* <div className='flex flex-wrap pb-20 gap-3 justify-center items-center'>
            <div className='bg-lightred px-3 py-3 rounded-3xl text-red '>School</div>
            <div className='bg-lightred px-3 py-3 rounded-3xl text-red'>Buildings</div>
            <div className='bg-lightred px-3 py-3 rounded-3xl text-red '>Office</div>
            <div className='bg-lightred px-3 py-3 rounded-3xl text-red '>Educational</div>
            <div className='bg-lightred px-3 py-3 rounded-3xl text-red '>Institution</div>
            <div className='bg-lightred px-3 py-3 rounded-3xl text-red '>School</div>
            <div className='bg-lightred px-3 py-3 rounded-3xl text-red '>Residencial</div>
            <div className='bg-lightred px-3 py-3 rounded-3xl text-red '>Ware houses</div>
            <div className='bg-lightred px-3 py-3 rounded-3xl text-red '>Many more...</div>

        </div> */}

        <div className='grid sm:grid-cols-2 gap-7'>
            <div>
                <img src='/images/services/fireAlarms.webp' alt="Fire Alarms" className="inline-block rounded-3xl w-full" />
            </div>
            <div className='text-justify'>
            Fire alarms are critical safety devices designed to detect the presence of smoke, heat, or ames, signaling potential danger and prompting timely evacuation. These alarms serve as the rst line of defense in safeguarding lives and property against the devastating eects of re. Equipped with advanced sensors, modern re alarm systems are capable of detecting even the slightest traces of smoke, ensuring early detection and swift response to emergencies.

            <div className='grid grid-cols-2 mt-10 list-disc text-navyblue ml-10'>
                <ul>
                    <li>School</li>
                    <li>Buildings</li>
                    <li>Office</li>
                    <li>Educational</li>
                </ul>
                <ul>
                    <li>Institution</li>
                    <li>Residencial</li>
                    <li>Warehouses</li>
                    <li>Many more...</li>
                </ul>
            </div>

            </div>

        </div>

        <h6 className='text-red text-center pt-20 pb-5'>Recent Fire Alarm Units We Did For Our Clients...</h6>
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

export default FireAlarms