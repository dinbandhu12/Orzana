"use client"

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'
import { motion, useAnimation } from 'framer-motion'

const images = [
    {
        src: '/images/tab-1.webp',
    },
    {
        src: '/images/tab-2.webp',
    },
    {
        src: '/images/tab-3.webp',
    }
]

const FourthSection = () => {
  return (
    <div className='flex flex-col space-y-10 items-center justify-center px-20'>
        <div className='flex py-20'>
            <div className='space-y-6 flex flex-col'>
                <div className='text-gray-800 text-xl px-10'>
                    DRIVE EFFICENCY ACROSS TEAMS
                </div>
                <div className='text-4xl px-10'>Manage Complex Work Easily</div>
                <div className='text-xl text-gray-600 px-10'>
                    Connect your team with a single platform that has all the tools you need to get the job done.
                </div>
                <div className='md:flex items-center md:space-x-60 space-y-10 p-10'>
                    <Image 
                    src="/images/tab-1.webp"
                    alt='illustration'
                    width={700}
                    height={700}
                    />

                    <div className='space-y-10 border-b'>
                        <div className='text-3xl'>Timeline</div>
                        <div className='w-96 text-xl text-gray-600'>
                            See how work maps out over time. Manage dependent, overlapping, and unscheduled tasks and create a plan that works for everyone.
                        </div>

                        <div className='flex'>
                            <div className='text-lg'> Get Started</div>
                            <ArrowRight className='h-6 w-6 ml-4' />
                        </div>
                    </div>
                </div>

                <div className='text-gray-800 text-xl px-10'>
                    DRIVE EFFICENCY ACROSS TEAMS
                </div>
                <div className='text-4xl px-10'>Manage Complex Work Easily</div>
                <div className='text-xl text-gray-600 px-10'>
                    Connect your team with a single platform that has all the tools you need to get the job done.
                </div>
                <div className='md:flex items-center md:space-x-60 space-y-10 p-10'>
                    <Image 
                    src="/images/tab-3.webp"
                    alt='illustration'
                    width={700}
                    height={700}
                    />

                    <div className='space-y-10 border-b'>
                        <div className='text-3xl'>Timeline</div>
                        <div className='w-96 text-xl text-gray-600'>
                            See how work maps out over time. Manage dependent, overlapping, and unscheduled tasks and create a plan that works for everyone.
                        </div>

                        <div className='flex'>
                            <div className='text-lg'> Get Started</div>
                            <ArrowRight className='h-6 w-6 ml-4' />
                        </div>
                    </div>
                </div>
                
                <div className='text-gray-800 text-xl px-10'>
                    DRIVE EFFICENCY ACROSS TEAMS
                </div>
                <div className='text-4xl px-10'>Manage Complex Work Easily</div>
                <div className='text-xl text-gray-600 px-10'>
                    Connect your team with a single platform that has all the tools you need to get the job done.
                </div>
                <div className='md:flex items-center md:space-x-60 space-y-10 p-10'>
                    <Image 
                    src="/images/tab-2.webp"
                    alt='illustration'
                    width={700}
                    height={700}
                    />

                    <div className='space-y-10 border-b'>
                        <div className='text-3xl'>Timeline</div>
                        <div className='w-96 text-xl text-gray-600'>
                            See how work maps out over time. Manage dependent, overlapping, and unscheduled tasks and create a plan that works for everyone.
                        </div>

                        <div className='flex'>
                            <div className='text-lg'> Get Started</div>
                            <ArrowRight className='h-6 w-6 ml-4' />
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>
  )
}

export default FourthSection