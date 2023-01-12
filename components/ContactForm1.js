import React, { useState } from 'react'

function ContactForm1() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });
const {name, email, message}=values;

const handleChange = e => setValues({...values, [e.target.name]: e.target.value})

const handleSubmit = async e => {
  e.preventDefault();

  try {
    await fetch("http://localhost:3000/api/contact" ,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
  } catch (err) {
    console.log(err)
  }
};

  return (
    <div>
      <h2>Send Grid</h2>
      <div className='container'>
      <form onSubmit={handleSubmit}>
      <h3>Contact Form</h3>
      <div className='input-container'>
      <input 
        value={name}
        onChange={handleChange}  
        type="text" 
        name="name" 
        placeholder="Enter Your Name" 
        className='input'
        />
        </div>
        <div className='input-container'>
        <input 
        value={email}
        onChange={handleChange}  
        type="email" 
        name="email" 
        placeholder="Enter Your Email" 
        className='input'
        />
       </div>
       <div className='input-container'>
        <textarea      
            value={message}  
            onChange={handleChange}  
            name="message" 
            placeholder="Enter Your Message" 
            className='input'
            />
       </div>
       <div >
            <button>Send</button>
        </div>
        </form>
      </div>
      
    </div>
  )
}

export default ContactForm1
