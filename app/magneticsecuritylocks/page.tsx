"use client"
import React, { useState } from 'react'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Modal from '@mui/material/Modal';
import Slider from "react-slick";
import RecentWork from '@/components/RecentWorkIcon';

// CAROUSEL DATA

interface DataType {
    imgSrc: string;
}

const postData: DataType[] = [
    {
        imgSrc: '/images/services/magneticdoors/ML1.jpeg'
    },
    {
        imgSrc: '/images/services/magneticdoors/ML2.jpeg'
    },
    {
        imgSrc: '/images/services/magneticdoors/ML3.jpeg'
    },
    {
        imgSrc: '/images/services/magneticdoors/ML4.jpeg'
    },
    {
        imgSrc: '/images/services/magneticdoors/ML5.jpeg'
    },
    {
        imgSrc: '/images/services/magneticdoors/ML6.jpeg'
    },
    {
        imgSrc: '/images/services/magneticdoors/ML7.jpeg'
    }
]

const MagneticLocks = () => {

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
        // Modal
        const [open, setOpen] = useState(false);

        const handleClose = () => {
            setOpen(false);
        };
    
        const handleOpen = () => {
            setOpen(true);
        };
return (
    <section className=''>
        
        {/* <div className=''> */}
        <div className='mb-32'>
            <img className='w-full' src='/images/services/magneticdoors/MagneticDoorMainBanner.png' />

        </div>

        <div className='grid sm:grid-cols-2 gap-7 px-10 max-w-7xl mx-auto'>
            <div>
                <img src='/images/services/magneticdoors/magneticLocks.png' alt="Magnetic Door" className="inline-block rounded-3xl w-full"  />
            </div>
            <div className='text-justify'>
            <img className='w-full max-w-7xl mx-auto' src='/images/services/magneticdoors/MAGNETIC_DOORS.png' /><br />
            Electromagnetic locks, often referred to as "maglocks," use magnetic force and have no moving parts making them highly reliable and an easy to maintain choice for fail-safe applications when code compliance permits.

            </div>

        </div>
 <div className='specialOfferSideBar'>
                    <div onClick={handleOpen} className='justify-self-end cursor-pointer mt-10 ml-5'>

                    <div className=' relative w-40 h-auto bg-blue rounded-3xl drop-shadow-[0_15px_15px_rgba(0,0,0,0.8)]'>
                        <span className="relative absolute top-1 left-1 flex h-10 w-10">
                            <span className=" animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>

                                <span className="relative inline-flex rounded-full h-10 w-10 bg-white">
                                    <img src='/icons/discount-shape.svg' className='w-10' />
                                </span>
                            </span>

                            <img src='/icons/arrow-circle-down-left.svg' className='w-12 absolute top-0 right-0' />           
                            <p className='pt-5 px-5 text-white font-black text-xl '>Special Offers</p>
                            <p className='text-lightblue text-xs mb-1 pl-5'>Click here...</p>
                            
                            <img className='w-80 rounded-3xl bg-white p-3' src='/images/services/magneticdoors/SpecialOfferML.png' />
                        </div>

</div>
                </div>
        <RecentWork /><Modal
                        open={open}
                        onClose={handleClose}
                        disableAutoFocus={true}
                        className="absolute w-fit h-fit m-auto text-center"
                    >

                        <div className='grid md:grid-cols-2'>
                            <div className='bg-white md:rounded-l-3xl rounded-t-3xl mx-auto'>
                                <img className='md:w-96 w-56' src='/images/services/firealarms/SpecialOfferPopUp.gif' alt='Special Offer' />    
                            </div>
                            <div className='bg-blue md:rounded-r-3xl relative w-96'>
                            <div onClick={handleClose} className='absolute top-5 right-5 text-white font-bold cursor-pointer'>X</div>
                                <div className='absolute -left-12 -top-12 p-3 bg-white w-fit rounded-full border-2 border-blue  drop-shadow-[0_3px_3px_rgba(0,0,0,0.8)]'>
                                <img src='/images/services/magneticdoors/SpecialOfferML.png' className='w-20' />
                                </div>
                                <h1 className='uppercase font-black text-3xl py-10 text-white'>Special Offer!</h1>

                                <p className=''><span className='font-bold bg-lightblue px-5 py-1 rounded-full border-2 border-navyblue text-navyblue text-sm'>Stay Safe & Save Big!</span> <br/> <br/> <span className=' text-white px-5'>Limited Time Discounts on Magnetic Locks/ Security Locks!</span></p>
                                <div className='mt-10 mx-auto bg-white w-fit py-5 px-10 rounded-full text-blue border-2 mb-5 border-darkblue drop-shadow-[0_3px_3px_rgba(0,0,0,0.8)]'>
                                    <span className='text-7xl font-black'>30%</span>
                                    <span className='ml-4'>OFF</span>
                                </div>
                            </div>
                        </div>

                

                    </Modal>
        <h6 className='text-red text-center pb-5 font-bold text-3xl'>Recent Magnetic Door Units We Did For Our Clients...</h6>


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

export default MagneticLocks