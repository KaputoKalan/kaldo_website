'use client'
import React, { useState } from 'react'
import { Slider } from '@material-tailwind/react'

export default function CostSlider() {
  const [cost, setCost] = useState(1)
  const sliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value)
    setCost(value)
    // }
  }
  return (
    <div className="w-full h-full mt-10">
      <div className=" bg-slate-100 h-40 px-8 rounded-lg relative flex flex-col justify-around">
        <div className="flex justify-between">
          <p className=" font-bold">Pages</p>
          <p className=" font-bold">Cost</p>
        </div>
        <div className={`flex flex-row justify-between`}>
          <p className=" max-w-md ">
            The Total Number of Pages you would like the site to have i.e.
            catalogue, about us, products e.t.c.
          </p>
          <p className=" font-bold">K {cost * 500}</p>
        </div>
        <Slider
          min={1}
          max={15}
          step={1}
          onChange={sliderChange}
          value={cost}
          color="light-blue"
          className="pb-6"
        />
      </div>
    </div>
  )
}
