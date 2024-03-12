import { database_url } from '@/lib/db';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { People } from '@/lib/model/comment';

const mongoose = require('mongoose');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mrudula.gujar@neurosparkworks.com',
      pass: 'pswl ujoh yhms faik',
    },
  });

export async function GET() {
    try{
        await mongoose.connect(database_url);
        // console.log("datbase url",database_url);
        // return Response.json(comments);
        const data =await People.find();
        console.log("my",data);
        return NextResponse.json({result:data});
    }
    catch(error){
        console.log(error)
    }

}

export async function POST(request: Request) {
    try {
        console.log("hit api");

        const comment = await request.json();

        const newComment = {
            // id: comments.length + 1,
            name: comment.name,
            email: comment.email,
            mobile: comment.mobile,
            message: comment.message
        };

        // comments.push(newComment);
        const person = new People(newComment);
        await person.save();

        const userMailOptions = {
            from: 'mrudula.gujar@neurosparkworks.com',
            to: newComment.email, 
            subject: 'Thank You for Contacting Us',
            text: `Dear ${newComment.name},\n\nThank you for contacting us. We appreciate your message and will get back to you as soon as possible.\n\nBest regards,\nHealth hub`
          };

        const adminMailOptions = {
        from: 'mrudula.gujar@neurosparkworks.com',
        to: 'mrudula.gujar@neurosparkworks.com',
        subject: 'New Comment',
        text: `Name: ${newComment.name}\nEmail: ${newComment.email}\nMobile: ${newComment.mobile}\nMessage: ${newComment.message}`,
        };

        transporter.sendMail(userMailOptions, (error, userMailInfo) => {
        if (error) {
            console.error('Error sending user email:', error);
        } else {
            console.log('User Email sent:', userMailInfo.response);
        }
        });

        transporter.sendMail(adminMailOptions, (error, adminMailInfo)=>{
            if(error) {
                console.error('Error sending admin email:',error);
            }
            else {
                console.log('Admin email sent:', adminMailInfo.response);
            }
        })

        return new Response(
            JSON.stringify({message: 'Thank you for contacting us. We will get back to you soon!',
        }), {    
            headers: {
                "Content-Type": "application/json",
            },
            status: 201,
        });
    } catch (error) {
        console.error("Error in POST request:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
}


