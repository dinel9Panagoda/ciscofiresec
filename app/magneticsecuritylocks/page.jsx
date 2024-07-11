import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const MagneticLocks = () => {
  return (
    <section className='my-32 sm:px-10 px-5'>
        
        <h1 className='text-red font-semibold text-5xl Wittgenstein text-center pb-20 xl:text-6xl'>Magnetic Locks</h1>

        <div className='grid sm:grid-cols-2 gap-7'>
            <div>
                <img src='/images/services/magneticLocks1.jpeg' alt="Magnetic Locks" className="inline-block rounded-3xl w-full" />
            </div>
            <div className='text-justify'>
            Electromagnetic locks, often referred to as "maglocks," use magnetic force and have no moving parts making them highly reliable and an easy to maintain choice for fail-safe applications when code compliance permits.
            </div>

        </div>

    </section>
  )
}

export default MagneticLocks