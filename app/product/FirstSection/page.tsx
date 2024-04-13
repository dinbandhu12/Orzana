import Image from 'next/image'
import React from 'react'

const FirstSection = () => {
  return (
    <div className='md:flex md:space-x-2o py-20 space-y-10 items-center justify-center'>
        <div className='space-y-10 flex-col flex md:w-1/3 px-10'>
            <div className='text-6xl'>
                The future of work is here.
            </div>
            <div className='text-2xl'>
                Orzana is a platform for the future of work, helping teams to work together, wherever they are.
            </div>

            <div className='flex space-x-4'>
                <div className='bg-black p-4 text-white text-xl rounded-md'>
                    Get Started
                </div>
                <div className='border p-4 text-xl rounded-md'>View Demo</div>
            </div>
        </div>

        <Image
            src={"/images/tab-6.webp"}
            alt="Orzana"
            width={700}
            height={700}
            className='px-10'
        />

    </div>
  )
}

export default FirstSection