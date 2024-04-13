"use client"

import { CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"


const ThirdSection = () => {

    const ref = useRef(null)
    const isInView = useInView(ref)

  return (
    <div>
        
        <motion.div
        ref={ref}
        initial={{ y:100, opacity: 0 }}
        animate={{ y:0, opacity: 1 }}
        transition={{ duration: 2 }}
        className="flex flex-col space-x-10"
        >
            
            <div className="py-20 bg-[#097969] items-center flex flex-col space-y-10">
                <div className="text-white text-4xl px-10 md:px-0 md:text-6xl md:pb-10 flex items-center justify-start">
                    Why companies choose us
                </div>
                <div className="md:w-3/4 px-10">
                    <div className="flex space-x-10 md:space-x-20 text-white items-center text-2xl justify-center border-b border-t py-10">
                        <CheckCircle2 className="md:h-20 md:w-20 h-10 w-10" />
                        <div className="md:w-80 md:text-3xl text-md w-72">
                            The only platform that provides a complete solution for your business
                        </div>
                        <div className="md:w-1/2 hidden md:block">
                            See related task, collaborators and progress to quickly achieve business goals.
                        </div>
                    </div>
                    
                    <div className="flex space-x-10 md:space-x-20 text-white items-center text-2xl justify-center border-b border-t py-10">
                        <CheckCircle2 className="md:h-20 md:w-20 h-10 w-10" />
                        <div className="md:w-80 md:text-3xl text-md w-72">
                            Rated best for cross-team collaboration
                        </div>
                        <div className="md:w-1/2 hidden md:block">
                            The customer service team is always ready to help you with any questions or concerns.
                        </div>
                    </div>
                    
                    <div className="flex space-x-10 md:space-x-20 text-white items-center text-2xl justify-center border-b border-t py-10">
                        <CheckCircle2 className="md:h-20 md:w-20 h-10 w-10" />
                        <div className="md:w-80 md:text-3xl text-md w-72">
                            Simple adoption, with less downtime and faster
                        </div>
                        <div className="md:w-1/2 hidden md:block">
                            The full adoption and implementation of our platform is simple and easy.
                        </div>
                    </div>

                </div>

            </div>


        </motion.div>


    </div>
  )
}

export default ThirdSection