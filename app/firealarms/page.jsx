import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const FireAlarms = () => {
  return (
    <section className='py-32 sm:px-10 px-5 bg-firealarms'>
        
        <h1 className='text-red font-semibold text-5xl Wittgenstein text-center pb-20 xl:text-6xl'>FIRE ALARMS</h1>

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
                <img src='/images/services/fireAlarms.webp' alt="Fire Alarms" className="inline-block rounded-3xl w-full" />
            </div>
            <div className='text-justify'>
            Fire alarms are critical safety devices designed to detect the presence of smoke, heat, or ames, signaling potential danger and prompting timely evacuation. These alarms serve as the rst line of defense in safeguarding lives and property against the devastating eects of re. Equipped with advanced sensors, modern re alarm systems are capable of detecting even the slightest traces of smoke, ensuring early detection and swift response to emergencies.

            <div className='grid grid-cols-2 mt-10 list-disc text-navyblue ml-10'>
                <ul>
                    <li>School</li>
                    <li>Buildings</li>
                    <li>Office</li>
                    <li>Educational</li>
                </ul>
                <ul>
                    <li>Institution</li>
                    <li>Residencial</li>
                    <li>Warehouses</li>
                    <li>Many more...</li>
                </ul>
            </div>

            </div>

        </div>

        <h6 className='text-red text-center pt-20 pb-5'>Recent Fire Alarm Units We Did For Our Clients...</h6>
        <div className='grid grid-cols-4 gap-3 max-w-2xl mx-auto'>
            <img src='/images/services/firealarms/fa1.jpg' alt="Fire Alarms" className="rounded-xl w-full" />
            <img src='/images/services/firealarms/fa2.jpg' alt="Fire Alarms" className="rounded-xl w-full" />
            <img src='/images/services/firealarms/fa3.jpg' alt="Fire Alarms" className="rounded-xl w-full" />
            <img src='/images/services/firealarms/fa4.jpg' alt="Fire Alarms" className="rounded-xl w-full" />

        </div>

    </section>
  )
}

export default FireAlarms