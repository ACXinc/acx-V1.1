"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {

  const [pos, setPos] = useState({
    x: 0,
    y: 0
  });


  useEffect(() => {

    const move = (e: MouseEvent) => {

      setPos({
        x: e.clientX,
        y: e.clientY
      });

    };


    window.addEventListener(
      "mousemove",
      move
    );


    return () => {

      window.removeEventListener(
        "mousemove",
        move
      );

    };


  }, []);



  return (

    <>

      <div
        className="fixed w-5 h-5 rounded-full bg-yellow-400 z-[9999] pointer-events-none shadow-[0_0_20px_5px_rgba(234,179,8,0.7)] transition-transform duration-75"
        style={{
          transform: `translate(${pos.x - 10}px, ${pos.y - 10}px)`
        }}
      />


      <div
        className="fixed w-10 h-10 border border-yellow-400 rounded-full z-[9998] pointer-events-none transition-transform duration-200"
        style={{
          transform: `translate(${pos.x - 20}px, ${pos.y - 20}px)`
        }}
      />


    </>

  );

}