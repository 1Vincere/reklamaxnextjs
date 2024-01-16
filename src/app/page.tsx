import React from 'react';
import ParticleAnimation from '@/components/particleAnimation/ParticleAnimation'
import Spaceship from '@/components/Spaceship/Spaceship'
import Header from '@/components/Header/Header';
import Nav from '@/components/Nav/Nav';
import About from '@/components/About/About';
import Footer from '@/components/Footer/Footer';

function Home() {
  return (
    <>
      <ParticleAnimation/>
      <Spaceship/>
      <div className='main'>
        <div className='container'>
          <Nav/>
          <Header/>
          <About/>
          <Footer/>
        </div>
      </div>
    </>
  )
}
export default Home