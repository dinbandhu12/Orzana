import Image from 'next/image'
import React from 'react'

const FourthSection = () => {
  return (
    <div className='md:py-20 py-0 space-y-20 items-center justify-center'>
        <div className='text-4xl text-center px-10'>
            The best platform for your business needs
        </div>
            
            {/* section one */}
        <div className='md:flex md:space-x-10 items-center px-10 justify-center'>
            
            <div className='bg-gradient-to-r from-gray-400 to-gray-100 items-center justify-center rounded-md flex p-10'>
                <Image
                    src="/images/tab-1.webp"
                    alt="Picture01"
                    width={530}
                    height={500}
                    className='rounded-md w-80 h-60 md:w-96 md:h-82' 
                />
            </div>

            <div className='flex items-center justify-center py-6 md:w-1/2'>
                <div className='text-4xl flex md:space-y-20 space-y-10 flex-col'>
                    <div className='flex-col'>
                        Quickly Connect Complex Work Across Teams
                    </div>
                    <div className='text-2xl'>
                        Decrease duplicate work and increase transparency with a single source of truth for all your work.
                    </div>
                    <div className='p-6 border w-40 rounded-xl text-xl bg-slate-200 hover:bg-slate-300 hover:cursor-pointer'>
                        Get Started
                    </div>
                </div>

            </div>

        </div>

        {/* section two */}
        <div className='md:flex md:space-x-10 items-center px-10 justify-center'>
            
            <div className='flex items-center justify-center py-6 md:w-1/2'>
                <div className='text-4xl flex md:space-y-20 space-y-10 flex-col'>
                    <div className='flex-col'>
                       The Best Platform for Your Business Needs
                    </div>
                    <div className='text-2xl'>
                        Our platform is built to make your business processes more efficient and effective. Our platform help you on any business needs. and the best part is that it is free to use.
                    </div>
                    <div className='p-6 border w-40 rounded-xl text-xl bg-slate-200 hover:bg-slate-300 hover:cursor-pointer'>
                        Get Started
                    </div>
                </div>
            </div>

            <div className='bg-gradient-to-r from-gray-400 to-gray-100 items-center justify-center rounded-md flex p-10'>
                <Image
                    src="/images/tab-3.webp"
                    alt="Picture01"
                    width={530}
                    height={500}
                    className='rounded-md w-80 h-60 md:w-96 md:h-82' 
                />
            </div>

        </div>
    </div>
  )
}

export default FourthSection