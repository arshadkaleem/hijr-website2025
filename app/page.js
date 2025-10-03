"use client";
import Image from "next/image";
import { useState } from "react";

import Homes from "@/components/Home/Homes";
import About from "@/components/Home/About";
import Third from "@/components/Home/Third";
import Services from "@/components/Home/Services";
import Features from "@/components/Home/Features";
import Search from "@/components/Home/Search";
import Counter from "@/components/Home/Counter";

export default function Home() {
  return (
    <div >
    <Homes />
    <Search />
    <About />
    <Third />
    <Services />
    <Features />
    <Counter />
  
    </div>
  );
}
