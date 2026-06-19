"use client"

import { motion } from "framer-motion"


export default function WhyACX() {


const reasons = [

{
title:"Technology Driven",
text:"Using modern technologies to create reliable and scalable digital solutions."
},


{
title:"Creative Thinking",
text:"Combining design, innovation, and strategy to build unique experiences."
},


{
title:"Built For Growth",
text:"Creating solutions that evolve with businesses and future opportunities."
}

];



return (

<section
className="bg-black text-white px-6 py-24"
>


<div
className="max-w-6xl mx-auto"
>


<motion.div

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:0.7
}}

viewport={{
once:true
}}

className="text-center"

>


<h2
className="text-4xl md:text-5xl font-bold"
>

Why

<span className="text-yellow-500">
ACX
</span>


</h2>


<p
className="mt-6 text-gray-400 text-lg"
>

More than development.
A vision to create the future.

</p>


</motion.div>



<div
className="mt-14 grid md:grid-cols-3 gap-8"
>


{reasons.map((reason,index)=>(


<motion.div

key={index}


initial={{
opacity:0,
y:40
}}


whileInView={{
opacity:1,
y:0
}}


transition={{
duration:0.5,
delay:index*0.15
}}


viewport={{
once:true
}}


whileHover={{
scale:1.05
}}


className="p-8 rounded-2xl border border-gray-800 hover:border-yellow-500 transition"


>


<h3
className="text-xl font-semibold"
>

{reason.title}

</h3>



<p
className="mt-4 text-gray-400 leading-relaxed"
>

{reason.text}

</p>


</motion.div>


))}


</div>


</div>


</section>


)

}