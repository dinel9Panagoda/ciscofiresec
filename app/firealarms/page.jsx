import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const FireAlarms = () => {
  return (
    <section className='my-32 sm:px-10 px-5'>
        
        <h1 className='text-red font-semibold text-5xl Wittgenstein text-center pb-20 xl:text-6xl'>Fire Alarms</h1>

        <div className='flex flex-wrap pb-20 gap-3 justify-center items-center'>
            <div className='bg-lightred px-3 py-3 rounded-3xl text-red '>School</div>
            <div className='bg-lightred px-3 py-3 rounded-3xl text-red'>Buildings</div>
            <div className='bg-lightred px-3 py-3 rounded-3xl text-red '>Office</div>
            <div className='bg-lightred px-3 py-3 rounded-3xl text-red '>Educational</div>
            <div className='bg-lightred px-3 py-3 rounded-3xl text-red '>Institution</div>
            <div className='bg-lightred px-3 py-3 rounded-3xl text-red '>School</div>
            <div className='bg-lightred px-3 py-3 rounded-3xl text-red '>Residencial</div>
            <div className='bg-lightred px-3 py-3 rounded-3xl text-red '>Ware houses</div>
            <div className='bg-lightred px-3 py-3 rounded-3xl text-red '>Many more...</div>

        </div>

        <div className='grid sm:grid-cols-2 gap-7'>
            <div>
                <img src='/images/services/fireAlarms1.jpeg' alt="Fire Alarms" className="inline-block rounded-3xl w-full" />
            </div>
            <div className='text-justify'>
            Fire alarms are critical safety devices designed to detect the presence of smoke, heat, or ames, signaling potential danger and prompting timely evacuation. These alarms serve as the rst line of defense in safeguarding lives and property against the devastating eects of re. Equipped with advanced sensors, modern re alarm systems are capable of detecting even the slightest traces of smoke, ensuring early detection and swift response to emergencies. Upon activation, these alarms emit loud, unmistakable alerts, alerting occupants to evacuate the premises immediately and alerting emergency responders to the location of the incident. With their reliability and eectiveness, re alarms play a pivotal role in mitigating the impact of res, saving lives, and minimizing property damage. Regular maintenance and testing are crucial to ensure their proper functionality, providing peace of mind and enhanced safety for all.
            </div>

        </div>

    </section>
  )
}

export default FireAlarms