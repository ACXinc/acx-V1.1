"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Sphere,
  Torus,
  Icosahedron,
  Environment,
} from "@react-three/drei";

import { useRef } from "react";
import * as THREE from "three";


function Objects() {

  const group = useRef<THREE.Group>(null);


  useFrame((state)=>{

    if(group.current){

      group.current.rotation.y =
        state.clock.elapsedTime * 0.15;


      group.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.3) * 0.15;

    }

  });


  return (

    <group ref={group}>


      {/* GOLD GLASS SPHERE */}

      <Float
        speed={1.2}
        rotationIntensity={1.5}
        floatIntensity={1.8}
      >

        <Sphere
          args={[1.4,64,64]}
          position={[-2,1,0]}
        >

          <meshPhysicalMaterial

            color="#f5d77a"

            metalness={0.7}

            roughness={0.15}

            transmission={0.35}

            thickness={1}

          />

        </Sphere>

      </Float>



      {/* WHITE PREMIUM DIAMOND */}

      <Float
        speed={1.8}
        rotationIntensity={2}
        floatIntensity={1}
      >

        <Icosahedron

          args={[1.2,1]}

          position={[2,0.5,0]}

        >

          <meshPhysicalMaterial

            color="#ffffff"

            metalness={0.5}

            roughness={0.1}

            clearcoat={1}

            clearcoatRoughness={0.05}

          />

        </Icosahedron>


      </Float>






      {/* GOLD RING */}

      <Float

        speed={1}

        rotationIntensity={2}

        floatIntensity={2}

      >

        <Torus

          args={[
            1,
            0.25,
            80,
            120
          ]}

          position={[0,-1.5,1]}

        >

          <meshPhysicalMaterial

            color="#d4af37"

            metalness={1}

            roughness={0.12}

          />


        </Torus>


      </Float>



    </group>

  );

}





export default function ThreeBackground(){


return (

<div

className="
fixed
inset-0
z-10
pointer-events-none
opacity-80
"

>


<Canvas


dpr={[1,2]}


gl={{

alpha:true,

antialias:true

}}


camera={{

position:[0,0,8],

fov:45

}}


>


<ambientLight intensity={2}/>


<directionalLight

position={[5,5,5]}

intensity={3}

/>


<pointLight

position={[-5,2,5]}

intensity={5}

color="#ffd66b"

/>



<Environment preset="city"/>



<Objects />


</Canvas>


</div>


);


}