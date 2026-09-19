import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

function CollectClinicals() {
const [patientData, setPatientData] = useState({});
const {patientId} = useParams();

const [componentName, setComponentName] = useState('');
const [componentValue, setComponentValue] = useState('');

const [loading, setLoading] = useState(true);

useEffect(() => {
    axios.get('http://localhost:8080/api/patients/'+ patientId)
    .then(res => setPatientData(res.data));
    setLoading(false);

}, [] )
const handleSubmit = (e) =>{
    e.preventDefault();
    const data = {
        patientId:patientId,
        componentName: componentName,
        componentValue: componentValue
    }
    axios.post('http://localhost:8080/api/clinicals',data)
    .then(
        toast("Patient data Added Successfully!")
    );

}
    return (
    <div style={{ textAlign: "center", fontSize: '25px' }}>
        <h2>Patient Details</h2>
        First Name: {loading? "": patientData.firstName} <br/>
        Last Name: {loading? "": patientData.lasName} <br />
        Age: {loading?"":patientData.age} 

        <h2>Patient Clinical Data:</h2>
        <form onSubmit={handleSubmit} >
            Clinical Entry Type:
            <select onChange={(e) => setComponentName(e.target.value)}>
                <option value="bp">Blood Pressure (Sys/Dys)</option>
                <option value="hw">Height/Weight</option>
                <option value="heartrate">Heart Rate</option>
            </select> 
            <br />
            Value: <input type='text' value={componentValue} onChange={(e) => setComponentValue(e.target.value) } /> <br />
            <button type='submit'>Submit</button>
        </form>
      
    </div>
  )
}

export default CollectClinicals
