import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const SlidingSwingDoors = () => {
  return (
    <section className='py-32 sm:px-10 px-5 bg-slidingdoors'>
        
        <h1 className='text-red font-semibold text-5xl Wittgenstein text-center pb-20 xl:text-6xl'>SLIDING DOORS/SWING DOORS OPERATORS</h1>

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
                <img src='/images/services/slidingDoor.jpeg' alt="Sliding Door" className="inline-block rounded-3xl w-full" />
            </div>
            <div className='text-justify'>
            Door which opens horizontally by sliding, usually parallel to (and sometimes within) a wall. Sliding doors can be mounted either on top of a track below or be suspended from a track above. Some types slide into a space in the parallel wall in the direction of travel, rather than the door sliding along the outside of the parallel wall. There are several types of sliding doors, such as pocket doors, sliding glass doors, center-opening doors, and bypass doors. Sliding doors are commonly used as shower doors, glass doors, screen doors, and wardrobe doors, and in vans.

            </div>

        </div>

        <h6 className='text-red text-center pt-20 pb-5'>Recent Units We Did For Our Clients...</h6>
        <div className='grid grid-cols-3 gap-3 max-w-2xl mx-auto'>
            <img src='/images/services/slidingdoors/sd1.jpg' alt="Sliding Door" className="rounded-xl w-full" />
            <img src='/images/services/accesscontrol/ac6.jpg' alt="Sliding Door" className="rounded-xl w-full" />
            <img src='/images/services/accesscontrol/ac7.jpg' alt="Sliding Door" className="rounded-xl w-full" />

        </div>

    </section>
  )
}

export default SlidingSwingDoors