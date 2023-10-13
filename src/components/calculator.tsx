"use client"
import Image from "next/image";
import { useState } from "react";

import { Weight, calculateImc, weights } from "@/helper/bmiCalculation";
import { Grid } from "./gridItem";

export const CalculatorApplication = () => {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<Weight | null>(null);

  const handleCalculateButton = () => {
  if(heightField && weightField) {setToShow(calculateImc(heightField, weightField))}
  else {alert('Preencha todos os campos!')} }

  const handleBackButtom = () => {
    setToShow(null);
    setHeightField(0);
    setWeightField(0);
  }

  return (
    <>
      <div className="flex-1 mr-10">
        <h1 className="text-4xl font-semibold text-slate-900">CALCULE SEU IMC!</h1>
        <div className="my-10 text-slate-500">
          <p>O IMC é um parâmetro utilizado para avaliar se seu peso está no valor ideal para a altura e seu cálculo não difere entre os sexos, pois o mesmo é calculado somente com peso e altura.</p>
          <p className="my-5">Saber a classificação do seu IMC é um fator importante, pois assim é possível ver informações relevantes sobre o corpo que ajudam a identificar se há problemas de obesidade ou desnutrição em diferentes idades.</p>
          <p>O mesmo ajuda a indificar qual o intervalo de peso ideal que devemos ter para garantir uma melhor qualidade de vida. Afinal, estar no peso ideal ajuda a evitar o aparecimento de doenças crônicas.</p>
          
          <span className="block mt-5 text-slate-900">Digite suas informações abaixo:</span>

          <input 
          type="number"
          placeholder='Qual sua altura em metros? (Ex: 1.68)'
          value={heightField > 0 ? heightField : ''}
          onChange={e => setHeightField(parseFloat(e.target.value))}
          disabled={toShow ? true : false}
          className="disabled:opacity-50 w-full py-5 border border-transparent border-b-cyan-700 placeholder:text-slate-900 text-slate-900 outline-0 text-base"/>
          <input
          type="number"
          placeholder='Qual seu peso em kg? (Ex: 68.2)'
          value={weightField > 0 ? weightField : ''}
          disabled={toShow ? true : false}
          onChange={e => setWeightField(parseFloat(e.target.value))}
          className="disabled:opacity-50 w-full py-5 border border-transparent border-b-cyan-700 placeholder:text-slate-900 text-slate-900 outline-0 text-base"/>
        </div>
        
        <button
        disabled={toShow ? true : false}
        className="disabled:opacity-50 bg-cyan-700 text-white rounded-xl py-4 w-full hover:bg-cyan-600 duration-700"
        onClick={handleCalculateButton}>
          Calcular IMC
        </button>
      </div>

      <div className="flex flex-1 ml-10 justify-center items-center" >
        {!toShow &&
          <div className='grid gap-5 grid-cols-2'>
            {weights.map((item, key) => (<Grid key={key} item={item}/>))}
          </div>
        }

        {toShow &&
            <div className="flex-1">
            <div 
            onClick={handleBackButtom}
            className="absolute bg-cyan-700 rounded-full w-20 h-20 flex justify-center items-center cursor-pointer -ml-9 mt-36">
              <Image
              src="/leftarrow.png"
              alt="Presentation logo"
              width={25}
              height={25}/>
            </div>
            <Grid item={toShow}/>
          </div>
        }
      </div>
    </>
  )
}