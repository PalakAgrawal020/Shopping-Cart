import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'

function Login() {
  return (
    <>
        <div className='h-16 border-2 flex justify-between p-4'>
            <div className='text-2xl font-semibold'>Furrniro.</div>
            <Link to="/signup">Signup</Link>
        </div>
        <div>
          Enter your name
        </div>
        <div>
          field to enter the name
        </div>
        <div>
          Enter your number
        </div>
        <div>
          Field to enter the number
        </div>

        <Button>Click me</Button>
    </>
  )
}

export default Login
