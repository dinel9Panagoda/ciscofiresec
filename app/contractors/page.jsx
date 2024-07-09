import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const Contractors = () => {
  return (
    <section className='my-32 sm:px-10 px-5'>
        <h1 className='text-red font-semibold text-5xl Wittgenstein text-center pb-32 xl:text-6xl'>Contractors</h1>

        <div className='grid sm:grid-cols-2 gap-7'>
            <div>
                <img src='/images/profservices/Contractors1.jpg' alt="Electrician" className="inline-block rounded-3xl w-full" />
            </div>
            <div className='text-justify'>
            With a rich history spanning <span className='text-red text-xl font-bold'>40</span> years, our company stands as a testament to trust and reliability in the industry. Throughout the decades, we have consistently delivered quality products and services, earning the confidence of our customers and partners alike.Contractors who bring us jobs are eligible for special offers tailored to their needs. These offers may include discounted pricing on materials or equipment, priority access to our services during peak times, or exclu- sive training and support sessions. We value the partnerships we build with contractors and aim to reward their loyalty and trust with tangible benefits that enhance their business operations. By offering these incentives, we not only foster stronger relationships but also ensure that contractors receive added value and support as they continue to choose us for their project needs.
            </div>

        </div>

        <div className='flex justify-center items-center'>
        <div className="bg-lightred bg-build pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl mt-10 w-fit">
                    <h2 className="text-lg font-normal text-red tracking-widest mb-5 text-center sm:text-start">GET IN TOUCH</h2>
                    <div className="py-8 lg:py-8 px-4 mx-auto max-w-screen-md mb-20">

                    
                    <div className="bg-red p-3 rounded-full text-white font-bold flex gap-5 mb-5">
                    <div className='footer-icons'>
                                <PhoneIcon />
                            </div> 
                         <div className="top-0 bottom-0 my-auto">NUMBERS</div>
                    </div>

                    
                    <p className="text-center mb-10">
                    NJ 201-250-3672 <br/>
                    NY 718-527-4881 <br/>
                    LI 516-800-2757

                    </p>

                    <div className="bg-red p-3 rounded-full text-white font-bold flex gap-5 mb-5">
                    <div className='footer-icons'>
                                <EmailIcon />
                            </div> 
                         <div className="top-0 bottom-0 my-auto">EMAIL</div>
                    </div>

                    <p className="text-center mb-10">
                        CISCOFIRESYSTEMS@GMAIL.COM
                    </p>

                    <div className="bg-red p-3 rounded-full text-white font-bold flex gap-5 mb-5">
   
                         <div className="top-0 bottom-0 my-auto mx-auto">www.ciscofiresystem.com</div>
                    </div>

</div>
                </div>
        </div>

    </section>
  )
}

export default Contractors