import '../styles/BasicInfoForm.css'

const ContactInfoForm = ({ userInfo, onChange }) => {
  return (
    <form action="">
      <div className='contact-info__field'>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id='email'
          name='email'
          value={userInfo.email}
          onChange={(e) => onChange(e, "email")}
        />
      </div>
      <div className='contact-info__field'>
        <label htmlFor="phone-number">Phone Number</label>
        <input
          type="text"
          id='phone-number'
          name='phone-number'
          value={userInfo.phoneNumber}
          onChange={(e) => onChange(e, "phoneNumber")}
        />
      </div>
      <div className='contact-info__field'>
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id='location'
          name='location'
          value={userInfo.location}
          onChange={(e) => onChange(e, "location")}
        />
      </div>
      <div className='contact-info__field'>
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id='website'
          name='website'
          value={userInfo.website}
          onChange={(e) => onChange(e, "website")}
        />
      </div>
    </form>
  )
}

export default ContactInfoForm;