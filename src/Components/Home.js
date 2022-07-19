import React from 'react'
// import { Link } from 'react-router-dom'
import NavBar from './NavBar'
import './Styles.css'

function Home() {
  return (

    <div className='home'>

      <NavBar/>

      {/* <nav>

        <ul>

          <li><Link to="/">Home</Link></li>
          <li><Link to="/Audi">Audi</Link></li>
          <li><Link to="/Benz">Benz</Link></li>
          <li><Link to="/Ford">Ford</Link></li>

        </ul>

      </nav> */}

      <h1 className='welcome'>WELCOME TO THE HOME OF MY TOP 3 FAVORITE CARS</h1>


    </div>

  )
}

export default Home