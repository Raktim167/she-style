import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import NewProducts from "@/components/NewProducts";
import Image from "next/image";
import React from "react";

export default function Home (){
  return (
    <main>
      <Hero />
      <Feature />
      <NewProducts />
    </main>
  )
};
