import { useEffect, useState } from 'react';
import '../styles/UserCV.css';
import BasicInfo from './BasicInfo';
import ContactInfo from './ContactInfo';

const UserCV = ({ userInfo, toggleCV }) => {
  const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 1000px)').matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1000px)');

    const handleMediaChange = (e) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener('change', handleMediaChange);

    setIsMobile(mediaQuery.matches);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, []);

  return (
    <>
      {toggleCV && isMobile && <div className='user-cv__backdrop' />}

      <section className={`user-cv__container ${toggleCV === false ? "user-cv-hidden" : ""}`}>
        <section className="user-cv__top-section">
          <BasicInfo userInfo={userInfo} />
          <ContactInfo userInfo={userInfo} />
        </section>
      </section>
    </>
  )
}

export default UserCV;
