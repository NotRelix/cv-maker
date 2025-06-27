import '../styles/UserCV.css';
import BasicInfo from './BasicInfo';
import ContactInfo from './ContactInfo';

const UserCV = ({ userInfo, toggleCV }) => {
  return (
    <article className={`user-cv ${toggleCV === false ? "user-cv-hidden" : ""}`}>
      <section className='user-cv__container'>
        <section className="user-cv__top-section">
          <BasicInfo userInfo={userInfo} />
          <ContactInfo userInfo={userInfo} />
        </section>
      </section>
    </article>
  )
}

export default UserCV;
