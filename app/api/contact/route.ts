import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST ( req : Request ) {
    if(req.method === "POST") {
        const { first_name, last_name, email, phone_number, company_name, company_size, country, services, info } = await req.json();
    }

   // this is not fully complete 
}