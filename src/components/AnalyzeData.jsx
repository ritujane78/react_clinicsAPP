import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function AnalyzeData() {
    const [data, setData] = useState({
        clinicalData: []
    });
    const { patientId } = useParams();
    const[loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:8080/api/patients/analyze/'+ patientId)
        .then(res => {
            setData(res.data)
            setLoading(false);
        }
    );

    }, [])
  return (
    <div style={{textAlign: 'center', fontSize: '25px'}}>
        <h2>Patient Details:</h2>
        First Name: {data.firstName} <br />
        Last Name: {data.lastName} <br />
        Age: {data.age} <br />

        <h2>Clinical Report:</h2>
        {loading?"": data.clinicalData.map(eachEntry => <RowCreatorTable item = {eachEntry} />)}

        <Link to={'/'}>Go Back</Link>

      
    </div>
  )
}

function RowCreatorTable(props) {
    let eachEntry = props.item;
    return
    <div>
        <table align='center'>
            <tr>
                <td><b>{eachEntry.componentName}</b></td>
            </tr>
            <tr>
                <td>{eachEntry.componentName}</td>
                <td>{eachEntry.componentValue}</td>
                <td>{eachEntry.measuredDateTime}</td>
            </tr>
        </table>
    </div>
}

export default AnalyzeData
