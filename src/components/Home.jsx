import smile from './assets/smile500x750.png'
import stoic from './assets/stoicsquare500x500.png'
import looksmile from './assets/looksmile500x750.png'
import glasses from './assets/glasses500x500.png'
import { motion, AnimatePresence } from "framer-motion"

function Home() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, type: "tween" }}
              className="mb-6 lg:w-1/2 lg:mt-0 lg:mx-6 md:mx-auto">
              <h1 className="xl:text-7xl lg:text-7xl md:text-6xl md:text-center font-bold sm:text-center sm:text-4xl leading-10">ZEIT FÜR GRÜN!</h1>
              <h2 className="py-6 md:text-center text-xl">GRÜN UND
                GERECHT. <br />Marie Musterkandidatin
                für Wahlbezirk.</h2>
              <div className="flex">
                <p className="bg-primary uppercase flex-auto rounded-lg w-64 text-center">Lichterfelde: grün und gerecht</p>
              </div>
            </motion.div>
            {/* <Dots /> */}
            <motion.div
              className="box"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, type: "tween" }}
            >
              <div className="grid grid-cols-2 grid-rows-[repeat(7,auto)] gap-6">
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
            </motion.div>
          </div>
        </div>
      </section>


    </>
  )
}

export default Home