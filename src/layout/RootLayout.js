import React from 'react'
import { NavLink,Outlet } from 'react-router-dom'
import Breadcrump from '../Components/Breadcrump'

function RootLayout() {
  return (
    <div>
      <header>
        <nav>
          <h1>Jobarouter</h1>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='about'>About</NavLink>
          <NavLink to='help'>Help</NavLink>
          <NavLink to='careers'>Careers</NavLink>
        </nav> 
        <Breadcrump/>
      </header>

      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default RootLayout
