'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function CalculationSelector() {
  return (
    <div className="bg-slate-400 min-h-screen">
      <h1 className=" pt-4 pl-4 ">
        Get an Estimate of how much your project may cost
      </h1>
      <div className="flex min-w-full flex-row  p-12 justify-around ">
        <motion.div
          className="min-h-[300px] w-[40%] cursor-pointer rounded-xl shadow-lg bg-green-300 flex flex-col items-center"
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.4 },
          }}
          whileTap={{ scale: 0.9 }}
        >
          <h1 className="p-3 font-bold ">Static Site</h1>
          <p className="p-6">
            A simple website for informational and not functional purposes.
            Includes design and deployment.
          </p>
        </motion.div>
        <motion.div
          className="min-h-[300px] w-[40%] cursor-pointer rounded-xl shadow-lg bg-blue-300 flex flex-col items-center"
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.4 },
          }}
          whileTap={{ scale: 0.9 }}
        >
          <h1 className="p-3 font-bold ">System</h1>
          <p className="p-6">
            A website with a backend and database, to perform processing of any
            sort with functions users and such capacity. Includes design and
            deployment.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
