import Image from 'next/image'
import Link from 'next/link'
import Eduimage from './../../../public/images/graduation-cap.png'
import Interimage from './../../../public/images/internship.png'
// import Style from './../components/page.module.css'



const Edu = () => {
    return (

        <main className="flex  sm:mt h-[76rem] sm:h-[85rem] 2xl:h-[120rem] justify-center  ">
            <div className=' flex sm:bg-cover'>
                

                <div className=" w-full block h-screen md:mt-[20rem] sm:mt-[5rem] sm:ml-12 ">
                    <div className='justify-end sm:ml-52     md:ml-72  2xl:ml-80' id='edu'>
                        <div className='flex justify-center sticky sm:static top-0 bg-white sm:bg-transparent'>
                            <h1 className="text-4xl sm:text-4xl md:text-5xl text-blue-800 font-bold xs:text-center font-sans sm:text-left md:text-left">Education</h1>
                        </div>
                        <div className=' flex flex-row mt-16 '>
                            <div className='w-[40%] sm:w-[30%]  mt-2 flex justify-center'>
                                <Image className="flex justify-center w-[40px] h-[30px] sm:w-5 sm:h-7 2xl:ml-9" src={Eduimage} alt="Edu image" />
                            </div>
                            <div>
                                <div className='flex flex-col   mt-2'>
                                    <h3 className='font-semibold  text-blue-800 xs:text-center sm:text-center md:text-left font-plexsans'>2018 - 2021</h3>
                                    <h1 className='xs:text-1xl sm:text-[2rem] font-bold mt-1 xs:text-center sm:text-center md:text-left'>Master of Computer Application</h1>
                                    <h3 className='font-semibold mt-4 font-plexsans'>Kannur University</h3>
                                    <p className='mt-2 font-plexsans'>A small river named Duden flows by their place and supplies it with the necessary
                                        regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                </div>
                                <div className=' h-0.5 bg-gray-200 mt-10 '></div>
                            </div>
                        </div>
                        <div className=' flex flex-row  mt-28 sm:mt-36 md:mt-3'>
                            <div className='w-[40%] sm:w-[30%]   mt-3 flex justify-center'>
                                <Image className="flex justify-center w-[2rem] h-[2rem] sm:w-5 sm:h-7 2xl:ml-9" src={Eduimage} alt="Edu image" />

                            </div>
                            <div>
                                <div className='flex flex-col   mt-2'>
                                    <h3 className='font-semibold  text-blue-800 xs:text-center sm:text-center md:text-left font-plexsans'>2018 - 2021</h3>
                                    <h1 className='xs:text-1xl sm:text-2xl font-bold mt-1 xs:text-center sm:text-center md:text-left '>Bachelor of Computer Application</h1>
                                    <h3 className='font-semibold mt-4 font-plexsans'>Jamia Hamdard</h3>
                                    <p className='mt-2'>A small river named Duden flows by their place and supplies it with the necessary
                                        regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                </div>
                                <div className=' h-0.5 bg-gray-200 mt-10 '></div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col sm:mt-96  2xl:ml-80 ' id='intern'>
                        <div className='flex  justify-center  sm:bg-transparent stick  sm:static top-0 '>
                            <h1 className="text-4xl text-center sm:text-5xl md:text-5xl text-blue-800 font-bold font-sans sm:text-left mt-32 " id="intern">Internship</h1>
                        </div>
                        <div className='mt-16 flex flex-row '>
                            <div className='w-[40%] sm:w-[30%]  mt-3 flex justify-center'>
                                <Image className="flex justify-center w-[2.5rem] h-[2rem] 2xl:ml-9" src={Interimage} alt="Intern image" />
                            </div>
                            <div>
                                <div className='flex flex-col   mt-2'>
                                    <h3 className='font-semibold  text-blue-800 xs:text-center sm:text-left font-plexsans'>July 2023 - Sept 2023</h3>
                                    <h1 className='text-2xl font-bold mt-1 xs:text-center sm:text-left  ' id='edu'>React js</h1>
                                    <h3 className='font-semibold mt-4 font-plexsans'>Vectorux Technolabs., Thalassery</h3>
                                    <p className='mt-2 sm:text-left font-plexsans'>A small river named Duden flows by their place and supplies it with the necessary
                                        regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                </div>
                                <div className=' h-0.5 bg-gray-200 mt-10 '></div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </main>
    )
}

export default Edu