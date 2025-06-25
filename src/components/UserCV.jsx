import '../styles/UserCV.css';
import BasicInfo from './BasicInfo';

const UserCV = ({ userInfo }) => {
  return (
    <article className='user-cv'>
      <section className='user-cv__container'>
        <section className="user-cv__top-section">
          <BasicInfo userInfo={userInfo} />
        </section>
      </section>
    </article>
  )
}

export default UserCV;
