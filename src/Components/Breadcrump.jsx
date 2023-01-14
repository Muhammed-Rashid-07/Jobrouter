import React from 'react'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Breadcrump() {
    const location = useLocation();
    let currentLink = ''; /* This string is going to keep track of the link of each crumb.*/

    const crumbs = location.pathname.split('/')
      .filter(crumb => crumb !== '')
      .map(crumb => {
        if(currentLink.length!==0){
          currentLink+='/'
        }
        currentLink += crumb
        console.log(`current link: ${currentLink}`)
        console.log(`crumb:${crumb}`)
        return(
          <div className='crumb' key={crumb}>
            <Link to={currentLink}>{crumb}</Link>
          </div>
        )
      })
    
  return (
    <div className='breadcrumps'>
      {crumbs}
    </div>
  )
}

export default Breadcrump
