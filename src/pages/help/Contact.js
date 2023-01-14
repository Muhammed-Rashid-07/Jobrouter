import React from 'react'
import { Form, redirect, useActionData } from 'react-router-dom'

function Contact() {
  //useActionData hook to access the data returned from the below function

  const data = useActionData();
  return (
    <div className="contact">
      <h3>Contact Us</h3>
      <Form action='/help/contact' method='post'>
        <label>
          <span>Your email:</span>
          <input type="email" name="email" required />
        </label>
        <label>
          <span>Your message:</span>
          <textarea name="message" required></textarea>
        </label>
        <button>Submit</button>
        {data && data.error && <p>{data.error}</p>}
      </Form>
    </div>
  )
}

export default Contact

export const contactAction = async({request})=>{
  console.log(request);
/* This request variable contains all of the form data(input and textarea values). */
  const data = await request.formData()
  const submission = {
    email:  data.get('email'),
    message: data.get('message')
  }
  console.log(submission);
  // send post request
  if(submission.message.length<10){
    return {error:'Message must be over 10 chars long.'}
  }

  // redirect the user using the redirect function
  return redirect('/')
}