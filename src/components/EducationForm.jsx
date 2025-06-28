import { useState } from 'react';
import '../styles/EducationForm.css';
import SwitchSlider from './SwitchSlider';

const EducationForm = ({ userInfo, onChange }) => {
  const [additionalList, setAdditionalList] = useState([]);

  function handleAddAdditional(e) {
    e.preventDefault();
    setAdditionalList([...additionalList, userInfo.additionalInfo]);
    userInfo.additionalInfo = "";
  }

  return (
    <form className="user-details__education" action="">
      <div className='education__field'>
        <label htmlFor="university">University</label>
        <input
          type="text"
          id='university'
          name='university'
          value={userInfo.university}
          onChange={(e) => onChange(e, "university")}
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
        <label htmlFor="starting-year">Starting Year</label>
        <input
          type="number"
          id='starting-year'
          name='starting-year'
          value={userInfo.startingYear}
          onChange={(e) => onChange(e, "startingYear")}
        />
      </div>
      <div className='education__field'>
        <label htmlFor="graduating-year">Graduating Year</label>
        <input
          type="number"
          id='graduating-year'
          name='graduating-year'
          value={userInfo.graduatingYear}
          onChange={(e) => onChange(e, "graduatingYear")}
        />
      </div>
      <div className='education__field'>
        <label htmlFor="on-going">On-going</label>
        <SwitchSlider />
      </div>
      <div className='education__field'>
        <label htmlFor="gpa">GPA (optional)</label>
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
        {additionalList.map((additional) => {
          return (
            <div className='additional-info__container'>
              {additional}
            </div>
          )
        })}
      </div>
      <button className='submit-btn'>Submit Education</button>
    </form>
  )
}

export default EducationForm;