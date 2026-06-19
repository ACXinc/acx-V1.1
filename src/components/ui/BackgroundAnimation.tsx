"use client";


import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, Torus, Icosahedron } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";



function Objects(){


const group = useRef<THREE.Group>(null);



useFrame((state)=>{


if(group.current){

group.current.rotation.y =
state.clock.elapsedTime * 0.08;


group.current.rotation.x =
Math.sin(state.clock.elapsedTime * 0.2) * 0.1;

}


});



return (

<group ref={group}>


<Float
speed={1.5}
rotationIntensity={2}
floatIntensity={2}
>


<Sphere
args={[1,32,32]}
position={[-3,1,-2]}
>

<meshStandardMaterial

color="#d4af37"

metalness={1}

roughness={0.2}

/>

</Sphere>


</Float>





<Float
speed={2}
rotationIntensity={3}
floatIntensity={1}
>


<Icosahedron

args={[1,0]}

position={[3,0,-3]}

>


<meshStandardMaterial

color="#ffffff"

metalness={0.8}

roughness={0.25}

/>


</Icosahedron>


</Float>





<Float
speed={1}
rotationIntensity={2}
floatIntensity={2}
>


<Torus

args={[1,0.3,64,64]}

position={[0,-2,-2]}

>


<meshStandardMaterial

color="#d4af37"

metalness={1}

roughness={0.15}

/>


</Torus>


</Float>



</group>


);


}





export default function ThreeBackground(){


return (

<div className="fixed inset-0 -z-10">


<Canvas
camera={{
position:[0,0,8]
}}
>


<ambientLight intensity={1}/>


<pointLight
position={[5,5,5]}
intensity={4}
/>


<Objects />


</Canvas>


</div>

);


}