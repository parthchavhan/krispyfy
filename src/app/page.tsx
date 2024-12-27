
import Booking from '@/components/sections/booking'

import Features from '@/components/sections/features'
import Hero from '@/components/sections/hero'
import RecentProjects from '@/components/sections/recentProjects'
import Services from '@/components/sections/services'

import WorkingProcess from '@/components/sections/workingProcess'
import React from 'react'

const Home = () => {
  return (
    <main>
      <Hero />
      <RecentProjects />
      <WorkingProcess />
      <Services />
      <Features />

      <Booking />
    </main>

  )
}

export default Home