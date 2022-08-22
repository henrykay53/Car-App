import React from 'react'
import {Link} from 'react-router-dom';




function NavBar() {

    return (
      <div>

        <nav>

          <ul className='desktop-nav'>

            <li><Link to="/">HOME</Link></li>
            <li><Link to="/Audi">AUDI</Link></li>
            <li><Link to="/Benz">BENZ</Link></li>
            <li><Link to="/Ford">FORD</Link></li>

          </ul>

        </nav>

      </div>
    )
  }

export default NavBar