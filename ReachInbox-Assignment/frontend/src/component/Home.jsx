import React, {useEffect, useState} from 'react'
import {Link, useLocation} from 'react-router-dom'
import {jwtDecode} from 'jwt-decode'

import '../App.css'

const Home = () => {
  const location = useLocation()
  const [loginDone, setLogin] = useState(false)

  const handleLogin = () => {
    setTimeout(() => {
      setLogin(true)
    }, 3000)
  }
  let token = localStorage.getItem('reachinbox-auth')
  useEffect(() => {
    token = location.search.split('?token=')?.join('') || takeToken()
    // console.log("Token::",token)
    if (token) {
      let ParseData = jwtDecode(token)
      console.log(ParseData)
      localStorage.setItem('reachinbox-auth', JSON.stringify(token))
      localStorage.setItem(
        'reachinbox-auth-name',
        JSON.stringify(ParseData.name),
      )
      localStorage.setItem(
        'reachinbox-auth-email',
        JSON.stringify(ParseData.email),
      )
    }
  }, [loginDone, token])

  function takeToken() {
    try {
      return JSON.parse(localStorage.getItem('reachinbox-auth')) || ''
    } catch (e) {
      console.log('Error:', e)
    }
  }

  return (
    <div className='home'>
      <div className='bg-black text-white flex flex-col justify-center items-center w-screen h-screen'>
        <div className='bg-[#111214]  border border-[#343A40] text-center py-5 sm:space-y-10 sm:px-20 rounded-lg'>
          <div className=''>
            <div className='text-2xl  font-medium  mt-6'>
              Create a new account
            </div>
            <button
              className='mt-6 border-white/40 border  px-10 mr-4 sm:px-28 py-3 text-sm font-normal  flex items-center text-[#CCCCCC] rounded-md cursor-pointer mb-14'
              onClick={handleGoogleLogin}
            >
              <img src={google} alt='google' className='w-5 mr-3'></img>
              Sign Up with Google
            </button>
          </div>

          <div className='mt-6'>
            <Link
              to='/login'
              className='mx-16 px-10  rounded-md cursor-pointer bg-gradient-to-r from-[#4B63DD] to-[#0524BFFC] text-md py-3'
            >
              Create an Account
            </Link>
            <div className='my-8 mb-10 text-[#909296]'>
              Already have an account?{' '}
              <Link to='/signin' className='text-[#C1C2C5]'>
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
