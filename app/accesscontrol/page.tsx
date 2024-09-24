"use client"

import React from 'react'

import Slider from "react-slick";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import RecentWork from '@/components/RecentWorkIcon';

// CAROUSEL DATA

interface DataType {
    imgSrc: string;
}

const postData: DataType[] = [
  {
        imgSrc: '/images/services/accesscontrol/AC1.jpeg'
    },
    {  
        imgSrc: '/images/services/accesscontrol/AC2.jpeg'
    },
{

        imgSrc: '/images/services/accesscontrol/AC3.jpeg'
    },
    {  
        imgSrc: '/images/services/accesscontrol/AC4.jpeg'
    },
{

        imgSrc: '/images/services/accesscontrol/AC5.jpeg'
    },
{

        imgSrc: '/images/services/accesscontrol/AC6.jpeg'
    },
{

        imgSrc: '/images/services/accesscontrol/AC7.jpeg'
},
{
    
    imgSrc: '/images/services/accesscontrol/AC8.jpeg'
        },
        {
        
                imgSrc: '/images/services/accesscontrol/AC9.jpeg'
            },
            {
            
                    imgSrc: '/images/services/accesscontrol/AC10.jpeg'
                }
]

const AccessControl = () => {

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

            <div className='mb-32'>
                <img className='w-full' src='/images/services/accesscontrol/AccessControlMainBanner.png' alt='Access Control' />

            </div>


<div className='grid sm:grid-cols-2 gap-7 px-10 max-w-7xl mx-auto'>
    <div>
        <img src='/images/services/accesscontrol/AccessControlFaceRecog.jpeg' alt="Access Control Face Recognition" className="inline-block rounded-3xl w-full" />
    </div>
    <div className='text-justify'>
    <img className='inline-block w-auto pb-10' src='/images/services/accesscontrol/ACCESS_CONTROL.png' /><br />    
    Access control is the practice of regulating who can enter or use resources in a particular environment. Whether it's a physical space, a computer network, or digital data, access control ensures that only authorized individuals or systems are granted entry or permission. By implementing access control measures such as biometric scanners, key cards, or passwords, organizations can effectively manage security risks and protect sensitive information from unauthorized access or misuse.

    <div className='grid grid-cols-2 gap-5 mt-10 text-navyblue ml-5 text-sm'>
                        <ul>
                    <a href='/accesscontrol/facerecognition'><li className='service_list_item_ac cursor-pointer'><ArrowCircleRightIcon fontSize='large' className='m-1'/>Face Recognition</li></a>
                    
                     <a href='/accesscontrol/pinno'><li className='service_list_item_ac cursor-pointer'><ArrowCircleRightIcon fontSize='large' className='m-1'/>Pin No</li></a>


                    
                </ul>

                <ul>

                <a href='/accesscontrol/card'><li className='service_list_item_ac cursor-pointer'><ArrowCircleRightIcon fontSize='large' className='m-1'/>Card</li></a>
                <a href='/accesscontrol/keyfob'><li className='service_list_item_ac cursor-pointer'><ArrowCircleRightIcon fontSize='large' className='m-1'/>Key Fob</li></a>
                </ul>
            </div>

    </div>
    </div>

    <RecentWork />

<h6 className='text-red text-center pb-5 font-bold text-3xl'>Recent Access Control Units We Did For Our Clients...</h6>

        


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

export default AccessControl