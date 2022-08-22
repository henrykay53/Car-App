import React from 'react'
import NavBar from './NavBar'
import AudiCar from "../carImages/Audi.jpg"
// import CarDetails from './CarDetails'
import Button from './Button'
import './Styles.css'

function Audi() {
  return (
    <div>
        <div className='image'>
          <NavBar />
            <img src={AudiCar} alt="black-car" />
            <Button/>
        </div>
    </div>
  )
}

export default Audi