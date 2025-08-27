import '../styles/Preview.css'
function Preview({name,jobTitle,address,phoneNumber,email,school,degree,startDate,endDate,company,jobExperience,startDateExperience,endDateExperience,experienceDescription,deleteGeneralInfo,deleteEducationalExperience,deletePracticalExperience}){
 
    return (
    <>
    <div className="preview">
    <div style={{display: deleteGeneralInfo ? "none" :"block"}} className="general-info-display">
    <h2>{name}</h2>
    <p><strong>Job Title:</strong> {jobTitle}</p>
    <p><strong>Address:</strong> {address}</p>
    <p><strong>Phone:</strong> {phoneNumber}</p>
    <p><strong>Email:</strong> {email}</p>
    </div>
    <div style={{display: deleteEducationalExperience ? "none" :"block"}} className="educational-experience-display">
        <h2> 🎓 Education</h2>
        <p><strong>School:</strong> {school}</p>
        <p><strong>Degree:</strong> {degree}</p>
        <p><strong>Years:</strong> From {startDate} To {endDate}</p>
    </div>
    <div style={{display: deletePracticalExperience ? "none" :"block"}} className="practical-experience-display">
        <h2>💼 Experience</h2>
        <p><strong>Company name:</strong> {company}</p>
        <p><strong>Position:</strong> {jobExperience}</p>
        <p><strong>Duration:</strong> From {startDateExperience} To {endDateExperience}</p>
        <p><strong>Key Responsibilities:</strong> {experienceDescription}</p>
    </div>
    <div style={{display: (deleteGeneralInfo&&deleteEducationalExperience&&deletePracticalExperience) ?"block" :"none",textAlign:"center"}}>Please refresh the Page to use the new Form!</div>
    </div>
    </>
)
}
export default Preview