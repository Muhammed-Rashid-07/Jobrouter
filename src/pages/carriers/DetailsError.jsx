import React from 'react'
import { useRouteError,Link } from 'react-router-dom';

function DetailsError() {
  // we can access the error using this hook.
  const error = useRouteError();
  return (
    <div className='career-error'>
      <h2>Error</h2>
      <p>{error.message}</p>
      <Link to={'/'}>Back to <span className='homepage'>HomePage</span></Link>
    </div>
  )
}

export default DetailsError
