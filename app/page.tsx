import { About } from "@/src/components/screens/home/about";
import { Hero } from "@/src/components/screens/home/hero";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <Hero/>
      <About/>
    </React.Fragment>
  );
}
