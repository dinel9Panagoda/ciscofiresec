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
        imgSrc: '/images/services/slidingdoors/sd1.jpg'
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
    },
    {
        // profession: 'Co-founder',
        // name: 'John Doe',
        imgSrc: '/images/services/slidingdoors/sd1.jpg'
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
    },
]
const SlidingSwingDoors = () => {


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
    <section className='py-32 bg-slidingdoors'>
<div className='sm:px-10 px-5'>
        
<h1 className='text-red font-semibold text-5xl Wittgenstein text-center pb-20 xl:text-6xl'>SLIDING DOORS/SWING DOORS OPERATORS</h1>

     

<div className='grid sm:grid-cols-2 gap-7'>
    <div>
        <img src='/images/services/slidingDoor.jpeg' alt="Sliding Door" className="inline-block rounded-3xl w-full" />
    </div>
    <div className='text-justify'>
    Door which opens horizontally by sliding, usually parallel to (and sometimes within) a wall. Sliding doors can be mounted either on top of a track below or be suspended from a track above. Some types slide into a space in the parallel wall in the direction of travel, rather than the door sliding along the outside of the parallel wall. There are several types of sliding doors, such as pocket doors, sliding glass doors, center-opening doors, and bypass doors. Sliding doors are commonly used as shower doors, glass doors, screen doors, and wardrobe doors, and in vans.

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

export default SlidingSwingDoors