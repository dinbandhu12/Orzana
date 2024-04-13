"use client"

import Slider from "react-infinite-logo-slider"
import Image from "next/image"

const SixthSection = () => {
  return (
    <div className="py-20">
        <Slider 
        width="200px"
        duration={40}
        pauseOnHover={true}
        blurBorder={true}
        
        >
            <Slider.Slide>
                <Image src="/images/logo/logo-14.svg" alt="logo-1" width={100} height={100} className="w-20 h-20"  />
            </Slider.Slide>
            <Slider.Slide>
                <Image src="/images/logo/logo-15.svg" alt="logo-2" width={100} height={100} className="w-20 h-20"  />
            </Slider.Slide>
            <Slider.Slide>
                <Image src="/images/logo/logo-13.svg" alt="logo-3" width={100} height={100} className="w-20 h-20"  />
            </Slider.Slide>
            <Slider.Slide>
                <Image src="/images/logo/logo-12.svg" alt="logo-4" width={100} height={100} className="w-20 h-20"  />
            </Slider.Slide>
            <Slider.Slide>
                <Image src="/images/logo/logo-11.svg" alt="logo-5" width={100} height={100} className="w-20 h-20"  />
            </Slider.Slide>
            <Slider.Slide>
                <Image src="/images/logo/logo-10.svg" alt="logo-6" width={100} height={100} className="w-20 h-20"  />
            </Slider.Slide>
            <Slider.Slide>
                <Image src="/images/logo/logo-9.svg" alt="logo-7" width={100} height={100} className="w-20 h-20"  />
            </Slider.Slide>
            <Slider.Slide>
                <Image src="/images/logo/logo-8.svg" alt="logo-2" width={100} height={100} className="w-20 h-20"  />
            </Slider.Slide>
            <Slider.Slide>
                <Image src="/images/logo/logo-7.svg" alt="logo-2" width={100} height={100} className="w-20 h-20"  />
            </Slider.Slide>
            <Slider.Slide>
                <Image src="/images/logo/logo-6.svg" alt="logo-2" width={100} height={100} className="w-20 h-20"  />
            </Slider.Slide>
            


        </Slider>

    </div>
  )
}

export default SixthSection