const BasicInfo = ({ userInfo }) => {
  return (
    <section className="user-cv__basic-info">
      <h1 className='user-cv__heading'>{userInfo.firstName} {userInfo.lastName}</h1>
      <p className='user-cv__professional-title'>{userInfo.professionalTitle}</p>
      <p className='user-cv__summary'>{userInfo.summary}</p>
    </section>
  )
}

export default BasicInfo;