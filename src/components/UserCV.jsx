import '../styles/UserCV.css';
import BasicInfo from './BasicInfo';
import ContactInfo from './ContactInfo';

const UserCV = ({ userInfo, toggleCV }) => {
  return (
    <section className={`user-cv__container ${toggleCV === false ? "user-cv-hidden" : ""}`}>
      <section className="user-cv__top-section">
        <BasicInfo userInfo={userInfo} />
        <ContactInfo userInfo={userInfo} />
      </section>
    </section>
  )
}

export default UserCV;
