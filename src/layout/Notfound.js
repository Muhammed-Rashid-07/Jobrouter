import React from 'react'
import { Link } from 'react-router-dom'

function Notfound() {
  return (
    <div>
        <h1>This page is not found 404.</h1>
      <p>Return to <Link to={'/'}>HomePage</Link>.</p>
    </div>
  )
}

export default Notfound
