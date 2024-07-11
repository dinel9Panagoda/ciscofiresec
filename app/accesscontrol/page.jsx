import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const AccessControl = () => {
  return (
    <section className='my-32 sm:px-10 px-5'>
        
        <h1 className='text-red font-semibold text-5xl Wittgenstein text-center pb-20 xl:text-6xl'>Access Control</h1>

        <div className='flex flex-wrap pb-20 gap-3 justify-center items-center'>
            <div className='bg-lightred px-3 py-3 rounded-3xl text-red '>Face Recognition</div>
            <div className='bg-lightred px-3 py-3 rounded-3xl text-red'>Pin No</div>
            <div className='bg-lightred px-3 py-3 rounded-3xl text-red '>Card</div>
            <div className='bg-lightred px-3 py-3 rounded-3xl text-red '>Key Fob</div>
            <div className='bg-lightred px-3 py-3 rounded-3xl text-red '>Many more...</div>

        </div>

        <div className='grid sm:grid-cols-2 gap-7'>
            <div>
                <img src='/images/services/AccessControl1.jpeg' alt="Access Control" className="inline-block rounded-3xl w-full" />
            </div>
            <div className='text-justify'>
            Access control is the practice of regulating who can enter or use resources in a particular environment. Whether it's a physical space, a computer network, or digital data, access control ensures that only authorized individuals or systems are granted entry or permission. By implementing access control measures such as biometric scanners, key cards, or passwords, organizations can eectively manage security risks and protect sensitive information from unauthorized access or misuse. Access control not only enhances security but also promotes efficciency by streamlining workows and facilitating seamless access to resources for authorized users. Additionally, access control systems often provide detailed audit trails, enabling administrators to monitor and track access activities, identify potential security breaches, and enforce compliance with regulations and policies. As technology continues to evolve, access control mechanisms evolve alongside, offering increasingly sophisticated methods to safeguard assets and information in an ever-changing digital landscape. to emergencies. Upon activation, these alarms emit loud unmistakable alerts, alerting occupants to evacuate the premises immediately and alerting emergency responders to the location of the incident. With their reliability and effectiveness, fire alarms play a pivotal role in mitigating the impact of fires, saving lives, and minimizing property damage. Regular maintenance and testing are crucial to ensure their proper functionality, providing peace of mind and enhanced safety for all.
            </div>

        </div>

    </section>
  )
}

export default AccessControl