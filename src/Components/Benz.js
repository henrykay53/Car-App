import React from 'react'
import NavBar from './NavBar'
import BenzCar from "../carImages/Benz.jpg"
// import CarDetails from './CarDetails'
import Button from './Button'
import './Styles.css'

function Benz() {
  return (
    <div>
        <div className='image'>
          <NavBar />
            <img src={BenzCar} alt="black-car" />
            <Button />
        </div>
    </div>
  )
}

export default Benz