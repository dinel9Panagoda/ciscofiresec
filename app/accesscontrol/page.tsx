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
        imgSrc: '/images/services/accesscontrol/ac1.jpg'
    },
    {
        // profession: 'Co-founder',
        // name: 'John Doe',
        imgSrc: '/images/services/accesscontrol/ac2.jpg'
    },
    {
        // profession: 'Co-founder',
        // name: 'John Doe',
        imgSrc: '/images/services/accesscontrol/ac3.jpg'
    },
    {
        // profession: 'Co-founder',
        // name: 'John Doe',
        imgSrc: '/images/services/accesscontrol/ac4.jpg'
    },
    {
        // profession: 'Co-founder',
        // name: 'John Doe',
        imgSrc: '/images/services/accesscontrol/ac5.jpg'
    },
    {
        // profession: 'Co-founder',
        // name: 'John Doe',
        imgSrc: '/images/services/accesscontrol/ac6.jpg'
    },
    {
        // profession: 'Co-founder',
        // name: 'John Doe',
        imgSrc: '/images/services/accesscontrol/ac7.jpg'
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
    <section className='py-32 bg-accesscontrol'>

<div className='sm:px-10 px-5 '>
<h1 className='text-red font-semibold text-5xl Wittgenstein text-center pb-20 xl:text-6xl'>ACCESS CONTROL</h1>

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
        <img src='/images/services/accessControl.png' alt="Fire Alarms" className="inline-block rounded-3xl w-full" />
    </div>
    <div className='text-justify'>
    Access control is the practice of regulating who can enter or use resources in a particular environment. Whether it's a physical space, a computer network, or digital data, access control ensures that only authorized individuals or systems are granted entry or permission. By implementing access control measures such as biometric scanners, key cards, or passwords, organizations can effectively manage security risks and protect sensitive information from unauthorized access or misuse.

    <div className='grid grid-cols-2 mt-10 list-disc text-navyblue ml-10'>
        <ul>
            <li>Face Recognition</li>
            <li>Pin No</li>
            <li>Card</li>
            <li>Key Fob</li>
            <li>Many more...</li>
        </ul>
    </div>

    </div>

</div>

<h6 className='text-red text-center pt-20 pb-5'>Recent Access Control Units We Did For Our Clients...</h6>
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

export default AccessControl