import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
        <div className='h-16 border-2 flex justify-between p-4'>
            <div className='text-2xl font-semibold'>Furrniro.</div>
            <Link to="/signup">Signup</Link>
        </div>
    </>
  )
}

export default Login
