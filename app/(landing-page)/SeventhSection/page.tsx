"use client"

import { ArrowRight } from "lucide-react"
import Image from "next/image"

const SeventhSection = () => {
  return (

    <div className="flex flex-col md:py-20 md:p-40 p-10 bg-[#E5E4E2]">
        <div className="space-y-6 flex flex-col md:px-20 pb-10">
            <div className="text-xl"> Get started easily</div>
            <div className="text-4xl"> Priority Revenue Management Work</div>
            <div className="text-xl"> Connect your data and start using Orzana in minutes. No credit card required.</div>
        </div>

        <div className="md:flex md:px-20 md:space-x-10 space-y-10 md:space-y-0">
            <div className="rounded-sm bg-white p-8">
                <Image
                src={"/images/tab-1.webp"}
                alt="tab-1"
                width={500}
                height={500}
                className="w-96"
                />

                <div className="text-3xl pt-8">Start with a templates</div>
                <div className="pt-10 flex justify-between">
                    <div className="text-xl">
                        View Templates
                    </div>
                    <ArrowRight className="h-6 w-6 ml-4" />
                </div>
            </div>

            <div className="rounded-sm bg-white p-8">
                <Image
                src={"/images/tab-3.webp"}
                alt="tab-2"
                width={500}
                height={500}
                className="w-96"
                />

                <div className="text-3xl pt-8">See Orzana in action</div>
                <div className="pt-10 flex justify-between">
                    <div className="text-xl">
                        View Demo
                    </div>
                    <ArrowRight className="h-6 w-6 ml-4" />
                </div>
            </div>

            <div className="rounded-sm bg-white p-8">
                <Image
                src={"/images/tab-2.webp"}
                alt="tab-3"
                width={500}
                height={500}
                className="w-96"
                />

                <div className="text-3xl pt-8">Talk with sales team</div>
                <div className="pt-10 flex justify-between">
                    <div className="text-xl">
                        Contact Sales
                    </div>
                    <ArrowRight className="h-6 w-6 ml-4" />
                </div>
            </div>

        </div>
    </div>
  )
}

export default SeventhSection