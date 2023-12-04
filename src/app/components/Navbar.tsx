import Image from 'next/image'
import Link from 'next/link'
import { useState } from "react";


const Navbar = () => {
  // const [bt, setbt] = useState(0);
  return (
  
    <div className='block sm:sticky top-0 z-10'>
      <div className="flex flex-row items-center justify-center  bg-white">
          <ul className='hidden sm:flex sm:flex-row font-opensans sm:gap-10 md:gap-24 h-14 sm:text-1xl  m-auto justify-between '>
              <li className='flex items-center justify-center   hover:text-blue-950 hover:scale-110 hover:font-semibold transition duration-500'><Link href="#intro">Home</Link></li>
              <li className='flex items-center justify-center   hover:text-blue-950 hover:scale-110 hover:font-semibold transition duration-500'><Link href="#about">About</Link></li>
              <li className='flex items-center justify-center   hover:text-blue-950 hover:scale-110 hover:font-semibold transition duration-500'><Link href="#services">Services</Link></li>
              <li className='flex items-center justify-center   hover:text-blue-950 hover:scale-110 hover:font-semibold transition duration-500'><Link href="#contact">Contact</Link></li>
              <li className='flex items-center justify-center   hover:text-blue-950 hover:scale-110 hover:font-semibold transition duration-500'><Link href="#resume">Resume</Link></li>

          </ul>
      </div>
      <div className='flex  sm:hidden'>
        <button className='ml-auto mr-2 mt-1 ' >
        <Image className=" " src="/images/bars-solid.svg" width={20} height={20} alt=''/>
        </button>
      </div>
    </div>

  )
}

export default Navbar