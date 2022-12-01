import React from 'react'
import smile from './assets/smile.jpg'
import stoic from './assets/stoic.jpg'
import looksmile from './assets/looksmile.jpg'
import glasses from './assets/glasses.jpg'

function Hero() {
  return (
    <>
      <div className='font-sans'>
        <div className="hero min-h-screen bg-hero-pattern bg-cover">
          <div className="hero-content grid grid-cols-4 gap-7">
            <div className="col-start-3 row-start-1" >
              <img src={smile} className='rounded-tl-3xl' />
            </div>
            <div className="col-start-3 row-start-2" >
              <img src={glasses} alt="" className='rounded-bl-full' />
            </div>
            <div className='col-start-4 row-start-1 row-end-2'>
              <img src={stoic} alt="" className='rounded-tr-full' />
            </div>
            <div className='col-start-4 row-start-2'>
              <img src={looksmile} alt="" className='rounded-br-3xl' />
            </div>
            <div className='col-start-1 col-span-2 row-start-1 row-span-2'>
              <h1 className="text-7xl font-bold">ZEIT FÜR GRÜN!</h1>
              <p className="py-6">GRÜN UND
                GERECHT.
                Marie Musterkandidatin
                für Wahlbezirk.</p>
              <p className="btn btn-primary">Lichterfelde: grün und gerecht</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero