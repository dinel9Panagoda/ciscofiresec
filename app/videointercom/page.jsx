import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const VideoIntercom = () => {
  return (
    <section className='my-32 sm:px-10 px-5'>
        
        <h1 className='text-red font-semibold text-5xl Wittgenstein text-center pb-20 xl:text-6xl'>Video Intercom</h1>

        <div className='grid sm:grid-cols-2 gap-7'>
            <div>
                <img src='/images/services/videoIntercom1.webp' alt="Video Intercom" className="inline-block rounded-3xl w-full" />
            </div>
            <div className='text-justify'>
            Video intercom systems provide a modern and convenient way to manage access and communication in various settings, including residential buildings, oces, and commercial spaces. These systems typically consist of a doorbell camera or intercom unit installed at an entry point, such as a front door or gate, and an indoor monitor or mobile app that allows occupants to see and communicate with visitors remotely. With built-in cameras and speakers, video intercoms enable visual verication of visitors before granting access, enhancing security and peace of mind for occupants. Additionally, some advanced video intercom systems oer features such as motion detection, night vision, and two-way audio communication, allowing for seamless interaction even in low-light conditions or noisy environments. Whether it's screening visitors, granting access to delivery personnel, or communicating with guests, video intercoms provide a convenient and ecient solution for managing access and enhancing communication in both residential and commercial settings. As technology continues to evolve, video intercom systems are becoming increasingly integrated with smart home and building automation systems, oering enhanced functionality and connectivity for a seamless and secure living and working environment.
            </div>

        </div>

    </section>
  )
}

export default VideoIntercom