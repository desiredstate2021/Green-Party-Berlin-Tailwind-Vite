import smile from './assets/smile.jpg'
import stoic from './assets/stoicsquare.jpg'
import looksmile from './assets/looksmile.jpg'
import glasses from './assets/glassessquare.jpg'

function Home() {
  return (
    <>

      <div className="my-12 mx-auto">
        <div className="grid auto-cols-2 auto-rows-min gap-x-8 gap-y-8 relative mx-auto min-h-min">
          <div className="col-start-3 row-start-1" >
            <img src={smile} className="rounded-tl-[25vw] rounded-bl-[25vw] rounded-br-[25vw] rounded-tr-[25vw]" />
          </div>
          <div className="col-start-3 row-start-2" >
            <img src={glasses} alt="" className="rounded-tl-[25vw] rounded-bl-[25vw] rounded-tr-[25vw]" />
          </div>
          <div className="col-start-4 row-start-1 row-end-2">
            <img src={stoic} alt="" className="rounded-tl-[25vw] rounded-bl-[25vw] rounded-br-[25vw]" />
          </div>
          <div className="col-start-4 row-start-2 absolute bottom-0">
            <img src={looksmile} alt="" className="rounded-tl-[25vw] rounded-bl-[25vw] rounded-br-[25vw] rounded-tr-[25vw]" />
          </div>
          <div className="grid col-start-1 col-span-2 row-span-2 content-center">
            <div>
              <h1 className="xl:text-7xl lg:text-7xl md:text-6xl font-bold sm:text-4xl xs:text-2xl">ZEIT FÜR GRÜN!</h1>
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

export default Home