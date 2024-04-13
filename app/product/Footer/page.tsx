
import { Facebook, Globe, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";


const Footer = () => {
    return ( 
    <div>
        <section className="hidden md:flex flex-col py-20 justify-between bg-[#3a3b3c]">
            <div className=" text-center  flex justify-between px-80 space-x-20 text-white">
                <div className="">
                    ©2024 Orzana, Inc. All rights reserved.
                </div>
                {/* <div>
                    <Globe className="h-6 w-6 text-white" />
                </div> */}
                <div>
                    Terms & Conditions
                </div>
                <div className="flex space-x-2">
                    <div className="bg-black p-2 rounded-full hover:bg-red-600 hover:cursor-pointer">
                        <Twitter className="h-6 w-6 text-white" />
                    </div>
                    <div className="bg-black p-2 rounded-full hover:bg-green-600 hover:cursor-pointer">
                        <Linkedin className="h-6 w-6 text-white" />
                    </div>
                    <div className="bg-black p-2 rounded-full hover:bg-blue-600 hover:cursor-pointer">
                        <Instagram className="h-6 w-6 text-white" />
                    </div>
                    <div className="bg-black p-2 rounded-full hover:bg-orange-500 hover:cursor-pointer">
                        <Facebook className="h-6 w-6 text-white" />
                    </div>
                    <div className="bg-black p-2 rounded-full hover:bg-yellow-600 hover:cursor-pointer">
                        <Youtube className="h-6 w-6 text-white" />
                    </div>
                </div>
            </div>
        </section>
    </div> 
    );
}
 
export default Footer;