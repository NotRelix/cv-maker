import '../styles/Navbar.css'

const Navbar = ({ onClickDownload }) => {
  return (
    <nav className='navbar'>
      <h1 className='navbar__logo'>CV Maker</h1>
      <div className='navbar__options'>
        <div className='navbar__download' onClick={() => onClickDownload()}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
