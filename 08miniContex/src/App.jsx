import UserContexProvider from './contex/UserContexProvider'

import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  

  return (
    <>
    <UserContexProvider>
      <h1>React With Chai</h1>
      <Login />
      <Profile />
    </UserContexProvider>
      
    </>
  )
}

export default App
