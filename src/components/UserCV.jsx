import '../styles/UserCV.css';

const UserCV = ({ userInfo }) => {
  return (
    <article className='user-cv'>
      <section className='user-cv__container'>
        <section className="user-cv__top-section">
          <h1 className='user-cv__heading'>{userInfo.firstName} {userInfo.lastName}</h1>
          <p className='user-cv__professional-title'>{userInfo.professionalTitle}</p>
          <p className='user-cv__summary'>{userInfo.summary}</p>
        </section>
      </section>
    </article>
  )
}

export default UserCV;
