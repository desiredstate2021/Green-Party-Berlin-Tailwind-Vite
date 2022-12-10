import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="navbar max-w-[1200px] mx-auto max-xs:w-80">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
            <li className=""><Link to='karakaya'>Karakaya</Link></li>
            <li className=""><Link to='/socialjustice'>Social Justice and Diversity</Link></li>
            <li className=""><Link to='/publicAdministration'>Public Administration</Link></li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <div className="navbar-center hidden lg:flex z-40">
          <ul className="menu menu-horizontal p-0 text-white-100 rounded-full">
            <li className="underline"><Link to='karakaya'>Karakaya</Link></li>
            <li className="underline" tabIndex={0}>
              <a>
                Politics
              </a>
              <ul className="rounded-b-lg">
                <li className=""><Link to='/socialjustice'>Social Justice and Diversity</Link></li>
                <li className=""><Link to='/publicAdministration'>Public Administration</Link></li>
              </ul>
            </li>
            <li className="underline">
              <Link to='about'>
                About Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-end mt-3">
        <Link to='/contact' className="btn btn-xs xs:btn-sm sm:btn-sm md:btn-md normal-case text-lg">Contact</Link>
      </div>



    </div>
  )
}

export default NavBar