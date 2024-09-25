import React from 'react'
import EngineeringIcon from '@mui/icons-material/Engineering';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import Wework from '../../components/Wework/index'
import Beliefs from '@/components/Beliefs';

const AboutUs = () => {
    
  return (
    <section className='max-x-7xl'>

        <h1 className='text-center'>
            <img src='/images/aboutus/ABOUT_US.gif'/>
        </h1>
        <p className='text-center font-black Wittgenstein text-3xl text-red py-10'>Ensuring Safety for All</p>


        <div className='px-20'>

        <p className='text-center font-light italic bg-lightgrey py-20 px-20 rounded-3xl mb-20'>
            "The company was established in <span className='font-bold text-red'>1982</span> where  me and my army friend start installing residential alarm systems. I remember  back then control panel had only one light green loop close, and a key pad to arm and disarm the alarm. Same for fire alarms. Then some company from California came out with a keypad  with zone description. From residential, we moved on to commercial installation intercom systems. CCTV cameras were 115 volts high voltage. After few years the technology improved, went from training on silent knight fire alarms to electric company fire alarm panel. When internet established, we got contract for RCN  high rise buildings  coring 3/12 inch holes through the floors installing pipe boxes running 25 pair cat phone wire fiber, and  650 wire molding to each apartment. By then we had about 12 employees, accounting 2 secretaries. I remember 9/11, we were installing  internet, and pipe boxes was staret city in Bronx. 18 buildings, then got contract with sureguart storage company. They had about 2000 storage facilities all over united states so storage unit were 500 or 800 doors. We installed contact on each door gated door king fire alarms. Did it from main, all the way to Albany Georgia. Was a lot on the road with the guys in general.  I did all aspects of low voltage cameras, fire alarms, intercom systems, CCTV, computer network, cat 5, cat 6, cat 7. Installed switches, and terminated computer wiring. Doing it about <span className='font-bold text-red'>40</span> years"
            <p className='font-semibold text-xl pt-5'>Founder</p>
            <p className='font-semibold text-blue text-xl'>Victor Gaier</p>
            </p>
        <Beliefs />

            <h1 className='pt-20 font-bold text-3xl text-center '>Why Choose Us?</h1>
            <div className='flex justify-center items-center'>
            <div className='grid md:grid-cols-2 gap-10 mt-20 '>
                <div className='text-center'>

                   <div className="flip-card rounded-3xl mb-10">
                        <div className="flip-card-inner">
                            <div className="flip-card-front pt-10 rounded-3xl">
                                <EngineeringIcon className='text-7xl fill-white' />
                                <h1 className='text-white'>Expertise You Can Trust</h1> 

                            </div>
                            
                            <div className="flip-card-back rounded-3xl bg-red text-white pt-5">
                                <p className='flex px-5'>With years of experience in the fire protection industry, our team of certified professionals brings unparalleled knowledge and hands-on expertise in fire prevention, detection, and suppression systems.</p> 
                            </div>
                        </div>  
                    </div>

                    <div className="flip-card rounded-3xl mb-10">
                        <div className="flip-card-inner">
                            <div className="flip-card-front pt-10 rounded-3xl">
                                <EmojiObjectsIcon className='text-7xl fill-white' />
                                <h1 className='text-white'>Comprehensive Solutions</h1> 

                            </div>
                            
                            <div className="flip-card-back rounded-3xl bg-red text-white pt-5">
                                <p className='flex px-5 px-5'>From fire risk assessments to custom-designed protection systems, we offer end-to-end fire safety services to ensure you’re fully protected.</p> 
                            </div>
                        </div>  
                    </div>
                </div>

                <div className='text-center'>

                   <div className="flip-card rounded-3xl mb-10">
                        <div className="flip-card-inner">
                            <div className="flip-card-front pt-10 rounded-3xl">
                                <EngineeringIcon className='text-7xl fill-white' />
                                <h1 className='text-white'>24/7 Support</h1> 

                            </div>
                            
                            <div className="flip-card-back rounded-3xl bg-red text-white pt-5">
                                <p className='flex px-5'>Fire emergencies can happen at any time. That’s why we offer round-the-clock monitoring and emergency services to ensure rapid response when it matters most.</p> 
                            </div>
                        </div>  
                    </div>

                    <div className="flip-card rounded-3xl mb-10">
                        <div className="flip-card-inner">
                            <div className="flip-card-front pt-10 rounded-3xl">
                                <EmojiObjectsIcon className='text-7xl fill-white' />
                                <h1 className='text-white'>Customer-Centric Approach</h1> 

                            </div>
                            
                            <div className="flip-card-back rounded-3xl bg-red text-white pt-5">
                                <p className='flex px-5'>Your safety is our priority. We work closely with you to tailor our services to meet the specific needs of your facility, ensuring a hassle-free experience from start to finish.</p> 
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
            </div>
        
        </div>

        <div className='pb-10'>
        <Wework />

        </div>
    </section>

    )
}

export default AboutUs