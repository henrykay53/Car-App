import React from 'react'
import {Link} from 'react-router-dom';
// import './Styles.css'



function NavBar() {

    return (
      <div>

        <nav>

          <ul>

            <li><Link to="/">Home</Link></li>
            <li><Link to="/Audi">Audi</Link></li>
            <li><Link to="/Benz">Benz</Link></li>
            <li><Link to="/Ford">Ford</Link></li>

          </ul>

        </nav>

      </div>
    )
  }

export default NavBar