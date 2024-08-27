import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const CCTV = () => {
  return (
    <section className='py-32 sm:px-10 px-5 bg-cctv'>
        
        <h1 className='text-red font-semibold text-5xl Wittgenstein text-center pb-20 xl:text-6xl'>CCTV</h1>

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
                <img src='/images/services/CCTV.jpg' alt="CCTV" className="inline-block rounded-3xl w-full" />
            </div>
            <div className='text-justify'>
            Closed-circuit television (CCTV) systems are ubiquitous in today's society, serving as a crucial tool for surveillance, security, and monitoring in various settings. Consisting of cameras, monitors, and recording devices, CCTV systems enable the capture and observation of video footage within a designated area, whether it's a public space, commercial establishment, or residential property.

            </div>

        </div>

        <h6 className='text-red text-center pt-20 pb-5'>Recent CCTV Units We Did For Our Clients...</h6>
        <div className='grid grid-cols-3 gap-3 max-w-2xl mx-auto'>
            <img src='/images/services/CCTV/cctv1.jpg' alt="CCTV" className="rounded-xl w-full" />
            <img src='/images/services/CCTV/cctv2.jpg' alt="CCTV" className="rounded-xl w-full" />
            <img src='/images/services/CCTV/cctv3.jpg' alt="CCTV" className="rounded-xl w-full" />

        </div>

    </section>
  )
}

export default CCTV