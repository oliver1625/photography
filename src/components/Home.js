import React from 'react'
import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import Gallery from '../components/Gallery';

function Home() {
  return (
    <main>
        <NavBar />
        <HeroSection />
        <Gallery />
    </main>
  )
}

export default Home