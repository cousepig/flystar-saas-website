import { NextResponse } from 'next/server'
const nodemailer = require('nodemailer');

// Handles POST requests to /api


export async function POST(request) {

    // const username = 'info'; //process.env.NEXT_PUBLIC_BURNER_USERNAME;
    const password = 'DxHaMAbQVDSfcIRj'; //'ALQZ3cAWCAnrj4fn'; //'Z1234567'; //process.env.NEXT_PUBLIC_BURNER_PASSWORD;
    const myEmail = 'info@elderaudio.com'; //process.env.NEXT_PUBLIC_PERSONAL_EMAIL;
    const toEmail = 'syrincsweixin@3g-sys.com'; //process.env.NEXT_PUBLIC_TO_EMAIL;

    console.log("dealing with request")
    const formData = await request.formData()
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')


    // create transporter object
    const transporter = nodemailer.createTransport({
        host: "smtp.qiye.aliyun.com",
        port: 465,
        secure: true,
        tls: {
            ciphers: "SSLv3",
            rejectUnauthorized: false,
        },

        auth: {

            user: myEmail,
            pass: password
        }
    });

    try {

        await transporter.sendMail({
            from: myEmail,
            to: toEmail,
            replyTo: myEmail,
            subject: `网站咨询记录：${name}`,
            html: `
            <p>Name: ${name} </p>
            <p>Email: ${email} </p>
            <p>Message: ${message} </p>
            `,
        })

        return NextResponse.json({ message: "Success: email was sent" })

    } catch (error) {
        console.log(error)
        NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" })
    }


}