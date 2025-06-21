import '../styles/UserCV.css';

const UserCV = ({ userInfo }) => {
  return (
    <article className='user-cv'>
      <h1>CV Document</h1>
      <section>
        <h1>{userInfo.firstName} {userInfo.lastName}</h1>
      </section>
    </article>
  )
}

export default UserCV
