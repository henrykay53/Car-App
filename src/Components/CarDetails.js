import React from 'react'

function CarDetails(props) {

  return (
    <div>
        <div className='carDetails'>

            <h1>{props.carName}</h1>
            <p>Brand: {props.brand}</p>
            <p>Model: {props.model}</p>
            <p>Engine: {props.engine}</p>
            <p>Color: {props.color}</p>
            <p>Year: {props.year}</p>

        </div>

    </div>
  
  )
}

export default CarDetails