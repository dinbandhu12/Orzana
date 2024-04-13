import Image from 'next/image'
import React from 'react'

const SecondSection = () => {
  return (
    <div className='py-10 space-y-10 items-center justify-center flex flex-col'>
      <div className='text-5xl'>Why Orzana ?</div>
      <div className='text-2xl'>
        According to JDA, 79% of consumers want to see where their products are coming from. 
      </div>
      <div className='md:flex space-y-10 md:space-y-0 md:space-x-20 text-xl'>
        <div className='w-80 text-amber-300 border p-8 rounded-lg'>
          <div className='flex items-center space-x-2'>
            <Image 
              src="/images/icons/lightbulb.png"
              width={50}
              height={50}
              alt='illustration'
              className='h-20 w-20'
            />
            <div className='text-3xl'>82% +</div>
          </div>
          <div className='pt-4 w-80'>Increase Creativity</div>

        </div>
        
        <div className='w-80 text-green-300 border p-8 rounded-lg'>
          <div className='flex items-center space-x-2'>
            <Image 
              src="/images/icons/checkmark.png"
              width={50}
              height={50}
              alt='illustration'
              className='h-20 w-20'
            />
            <div className='text-3xl'>1000 +</div>
          </div>
          <div className='pt-4 w-80'>Happy Clients</div>

        </div>
        
        <div className='w-80 border p-8 rounded-lg'>
          <div className='flex items-center space-x-2'>
            <Image 
              src="/images/icons/clock.png"
              width={50}
              height={50}
              alt='illustration'
              className='h-20 w-20'
            />
            <div className='text-3xl'>41% +</div>
          </div>
          <div className='pt-4 w-80'>Increase Productivity and Efficiency</div>

        </div>
        
        <div className='w-80 text-blue-300 border p-8 rounded-lg'>
          <div className='flex items-center space-x-2'>
            <Image 
              src="/images/icons/refresh.png"
              width={50}
              height={50}
              alt='illustration'
              className='h-20 w-20'
            />
            <div className='text-3xl'>82% +</div>
          </div>
          <div className='pt-4 w-80'>Increase Creativity</div>

        </div>

      </div>

    </div>
  )
}

export default SecondSection