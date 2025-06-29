import '../styles/SwitchSlider.css';

const SwitchSlider = ({ userInfo, setUserInfo, name }) => {
  function handleSwitch(e) {
    setUserInfo({...userInfo, [name]: e.target.checked});
  }

  return (
    <label className="switch">
      <input checked={userInfo[name]} onChange={handleSwitch} type="checkbox" />
      <span className="slider slider-round"></span>
    </label>
  )
}

export default SwitchSlider;