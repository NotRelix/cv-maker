const EducationForm = ({ userInfo, onChange }) => {
  return (
    <form action="">
      <div className='contact-info__field'>
        <label htmlFor="university">University</label>
        <input
          type="text"
          id='university'
          name='university'
          value={userInfo.university}
          onChange={(e) => onChange(e, "university")}
        />
      </div>
      <div className='contact-info__field'>
        <label htmlFor="course">Course</label>
        <input
          type="text"
          id='course'
          name='course'
          value={userInfo.course}
          onChange={(e) => onChange(e, "course")}
        />
      </div>
      <div className='contact-info__field'>
        <label htmlFor="starting-year">Starting Year</label>
        <input
          type="number"
          id='starting-year'
          name='starting-year'
          value={userInfo.startingYear}
          onChange={(e) => onChange(e, "startingYear")}
        />
      </div>
      <div className='contact-info__field'>
        <label htmlFor="graduating-year">Graduating Year</label>
        <input
          type="number"
          id='graduating-year'
          name='graduating-year'
          value={userInfo.graduatingYear}
          onChange={(e) => onChange(e, "graduatingYear")}
        />
      </div>
      {/* Add ongoing button here */}
      <div className='contact-info__field'>
        <label htmlFor="gpa">GPA (optional)</label>
        <input
          type="number"
          id='gpa'
          name='gpa'
          value={userInfo.gpa}
          onChange={(e) => onChange(e, "gpa")}
        />
      </div>
    </form>
  )
}

export default EducationForm;