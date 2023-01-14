import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

function CarrierDetails() {
    const details = useLoaderData();
    const {id} = useParams();
  return (
    <div className='career-box'>
      <h1 className='career-h1'>Career details for {details.title}</h1>
      <p>Starting Salary : {details.salary}</p>
      <p>Location : {details.location}</p>
      <div className="details">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
      </div>
    </div>
  )
}

export const carrierDetailLoader = async({params})=>{
    //destructuring the params with id only.
    console.log(params.id)
    const {id} = params;
    const details = await fetch('http://localhost:4000/careers/'+id);
    // if the details are true, it returns the data in json format.
    if(details.ok){
        return details.json();
    }
else{
    //if not then it will throw a error message. The error will transferred only if we use throw keyword.
    throw Error('Could not Find that career.') 
}
}
export default CarrierDetails
