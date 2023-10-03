import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import './Style.css';





function QuizResult(props) {
  
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phoneNumber: '',})
    
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // You can perform actions with the form data here, e.g., send it to an API.
      console.log(formData);
    }

    console.log(props.score);


  return (
    <>
    {/* <div className='show-score'>
        Your Score:{props.score}<br/>
        Total Score:{props.totalScore}
    </div> */}

    <div>
      
    <h2>Contact Information</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
      </form>
      
    </div>
    <Button  className='outline-primary mt-5' onClick={props.tryAgain}>Submit</Button>
    </>
  )
}

export default QuizResult