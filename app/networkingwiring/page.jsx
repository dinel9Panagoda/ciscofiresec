import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const NetworkingServer = () => {
  return (
    <section className='my-32 sm:px-10 px-5'>
        
        <h1 className='text-red font-semibold text-5xl Wittgenstein text-center pb-20 xl:text-6xl'>Networking/ Wiring Server Room</h1>

        <div className='flex flex-wrap pb-20 gap-3 justify-center items-center'>
            <div className='bg-lightred px-3 py-3 rounded-3xl text-red '>CAT 6</div>
            <div className='bg-lightred px-3 py-3 rounded-3xl text-red'>CAT 7</div>


        </div>

        <div className='grid sm:grid-cols-2 gap-7'>
            <div>
                <img src='/images/services/NetWServers.jpeg' alt="Networking Server" className="inline-block rounded-3xl w-full" />
            </div>
            <div className='text-justify'>
            A network server is a powerful computer connected to your business network. Network servers have many functions and can form an important part of your computer network. They are usually used for shared le storage, email management and to run centralised applications, such as your customer database.

            <br/>Wire Server is a collection of API server components that connect to each other and to databases. The API components and databases are each in a cluster, which means that copies of the same program code run multiple times. Wire clients, such as the Wire app on a phone, can connect to.
            </div>

        </div>

    </section>
  )
}

export default NetworkingServer