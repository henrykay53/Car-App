import React from 'react'
import NavBar from './NavBar'
import AudiCar from "../carImages/Audi.jpg"
import CarDetails from './CarDetails'
import './Styles.css'

function Audi() {
  return (
    <div>
        <div className='image'>
          <NavBar />
            <img src={AudiCar} alt="black-car" />
            <CarDetails carName="Audi" brand="Audi" model="R8" engine="V8 Twin Turbo" color="Black" year="2022"/>
        </div>
    </div>
  )
}

export default Audi