import '../styles/UserDetails.css';

const UserDetails = ({ userInfo, onChange }) => {
  return (
    <article className='user-details'>
      <h1>User Details</h1>
      <form action="">
        <label htmlFor="first-name">First Name</label>
        <input 
          type="text" 
          id='first-name' 
          name='first-name' 
          value={userInfo.firstName} 
          onChange={(e) => onChange(e, "firstName")} 
        />
        <label htmlFor="last-name">Last Name</label>
        <input 
          type="text" 
          id='last-name' 
          name='last-name' 
          onChange={(e) => onChange(e, "lastName")}
        />
      </form>
    </article>
  )
}

export default UserDetails
