import React, { Component } from 'react'
import DropDown from './MobileDropdown'
import '../Components/Styles.css'


class Hamburger extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       isOpen: false
    }
  }

  openDropDown = () => {
    this.setState({
      isOpen: !this.state.isOpen


    })
  }
   


  render() {
    return (
      <div className='mobile-nav'>

        <div className='nav-flex'>
          <nav  className='hamburger' onClick={this.openDropDown}>

            <span id='span1'></span>
            <span id='span2'></span>
            <span id='span3'></span>

          </nav>

          <div>

            <h1 className='nav-title'>FavCars</h1>

          </div>

        </div>

        {this.state.isOpen ? <DropDown /> : null}

      </div>
      
      
    )
  }
}

export default Hamburger

