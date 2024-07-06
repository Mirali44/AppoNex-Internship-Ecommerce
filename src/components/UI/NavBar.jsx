import React from 'react'
import DropdownSlider from './priceRange'
import Rating from './BasicRating'
import BasicRating from './BasicRating'
import './NavBar.css'
import Categories from './Categories'

function NavBar() {
  return (
    <div className='navbar'>
        <ul>
            <li><Categories /></li>
            <li><DropdownSlider /></li>
            <li><BasicRating /></li>
        </ul>
    </div>
  )
}

export default NavBar