const BasicInfoForm = ({ userInfo, onChange }) => {
  return (
    <form action="">
      <div className='user-details__field'>
        <label htmlFor="first-name">First Name</label>
        <input
          type="text"
          id='first-name'
          name='first-name'
          value={userInfo.firstName}
          onChange={(e) => onChange(e, "firstName")}
        />
      </div>
      <div className='user-details__field'>
        <label htmlFor="last-name">Last Name</label>
        <input
          type="text"
          id='last-name'
          name='last-name'
          value={userInfo.lastName}
          onChange={(e) => onChange(e, "lastName")}
        />
      </div>
      <div className='user-details__field'>
        <label htmlFor="professional-title">Professional Title</label>
        <input
          type="text"
          id='professional-title'
          name='professional-title'
          value={userInfo.professionalTitle}
          onChange={(e) => onChange(e, "professionalTitle")}
        />
      </div>
      <div className='user-details__field'>
        <label htmlFor="summary">Summary</label>
        <textarea
          type="text"
          id='summary'
          name='summary'
          value={userInfo.summary}
          rows="2"
          onChange={(e) => onChange(e, "summary")}
        />
      </div>
    </form>
  )
}

export default BasicInfoForm;