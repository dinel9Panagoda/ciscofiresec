import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const CCTV = () => {
  return (
    <section className='my-32 sm:px-10 px-5'>
        
        <h1 className='text-red font-semibold text-5xl Wittgenstein text-center pb-20 xl:text-6xl'>CCTV</h1>

        <div className='grid sm:grid-cols-2 gap-7'>
            <div>
                <img src='/images/services/CCTV1.jpeg' alt="CCTV" className="inline-block rounded-3xl w-full" />
            </div>
            <div className='text-justify'>
            Closed-circuit television (CCTV) systems are ubiquitous in today's society, serving as a crucial tool for surveillance, security, and monitoring in various settings. Consisting of cameras, monitors, and recording devices, CCTV systems enable the capture and observation of video footage within a designated area, whether it's a public space, commercial establishment, or residential property. These systems play a pivotal role in deterring crime, enhancing public safety, and providing valuable evidence in investigations. With advancements in technology, modern CCTV systems oer high-resolution cameras, remote access capabilities, and intelligent features such as motion detection and facial recognition, improving their eectiveness and usability. Additionally, CCTV footage can be stored digitally, allowing for easy retrieval and review of recorded events. While CCTV systems have raised concerns about privacy and surveillance, when used responsibly and in accordance with regulations, they can be valuable tools for protecting property, ensuring public safety, and deterring criminal activity. As technology continues to evolve, the capabilities of CCTV systems are likely to expand, offering even greater functionality and integration with other security and monitoring technologies.
            </div>

        </div>

    </section>
  )
}

export default CCTV