import React, { Component } from 'react'

import axios from 'axios'


import CarDetails from './CarDetails'
import '../Components/Styles.css'



class Button extends Component {


  constructor(props) {
    super(props)
  
    this.state = {
       toggle: false,
       posts: []
    }
  }

  componentDidMount() {

    const options = {
      method: 'GET',
      url: 'https://car-data.p.rapidapi.com/cars/types',
      headers: {
        'X-RapidAPI-Key': 'ce7ad2394bmsh466aa978674ec47p1a7318jsn0a2ebe98c438',
        'X-RapidAPI-Host': 'car-data.p.rapidapi.com'
      }
    };

    axios.request(options).then(function (response) {
      console.log(response.data);
    }).then((response) => this.setState({posts: response}))
    .catch(function (error) {
      console.error(error);
    });

  }

  
 

  setToggle = () => {
    this.setState({
      // this.state.cars: 
      toggle: !this.state.toggle
      
    })
  }



  render() {
    return (
      <div className='btn'>

        {this.state.toggle ? <CarDetails  /> : null}
        <button className='button' onClick={this.setToggle}>SHOW DETAILS</button>
          
      </div>
    )

  }
 

}

export default Button