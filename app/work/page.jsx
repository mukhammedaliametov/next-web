import React from 'react'
import Hero from '@/components/Hero'
import Portfolio from '@/components/Portfolio'

const page = () => {
  return (
    <div>
      <Hero heading='My Work' message='I capture moments in nature and keep them alive.' />
      <Portfolio />
    </div>
  )
}

export default page
