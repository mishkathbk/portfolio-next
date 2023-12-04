'use client'
import Link from 'next/link'
import ExampleDoc from '../../../public/images/graphic-design.png'

const Button = () => {
  const butt=()=>{
    window.location.href = "https://drive.google.com/file/d/1rDRZlrEa_v3ElFtIH8DsyNSeQ7BpmueK/view?usp=sharing"

  }

  return (
    <div className='  flex items-center justify-center  mt-14' id="resume">
       <button  className="text-center  text-white bg-blue-900 rounded-lg p-2 hover:text-blue-950 font-semibold hover:bg-white transition duration-700 " onClick={butt} >Download Resume</button>
          

        </div>
  )
}



export default Button