import React from 'react'
import { Link, useLoaderData } from 'react-router-dom';

function Career() {
  /* The data returned from carrersLoader will stored in careers */
  /* The loader is given as attribute in app.js*/
  const careers = useLoaderData();
  return (
    <div className='careers'>
      {careers.map(career => (
        <div className='box'>
          <Link to={career.id.toString()} key={career.id}><h3>
            {career.title}
          </h3>
            <p>Based in {career.location}</p>
          </Link>
        </div>
      ))}
    </div>
  )
}

//loader function
/* This function will return the data fetched from this link. No need to use useEffect to display the data. */
export const careersLoader = async () => {
  const response = await fetch('http://localhost:4000/careers');
  if(response.ok){
  return response.json();
  }
  throw Error("Could not fetch the data Error 404");
}

export default Career;
