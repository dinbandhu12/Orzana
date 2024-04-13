"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { useState } from "react"
  

const FifthSection = () => {

    const [activeItem, setActiveItem] = useState("item-1");

  return (
    <div className="md:flex md:space-x-20 py-20 space-y-10 items-center justify-center bg-[#282828]">
        <div className="space-y-6 flex flex-col text-gray-200 md:w-1/3 px-10">
            <div className="text-xl"> STREAMLINE YOUR WORK AND PROCESSES </div>
            <div className="text-4xl"> Prioritize your work and get more done </div>
            <div className="text-xl"> 
            {""}
            Orzana is a powerful tool that helps you manage your work and processes, and get more done. 
            {""}
            </div>
        
        
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger 
                className="text-blue-400"
                onClick={() => setActiveItem("item-1")}
                >
                    Automate your workflows
                </AccordionTrigger>
                <AccordionContent className="border-b border-blue-500">
                Put the most repetitive tasks on autopilot and focus on what matters most.
                <div className="flex text-blue-400 pt-4">
                    <div className="text-lg"> Get Started </div>
                    <ArrowRight className="w-6 h-6 ml-4" />
                </div>

                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
                <AccordionTrigger 
                className="text-rose-400"
                onClick={() => setActiveItem("item-2")}
                >
                    Automate your workflows
                </AccordionTrigger>
                <AccordionContent className="border-b border-rose-500">
                Put the most repetitive tasks on autopilot and focus on what matters most.
                <div className="flex text-rose-400 pt-4">
                    <div className="text-lg"> Get Started </div>
                    <ArrowRight className="w-6 h-6 ml-4" />
                </div>

                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
                <AccordionTrigger 
                className="text-amber-400"
                onClick={() => setActiveItem("item-3")}
                >
                    Automate your workflows
                </AccordionTrigger>
                <AccordionContent className="border-b border-amber-500">
                Put the most repetitive tasks on autopilot and focus on what matters most.
                <div className="flex text-amber-400 pt-4">
                    <div className="text-lg"> Get Started </div>
                    <ArrowRight className="w-6 h-6 ml-4" />
                </div>

                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
                <AccordionTrigger 
                className="text-green-400"
                onClick={() => setActiveItem("item-4")}
                >
                    Automate your workflows
                </AccordionTrigger>
                <AccordionContent className="border-b border-green-500">
                Put the most repetitive tasks on autopilot and focus on what matters most.
                <div className="flex text-green-400 pt-4">
                    <div className="text-lg"> Get Started </div>
                    <ArrowRight className="w-6 h-6 ml-4" />
                </div>

                </AccordionContent>
            </AccordionItem>
        </Accordion>
        </div>
        
        {/* <Image src="/images/tab-6.webp" width={700} height={700} alt="illustration" className="p-10"/> */}
        <div className="p-10">
            {activeItem === "item-1" && <Image src="/images/tab-6.webp" width={500} height={500} alt="illustration" />}
            {activeItem === "item-2" && <Image src="/images/tab-3.webp" width={500} height={500} alt="illustration" />}
            {activeItem === "item-3" && <Image src="/images/tab-4.webp" width={500} height={500} alt="illustration" />}
            {activeItem === "item-4" && <Image src="/images/tab-2.webp" width={500} height={500} alt="illustration" />}
        
        </div>




    </div>
  )
}

export default FifthSection