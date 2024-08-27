import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const IntrusionAlarms = () => {
  return (
    <section className='py-32 sm:px-10 px-5 bg-intusionalarms'>
        
        <h1 className='text-red font-semibold text-5xl Wittgenstein text-center pb-20 xl:text-6xl'>INTRUSION ALARMS</h1>

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
                <img src='/images/services/intrusionAlarms.jpg' alt="Fire Alarms" className="inline-block rounded-3xl w-full" />
            </div>
            <div className='text-justify'>
            Intrusion alarms, also known as burglar alarms or security alarms,are essential components of security systems designed to detect unauthorized entry or intrusion into a protected area. These alarms consist of sensors strategically placed around a property, such as door and window contacts, motion detectors, and glass break sensors, which are connected to a central control panel. When an unauthorized entry is detected, the sensors trigger the alarm system, which then emits a loud sound or sends a notication to alert occupants or security personnel of the potential threat. Intrusion alarms serve as a deterrent to burglars and intruders, helping to protect homes, businesses, and other properties from theft, vandalism, and unauthorized access.


            </div>

        </div>



    </section>
  )
}

export default IntrusionAlarms