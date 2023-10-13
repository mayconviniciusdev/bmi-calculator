"use client"
import { Header } from "@/components/header";
import { CalculatorApplication } from "@/components/calculator";

const Page = () => {
  return (
    <div className="container mx-auto px-4">
      <Header/>

      <div className="flex mx-auto">
        <CalculatorApplication/>
      </div>
    </div>
  );
}

export default Page;