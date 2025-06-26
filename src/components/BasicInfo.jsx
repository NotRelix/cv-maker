import '../styles/BasicInfo.css'

const BasicInfo = ({ userInfo }) => {
  return (
    <section className="user-cv__basic-info">
      <h1 className='basic-info__heading'>{userInfo.firstName} {userInfo.lastName}</h1>
      <p className='basic-info__professional-title'>{userInfo.professionalTitle}</p>
      <p className='basic-info__summary'>{userInfo.summary}</p>
    </section>
  )
}

export default BasicInfo;