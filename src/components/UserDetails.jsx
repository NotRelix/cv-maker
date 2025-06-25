import { useState } from 'react';
import '../styles/UserDetails.css';
import SelectEdit from './SelectEdit';
import BasicInfoForm from './BasicInfoForm';

const UserDetails = ({ userInfo, onChange }) => {
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
      form: <h1>Contact Info</h1>
    },
    {
      id: 2,
      title: "Education",
      form: <h1>Education</h1>
    },
    {
      id: 3,
      title: "Work Experience",
      form: <h1>Work Experience</h1>
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
