import { useState } from 'react'
import './App.css'
import Form from './components/Form.jsx'
import Preview from './components/Preview.jsx'
function App() {
  const [name,setName]=useState("");
  const [jobTitle,setJobTitle]=useState("");
  const [address,setAddress]=useState("");
  const [phoneNumber,setPhoneNumber]=useState("");
  const [email,setEmail]=useState("");
  const [school,setSchool]=useState("");
  const [degree,setDegree]=useState("");
  const [startDate,setStartDate]=useState("");
  const [endDate,setEndDate]=useState("");
  const [company,setCompany]=useState("");
  const [jobExperience,setJobExperience]=useState("");
  const [startDateExperience,setStartDateExperience]=useState("");
  const [endDateExperience,setEndDateExperience]=useState("");
  const [experienceDescription,setExperienceDescription]=useState("");
  const [deleteGeneralInfo,setDeleteGeneralInfo]=useState(false);
  const [deleteEducationalExperience,setDeleteEducationalExperience]=useState(false);
  const [deletePracticalExperience,setDeletePracticalExperience]=useState(false);
  const handleNameChange=(event)=>{
    setName(event.target.value);
  }
  const handleJobTitleChange=(event)=>{
    setJobTitle(event.target.value);
  }
  const handleAddressChange=(event)=>{
    setAddress(event.target.value);
  }
  const handlePhoneNumberChange=(event)=>{
    setPhoneNumber(event.target.value);
  }
  const handleEmailChange=(event)=>{
    setEmail(event.target.value);
  }
  const handleSchoolChange=(event)=>{
    setSchool(event.target.value);
  }
  const handleDegreeChange=(event)=>{
    setDegree(event.target.value);
  }
  const handleStartDateChange=(event)=>{
    setStartDate(event.target.value);
  }
  const handleEndDateChange=(event)=>{
    setEndDate(event.target.value);
  }
  const handleCompanyChange=(event)=>{
    setCompany(event.target.value);
  }
  const handleJobExperienceChange=(event)=>{
    setJobExperience(event.target.value);
  }
  const handleStartDateExperienceChange=(event)=>{
    setStartDateExperience(event.target.value);
  }
  const handleEndDateExperienceChange=(event)=>{
    setEndDateExperience(event.target.value);
  }
  const handleExperienceDescriptionChange=(event)=>{
    setExperienceDescription(event.target.value);
  }
  const handleDeleteGeneralInfoClick=()=>{
    setDeleteGeneralInfo(true);
  }
  const handleDeleteEducationalExperienceClick=()=>{
    setDeleteEducationalExperience(true);
  }
  const handleDeletePracticalExperienceClick=()=>{
    setDeletePracticalExperience(true);
  }
  return (
    <>
    <h1>CV BUILDER</h1>
    <div className='container'>
     <Form handleNameChange={handleNameChange} handleJobTitleChange={handleJobTitleChange} handleAddressChange={handleAddressChange} handlePhoneNumberChange={handlePhoneNumberChange} handleEmailChange={handleEmailChange} handleSchoolChange={handleSchoolChange} handleDegreeChange={handleDegreeChange} handleStartDateChange={handleStartDateChange} handleEndDateChange={handleEndDateChange} handleCompanyChange={handleCompanyChange} handleJobExperienceChange={handleJobExperienceChange} handleStartDateExperienceChange={handleStartDateExperienceChange} handleEndDateExperienceChange={handleEndDateExperienceChange} handleExperienceDescriptionChange={handleExperienceDescriptionChange} deleteGeneralInfo={deleteGeneralInfo} deleteEducationalExperience={deleteEducationalExperience} deletePracticalExperience={deletePracticalExperience} handleDeleteGeneralInfoClick={handleDeleteGeneralInfoClick} handleDeleteEducationalExperienceClick={handleDeleteEducationalExperienceClick} handleDeletePracticalExperienceClick={handleDeletePracticalExperienceClick}/> 
     <Preview name={name} jobTitle={jobTitle} address={address} phoneNumber={phoneNumber} email={email} school={school} degree={degree} startDate={startDate} endDate={endDate} company={company} jobExperience={jobExperience} startDateExperience={startDateExperience} endDateExperience={endDateExperience} experienceDescription={experienceDescription} deleteGeneralInfo={deleteGeneralInfo} deleteEducationalExperience={deleteEducationalExperience} deletePracticalExperience={deletePracticalExperience}/>
     </div>
    </>
  )
}

export default App
