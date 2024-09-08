import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const Architects = () => {
  return (
    <section className='my-32 sm:px-10 px-5'>
        <h1 className='text-red font-semibold text-5xl Wittgenstein text-center pb-32 xl:text-6xl'>Architects</h1>

        <div className='grid sm:grid-cols-2 gap-7'>
            <div>
                <img src='/images/profservices/architect1.jpg' alt="architect" className="inline-block rounded-3xl w-full" />
            </div>
            <div className='text-justify'>
            With a rich history spanning <span className='text-red text-xl font-bold'>40</span> years, our company stands as a testament to trust and reliability in the industry. Throughout the decades, we have consistently delivered quality products and services, earning the confidence of our customers and partners alike.Architects who bring us jobs receive special offers as a token of our appreciation. These offers may include discounted rates on our services, priority scheduling for project timelines, or access to exclusive design consultations. We value the trust and partnership architects place in us, and these offers are designed to strengthen our collaboration while providing added value for their clients. This approach not only enhances our professional relationship but also ensures that architects receive exceptional service and support as they continue to entrust us with their projects.
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

                    
                    <p className="pl-3 mb-10">
                    <span className='font-bold text-red'>NJ</span> 201-250-3672 <br/>
                    <span className='font-bold text-red'>NY</span> 718-527-4881 <br/>
                    <span className='font-bold text-red'>LI</span> 516-800-2757 <br/>
                    <span className='font-bold text-red'>UNY</span> 914-760-2100 <br/>
                    <span className='font-bold text-red'>SUFFOLK COUNTY</span> 631-784-5440 <br/>

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

export default Architects