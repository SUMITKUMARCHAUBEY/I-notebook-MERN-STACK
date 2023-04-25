import React from 'react'


export default function About() {

  return (
    <div className='container mt-5 text-center p-3' style={{maxHeight:"100vh"}}>
     <h1>Contact Us</h1>

<p>We would love to hear from you! If you have any questions, comments or concerns, please feel free to reach out to us using the contact information provided below.</p>

<p><strong>Mailing Address:</strong><br/>
IIIT Boys Hostel-1<br/>
Mantripukhari,Imphal,<br/>
 Manipur 795002</p>

<p><strong>Phone:</strong> +91 8529763950</p>

<p><strong>Email:</strong> <a href="mailto:schaubey@iiitmanipur.ac.in">schaubey@iiitmanipur.ac.in</a></p>

<p><strong>Social Media:</strong><br/>
- Linkedin: <a href="https://www.facebook.com/yourwebsite">@yourwebsite</a><br/>
- Github: <a href="https://twitter.com/yourwebsite" >@yourwebsite</a><br/>
- Instagram: <a href="https://www.instagram.com/yourwebsite" >@yourwebsite</a></p>


<form className='container bg-dark text-info rounded p-5'>
<p>We also have a contact form that you can fill out below. Please provide as much information as possible so that we can best assist you. We will do our best to respond to your inquiry within 1-2 business days.</p>
  <label for="name">Name:</label><br/>
  <input className='rounded' type="text" id="name" name="name"/><br/>

  <label for="email">Email:</label><br/>
  <input className='rounded' type="email" id="email" name="email"/><br/>

  <label for="subject">Subject:</label><br/>
  <input className='rounded' type="text" id="subject" name="subject"/><br/>

  <label for="message">Message:</label><br/>
  <textarea id="message" className='rounded' name="message"></textarea><br/>

  <input className='rounded btn btn-primary' type="submit" value="Submit"/>
</form>
    </div>
  )
}
