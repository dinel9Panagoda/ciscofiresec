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
        imgSrc: '/images/services/accesscontrol/ac2.jpg'
    },
    {
        // profession: 'Co-founder',
        // name: 'John Doe',
        imgSrc: '/images/services/netservers/ns1.jpg'
    },
    {
        // profession: 'Co-founder',
        // name: 'John Doe',
        imgSrc: '/images/services/netservers/ns2.jpg'
    },
    {
        // profession: 'Co-founder',
        // name: 'John Doe',
        imgSrc: '/images/services/netservers/ns3.jpg'
    },
    {
        // profession: 'Co-founder',
        // name: 'John Doe',
        imgSrc: '/images/services/netservers/ns4.jpg'
    },
    {
        // profession: 'Co-founder',
        // name: 'John Doe',
        imgSrc: '/images/services/netservers/ns5.jpg'
    },
]
const NetworkingServer = () => {

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

    
    <section className='py-32 bg-netservers'>
        <div className='sm:px-10 px-5'>
        <h1 className='text-red font-semibold text-5xl Wittgenstein text-center pb-20 xl:text-6xl'>NETWORKING/WIRING SERVER ROOM</h1>



        <div className='grid sm:grid-cols-2 gap-7'>
            <div>
                <img src='/images/services/NetWServers.jpeg' alt="Sliding Door" className="inline-block rounded-3xl w-full" />
            </div>
            <div className='text-justify'>
            A network server is a powerful computer connected to your business network. Network servers have many functions and can form an important part of your computer network. They are usually used for shared le storage, email management and to run centralised applications, such as your customer database. Wire Server is a collection of API server components that connect to each other and to databases. The API components and databases are each in a cluster, which means that copies of the same program code run multiple times. Wire clients, such as the Wire app on a phone, can connect to.

            </div>

        </div>

        <h6 className='text-red text-center pt-20 pb-5'>Recent Units We Did For Our Clients...</h6>

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

export default NetworkingServer