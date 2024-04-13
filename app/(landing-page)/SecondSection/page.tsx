"use client"

import { ArrowRight, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"
import { useInView } from "framer-motion"

import { useState } from "react"
import { transform } from "next/dist/build/swc"


const tabs = [
    {
        name: "Marketing Teams",
        title: "Deliver impactful marketing campaigns",
        feature1: "Create and manage campaigns",
        feature2: "Track performance and optimize",
        feature3: "Collaborate with cross-functional teams",
        image: "/images/tab-1.webp",
    },
    {
        name: "Product Teams",
        title: "Build and launch products faster",
        feature1: "Plan and execute product roadmap",
        feature2: "Manage product development",
        feature3: "Collaborate with cross-functional teams",
        image: "/images/tab-2.webp",
    },
    {
        name: "Sales Teams",
        title: "Close more deals and drive revenue",
        feature1: "Manage sales pipeline",
        feature2: "Track performance and optimize",
        feature3: "Collaborate with cross-functional teams",
        image: "/images/tab-3.webp",
    },
    {
        name: "Operations Teams",
        title: "Streamline and automate processes",
        feature1: "Manage and optimize processes",
        feature2: "Track performance and optimize",
        feature3: "Collaborate with cross-functional teams",
        image: "/images/tab-4.webp",
    },
    {
        name: "Project Management",
        title: "Plan, execute, and deliver projects",
        feature1: "Plan and execute projects",
        feature2: "Track performance and optimize",
        feature3: "Collaborate with cross-functional teams",
        image: "/images/tab-5.webp",
    }
    // {
    //     name: "Strategic Planning",
    //     title: "Plan, execute, and deliver projects",
    //     feature1: "Plan and execute projects",
    //     feature2: "Track performance and optimize",
    //     feature3: "Collaborate with cross-functional teams",
    //     image: "/images/tab-6.webp",
    // }
]

const SecondSection = () => {

    const ref = useRef(null)
    const isInView = useInView(ref, { once : true })

    const [activeTab, setActiveTab] = useState(tabs[0])

  return (

    <div ref={ref}
    className="flex flex-col justify-center items-center md:py-20 p-10">
        <div className="flex justify-center items-center">
            <div 
                style={{
                    transform : `translateY(${isInView ? 0 : 100}px)`,
                    opacity: isInView ? 1 : 0,
                    transition: "all 1s ease-in-out"
                }}
                className="md:flex md:space-x-20 border-b md:py-10">
                    
                    <div className="space-y-10">
                        <div className="text-3xl">
                            80% of team say Orzana helps them work better together
                        </div>
                        <div className="flex items-center space-x-9 hover:text-blue-500 text-xl">
                            See how customers use Orzana
                        <ArrowRight className="w-6 h-6 ml-4" />
                        </div>

                    </div>


                <motion.div
                    initial = {{ y:100, opacity: 0 }}
                    animate = {{ y:0, opacity: 1 }}
                    className="grid grid-cols-2 md:flex md:space-x-10 items-center justify-center py-10"
                >
                    <Image 
                        src="/images/logo/logo-5.svg"
                        width={150}
                        height={150}
                        alt="logo"
                    />
                    <Image 
                        src="/images/logo/logo-13.svg"
                        width={150}
                        height={150}
                        alt="logo"
                    />
                    <Image 
                        src="/images/logo/logo-8.svg"
                        width={150}
                        height={150}
                        alt="logo"
                    />
                    <Image 
                        src="/images/logo/logo-9.svg"
                        width={150}
                        height={150}
                        alt="logo"
                    />

                </motion.div>
            </div>
        </div>

        <motion.div
        initial = {{ y:100, opacity: 0 }}
        animate = {{ y:0, opacity: 1 }}
        className="text-4xl md:text-6xl pt-10 py-20 hidden md:block">
                See how Orzana help your team
        </motion.div>

        
        <div className="hidden md:flex items-center justify-center">
            {tabs.map((tab) => (
                <div key={tab.name}
                className={`
                flex
                justify-center
                items-center
                space-x-10
                w-60
                ${activeTab === tab ? 'border-b-4 pt-2 border-gray-500 text-gray-800' : 'text-muted-foreground'}

                `}               
                
                onClick={() => setActiveTab(tab)}
                style={{cursor : "pointer"}}
                
                >
                    <div className="flex text-3xl text-center h-20 w-20 justify-center">
                        <div>
                            {tab.name}

                        </div>
                    </div>

                </div>
            ))}

        </div>

        <div className="pt-10 hidden md:block">
            {activeTab && (
                <div className="flex justify-center">
                    <div style={{
                        height : '525px', width: '700px'
                    }}
                    
                    className="flex-col bg-gray-200 p-10 rounded-md"
                    >
                        <p className="text-4xl py-10 border-b underline">
                            {activeTab.title}
                        </p>

                        <div className="space-y-10 items-center justify-center">
                            <ul className="flex space-x-4">
                                <CheckCircle2 className="w-6 h-6 text-gray-500" />
                                <li>
                                    {activeTab.feature1}
                                </li>
                            </ul>

                            <ul className="flex space-x-4">
                                <CheckCircle2 className="w-6 h-6 text-gray-500" />
                                <li>
                                    {activeTab.feature2}
                                </li>
                            </ul>
                            
                            <ul className="flex space-x-4">
                                <CheckCircle2 className="w-6 h-6 text-gray-500" />
                                <li>
                                    {activeTab.feature3}
                                </li>
                            </ul>

                        </div>
                    </div>

                    <div style={{
                        height : '525px', width: '700px'
                    }}
                    
                    className="bg-gradient-to-r from-gray-400 to-gray-100
                    items-center justify-center
                    rounded-md
                    flex"

                    >
                        <Image 
                            src={activeTab.image}
                            alt="img01"
                            width={500}
                            height={500}

                            className="rounded-md"
                        />

                    </div>
                </div>
                    
            )}

        </div>


    </div>
  )
}

export default SecondSection