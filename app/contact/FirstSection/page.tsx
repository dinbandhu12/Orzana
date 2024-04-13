"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Image from "next/image";


import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";


const FormSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  email: z.string().email(),
  phone_number: z.string(),
  company_size: z.enum([
    "1-10",
    "11-50",
    "51-200",
    "201-500",
    "501-1000",
    "1000+",
  ]),
  country: z.enum(["Canada", "USA", "India", "China", "Indonesia", "Brazil", "Mexico", "Japan", "South Korea", "Germany", "United Kingdom", "France", "Italy", "Russia", "Turkey", "Spain", "Australia", "Netherlands", "Saudi Arabia", "Switzerland", "Sweden", "Poland", "Belgium", "Argentina", "Norway", "Austria", "United Arab Emirates"]),
  services: z.array(z.enum(["Web Development", "UI/UX Design", "Mockup Design", "Logo Design", "Website Redesign", "Full Website Development"])),
  info: z.string(),
});

type FormValues = {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  company_name: string;
  company_size: "1-10" | "11-50" | "51-200" | "201-500" | "501-1000" | "1000+";
  country: "Canada" | "USA" | "India" | "China" | "Indonesia" | "Brazil" | "Mexico" | "Japan" | "South Korea" | "Germany" | "United Kingdom" | "France" | "Italy" | "Russia" | "Turkey" | "Spain" | "Australia" | "Netherlands" | "Saudi Arabia" | "Switzerland" | "Sweden" | "Poland" | "Belgium" | "Argentina" | "Norway" | "Austria" | "United Arab Emirates" ;
  services: ("Web Development" | "UI/UX Design" | "Mockup Design" | "Logo Design" | "Website Redesign" | "Full Website Development")[];
  info: string;
};



export default function FirstSection() {

    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const { toast } = useToast();


  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      company_name: "",
      company_size: "1-10",
      country: "Switzerland",
      services: [],
      info: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    try {
        setLoading(true);
        const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
    
        if (!res.ok) {
            throw new Error("Something went wrong");
        }
    
        setSubmitted(true);
   
    }
    catch (err) {
        console.error(err);
        toast({
            title: "Error",
            description: 'Something went wrong',

        })
    }
    finally {
        setLoading(false);
    }
}

    

  return (
    <div className=" items-center justify-center flex flex-col px-20 m:px-0 py-20 space-y-10 text-center ">
        {!submitted ? (
            <div className="text-5xl ">
                    <div className="text-5xl ">Talk with our teams</div>

                    <div className="text-xl">
                      Fill out your information and a Orzana team representative will contact
                      you shortly.
                    </div>

            </div>
        ) : (
          <div className="text-3xl text-green-400 ">Thank you for contacting us. We will be in contact with you shortly.</div>      
        )}
        
      <Form {...form}>
        {!submitted ? (
        

        <form
          onSubmit={form.handleSubmit(onSubmit)}
          

          className="md:w-2/3 space-y-6 border p-8 rounded-xl "

        >
          <FormField
            control={form.control}
            name="first_name"
            render={({ field }) => (
              <FormItem className="flex items-center justify-center  space-y-4 w-full">
                <FormLabel className="w-60 text-2xl pt-4">First Name</FormLabel>
                <FormControl>
                  <Input className="w-full" placeholder="Enter first name" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="last_name"
            rules={{ required: "This field is required" }}
            render={({ field }) => (
              <FormItem className="flex items-center justify-center  space-y-4 w-full">
                <FormLabel className="w-60 text-2xl pt-4">Last Name</FormLabel>
                <FormControl>
                  <Input className="" placeholder="Enter last name" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex items-center justify-center  space-y-4 ">
                <FormLabel className="w-60 text-2xl pt-4">Email</FormLabel>
                <FormControl>
                  <Input className="" placeholder="Enter email address" {...field} />
                </FormControl>

              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone_number"
            render={({ field }) => (
              <FormItem className="flex items-center justify-center  space-y-4 w-full">
                <FormLabel className="w-60 text-2xl pt-4">
                  Phone Number
                </FormLabel>
                <FormControl>
                  <Input className="" placeholder="Enter phone number" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField 
            control={form.control}
            name="company_name"
            render={({ field }) => (
              <FormItem className="flex items-center justify-center  space-y-4 w-full">
                <FormLabel className="w-60 text-2xl pt-4">
                  Company Name
                </FormLabel>
                <FormControl>
                  <Input className="" placeholder="Enter company name" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            
            )}
          />



        <FormField
         control={form.control}
            name="company_size" 
            render={({ field }) => (
                <FormItem className="flex items-center justify-center  space-y-4 w-full">
                 <FormLabel className="w-60 text-2xl pt-4">Company Size</FormLabel>
                <Select
                
                  onValueChange={field.onChange}
                  // defaultValue={field.value[0]}
                  defaultValue=""
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="How many employees?" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <div className="flex gap-4">
                      <SelectItem value="1-10">
                        1-10
                      </SelectItem>
                    </div>
                    <SelectItem value="11-50">
                        11-50
                    </SelectItem>
                    <SelectItem value="51-200">
                        51-200
                    </SelectItem>
                    <SelectItem value="201-500">
                        201-500
                    </SelectItem>
                    <SelectItem value="501-1000">
                        501-1000
                    </SelectItem>
                    <SelectItem value="1000+">
                        1000+
                    </SelectItem>

                  </SelectContent>
                </Select>
    
                <FormMessage />
              </FormItem>
            )}
            />


            <FormField 
            control={form.control}
            name="services"
            render={({ field }) => (
                <FormItem className="flex items-center justify-center  space-y-4 w-full">
                 <FormLabel className="w-60 text-2xl pt-4">Services</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value[0]} // Change defaultValue to a string value
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select services" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <div className="flex gap-4">
                      <SelectItem value="Web Development">
                        Web Development
                      </SelectItem>
                    </div>
                    <SelectItem value="UI/UX Design">
                        UI/UX Design
                    </SelectItem>
                    <SelectItem value="Mockup Design">
                        Mockup Design
                    </SelectItem>
                    <SelectItem value="Logo Design">
                        Logo Design
                    </SelectItem>
                    <SelectItem value="Website Redesign">
                        Website Redesign
                    </SelectItem>
                    <SelectItem value="Full Website Development">
                        Full Website Development
                    </SelectItem>

                  </SelectContent>
                </Select>
    
                <FormMessage />
              </FormItem>
            )}
            />


          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
                <FormItem className="flex items-center justify-center  space-y-4 w-full">
                 <FormLabel className="w-60 text-2xl pt-4">Country</FormLabel>
                <Select
                
                  onValueChange={field.onChange}
                  // defaultValue={field.value[0]}   // Change defaultValue to a string value
                  defaultValue=""
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a country" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <div className="flex gap-4">
                      <SelectItem value="Switzerland"> Switzerland</SelectItem>
                    </div>
                    <SelectItem value="USA">
                      United States of America
                    </SelectItem>
                    <SelectItem value="india">
                      India
                    </SelectItem>
                    <SelectItem value="china">
                      China
                    </SelectItem>
                    <SelectItem value="indonesia">
                      Indonesia
                    </SelectItem>
                    <SelectItem value="brazil">
                      Brazil
                    </SelectItem>
                    <SelectItem value="mexico">
                      Mexico
                    </SelectItem>
                    <SelectItem value="japan">
                      Japan
                    </SelectItem>
                    <SelectItem value="south-korea">
                      South Korea
                    </SelectItem>
                    <SelectItem value="germany">
                      Germany
                    </SelectItem>
                    <SelectItem value="united-kingdom">
                      United Kingdom
                    </SelectItem>
                    <SelectItem value="france">
                      France
                    </SelectItem>
                    <SelectItem value="italy">
                      Italy
                    </SelectItem>
                    <SelectItem value="russia">
                      Russia
                    </SelectItem>
                    <SelectItem value="turkey">
                      Turkey
                    </SelectItem>
                    <SelectItem value="spain">
                      Spain
                    </SelectItem>
                    <SelectItem value="australia">
                      Australia
                    </SelectItem>
                    <SelectItem value="netherlands">
                      Netherlands
                    </SelectItem>
                    <SelectItem value="saudi-arabia">
                      Saudi Arabia
                    </SelectItem>
                    <SelectItem value="canada">
                      Canada
                    </SelectItem>
                    <SelectItem value="sweden">
                      Sweden
                    </SelectItem>
                    <SelectItem value="australia">
                      Australia
                    </SelectItem>
                  </SelectContent>
                </Select>
    

                <FormMessage />
              </FormItem>
            )}
          />


          <FormField
            control={form.control}
            name="info"
            render={({ field }) => (
              <FormItem className="flex items-center justify-center  space-y-4 w-full">
                <FormLabel className="w-60 text-2xl pt-4">
                 Tell us more
                </FormLabel>
                <FormControl>
                  <Textarea
                  style={{height: "200px"}}
                  className="" placeholder="Write message (optional)" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

             <div className="flex items-center justify-center
              gap-4">
            <Button
                
                type="submit"
                className="bg-[#000] text-xl rounded-sm w-80 h-20 "
           
                disabled={loading}
                onClick={() => form.handleSubmit(onSubmit)}
              >
                Submit
              </Button>

            </div>


        </form>
        ) : (
            <div className="text-2xl h-screen text-green-400 items-center space-y-20 flex flex-col ">
           
                <div className="">
              
                    <Image src="/videos/check.gif" alt="gif" className="h-28 w-28" />
            
                    </div>
            
            </div>
    
        
        )}
        

      </Form>
    </div>
  );
}
