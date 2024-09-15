import Image from "next/image";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const Dedicated = () => {
    return (
        <div className="">


            <div className='mx-2 mx-auto max-w-7xl px-4 my-40 lg:px-8'>

                <h1 className="text-red font-semibold text-5xl Wittgenstein text-center">Special offers for the professionals</h1>

                <div className='grid gap-5 lg:grid-cols-5 sm:grid-cols-3 my-16'>

                    <a href="/architects">
                        <div className="bg-linegrey rounded-3xl h-full">
                            <div className="relative">
                            <img src='/images/profservices/architect.webp' alt="Architect" className="rounded-3xl w-full h-52 object-cover p-2" />
                            <p className="py-2 px-2 w-full rounded-t-full text-sm text-white absolute -bottom-2 glassmorphism text-center"><ArrowCircleRightIcon /> Click here for more info... </p>
                            </div>
                            

                            <h1 className="bg-grey text-center rounded-3xl text-white uppercase font-extrabold mx-2 py-3 my-2">Architects</h1>
                        </div>
                    </a>
                    
                    
                    <a href="/contractors">
                        <div className="bg-linegrey rounded-3xl h-full">
                            <div className="relative">
                            <img src='/images/profservices/contractors.jpeg' alt="Contractors" className="rounded-3xl w-full h-52 object-cover p-2" />
                            <p className="py-2 px-2 w-full rounded-t-full text-sm text-white absolute -bottom-2 glassmorphism text-center"><ArrowCircleRightIcon /> Click here for more info... </p>
                            </div>
                            

                            <h1 className="bg-grey text-center rounded-3xl text-white uppercase font-extrabold mx-2 py-3 my-2">Contractors</h1>
                        </div>
                    </a>
                    
                    
                    <a href="/electricians">
                        <div className="bg-linegrey rounded-3xl h-full">
                            <div className="relative">
                            <img src='/images/profservices/electricians.jpeg' alt="Electricians" className="rounded-3xl w-full h-52 object-cover p-2" />
                            <p className="py-2 px-2 w-full rounded-t-full text-sm text-white absolute -bottom-2 glassmorphism text-center"><ArrowCircleRightIcon /> Click here for more info... </p>
                            </div>
                            

                            <h1 className="bg-grey text-center rounded-3xl text-white uppercase font-extrabold mx-2 py-3 my-2">Electricians</h1>
                        </div>
                    </a>
                    
                    
                    
                    <a href="/realestateagents">
                        <div className="bg-linegrey rounded-3xl h-full">
                            <div className="relative">
                            <img src='/images/profservices/realestate.jpeg' alt="Real Estate Agents" className="rounded-3xl w-full h-52 object-cover p-2" />
                            <p className="py-2 px-2 w-full rounded-t-full text-sm text-white absolute -bottom-2 glassmorphism text-center"><ArrowCircleRightIcon /> Click here for more info... </p>
                            </div>
                            

                            <h1 className="bg-grey text-center rounded-3xl text-white uppercase font-extrabold mx-2 py-3 my-2">Real Estate Agents</h1>
                        </div>
                    </a>
                    
                    
                    
                    <a href="/buildingmanagers">
                        <div className="bg-linegrey rounded-3xl h-full">
                            <div className="relative">
                            <img src='/images/profservices/buildingmanagers.webp' alt="Building Managers" className="rounded-3xl w-full h-52 object-cover p-2" />
                            <p className="py-2 px-2 w-full rounded-t-full text-sm text-white absolute -bottom-2 glassmorphism text-center"><ArrowCircleRightIcon /> Click here for more info... </p>
                            </div>
                            

                            <h1 className="bg-grey text-center rounded-3xl text-white uppercase font-extrabold mx-2 py-3 my-2">Building Managers</h1>
                        </div>
                    </a>

                </div>
            </div>

        </div>
    )
}

export default Dedicated;
