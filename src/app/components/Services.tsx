import Image from 'next/image'
import Link from 'next/link'


const Services = () => {
  return (
    
    <div className='justify-center items-start mt-32'>
        <main className="block   " id='services'>
            <div className="flex  justify-center sticky sm:static top-0 bg-white sm:bg-transparent">
                <h1 className="text-4xl sm:text-5xl text-blue-800 font-sans font-bold">Services</h1>
            </div>
            
            <div className="flex flex-row flex-wrap justify-center mt-16 sm:mt-20 gap-10">
                <div className=" w-64 h-64 sm:w-72 sm:h-72 rounded-lg  shadow-lg shadow-blue-500/50 flex flex-col items-center">
                    <div className='block mt-4'>
                        <div className='flex justify-center'>
                            <Image src="/images/graphic-design.png" width={40} height={40} alt=""/>
                        </div>
                        <div className='block justify-center text-center'>
                            <h2 className='text-2xl text-blue-800 font-sans mt-5'>Web Design</h2>
                            <p className='mt-6 text-sm text-gray-600 sm:text-base'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt commodi nisi harum nu</p>
                            
                        </div>
                    </div>
                </div>
                <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-lg shadow-lg shadow-blue-500/50 flex flex-col items-center">
                <div className='block mt-4'>
                        <div className='flex justify-center'>
                            <Image src="/images/coding.png" width={40} height={40} alt=""/>
                        </div>
                        <div className='block justify-center text-center'>
                            <h2 className='text-2xl text-blue-800 font-sans mt-5'>Web Development</h2>
                            <p className='mt-6 text-sm  text-gray-600 sm:text-base'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt commodi nisi harum nu</p>
                        </div>
                    </div>
                </div>            
            </div>
        </main>
    </div>
  )
}

export default Services