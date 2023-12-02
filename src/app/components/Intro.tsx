import Image from 'next/image'
import Smile from './../../../public/images/smileback.png'
import Smiling from './../../../public/images/smilingback.png'
import Link from 'next/link'

// import Style from "./../components/page.module.css"



const Intro = () => {
  return (

    <div className=' relative '>
      <div className=''>
        <div className='group w-full '>

          <Image className='block group-hover:hidden object-cover w-full h-screen' src={Smile} alt='' />
          <Image className='hidden group-hover:block object-cover w-full h-screen' src={Smiling} alt='' />

        </div>
      </div>
      <div className='  sm:flex sm:flex-col sm:items-start  sm:h-full absolute mt-72  sm:top-60 sm:mt-5 sm:ml-3  top-16  2xl:left-16 flex flex-col '>
        <div className='flex flex-col justify-center text-center items-center md:mt-2 z-1 2xl:p-5'>
          <h4 className=' font-semibold xs:text-1xl sm:text-2xl lg:text-3x text-black font-plexsans'>HI, I AM A  </h4>
          <h2 className='sm:mt-3 xs:text-2xl sm:text-3xl '>
            <span className=" relative flex w-[max-content] sm:text-amber-950 2xl:text-6xl
          font-extrabold font-sans mt-3 xs:text-2xl sm:text-3xl lg:text-5xl before:absolute before:inset-0 before:animate-typewriter before:bg-white after:absolute after:inset-0 after:w-[0.125em] after:animate-caret
            after:bg-black">Developer</span></h2>
          <div className=' mt-2 2xl:mt-5'>
            <button className='py-1 text-[11px]  sm:text-base  sm:py-4 md:p-2 w-28 sm:w-[10rem] rounded-md md:rounded-2xl hover:bg-white hover:text-amber-950 text-white bg-amber-950 font-plexsans'><Link href="#proj"> VIEW PROJECTS </Link></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro