import Image from 'next/image'
import customimage from "./../../../public/images/cart.png"
import Spareimage from "./../../../public/images/spare.png"


const Projects = () => {
    return (
        <main className='mt-24'>
            <div className="flex  justify-center sticky sm:static top-0 bg-white sm:bg-transparent" id="proj">
                <h1 className="text-4xl  sm:text-5xl text-blue-800 font-bold font-sans">Projects</h1>
            </div>
            <div className="flex flex-row flex-wrap justify-center mt-20 gap-7">
                <div className=' xs:w-[18rem] md:w-[40rem] h-[25rem] sm:h-[28rem] rounded-lg bg-slate-100 shadow-lg flex flex-col hover:scale-110 '>
                    <h1 className='text-2xl sm:text-4xl mt-7 font-semibold text-center font-plexsans'>Custom Cart</h1>
                    <div className='flex justify-center'>
                        <Image className="mt-6 items-start justify-center w-[12rem] sm:w-[20rem]" src={customimage}  alt="Edu image" />
                    </div>
                    <div className='flex flex-col  font-plexsans mt-4 '>
                        <p className='text-sm text-center sm:text-[1rem] font-semibold  text-gray-700'> A Web Application where customers can order customized products online.</p>
                        <div className='justify-center text-sm mt-3  ml-1 sm:ml-[2rem] font-medium'>
                            <p className='text-gray-700'>Developed using : <span className='text-black'>React.js, Node.js, Mongodb</span></p>
                            <p className='mt-2 text-gray-700'>Framework:<span className='text-black'> Express js</span></p>
                        </div>
                    </div>
                </div>
                <div className='xs:w-[18rem] md:w-[40rem] h-[24rem] sm:h-[28rem] rounded-lg bg-slate-100 shadow-lg flex flex-col hover:scale-110 '>
                    <h1 className=' text-2xl sm:text-4xl font-bold mt-7 text-center font-plexsans'>Spare Hub</h1>
                    <div className='flex justify-center'>
                        <Image className="mt-6 items-start justify-center w-[12rem] sm:w-[23rem]" src={Spareimage} alt="Edu image" />
                    </div>
                    <div className='flex flex-col font-plexsans justify-center mt-4'>
                        <p className=' font-semibold text-sm text-center sm:text-[1rem] sm:font-semibold  text-gray-700'>A Web Application in which users can order vehicle spare parts through online.</p>
                        <div className='justify-center text-sm mt-3 ml-1 sm:ml-[2rem] font-medium'>
                            <p className='text-gray-700'>Developed using : <span className='text-black'> Python, Html, CSS, Javascript, SQLite</span></p>
                            <p className='mt-2 text-gray-700'>Framework: <span className='text-black'>Django</span></p>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    )
}

export default Projects