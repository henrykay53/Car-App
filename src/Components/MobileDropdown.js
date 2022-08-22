import React from 'react'
import {Link} from 'react-router-dom'
import './Styles.css'
function DropDown() {

  return (
    <div className='mobile-dropdown'>
        <ul>

            <li><Link to="/">HOME</Link></li>
            <li><Link to="/Audi">AUDI</Link></li>
            <li><Link to="/Benz">BENZ</Link></li>
            <li><Link to="/Ford">FORD</Link></li>

        </ul>
    </div>
      
  )
}

export default DropDown
