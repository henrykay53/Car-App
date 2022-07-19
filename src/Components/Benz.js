import React from 'react'
import NavBar from './NavBar'
import BenzCar from "../carImages/Benz.jpg"
import CarDetails from './CarDetails'
import './Styles.css'

function Benz() {
  return (
    <div>
        <div className='image'>
          <NavBar />
            <img src={BenzCar} alt="black-car" />
            <CarDetails className="benzDetails" carName="Benz"  brand="Benz" model="C300" engine="V8 Bi-turbo" color="Silver" year="2022"/>
        </div>
    </div>
  )
}

export default Benz