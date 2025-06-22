import '../styles/UserDetails.css';

const UserDetails = ({ userInfo, onChange }) => {
  return (
    <article className='user-details'>
      <div className="user-details__container">
        <h1>User Details</h1>
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
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id='email'
              name='email'
              onChange={(e) => onChange(e, "email")}
            />
          </div>
          <div className='user-details__field'>
            <label htmlFor="phone-number">Phone Number</label>
            <input
              type="number"
              id='phone-number'
              name='phone-number'
              onChange={(e) => onChange(e, "phoneNumber")}
            />
          </div>
          <div className='user-details__field'>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id='address'
              name='address'
              onChange={(e) => onChange(e, "address")}
            />
          </div>
        </form>
      </div>
    </article>
  )
}

export default UserDetails
