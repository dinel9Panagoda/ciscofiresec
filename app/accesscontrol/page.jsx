import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const AccessControl = () => {
  return (
    <section className='py-32 sm:px-10 px-5 bg-accesscontrol'>
        
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
        <div className='grid grid-cols-4 gap-1 max-w-2xl mx-auto'>
            <img src='/images/services/accesscontrol/ac1.jpg' alt="Access Control" className="rounded-xl w-full" />
            <img src='/images/services/accesscontrol/ac2.jpg' alt="Access Control" className="rounded-xl w-full" />
            <img src='/images/services/accesscontrol/ac3.jpg' alt="Access Control" className="rounded-xl w-full" />
            <img src='/images/services/accesscontrol/ac4.jpg' alt="Access Control" className="rounded-xl w-full" />
            <div></div>
            <img src='/images/services/accesscontrol/ac5.jpg' alt="Access Control" className="rounded-xl w-full" />
            <img src='/images/services/accesscontrol/ac6.jpg' alt="Access Control" className="rounded-xl w-full" />
            <img src='/images/services/accesscontrol/ac7.jpg' alt="Access Control" className="rounded-xl w-full" />


        </div>

    </section>
  )
}

export default AccessControl