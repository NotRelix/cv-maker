import { useState } from 'react';
import '../styles/UserDetails.css';
import SelectEdit from './SelectEdit';
import BasicInfoForm from './BasicInfoForm';
import ContactInfoForm from './ContactInfoForm';
import EducationForm from './EducationForm';
import WorkForm from './WorkForm';

const UserDetails = ({ userInfo, onChange, setUserInfo }) => {
  const [currentTab, setCurrentTab] = useState(0);
  const forms = [
    {
      id: 0,
      title: "Basic Info",
      form: <BasicInfoForm userInfo={userInfo} onChange={onChange} />
    },
    {
      id: 1,
      title: "Contact Info",
      form: <ContactInfoForm userInfo={userInfo} onChange={onChange} />
    },
    {
      id: 2,
      title: "Education",
      form: <EducationForm userInfo={userInfo} onChange={onChange} setUserInfo={setUserInfo} />
    },
    {
      id: 3,
      title: "Work Experience",
      form: <WorkForm userInfo={userInfo} onChange={onChange} setUserInfo={setUserInfo} />
    },
  ]

  const currentForm = forms.find((form) => form.id === currentTab);

  function handleTabChange(newTab) {
    setCurrentTab(newTab);
  }

  return (
    <article className='user-details'>
      <SelectEdit currentTab={currentTab} onTabChange={handleTabChange} />
      <div className="user-details__container">
        <h1 className='user-details__header'>{forms[currentTab].title}</h1>
        {currentForm.form}
      </div>
    </article>
  )
}

export default UserDetails;
