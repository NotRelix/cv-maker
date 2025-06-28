import '../styles/SwitchSlider.css';

const SwitchSlider = () => {
  return (
    <label className="switch">
      <input type="checkbox" />
      <span className="slider slider-round"></span>
    </label>
  )
}

export default SwitchSlider;