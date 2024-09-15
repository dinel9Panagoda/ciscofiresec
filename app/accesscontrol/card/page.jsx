import React from 'react'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

const Card = () => {
    return (
        <section className=''>

            <div className=' relative bg-grey sm:py-32 py-20 sm:pl-10 pl-5'>
                <a href='/accesscontrol'>
                <div className='absolute top-0 text-xs bg-lightgrey my-3 px-2 rounded-full w-fit pt-1'><span className='m-auto'><ArrowLeftIcon className='inline-block' />BACK TO <span>ACCESS CONTROL</span></span></div>
                </a>

                <h1 className='sm:text-5xl text-3xl Wittgenstein text-white font-bold'>
                <span className='drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>Card Access Control Systems</span>
            </h1>
            </div>

            {/* <div className=' text-xs bg-lightgrey mt-2 px-2 py-1 sm:ml-10 ml-5 rounded-full'><span className='m-auto'><ArrowLeftIcon className='inline-block' />BACK TO <span>FIRE ALARMS</span></span></div>
            <h1 className='bg-grey sm:py-32 py-20 sm:pl-10 pl-5 sm:text-5xl text-3xl Wittgenstein text-white font-bold'>
                <span className='drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>Fire Alarms in Card:</span> Ensuring Safety for All
            </h1> */}

            
            <div className='pb-32'>
            
                <div className="scrolling_text">
                    <div className="text py-3 font-black">

                        <span>Click here to see our special offers! </span>

                        <span><img src='/icons/discount-shape.svg' className='inline-block w-10' /></span>

                        <span>Click here to see our special offers!</span>

                        <span><img src='/icons/discount-shape.svg' className='inline-block w-10' /></span>

                        <span>Click here to see our special offers!</span>

                        <span><img src='/icons/discount-shape.svg' className='inline-block w-10' /></span>

                        <span>Click here to see our special offers!</span>

                        <span><img src='/icons/discount-shape.svg' className='inline-block w-10' /></span>

                    </div>

                    <div className="text py-3 font-black">

                        <span>Click here to see our special offers!</span>

                        <span><img src='/icons/discount-shape.svg' className='inline-block w-10' /></span>

                        <span>Click here to see our special offers!</span>

                        <span><img src='/icons/discount-shape.svg' className='inline-block w-10' /></span>

                        <span>Click here to see our special offers!</span>

                        <span><img src='/icons/discount-shape.svg' className='inline-block w-10' /></span>
                        
                        <span>Click here to see our special offers!</span>

                        <span><img src='/icons/discount-shape.svg' className='inline-block w-10' /></span>
                    </div>
                </div>

                <div className='grid sm:grid-cols-2 gap-10  py-32 sm:px-10 px-3 text-justify'>

                    <div>
                        <div>

                        Card access control systems use smart cards or key cards to manage entry into secure areas, ensuring only authorized personnel can gain access. Each card is embedded with unique identification data that is read by card readers installed at entry points, quickly verifying the user's credentials. This system offers a convenient and efficient way to control access without the need for physical keys, enhancing security and reducing the risk of unauthorized entry. Card access systems are ideal for offices, hotels, and multi-tenant buildings where flexibility and ease of use are essential.                                                               
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

                    <div className="bg-lightgrey bg-build pt-12 px-10 lg:px-24 pb-52 md:pb-70 rounded-3xl">
                        <h2 className="text-lg font-normal text-navyblue tracking-widest mb-5 text-center sm:text-start">GET IN TOUCH</h2>

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

  )
}

export default Card