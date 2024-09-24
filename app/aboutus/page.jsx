import React from 'react'

const AboutUs = () => {
  return (
    <section className='max-x-7xl'>
        <div className='py-10 flex justify-center items-center'>
            <img src='/images/CiscoLogo.png' className='w-96 rounded-3xl drop-shadow-[0_15px_10px_rgba(0,0,0,0.8)]' />
        </div>
        <h1 className='text-center font-black text-7xl pt-32'>
            <img src='/images/aboutus/ABOUT_US.gif'/>
        </h1>
        <p className='text-center font-black Wittgenstein text-3xl text-grey'>Ensuring Safety for All</p>
    </section>

    )
}

export default AboutUs