import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div className='flex flex-col justify-between h-screen'>
        <NavBar />
        <main className='container mx-auto px-3'>
          <Hero />
        </main>
        <Footer />
      </div>

    </>
  )
}

export default App
