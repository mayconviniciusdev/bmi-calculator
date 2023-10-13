"use client"
import { Header } from "@/components/header";
import { CalculatorApplication } from "@/components/calculator";

const Page = () => {
  return (
    <div className="container mx-auto px-4">
      <Header/>

      <div className="flex-col lg:flex lg:flex-row ">
        <CalculatorApplication/>
      </div>
    </div>
  );
}

export default Page;