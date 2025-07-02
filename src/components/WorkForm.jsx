import { useState } from 'react';
import '../styles/EducationForm.css';
import SwitchSlider from './SwitchSlider';

const WorkForm = ({ userInfo, onChange, setUserInfo }) => {
  const [additionalList, setAdditionalList] = useState([...userInfo.currentAdditionalWorkInfoList]);
  const currentYear = new Date().getFullYear();

  function handleAddAdditional(e) {
    e.preventDefault();
    const newList = [...additionalList, userInfo.additionalWorkInfo];
    setAdditionalList(newList);
    userInfo.additionalWorkInfo = "";
    userInfo.currentAdditionalWorkInfoList = newList;
  }

  function handleDelete(index) {
    const newList = additionalList.filter((item, key) => key !== index);
    setAdditionalList(newList);
    userInfo.currentAdditionalWorkInfoList = newList;
  }

  function handleEdit(index) {
    const editedWork = { ...userInfo.workList[index] };
    setUserInfo(prev => ({
      ...prev,
      position: editedWork.position,
      workplace: editedWork.workplace,
      startingWorkYear: editedWork.startingWorkYear,
      endWorkYear: editedWork.endWorkYear,
      onGoingWork: editedWork.onGoingWork,
      currentAdditionalWorkInfoList: [...editedWork.additionalWorkInfo],
      workList: userInfo.workList.filter((_, key) => key !== index),
    }));
    setAdditionalList(editedWork.additionalWorkInfo);
  }

  function handleDeleteWork(index) {
    const newList = userInfo.workList.filter((item, key) => key !== index);
    setUserInfo({
      ...userInfo, 
      workList: newList
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setAdditionalList([]);
    setUserInfo(prev => ({
      ...prev,
      position: '',
      workplace: '',
      startingWorkYear: '',
      endWorkYear: '',
      onGoingWork: '',
      additionalWorkInfo: '',
      currentAdditionalWorkInfoList: '',
      workList: [
        ...prev.workList,
        {
          position: prev.position,
          workplace: prev.workplace,
          startingWorkYear: prev.startingWorkYear,
          endWorkYear: prev.onGoingWork ? "Present" : prev.endWorkYear,
          onGoingWork: prev.onGoingWork,
          additionalWorkInfo: [...prev.currentAdditionalWorkInfoList],
        }
      ]
    }))
  }

  return (
    <div className='user-details__education-container'>
      {userInfo.workList.map((work, index) => (
        <div className='user-details__education-list' key={index}>
          <div className='user-details__heading'>
            <p className='user-details__university'>{work.position} <span className='user-details__course'>/ {work.workplace}</span></p>
          </div>
          <div className='user-details__icons'>
            <button className='user-details__edit' onClick={() => handleEdit(index)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
              </svg>
            </button>
            <button className='user-details__delete' onClick={() => handleDeleteWork(index)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
              </svg>
            </button>
          </div>
        </div>
      ))}
      <form onSubmit={handleSubmit} className="user-details__education" action="">
        <div className='education__field'>
          <label htmlFor="position">Position*</label>
          <input
            type="text"
            id='position'
            name='position'
            value={userInfo.position}
            onChange={(e) => onChange(e, "position")}
            required
          />
        </div>
        <div className='education__field'>
          <label htmlFor="workplace">Workplace</label>
          <input
            type="text"
            id='workplace'
            name='workplace'
            value={userInfo.workplace}
            onChange={(e) => onChange(e, "workplace")}
          />
        </div>
        <div className='education__field'>
          <label htmlFor="starting-work-year">Starting Year*</label>
          <input
            type="number"
            id='starting-work-year'
            name='starting-work-year'
            value={userInfo.startingWorkYear}
            onChange={(e) => onChange(e, "startingWorkYear")}
            required
          />
        </div>
        <div className='education__field'>
          <label htmlFor="end-work-year">End Year*</label>
          <input
            type="number"
            id='end-work-year'
            name='end-work-year'
            value={userInfo.onGoingWork ? currentYear : userInfo.endWorkYear}
            onChange={(e) => onChange(e, "endWorkYear")}
            disabled={userInfo.onGoingWork}
            required
          />
        </div>
        <div className='education__field'>
          <label htmlFor="on-going-work">On-going</label>
          <SwitchSlider userInfo={userInfo} setUserInfo={setUserInfo} name={"onGoingWork"} />
        </div>
        <div className='education__field'>
          <label htmlFor="additional-work-info">Job Responsibilities</label>
          <input
            type="text"
            id='additional-work-info'
            name='additional-work-info'
            value={userInfo.additionalWorkInfo}
            onChange={(e) => onChange(e, "additionalWorkInfo")}
          />
          <button className='additional-info__add' onClick={handleAddAdditional}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </button>
        </div>
        <div className='education__field additional-info'>
          {additionalList.map((additional, index) => {
            return (
              <div key={index} className='additional-info__container'>
                <p>
                  {additional}  
                </p>
                <svg onClick={() => handleDelete(index)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="delete-btn size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
            )
          })}
        </div>
        <button type='submit' className='submit-btn'>Submit Work</button>
      </form>
    </div>
  )
}

export default WorkForm;