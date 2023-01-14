import React from 'react'
import { Outlet } from 'react-router-dom'

function CareerLayout() {
  return (
    <div>
      <h1>Careers</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. laudantium inventore quia odio minus eligendi ipsa?</p>
    <Outlet/>
    </div>
  )
}

export default CareerLayout
