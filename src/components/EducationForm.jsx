import { useState } from 'react';
import '../styles/EducationForm.css';
import SwitchSlider from './SwitchSlider';

const EducationForm = ({ userInfo, onChange, setUserInfo }) => {
  const [additionalList, setAdditionalList] = useState([...userInfo.currentAdditionalInfoList]);
  const currentYear = new Date().getFullYear();

  function handleAddAdditional(e) {
    e.preventDefault();
    const newList = [...additionalList, userInfo.additionalInfo];
    setAdditionalList(newList);
    userInfo.additionalInfo = "";
    userInfo.currentAdditionalInfoList = newList;
  }

  function handleDelete(index) {
    const newList = additionalList.filter((item, key) => key !== index);
    setAdditionalList(newList);
    userInfo.currentAdditionalInfoList = newList;
  }

  function handleSubmit(e) {
    e.preventDefault();
    setAdditionalList([]);
    setUserInfo(prev => ({
      ...prev,
      university: '',
      course: '',
      startingYear: '',
      graduatingYear: '',
      onGoing: '',
      gpa: '',
      additionalInfo: '',
      currentAdditionalInfoList: '',
      educationList: [
        ...prev.educationList,
        {
          university: prev.university,
          course: prev.course,
          startingYear: prev.startingYear,
          graduatingYear: prev.onGoing ? "Present" : prev.graduatingYear,
          onGoing: prev.onGoing,
          gpa: prev.gpa,
          additionalInfo: [...prev.currentAdditionalInfoList],
        }
      ]
    }))
  }

  return (
    <div className='user-details__education-container'>
      {userInfo.educationList.map((education) => (
        <div className='user-details__education-list'>
          <div className='user-details__heading'>
            <p className='user-details__university'>{education.university} <span className='user-details__course'>/ {education.course}</span></p>
          </div>
          <div className='user-details__icons'>
            <button className='user-details__edit'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
              </svg>
            </button>
            <button className='user-details__delete'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
              </svg>
            </button>
          </div>
        </div>
      ))}
      <form onSubmit={handleSubmit} className="user-details__education" action="">
        <div className='education__field'>
          <label htmlFor="university">School*</label>
          <input
            type="text"
            id='university'
            name='university'
            value={userInfo.university}
            onChange={(e) => onChange(e, "university")}
            required
          />
        </div>
        <div className='education__field'>
          <label htmlFor="course">Course</label>
          <input
            type="text"
            id='course'
            name='course'
            value={userInfo.course}
            onChange={(e) => onChange(e, "course")}
          />
        </div>
        <div className='education__field'>
          <label htmlFor="starting-year">Starting Year*</label>
          <input
            type="number"
            id='starting-year'
            name='starting-year'
            value={userInfo.startingYear}
            onChange={(e) => onChange(e, "startingYear")}
            required
          />
        </div>
        <div className='education__field'>
          <label htmlFor="graduating-year">Graduating Year*</label>
          <input
            type="number"
            id='graduating-year'
            name='graduating-year'
            value={userInfo.onGoing ? currentYear : userInfo.graduatingYear}
            onChange={(e) => onChange(e, "graduatingYear")}
            disabled={userInfo.onGoing}
            required
          />
        </div>
        <div className='education__field'>
          <label htmlFor="on-going">On-going</label>
          <SwitchSlider userInfo={userInfo} setUserInfo={setUserInfo} name={"onGoing"} />
        </div>
        <div className='education__field'>
          <label htmlFor="gpa">GPA</label>
          <input
            type="number"
            id='gpa'
            name='gpa'
            value={userInfo.gpa}
            onChange={(e) => onChange(e, "gpa")}
          />
        </div>
        <div className='education__field'>
          <label htmlFor="additional-info">Additional Info</label>
          <input
            type="text"
            id='additional-info'
            name='additional-info'
            value={userInfo.additionalInfo}
            onChange={(e) => onChange(e, "additionalInfo")}
          />
          <button className='additional-info__add' onClick={handleAddAdditional}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </button>
        </div>
        <div className='education__field additional-info'>
          {additionalList.map((additional, index) => {
            return (
              <div key={index} className='additional-info__container'>
                <p>
                  {additional}  
                </p>
                <svg onClick={() => handleDelete(index)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="delete-btn size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
            )
          })}
        </div>
        <button type='submit' className='submit-btn'>Submit Education</button>
      </form>
    </div>
  )
}

export default EducationForm;