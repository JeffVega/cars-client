import React from 'react'

const  Header = () => {
  return (
    <div className='headerPage'>
      <header className="header">
          <nav className="nav">
              <div className='nav__banner' >
                  <h1>Car Dealer</h1>
              </div>
                    <ul className="nav__listed">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Inventory</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Opening Hours</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
          </nav>
      </header>
    </div>
  )
}

export default Header;