import '../styles/UserCV.css';

const UserCV = ({ userInfo }) => {
  return (
    <article className='user-cv'>
      <h1>CV Document</h1>
      <section>
        <h1>{userInfo.firstName} {userInfo.lastName}</h1>
        <h1>{userInfo.email}</h1>
        <h1>{userInfo.phoneNumber}</h1>
        <h1>{userInfo.address}</h1>
      </section>
    </article>
  )
}

export default UserCV
