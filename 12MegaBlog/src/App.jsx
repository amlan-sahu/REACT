import  { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authServices from './appwrite/auth'
import { login,logout } from './store/authSlice'
import { Footer, Header } from './components'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authServices
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({userData}))
        } else {
          dispatch(logout())
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, )

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header/>
        <Footer/>
      </div>
    </div>
  ) : null
}

export default App
