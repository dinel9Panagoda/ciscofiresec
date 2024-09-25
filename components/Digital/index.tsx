import Image from "next/image";

const Digital = () => {
    return (

        <div className="mx-2">
            <div className='mx-auto max-w-7xl px-4 my-40 pb-20 lg:pb-40 lg:px-8 rounded-3xl bg-grey relative'>
                <div className='grid grid-cols-1 sm:grid-cols-2 my-16'>

                    {/* COLUMN-1 */}

                    <div className="pt-24 lg:pl-24 pr-10 ">
                        <h3 className="text-lg font-normal text-white mb-5 tracking-widest text-center lg:text-start">WHO WE ARE</h3>
                        <h4 className="lg:text-2xl font-bold text-white mb-8 leading-snug text-center lg:text-start">Over the years, we have developed and integrated cutting-edge technologies that set industry standards, from advanced re detection and alarm systems to state-of-the-art communication networks that guarantee swift and eective responses to emergencies.</h4>
                        <div className="text-center lg:text-start">
                            <a href="/aboutus">
                            <button className="text-xl font-semibold text-white bg-navyblue py-4 px-12 hover:bg-offwhite border-2 rounded-full hover:text-navyblue transition ease-in-out delay-150 hover:-translate-y-5">About Us</button>
                            </a>
                        </div>
                    </div>

                    {/* COLUMN-2 */}

                    <div>
                        <div className="girldoodle">
                            <Image src="/images/digital/whoWeAre1.svg" alt="girldoodle" className="" width={815} height={691} />
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Digital;
