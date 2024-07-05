import Image from "next/image";

const Dedicated = () => {
    return (
        <div className="">


            <div className='mx-2 mx-auto max-w-7xl px-4 my-40 lg:px-8'>

                <h1 className="text-red font-semibold text-5xl Wittgenstein text-center">Special offers for the professionals</h1>

                <div className='grid gap-5 lg:grid-cols-5 sm:grid-cols-3 grid-cols-1 my-16'>

                    <div>
                        <img src='/images/profservices/architect.webp' alt="Architect" className="rounded-3xl w-full h-52 object-cover" />
                        <a href="/architects">
                        <h1 className="bg-grey mt-3 text-center p-3 rounded-3xl text-white uppercase font-extrabold">Architects</h1>
                        </a>
                    </div>

                    <div>
                        <img src='/images/profservices/contractors.jpeg' alt="Contractors" className="rounded-3xl w-full h-52 object-cover" />
                        <a href="/contractors">
                        <h1 className="bg-grey mt-3 text-center p-3 rounded-3xl text-white uppercase font-extrabold">Contractors</h1>
                        </a>
                    </div>

                    <div>
                        <img src='/images/profservices/electricians.jpeg' alt="Electricians" className="rounded-3xl w-full h-52 object-cover" />
                        <a href="/electricians">
                        <h1 className="bg-grey mt-3 text-center p-3 rounded-3xl text-white uppercase font-extrabold">Electricians</h1>
                        </a>
                    </div>

                    <div>
                        <img src='/images/profservices/realestate.jpeg' alt="Real Estate Agents" className="rounded-3xl w-full h-52 object-cover" />
                        <a href="/realestateagents">
                        <h1 className="bg-grey mt-3 text-center p-3 rounded-3xl text-white uppercase font-extrabold">Real Estate Agents</h1>
                        </a>
                    </div>

                    <div>
                        <img src='/images/profservices/buildingmanagers.webp' alt="Building Managers" className="rounded-3xl w-full h-52 object-cover" />
                        <a href="/buildingmanagers">
                        <h1 className="bg-grey mt-3 text-center p-3 rounded-3xl text-white uppercase font-extrabold">Building Managers</h1>
                        </a>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Dedicated;
