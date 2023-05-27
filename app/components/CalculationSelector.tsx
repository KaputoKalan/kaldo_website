'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function CalculationSelector() {
  return (
    <div>
      <h1 className=" bg-slate-400">
        Get an Estimate of how much your project may cost
      </h1>
      <div className="flex min-w-full flex-row  p-12 justify-around bg-slate-400 ">
        <motion.div
          className="min-h-[300px] min-w-[40%] cursor-pointer rounded-xl shadow-lg bg-green-300 flex flex-col items-center"
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.4 },
          }}
          whileTap={{ scale: 0.9 }}
        >
          <h1 className="p-3 font-bold">Static Site</h1>
        </motion.div>
        <motion.div
          className="min-h-[300px] min-w-[40%] cursor-pointer rounded-xl shadow-lg bg-blue-300 flex flex-col items-center"
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.4 },
          }}
          whileTap={{ scale: 0.9 }}
        >
          <h1 className="p-3 font-bold">System</h1>
        </motion.div>
      </div>
    </div>
  )
}
