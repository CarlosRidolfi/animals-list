import { initialAnimals } from '@/lib/animals'
import React, { useState, useContext } from 'react'
import { AnimalsView } from './animals'
import { AnimalsContext } from '@/lib/animals'

export default function Home() {
  const AnimalsArrays = useContext(AnimalsContext)
  return (
      <main
        className={`min-h-screen p-24`}
      >
        <AnimalsView animals={AnimalsArrays} />
      </main>
  )
}
