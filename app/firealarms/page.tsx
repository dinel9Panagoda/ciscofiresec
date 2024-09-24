"use client"
import React from 'react'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import RecentWork from '../../components/RecentWorkIcon/index'

import Slider from "react-slick";

// CAROUSEL DATA

interface DataType {
    imgSrc: string;
}

const postData: DataType[] = [
    {
        imgSrc: '/images/services/firealarms/fa1.jpeg'
    },
    {
        imgSrc: '/images/services/firealarms/fa2.jpeg'
    },
    {
        imgSrc: '/images/services/firealarms/fa3.jpeg'
    },
    {
        imgSrc: '/images/services/firealarms/fa4.jpeg'
    },
    {
        imgSrc: '/images/services/firealarms/fa5.jpeg'
    },
    {
        imgSrc: '/images/services/firealarms/fa6.jpg'
    },
    {
        imgSrc: '/images/services/firealarms/fa7.jpeg'
    },
    {
        imgSrc: '/images/services/firealarms/fa8.jpeg'
    },
    {
        imgSrc: '/images/services/firealarms/fa9.jpeg'
    },
    {
        imgSrc: '/images/services/firealarms/fa10.jpeg'
    },
    {
        imgSrc: '/images/services/firealarms/fa11.jpeg'
    },
    {
        imgSrc: '/images/services/firealarms/fa12.jpg'
    },
    {
        imgSrc: '/images/services/firealarms/fa13.jpeg'
    },
    {
        imgSrc: '/images/services/firealarms/fa14.jpeg'
    },
    {
        imgSrc: '/images/services/firealarms/fa15.jpeg'
    },
    {
        imgSrc: '/images/services/firealarms/fa16.jpeg'
    },
    {
        imgSrc: '/images/services/firealarms/fa17.jpeg'
    },
    {
        imgSrc: '/images/services/firealarms/fa18.jpeg'
    },
    {
        imgSrc: '/images/services/firealarms/fa19.jpeg'
    },
    {
        imgSrc: '/images/services/firealarms/fa20.jpeg'
    },
    {
        imgSrc: '/images/services/firealarms/fa21.jpeg'
    },
    {
        imgSrc: '/images/services/firealarms/fa22.jpeg'
    },
    {
        imgSrc: '/images/services/firealarms/fa23.jpeg'
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
    <section className=''>
        
        {/* <div className=''> */}
        <div className='mb-32'>
            <img className='w-full' src='/images/services/firealarms/FireAlarmMainBanner.png' />

        </div>

        <div className='grid sm:grid-cols-2 gap-7 px-10 max-w-7xl mx-auto'>
            <div>
                <img src='/images/services/firealarms/FireAlarmOperator.jpeg' alt="Fire Alarms" className="inline-block rounded-3xl w-full"  />
            </div>
            <div className='text-justify'>
                <img className='inline-block w-auto pb-10' src='/images/services/firealarms/FIRE_ALARMS.png' /><br />
                Fire alarms are critical safety devices designed to detect the presence of smoke, heat, or flames, signaling potential danger and prompting timely evacuation. These alarms serve as the first line of defense in safeguarding lives and property against the devastating effects of fire. Equipped with advanced sensors, modern fire alarm systems are capable of detecting even the slightest traces of smoke, ensuring early detection and swift response to emergencies.

                <div className='grid grid-cols-2 gap-5 mt-10 text-navyblue ml-5 text-sm'>
                    <ul>
                        <a href='/firealarms/schools'><li className='service_list_item_fa cursor-pointer'><ArrowCircleRightIcon fontSize='large' className='m-1'/>Educational</li></a>
                    
                        <a href='/firealarms/buildings'><li className='service_list_item_fa cursor-pointer'><ArrowCircleRightIcon fontSize='large' className='m-1'/>Buildings</li></a>

                        <a href='/firealarms/offices'><li className='service_list_item_fa cursor-pointer'><ArrowCircleRightIcon fontSize='large' className='m-1'/>Offices</li></a>

                    </ul>

                    <ul>
                        <a href='/firealarms/institutions'><li className='service_list_item_fa cursor-pointer'><ArrowCircleRightIcon fontSize='large' className='m-1'/>Institutions</li></a>

                        <a href='/firealarms/residential'><li className='service_list_item_fa cursor-pointer'><ArrowCircleRightIcon fontSize='large' className='m-1'/>Residential</li></a>

                        <a href='/firealarms/warehouses'><li className='service_list_item_fa cursor-pointer'><ArrowCircleRightIcon fontSize='large' className='m-1'/>Warehouses</li></a>

                    </ul>
                </div>

            </div>

        </div>

        <RecentWork />
        <h6 className='text-red text-center pb-5 font-bold text-3xl'>Recent Fire Alarm Units We Did For Our Clients...</h6>


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