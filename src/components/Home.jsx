import smile from './assets/smile.jpg'
import stoic from './assets/stoic.jpg'
import looksmile from './assets/looksmile.jpg'
import glasses from './assets/glasses.jpg'

function Home() {
  return (
    <>
      <div className='font-sans lg:my-20 md:my-10 sm:my-10 xs:my-10'>
        <div className="hero">
          <div className="hero-content grid grid-cols-4 xl:gap-7 lg:gap-6 md:gap-4 xs:gap-2">
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
              <h1 className="xl:text-7xl lg:text-7xl md:text-6xl font-bold sm:text-4xl xs:text-2xl">ZEIT FÜR GRÜN!</h1>
              <p className="py-6">GRÜN UND
                GERECHT.
                Marie Musterkandidatin
                für Wahlbezirk.</p>
              <p className="btn btn-primary">Lichterfelde: grün und gerecht</p>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default Home