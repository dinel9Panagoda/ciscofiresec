import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const VideoIntercom = () => {
  return (
    <section className='py-32 sm:px-10 px-5 bg-videointercom'>
        
        <h1 className='text-red font-semibold text-5xl Wittgenstein text-center pb-20 xl:text-6xl'>VIDEO INTERCOM</h1>

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
                <img src='/images/services/videoIntercom.jpg' alt="Fire Alarms" className="inline-block rounded-3xl w-full" />
            </div>
            <div className='text-justify'>
            Video intercom systems provide a modern and convenient way to manage access and communication in various settings, including residential buildings, oces, and commercial spaces. These systems typically consist of a doorbell camera or intercom unit installed at an entry point, such as a front door or gate, and an indoor monitor or mobile app that allows occupants to see and communicate with visitors remotely.


            </div>

        </div>



    </section>
  )
}

export default VideoIntercom