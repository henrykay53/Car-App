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
      <div>
        {this.state.isOpen ? <DropDown /> : null}
        <nav className="mobile-nav" onClick={this.openDropDown}>

          <span id='span1'></span>
          <span id='span2'></span>
          <span id='span3'></span>

        </nav>
      </div>
      
      
    )
  }
}

export default Hamburger

