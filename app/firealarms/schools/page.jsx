"use client"
import React, { useState } from 'react'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import SpecialOfferLine from '@/components/SpecialOfferLine';
import Modal from '@mui/material/Modal';

const Schools = () => {

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

            <div className=' relative bg-grey sm:py-32 py-20 sm:pl-10 pl-5'>
                <a href='/firealarms'>
                <div className='absolute top-0 text-xs bg-lightgrey my-3 px-2 rounded-full w-fit pt-1'><span className='m-auto'><ArrowLeftIcon className='inline-block' />BACK TO <span>FIRE ALARMS</span></span></div>
                </a>

                <h1 className='sm:text-5xl text-3xl Wittgenstein text-white font-bold'>
                <span className='drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>Fire Alarms in Schools:</span> Ensuring Safety for All
            </h1>
            </div>
            
            <div className='pb-32'>
            
                <div onClick={handleOpen}>
                <SpecialOfferLine />
                </div>

                <Modal
                        open={open}
                        onClose={handleClose}
                
                        className="absolute w-fit h-fit m-auto p-5 text-center"
                        // style={{
                        //     position: "absolute",
                        //     border: "2px solid #000",
                        //     // backgroundColor: "#ffffff",
                        //     // overlay: "#ffffff",
                        //     overlay:{background:'#ffff00' }, 
                            
                        //     boxShadow: "",
                        //     height: 150,
                        //     width: 240,
                        //     margin: "auto",
                        //     padding: "2%",
                        //     color: "white",
                        // }}
                    >

                        <div className='bg-lightgrey rounded-3xl py-5  shadow-3xl shadow-grey'>
                            <img className='w-52 m-auto' src='/images/services/specialOffer.svg' />
                            <h2 className="text-center sm:text-3xl font-black text-white bg-red py-5">
                                LIMITED TIME OFFER!
                            </h2>

                            {/* <hr className='mx-5 my-2 border-1 border-grey'/> */}

                            {/* <ChildModal />               */}


                            <p className="font-bold text-xs py-10 px-5">
                                 <span className="font-black sm:text-7xl text-5xl py-5 text-white bg-red rounded-full px-5 shadow-3xl shadow-red">50%</span>  OFF<br/><br/><br/><br/><br/>
                                 *** GET A DISCOUNT ON ALL OUR SERVICES IN YOUR NEXT ORDER *** 
                            </p>  

                        </div>

                    </Modal>

                <div className='grid sm:grid-cols-2 gap-10  py-32 sm:px-10 px-3 text-justify'>

                    <div>
                        <div>
                            Fire alarms are a critical component of school safety, designed to alert students, staff, and visitors in case of a fire or smoke emergency. These systems are strategically installed throughout the building to provide early warning, allowing for swift evacuation. Modern fire alarms in schools often include audible alarms, flashing lights, and sometimes voice evacuation instructions to ensure everyone is aware of the emergency, regardless of hearing or visual impairments. Regular testing and maintenance of these alarms are essential to keep them in optimal working condition, providing peace of mind and ensuring the safety of all occupants.
                        </div>
                        

<div className="grid grid-cols-2 md:grid-cols-3 gap-1 pt-10">
    <div className="grid gap-1">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/images/services/firealarms/fa1.jpg" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="" />
        </div>
    </div>
    <div className="grid gap-1">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/images/services/firealarms/fa4.jpg" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/images/services/firealarms/fa3.jpg" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/images/services/firealarms/schoolfire.webp" alt="" />
        </div>
    </div>
    <div className="grid gap-1">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/images/services/firealarms/fa2.jpg" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt="" />
        </div>
    </div>

</div>

                    </div>

                    <div className="bg-lightgrey bg-build pt-12 px-5 md:px-10 pb-52 text-center md:pb-70 rounded-3xl">
                        <h2 className="text-lg font-normal text-navyblue tracking-widest mb-5 sm:text-start">GET IN TOUCH</h2>

                        <div className="py-8 lg:py-8 px-4 mx-auto max-w-screen-md mb-20">
                            <div className="bg-navyblue p-3 rounded-full text-white font-bold flex gap-5 mb-5">
                                <div className='footer-icons'>
                                    <PhoneIcon />
                                </div> 
                            <div className="top-0 bottom-0 my-auto">NUMBERS</div>
                        </div>
                    
                        <p className="pl-3 mb-10 text-center">
                            <span className='font-bold text-navyblue'>NJ</span> 201-250-3672 <br/>
                            <span className='font-bold text-navyblue'>NY</span> 718-527-4881 <br/>
                            <span className='font-bold text-navyblue'>LI</span> 516-800-2757 <br/>
                            <span className='font-bold text-navyblue'>UPSTATE NEW YORK</span> 914-760-2100 <br/>
                            <span className='font-bold text-navyblue'>SUFFOLK COUNTY</span> 631-784-5440 <br/>
                        </p>

                        <div className="bg-navyblue p-3 rounded-full text-white font-bold flex gap-5 mb-5">
                            <div className='footer-icons'>
                                <EmailIcon />
                            </div> 
                            <div className="top-0 bottom-0 my-auto">EMAIL</div>
                        </div>

                        <p className="text-center mb-10">
                            CISCOFIRESYSTEMS@GMAIL.COM
                        </p>

                        <div className="bg-navyblue p-3 rounded-full text-white font-bold flex gap-5 mb-5">
                            <div className='footer-icons'>
                                <AccessTimeFilledIcon />
                            </div> 
                            <div className="top-0 bottom-0 my-auto">BUSINESS HOURS</div>
                        </div>

                        <p className="text-center mb-10">
                        MONDAY — FRIDAY 9AM – 5PM <br/>
                        SATURDAY — 10AM – 3PM <br/>
                        SUNDAY — CLOSED

                        </p>

                    </div>
                </div>
            </div>

        </div>
        
    </section>

  )
}

export default Schools