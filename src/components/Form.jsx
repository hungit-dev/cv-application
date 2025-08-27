import '../styles/Form.css'
function Form({handleNameChange,handleJobTitleChange,handleAddressChange,handlePhoneNumberChange,handleEmailChange,handleSchoolChange,handleDegreeChange,handleStartDateChange,handleEndDateChange,handleCompanyChange,handleJobExperienceChange,handleStartDateExperienceChange,handleEndDateExperienceChange,handleExperienceDescriptionChange,deleteGeneralInfo,deleteEducationalExperience,deletePracticalExperience,handleDeleteGeneralInfoClick,handleDeleteEducationalExperienceClick,handleDeletePracticalExperienceClick}){

    return (
        <>
        <div className='form'>
        <div style={{display: deleteGeneralInfo ? "none" :"grid"}} className="general-info-form">
            <h2> 📝 General Information</h2>
                <input type="text" id='full-name' placeholder="Full Name" onChange={handleNameChange}/>
                 <div className='input-box'>
                    <label htmlFor="job-title">Job Title</label>
                    <input type="text" id='job-title' placeholder="Software Engineer" onChange={handleJobTitleChange}/>
                 </div>
                <input type="text" id='email' placeholder="Email" onChange={handleEmailChange}/>
                <input type="text" id='phone-number' placeholder="Phone number" onChange={handlePhoneNumberChange}/> 
                <textarea id="address" placeholder='Address' onChange={handleAddressChange}></textarea>
                <div className="button-column">
                  
                    <button onClick={handleDeleteGeneralInfoClick}>Delete</button>
                </div>
                
        </div>
        <div style={{display: deleteEducationalExperience ? "none" :"grid"}} className="educational-experience-form">
            <h2> 🎓Educational Experience </h2>
                <input type="text" id='school' placeholder="School/University" onChange={handleSchoolChange}/>
                <input type="text" id='degree' placeholder="Degree/Field of Study" onChange={handleDegreeChange}/>
                 <div className='input-box'>
                    <label htmlFor="start-date">Start Date</label>
                    <input type="date" id='start-date'  onChange={handleStartDateChange}/>
                 </div>
                 <div className='input-box'>
                    <label htmlFor="end-date">End Date</label>
                    <input type="date" id='end-date'  onChange={handleEndDateChange}/>
                 </div>
                 <div className="button-column">
                  
                    <button onClick={handleDeleteEducationalExperienceClick}>Delete</button>
                </div>
        </div>
        <div style={{display: deletePracticalExperience ? "none" :"grid"}} className="practical-experience-form">
            <h2> 💼 Practical Experience </h2>
                <input type="text" id='job-experience' placeholder="Job title" onChange={handleJobExperienceChange}/>
                <input type="text" id='company-experience' placeholder="Company" onChange={handleCompanyChange}/>
                 <div className='input-box'>
                    <label htmlFor="start-date">Start Date</label>
                    <input type="date" id='start-date'  onChange={handleStartDateExperienceChange}/>
                 </div>
                 <div className='input-box'>
                    <label htmlFor="end-date">End Date</label>
                    <input type="date" id='end-date'  onChange={handleEndDateExperienceChange}/>
                 </div>
                 <textarea id="responsibility" placeholder='Key Responsibilities & Achievements' onChange={handleExperienceDescriptionChange}></textarea>
                 <div className="button-column">
                    
                    <button onClick={handleDeletePracticalExperienceClick}>Delete</button>
                </div>
        </div>
        </div>
        </>
    )
}
export default Form