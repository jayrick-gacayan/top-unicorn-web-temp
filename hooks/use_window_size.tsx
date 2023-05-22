"use client";

import { useEffect, useState } from "react";

export function useWindowSize(): (number | undefined) [] {
  const [width, setWidth] = useState<number | undefined>(undefined);
  const [height, setHeight] = useState<number | undefined>(undefined);

  
  useEffect(()=>{
    function handleResize(): void{
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  },[]);


  return [width, height]
}