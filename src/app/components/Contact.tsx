import Image from 'next/image'
import Link from 'next/link'



const Contact = () => {
  return (
    <main className="block mt-36" id='contact'>
        <div className="flex  justify-center sticky sm:static top-0 bg-white sm:bg-transparent">
            <h1 className="text-4xl sm:text-5xl text-blue-800 font-sans font-bold">Contact Me</h1>
        </div>
        
        <div className="flex flex-row  flex-wrap justify-center mt-16 sm:mt-20 gap-4 sm:gap-2 md:gap-6">
            <div className="w-64 sm:w-72 h-72 rounded-lg  shadow-lg shadow-blue-500/50 flex flex-col items-center">
                <div className='block mt-8'>
                    <div className='flex justify-center'>
                        <Image src="/images/address.png" width={40} height={40} alt=""/>
                    </div>
                    <div className='block justify-center text-center'>
                        <h2 className='text-2xl text-blue-800 font-sans mt-7'>Address</h2>
                        <p className='mt-6 font-plexsans'>Mizas Kannur, Kerala </p>
                        <p>670006</p>
                    </div>
                </div>
            </div>
            <div className="w-64 sm:w-72 h-72 rounded-lg  shadow-lg shadow-blue-500/50  flex flex-col items-center">
            <div className='block mt-8'>
                    <div className='flex justify-center'>
                        <Image src="/images/phone-call.png" width={40} height={40} alt=""/>
                    </div>
                    <div className='block justify-center text-center'>
                        <h2 className='text-2xl text-blue-800 font-sans mt-7'>Contact Number</h2>
                        <p className='mt-6'>+91 8129605545</p>
                    </div>
                </div>
            </div>
            <div className="w-64 sm:w-72 h-72 rounded-lg shadow-lg shadow-blue-500/50 flex flex-col items-center">
            <div className='block mt-8'>
                    <div className='flex justify-center'>
                        <Image src="/images/mail.png" width={40} height={40} alt=""/>
                    </div>
                    <div className='block justify-center text-center'>
                        <h2 className='text-2xl text-blue-800 font-sans mt-7'>Email Address</h2>
                        <p className='mt-6 font-plexsans'><Link href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">mishkathbk@gmail.com</Link></p>
                    </div>
                </div>
            </div>            
        </div>
    </main>
  )
}

export default Contact