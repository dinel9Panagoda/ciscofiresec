import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const IntrusionAlarms = () => {
  return (
    <section className='my-32 sm:px-10 px-5'>
        
        <h1 className='text-red font-semibold text-5xl Wittgenstein text-center pb-20 xl:text-6xl'>Intrusion Alarms</h1>

        <div className='grid sm:grid-cols-2 gap-7'>
            <div>
                <img src='/images/services/intrusionAlarms1.jpeg' alt="Intrusion Alarms" className="inline-block rounded-3xl w-full" />
            </div>
            <div className='text-justify'>
            Intrusion alarms, also known as burglar alarms or security alarms, are essential components of security systems designed to detect unauthorized entry or intrusion into a protected area. These alarms consist of sensors strategically placed around a property, such as door and window contacts, motion detectors, and glass break sensors, which are connected to a central control panel. When an unauthorized entry is detected, the sensors trigger the alarm system, which then emits a loud sound or sends a notication to alert occupants or security personnel of the potential threat. Intrusion alarms serve as a deterrent to burglars and intruders, helping to protect homes, businesses, and other properties from theft, vandalism, and unauthorized access. With advancements in technology, modern intrusion alarm systems oer features such as wireless connectivity, smartphone integration, and remote monitoring, providing greater convenience and exibility for users to manage and monitor their security systems remotely. Additionally, some intrusion alarm systems may incorporate additional features such as surveillance cameras, access control, and environmental sensors to provide comprehensive security coverage. By providing early detection and timely response to security threats, intrusion alarms play a critical role in safeguarding property and ensuring peace of mind for occupants.
            </div>

        </div>

    </section>
  )
}

export default IntrusionAlarms