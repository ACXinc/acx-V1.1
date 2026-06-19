import { Resend } from "resend";
import { NextResponse } from "next/server";


const resend = new Resend(
  process.env.RESEND_API_KEY
);



export async function POST(
  request: Request
) {

  try {


    const body = await request.json();


    const {
      name,
      email,
      service,
      message,
    } = body;



    if (
      !name ||
      !email ||
      !service ||
      !message
    ) {

      return NextResponse.json(
        {
          error:
          "Missing fields"
        },
        {
          status:400
        }
      );

    }



    await resend.emails.send({

      from:
      "ACX Website <onboarding@resend.dev>",


      to:
      "chebbiadem454@gmail.com",


      subject:
      `New ACX Request: ${service}`,



      html:

      `
      <h1>
      New ACX Contact Request
      </h1>


      <p>
      <b>Name:</b>
      ${name}
      </p>


      <p>
      <b>Email:</b>
      ${email}
      </p>


      <p>
      <b>Service:</b>
      ${service}
      </p>


      <p>
      <b>Message:</b>
      </p>


      <p>
      ${message}
      </p>

      `

    });



    return NextResponse.json(
      {
        success:true
      }
    );



  }

  catch(error){


    console.log(error);



    return NextResponse.json(

      {
        success:false
      },

      {
        status:500
      }

    );


  }

}