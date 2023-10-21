import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import './Style.css';
import { useNavigate } from 'react-router-dom';





function QuizResult(props) {
  
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phoneNumber: '',})

   const navigate = useNavigate();
    
  
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
    <div >
      <h2 className='text-center ml-4'>Contact Information</h2>
      <form className='mt-5'onSubmit={handleSubmit}>
        <div >
          <label className="elements"  >Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="elements">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="elements">Phone Number:</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <Button onClick={props.tryAgain} type="submit" className="btn-warning mt-5">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default QuizResult
