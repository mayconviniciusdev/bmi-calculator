"use client"
import { Header } from "@/components/header";
import { CalculatorApplication } from "@/components/calculator";

const Page = () => {
  return (
    <div className="container flex flex-col justify-center m-auto px-4 lg:h-screen">
      <Header/>

      <div className="flex-col lg:flex lg:flex-row ">
      
        <CalculatorApplication/>
      </div>
    </div>
  );
}

export default Page;