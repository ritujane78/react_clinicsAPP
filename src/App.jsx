import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import CollectClinicals from './components/CollectClinicals'
import AddPatient from './components/AddPatient'
import AnalyzeData from './components/AnalyzeData'
import { ToastContainer, toast } from 'react-toastify';

function App() {
  return (
    <div>
      <ToastContainer autoClose={2000}
        position="bottom-center"
       />
      <Routes>
        <Route path='/' element = {<Home /> } />
        <Route path='patientDetails/:patientId' element = {<CollectClinicals />} />
        <Route path='addPatient' element = {<AddPatient />} />
        <Route path='analyze/:patientId' element = {<AnalyzeData />} />
      </Routes>
      
    </div>
  )
}

export default App

