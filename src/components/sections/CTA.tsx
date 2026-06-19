"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";


export default function CTA() {


  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState("");



  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {

    e.preventDefault();


    setLoading(true);

    setStatus("");



    const form = e.currentTarget;



    const formData = new FormData(form);



    const data = {

      name:
      formData.get("name"),


      email:
      formData.get("email"),


      service:
      formData.get("service"),


      message:
      formData.get("message"),

    };




    try {


      const response = await fetch(
        "/api/contact",
        {

          method:"POST",

          headers:{
            "Content-Type":
            "application/json",
          },


          body:
          JSON.stringify(data),

        }
      );



      const result =
      await response.json();



      if(result.success){


        setStatus(
          "Message sent successfully. ACX will contact you soon."
        );


        form.reset();


      }

      else {


        setStatus(
          "Something went wrong."
        );

      }



    }

    catch(error){


      setStatus(
        "Failed to send message."
      );


    }


    finally {


      setLoading(false);


    }

  }




  return (

    <section
      id="contact"
      className="bg-black text-white py-24 px-6"
    >


      <div className="max-w-4xl mx-auto text-center">



        <motion.h2

          initial={{
            opacity:0,
            y:30
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          viewport={{
            once:true
          }}

          className="text-4xl font-bold mb-6"

        >

          Let's Build Something Great

        </motion.h2>




        <motion.p

          initial={{
            opacity:0
          }}

          whileInView={{
            opacity:1
          }}

          viewport={{
            once:true
          }}

          className="text-gray-300 mb-12"

        >

          Have a project idea?
          Tell ACX about it and let's create
          a powerful digital solution together.

        </motion.p>




        <form

          onSubmit={handleSubmit}

          className="grid gap-6 text-left"

        >



          <input

            name="name"

            required

            minLength={2}
            
            maxLength={100}

            placeholder="Your Name"

            className="p-4 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-yellow-500"

          />





          <input

            name="email"

            type="email"

            required

            minLength={10}
  
            maxLength={1000}

            placeholder="Your Email"

            className="p-4 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-yellow-500"

          />






          <select

            name="service"

            required

            className="p-4 rounded-xl bg-white/5 border border-white/10 outline-none"

          >


            <option>
              Website Development
            </option>


            <option>
              Web Application
            </option>


            <option>
              Custom Software
            </option>


            <option>
              AI Automation
            </option>

            <option>
              UI/UX Design
            </option>

            <option>
                Marketing/Sponsoring
            </option>

            <option>
                Others
            </option>



          </select>







          <textarea

            name="message"

            required

            placeholder="Your Message"

            rows={5}

            className="p-4 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-yellow-500"

          />







          <div className="flex justify-center">


            <Button type="submit"
            disabled={loading}
            className={loading ? "opacity-50 cursor-not-allowed" : ""}
            >


              {loading
                ? "Sending..."
                : "Send Message"
              }


            </Button>


          </div>
          <div className="mt-12 text-center text-gray-400">
            <p>Email: chebbiadem454@gmail.com</p>
            <p>ACX — Think, Believe, Make It Happen.</p>
          </div>





        </form>




        {status && (

          <p className="mt-6 text-yellow-500">

            {status}

          </p>

        )}



      </div>


    </section>

  );

}