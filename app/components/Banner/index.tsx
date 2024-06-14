import Image from "next/image";

const Banner = () => {
    return (
        <div className="relative text-center">
            <img src="/images/banner/bannerpic.png" alt="hero-image" />
        
            <div className='w-full absolute bottom-0 left-0 text-center mb-40'>
            <div className=''>


                <div className="mx-auto sm:mx-0">
                    <div className='py-3 text-center'>
                        <button className='hover:text-red hover:bg-[#fee2e2] hover:shadow-xl text-sm md:text-lg font-bold px-6 py-1 rounded-3xl tracking-wider text-white bg-red'>YOUR PROBLEM SOLVING COMPANY</button>
                    </div>
                    <div className="py-3 text-center">
                        <h1 className='text-6xl lg:text-80xl font-bold text-white'>
                            Cisco Fire Security <br /> Communication
                        </h1>
                    </div>
                </div>

            </div>
        </div>
        </div>

    )
}

export default Banner;
