import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const NetworkingServer = () => {
  return (
    <section className='py-32 sm:px-10 px-5 bg-netservers'>
        
        <h1 className='text-red font-semibold text-5xl Wittgenstein text-center pb-20 xl:text-6xl'>NETWORKING/WIRING SERVER ROOM</h1>

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
                <img src='/images/services/NetWServers.jpeg' alt="Sliding Door" className="inline-block rounded-3xl w-full" />
            </div>
            <div className='text-justify'>
            A network server is a powerful computer connected to your business network. Network servers have many functions and can form an important part of your computer network. They are usually used for shared le storage, email management and to run centralised applications, such as your customer database. Wire Server is a collection of API server components that connect to each other and to databases. The API components and databases are each in a cluster, which means that copies of the same program code run multiple times. Wire clients, such as the Wire app on a phone, can connect to.

            </div>

        </div>

        <h6 className='text-red text-center pt-20 pb-5'>Recent Units We Did For Our Clients...</h6>
        <div className='grid grid-cols-3 gap-3 max-w-2xl mx-auto'>
            <img src='/images/services/accesscontrol/ac2.jpg' alt="Network Server" className="rounded-xl w-full  h-60" />
            <img src='/images/services/netservers/ns1.jpg' alt="Network Server" className="rounded-xl w-full  h-60" />
            <img src='/images/services/netservers/ns2.jpg' alt="Network Server" className="rounded-xl w-full  h-60" />
            <img src='/images/services/netservers/ns3.jpg' alt="Network Server" className="rounded-xl w-full  h-60" />
            <img src='/images/services/netservers/ns4.jpg' alt="Network Server" className="rounded-xl w-full  h-60" />
            <img src='/images/services/netservers/ns5.jpg' alt="Network Server" className="rounded-xl w-full h-60" />


        </div>

    </section>
  )
}

export default NetworkingServer