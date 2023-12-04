import Image from 'next/image'
import Link from 'next/link'


const Footer = () => {
  return (
    <div className=" w-full h-28 bg-blue-500 mt-10 ">
        <div className='flex flex-row justify-center mt-4'>
            <Link href="https://www.instagram.com/m.ishqu?igshid=MmIzYWVlNDQ5Yg%3D%3D">
             <Image className=" mt-5 ml-4" src="/images/instagram.png" width={30} height={30} alt=""/>
             </Link>
             <Link href="https://www.linkedin.com/in/mishkath-bk">
             <Image className=" mt-5 ml-4" src="/images/linkedin.png" width={30} height={30} alt=""/>
             </Link>
        </div>
    </div>
  )
}

export default Footer