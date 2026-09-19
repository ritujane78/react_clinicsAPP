import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import RowCreator from "./RowCreator";

function Home() {
    const [patientData, setPatientData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:8080/api/patients')
        .then(res => {
            setPatientData(res.data);
            setLoading(false);
        })
    }, [])
  return (
    <div style={{fontSize: '25px'}}>
        <div style={{ textAlign: "center" }}>
            <h2>Patients:</h2>
        </div>
        <table align="center">
            <thead>
                <tr style={{ backgroundColor: "yellow" }}>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {!loading && patientData.map(patient => (
                    <RowCreator
                        key={patient.id}
                        item={patient}
                    />
                ))}
            </tbody>
        </table>
        <br />
        <div style={{ textAlign: "center" }}>
            <Link to="/addPatient">
                <font size="5">Register Patient</font>
            </Link>
        </div>
      
    </div>
  )
}

export default Home
