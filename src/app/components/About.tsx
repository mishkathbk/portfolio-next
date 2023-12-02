import Image from 'next/image'
import Image1 from "./../../../public/images/abimage.jpg"
import cot from './../../../public/images/aboutcover.jpg'
import paper from './../../../public/images/paper.jpg'
import Styles from './../components/page.module.css'

const aboutme1 = [" Name:", "Date Of Birth :", "Address :", "Email :", "Phone No :"]

const fill1 = ["Mishkath B K", "23-10-2000", "Mizas Kannur Kerala", "mishkathbk@gmail.com", "+91 8129605545"]


const About = () => {
  return (
    <main className=' h-screen  2xl:mt-0 justify-center  ' id='about'>
      <div className='flex w-full sm:w-1/2 justify-center  2xl:py-8'>
        <div className='  p-1 flex justify-center sm:p-2  md:p-2 mt-7 sm:mt-10 md:mt-10 2xl:mt-3  2xl:p-5 bg-white'>
          <div className=' absolute z-1 flex justify-center'>
            <h2 className='text-5xl font-semibold sm:text-5xl md:text-6xl text-blue-800 sm:font-semibold'>   About me .</h2>
          </div>
          <div className='relative w-full'>
            <h1 className=' text-5xl font-bold sm:text-5xl md:text-6xl text-blue-500 opacity-40 sm:font-extrabold'>About me.</h1>
          </div>
        </div>
      </div>
      <div className='flex  justify-center mt-9  sm:mt-10'>
        <div className='flex flex-col w-full m sm:w-[60%]  md:w-[70%]  md:py-10 item  2xl:p-3'>

          <p className=' text-center sm:text-left font-rubik text-gray-700 sm:text-lg md:text-xl 2xl:text-xl '>Hi, I am <span className='font-bold text-3xl text-blue-900'> Mishkath B K</span></p>

          <p className='text-base md:text-xl 2xl:text-xl text-gray-700 text-center font-plexsans sm:text-left sm:text-base'> I am a designer & developer with a passion for web design. I have completed
            Masters in Computer Application (MCA) from Chinmaya Institute of Technology (Kannur University) and three month of
            experience in Front-end React.js Developer(INTERN). I am excited about the opportunity to kick-start
            my career in the IT field and eager to apply my knowledge and skills in a practical setting.
          </p>
        </div>
      </div>
      <div className='flex justify-center mt-8 sm:mt-5'>
        <div className='block  sm:flex  justify-center gap-5'>
          <div className='flex  2xl:flex-col  justify-center mt-6  2xl:mt-5  items-center'>
            <div className='2xl:mt-36 2xl:mr-14'>
              <ul className='block 2xl:flex  justify-evenly 2xl:gap-56  '>
                {aboutme1.map((aboutme, index) =>
                  <li className='text-gray-600 text-base sm:text-lg  font-plexsans font-semibold ' key={index}>{aboutme}</li>
                )}
              </ul>
            </div>
            <div className='2xl:mt-3 2xl:ml-14'>
              <ul className='block 2xl:flex  justify-evenly 2xl:gap-40 text-sm text-right'>
                {fill1.map((aboutme, index) =>
                  <li className='text-base sm:text-lg text-blue-900 md:text-2xl  2xl:text-xl font-semibold font-sans' key={index}>{aboutme}</li>
                )}
              </ul>
            </div>
          </div>
        </div>
        <div>

        </div>
      </div>
    </main>

  )
}

export default About