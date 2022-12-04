import { Link } from 'react-router-dom';


function Contact() {
  return (
    <div className='hero'>
      <div className="text-center hero-content">
        <div className="max-w-lg">
          <h1 className="text-8xl font-bold mb-8">
            Contact
          </h1>
          <p className="text-5xl mb-8">Gülsah!</p>
          <Link to='/' className="btn btn-base-100 btn-sm">
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Contact