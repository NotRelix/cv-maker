import '../styles/UserDetails.css';

const UserDetails = ({ userInfo, onChange }) => {
  return (
    <article className='user-details'>
      <div className="user-details__container">
        <h1 className='user-details__header'>Basic Info</h1>
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
              onChange={(e) => onChange(e, "lastName")}
            />
          </div>
          <div className='user-details__field'>
            <label htmlFor="professional-title">Professional Title</label>
            <input
              type="text"
              id='professional-title'
              name='professional-title'
              onChange={(e) => onChange(e, "professionalTitle")}
            />
          </div>
          <div className='user-details__field'>
            <label htmlFor="summary">Summary</label>
            <textarea
              type="text"
              id='summary'
              name='summary'
              onChange={(e) => onChange(e, "summary")}
            />
          </div>
        </form>
      </div>
    </article>
  )
}

export default UserDetails
