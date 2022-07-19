import React from 'react'
import NavBar from './NavBar'
import FordCar from "../carImages/Ford.jpg"
import CarDetails from './CarDetails'
import './Styles.css'

function Ford() {
  return (
    <div>
        <div className='image'>
          <NavBar />
            <img src={FordCar} alt="black-car" />
            <CarDetails carName="Ford" brand="Ford" model="Mustang Shelby" engine="V8" color="Blue" year="2022" />
        </div>
    </div>
  )
}

export default Ford