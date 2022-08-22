import React from 'react'
import NavBar from './NavBar'
import FordCar from "../carImages/Ford.jpg"
// import CarDetails from './CarDetails'
import Button from './Button'
import './Styles.css'

function Ford() {
  return (
    <div>
        <div className='image'>
          <NavBar className="ford" />
            <img src={FordCar} alt="black-car" />
            <Button />
        </div>
    </div>
  )
}

export default Ford