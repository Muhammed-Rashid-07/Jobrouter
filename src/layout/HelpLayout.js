import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

function HelpLayout() {
  return (
    <div className='help-layout'>
      <h1>Website help</h1>

      <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
      <nav>
        <NavLink to={'faq'} >FAQ</NavLink>
        <NavLink to={'contact'} >Contact</NavLink>
      </nav>


      <Outlet/>
    </div>
  )
  // In the outlet they show the nested routes which given in the App. It is a parent element.
}

export default HelpLayout
