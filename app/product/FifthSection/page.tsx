import Image from "next/image" 

const FifthSection = () => {
  return (
    <div className="py-20 md:space-y-20 items-center justify-center flex flex-col">
      <div className="text-4xl text-center px-10">
        80% of our customers are satisfied with our platform and services.
      </div>
      <div className="md:flex md:space-x-20 items-center justify-center">
        <div className="border-b md:border-r md:border-b-0 md:w-80">
          <Image 
            src="/images/logo/logo-6.svg"
            width={250}
            height={250}
            alt="logo-1"
            className="h-40"
          />
        </div>
        
        <div className="border-b md:border-r md:border-b-0 md:w-80">
          <Image 
            src="/images/logo/logo-9.svg"
            width={250}
            height={250}
            alt="logo-1"
            className="h-40"
          />
        </div>
        
        <div className="border-b md:border-r md:border-b-0 md:w-80">
          <Image 
            src="/images/logo/logo-8.svg"
            width={250}
            height={250}
            alt="logo-1"
            className="h-40"
          />
        </div>
        
        <div className="border-b md:border-r md:border-b-0 md:w-80">
          <Image 
            src="/images/logo/logo-5.svg"
            width={250}
            height={250}
            alt="logo-1"
            className="h-40"
          />
        </div>

      </div>

    </div>
  )
}

export default FifthSection