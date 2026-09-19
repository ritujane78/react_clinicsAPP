import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function AddPatient() {
  const [firstName, setFirstName] = useState('');
  const [ lastName, setLastName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      firstName: firstName, 
      lastName: lastName,
      age: age
    }
    axios.post('http://localhost:8080/api/patients', data)
    .then(res => {
      toast("Patient Added Successfully!")
    })

  }
  return (
    
    <div style={{fontSize: '25px', textAlign: 'center'}}>
      <h2>Create Patient:</h2>
      <form onSubmit={handleSubmit}>
        First Name: <input type='text' value={firstName} onChange={e => setFirstName(e.target.value)} /> <br/>
        Last Name: <input type='text' value={lastName} onChange={e => setLastName(e.target.value)} /> <br />
        Age: <input type='text' value={age} onChange={e => setAge(e.target.value)} /> <br/>
        <button type='submit'>Confirm</button>

      </form>
      <Link to= {'/'}>Go Back</Link>
    </div>
    
  )
}

export default AddPatient