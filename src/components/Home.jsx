import smile from './assets/smile500x750.png'
import stoic from './assets/stoicsquare500x500.png'
import looksmile from './assets/looksmile500x750.png'
import glasses from './assets/glasses500x500.png'

function Home() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
            <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
              <h1 className="xl:text-7xl lg:text-7xl md:text-6xl font-bold sm:text-4xl">ZEIT FÜR GRÜN!</h1>
              <p className="py-6">GRÜN UND
                GERECHT.
                Marie Musterkandidatin
                für Wahlbezirk.</p>
              <p className="btn btn-primary">Lichterfelde: grün und gerecht</p>
            </div>
            <div className="grid grid-cols-2 grid-rows-[repeat(7,auto)] gap-2">
              <div className="col-start-1 col-end-2 row-start-1 row-end-5" >
                <img src={smile} className="rounded-tl-[25vw] rounded-bl-[25vw] rounded-br-[25vw] rounded-tr-[25vw]" />
              </div>
              <div className="cols-start-2 cols-end-3 row-start-1 row-end-3">
                <img src={stoic} alt="" className="rounded-tl-[25vw] rounded-bl-[25vw] rounded-br-[25vw]" />
              </div>
              <div className="cols-start-1 cols-end-2 row-start-5 row-end-7" >
                <img src={glasses} alt="" className="rounded-tl-[25vw] rounded-bl-[25vw] rounded-tr-[25vw]" />
              </div>
              <div className="cols-start-1 cols-end-2 row-start-3 row-end-7">
                <img src={looksmile} alt="" className="rounded-tl-[25vw] rounded-bl-[25vw] rounded-br-[25vw] rounded-tr-[25vw]" />
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}

export default Home