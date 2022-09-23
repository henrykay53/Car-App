import React from 'react'
import {Link} from 'react-router-dom';




function NavBar() {

    return (
      <div>

        <nav className='desktop-nav'>

          <h1 className='desktop-nav-title'>FavCars</h1>

          <ul>

            <li class="desktop-links"><Link to="/">HOME</Link></li>
            <li class="desktop-links"><Link to="/Audi">AUDI</Link></li>
            <li class="desktop-links"><Link to="/Benz">BENZ</Link></li>
            <li class="desktop-links"><Link to="/Ford">FORD</Link></li>

          </ul>

        </nav>

      </div>
    )
  }

export default NavBar