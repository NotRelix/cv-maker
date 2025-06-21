import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import UserCV from './components/UserCV'
import UserDetails from './components/UserDetails'
import { userInfoData } from './data/userInfoData'

function App() {
  const [userInfo, setUserInfo] = useState(userInfoData);

  function onChange(e, key) {
    setUserInfo({ ...userInfo, [key]: e.target.value })
  }

  return (
    <div className='container'>
      <Navbar />
      <main className='container__main'>
        <UserDetails userInfo={userInfo} onChange={onChange} />
        <UserCV userInfo={userInfo} />
      </main>
    </div>
  )
}

export default App
