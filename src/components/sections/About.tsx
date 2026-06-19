"use client"

import MotionSection from "@/components/ui/MotionSection";


export default function About() {

  return (

    <section
      id="about"
      className="bg-black text-white py-24 px-6"
    >

      <MotionSection>

        <div
          className="max-w-5xl mx-auto text-center"
        >

          <h2
            className="text-4xl md:text-5xl font-bold"
          >

            About

            <span className="text-yellow-500">
              ACX
            </span>

          </h2>



          <p
            className="mt-8 text-gray-400 text-lg leading-relaxed"
          >

            ACX is a technology and creative company focused on
            building modern digital solutions. We transform ideas
            into powerful experiences through software development,
            design, and innovation.

          </p>



          <p
            className="mt-6 text-gray-400 text-lg leading-relaxed"
          >

            From websites and applications to digital platforms,
            ACX combines creativity, technology, and strategy to
            help businesses grow in the digital world.

          </p>



          <div
            className="mt-12 grid md:grid-cols-3 gap-6"
          >


            <div
              className="border border-gray-800 rounded-xl p-6 hover:border-yellow-500 transition"
            >

              <h3
                className="text-xl font-semibold"
              >
                Innovation
              </h3>


              <p
                className="text-gray-400 mt-3"
              >

                Creating modern solutions with technology.

              </p>


            </div>



            <div
              className="border border-gray-800 rounded-xl p-6 hover:border-yellow-500 transition"
            >

              <h3
                className="text-xl font-semibold"
              >
                Creativity
              </h3>


              <p
                className="text-gray-400 mt-3"
              >

                Turning ideas into unique experiences.

              </p>


            </div>




            <div
              className="border border-gray-800 rounded-xl p-6 hover:border-yellow-500 transition"
            >

              <h3
                className="text-xl font-semibold"
              >
                Growth
              </h3>


              <p
                className="text-gray-400 mt-3"
              >

                Helping brands build their digital future.

              </p>


            </div>


          </div>


        </div>


      </MotionSection>


    </section>

  )

}