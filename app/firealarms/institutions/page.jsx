"use client"
import React, { useState } from 'react'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import SpecialOfferLine from '@/components/SpecialOfferLine';
import Modal from '@mui/material/Modal';
import OutboundIcon from '@mui/icons-material/Outbound';

const Institutions = () => {

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

        <div className='bg-fainstitutions_banner grid md:grid-cols-3 h-screen'>
                <div className='my-auto ml-10 w-full col-span-2'>
                    <a href='/firealarms'>
                        <div className='text-xs bg-lightblue text-blue px-2 mb-5 rounded-full w-fit pt-1'><span className='m-auto'><ArrowLeftIcon className='inline-block' />BACK TO <span>FIRE ALARMS</span></span></div>
                    </a>

                    <h1 className='md:text-7xl sm:text-5xl text-3xl text-white font-bold'>
                        <span className='Wittgenstein drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>Fire Alarms in <span className='text-blue font-black'>Institutions</span></span> 
                        <p className='md:text-3xl text-sm glassmorphism_blue drop-shadow-[0_15px_15px_rgba(0,0,0,0.8)] rounded-full py-1 animate-bounce px-5 w-fit mt-7'>Ensuring Safety for All</p>
                    </h1>
                </div>


            <div className='md:grid md:justify-items-stretch'>
            <div onClick={handleOpen} className='justify-self-end cursor-pointer mt-10 mr-10 ml-5'>


                    <div className=' relative w-80 h-auto bg-blue rounded-3xl drop-shadow-[0_15px_15px_rgba(0,0,0,0.8)]'>
                        <span className="relative absolute top-1 left-1 flex h-10 w-10">
                            <span className=" animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>

                            <span className="relative inline-flex rounded-full h-10 w-10 bg-white">
                                <img src='/icons/discount-shape.svg' className='w-10' />
                            </span>
                        </span>

                        <img src='/icons/arrow-circle-down-left.svg' className='w-12 absolute top-0 right-0' />           
                        <p className='py-5 px-5 text-white font-black text-3xl '>Special Offers</p>
                        <p className='text-lightblue text-sm mb-2 pl-5'>Click here to see the offers...</p>
                        
                        <img className='w-80 rounded-3xl' src='/images/services/firealarms/SpecialOfferFAInstitution.png' />
                    </div>
</div>
                </div>

        </div>
        
        <div className='pb-32'>

        <Modal
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
                                <img src='/images/services/firealarms/PopUpFire.png' className='w-20' />
                                </div>
                                <h1 className='uppercase font-black text-3xl py-10 text-white'>Special Offer!</h1>

                                <p className=''><span className='font-bold bg-lightblue px-5 py-1 rounded-full border-2 border-navyblue text-navyblue text-sm'>Stay Safe & Save Big!</span> <br/> <br/> <span className=' text-white px-5'>Limited Time Discounts on Essential Fire Safety Equipment!</span></p>
                                <div className='mt-10 mx-auto bg-white w-fit py-5 px-10 rounded-full text-blue border-2 mb-5 border-darkblue drop-shadow-[0_3px_3px_rgba(0,0,0,0.8)]'>
                                    <span className='text-7xl font-black'>30%</span>
                                    <span className='ml-4'>OFF</span>
                                </div>
                            </div>
                        </div>

                

                    </Modal>

            <div className='grid sm:grid-cols-2 gap-20  py-32 sm:px-10 px-3 text-justify'>

                <div>
                    <div>
                    Fire alarms in institutions, such as hospitals, government buildings, and care facilities, are critical for ensuring the safety of all occupants, including patients, staff, and visitors. These systems utilize a combination of smoke and heat detectors, along with manual call points, to quickly identify fire hazards and initiate a swift response. Upon detection, the alarm system triggers a loud warning sound, visual signals, and may include voice instructions to guide safe evacuation. In specialized settings, fire alarms can be integrated with other emergency systems to support complex evacuation procedures. Regular maintenance and testing of these systems are essential to ensure they function correctly and comply with safety regulations.
                                        </div>
                    

<div className="grid sm:grid-cols-2 gap-1 pt-10">
<div className="grid gap-1">
    <div>
        <img className="h-auto max-w-full rounded-lg" src="/images/services/firealarms/Institution2.jpeg" alt="" />
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src="/images/services/firealarms/Institution1.jpeg" alt="" />
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src="/images/services/firealarms/Institution3.jpeg" alt="" />
    </div>
</div>
<div className="grid gap-1">
    <div>
        <img className="h-auto max-w-full rounded-lg" src="/images/services/firealarms/Institution4.jpeg" alt="" />
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src="/images/services/firealarms/Institution5.jpeg" alt="" />
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
                        <span className='font-bold text-navyblue'>UNY</span> 914-760-2100 <br/>
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

//         <section className=''>

//             <div className=' relative bg-grey sm:py-32 py-20 sm:pl-10 pl-5'>
//                 <a href='/firealarms'>
//                 <div className='absolute top-0 text-xs bg-lightgrey my-3 px-2 rounded-full w-fit pt-1'><span className='m-auto'><ArrowLeftIcon className='inline-block' />BACK TO <span>FIRE ALARMS</span></span></div>
//                 </a>

//                 <h1 className='sm:text-5xl text-3xl Wittgenstein text-white font-bold'>
//                 <span className='drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>Fire Alarms in Institutions:</span> Ensuring Safety for All
//             </h1>
//             </div>

            
//             <div className='pb-32'>
            
//                 <div className="scrolling_text">
//                     <div className="text py-3 font-black">

//                         <span>Click here to see our special offers! </span>

//                         <span><img src='/icons/discount-shape.svg' className='inline-block w-10' /></span>

//                         <span>Click here to see our special offers!</span>

//                         <span><img src='/icons/discount-shape.svg' className='inline-block w-10' /></span>

//                         <span>Click here to see our special offers!</span>

//                         <span><img src='/icons/discount-shape.svg' className='inline-block w-10' /></span>

//                         <span>Click here to see our special offers!</span>

//                         <span><img src='/icons/discount-shape.svg' className='inline-block w-10' /></span>

//                     </div>

//                     <div className="text py-3 font-black">

//                         <span>Click here to see our special offers!</span>

//                         <span><img src='/icons/discount-shape.svg' className='inline-block w-10' /></span>

//                         <span>Click here to see our special offers!</span>

//                         <span><img src='/icons/discount-shape.svg' className='inline-block w-10' /></span>

//                         <span>Click here to see our special offers!</span>

//                         <span><img src='/icons/discount-shape.svg' className='inline-block w-10' /></span>
                        
//                         <span>Click here to see our special offers!</span>

//                         <span><img src='/icons/discount-shape.svg' className='inline-block w-10' /></span>
//                     </div>
//                 </div>

//                 <div className='grid sm:grid-cols-2 gap-10  py-32 sm:px-10 px-3 text-justify'>

//                     <div>
//                         <div>

//                         Fire alarms in institutions, such as hospitals, government buildings, and care facilities, are critical for ensuring the safety of all occupants, including patients, staff, and visitors. These systems utilize a combination of smoke and heat detectors, along with manual call points, to quickly identify fire hazards and initiate a swift response. Upon detection, the alarm system triggers a loud warning sound, visual signals, and may include voice instructions to guide safe evacuation. In specialized settings, fire alarms can be integrated with other emergency systems to support complex evacuation procedures. Regular maintenance and testing of these systems are essential to ensure they function correctly and comply with safety regulations.
                        
//                         </div>
                        

// <div className="grid grid-cols-2 md:grid-cols-3 gap-1 pt-10">
//     <div className="grid gap-1">
//         <div>
//             <img className="h-auto max-w-full rounded-lg" src="/images/services/firealarms/fa1.jpg" alt="" />
//         </div>
//         <div>
//             <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="" />
//         </div>
//         <div>
//             <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="" />
//         </div>
//     </div>
//     <div className="grid gap-1">
//         <div>
//             <img className="h-auto max-w-full rounded-lg" src="/images/services/firealarms/fa4.jpg" alt="" />
//         </div>
//         <div>
//             <img className="h-auto max-w-full rounded-lg" src="/images/services/firealarms/fa3.jpg" alt="" />
//         </div>
//         <div>
//             <img className="h-auto max-w-full rounded-lg" src="/images/services/firealarms/schoolfire.webp" alt="" />
//         </div>
//     </div>
//     <div className="grid gap-1">
//         <div>
//             <img className="h-auto max-w-full rounded-lg" src="/images/services/firealarms/fa2.jpg" alt="" />
//         </div>
//         <div>
//             <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt="" />
//         </div>
//         <div>
//             <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt="" />
//         </div>
//     </div>

// </div>

//                     </div>

//                     <div className="bg-lightgrey bg-build pt-12 px-10 lg:px-24 pb-52 md:pb-70 rounded-3xl">
//                         <h2 className="text-lg font-normal text-navyblue tracking-widest mb-5 text-center sm:text-start">GET IN TOUCH</h2>

//                         <div className="py-8 lg:py-8 px-4 mx-auto max-w-screen-md mb-20">
//                             <div className="bg-navyblue p-3 rounded-full text-white font-bold flex gap-5 mb-5">
//                                 <div className='footer-icons'>
//                                     <PhoneIcon />
//                                 </div> 
//                             <div className="top-0 bottom-0 my-auto">NUMBERS</div>
//                         </div>
                    
//                         <p className="pl-3 mb-10 text-center">
//                             <span className='font-bold text-navyblue'>NJ</span> 201-250-3672 <br/>
//                             <span className='font-bold text-navyblue'>NY</span> 718-527-4881 <br/>
//                             <span className='font-bold text-navyblue'>LI</span> 516-800-2757 <br/>
//                             <span className='font-bold text-navyblue'>UNY</span> 914-760-2100 <br/>
//                             <span className='font-bold text-navyblue'>SUFFOLK COUNTY</span> 631-784-5440 <br/>
//                         </p>

//                         <div className="bg-navyblue p-3 rounded-full text-white font-bold flex gap-5 mb-5">
//                             <div className='footer-icons'>
//                                 <EmailIcon />
//                             </div> 
//                             <div className="top-0 bottom-0 my-auto">EMAIL</div>
//                         </div>

//                         <p className="text-center mb-10">
//                             CISCOFIRESYSTEMS@GMAIL.COM
//                         </p>

//                         <div className="bg-navyblue p-3 rounded-full text-white font-bold flex gap-5 mb-5">
//                             <div className='footer-icons'>
//                                 <AccessTimeFilledIcon />
//                             </div> 
//                             <div className="top-0 bottom-0 my-auto">BUSINESS HOURS</div>
//                         </div>

//                         <p className="text-center mb-10">
//                         MONDAY — FRIDAY 9AM – 5PM <br/>
//                         SATURDAY — 10AM – 3PM <br/>
//                         SUNDAY — CLOSED

//                         </p>

//                     </div>
//                 </div>
//             </div>

//         </div>
        
//     </section>

  )
}

export default Institutions