import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import './Login.css'

const LOGIN_URL = 'http://localhost:10000/auth-service/login'

const Field = React.forwardRef(({label, type}, ref) => {
    return (
      <div>
        <label>{label}</label>
        <input ref={ref} type={type} />
      </div>
    )
})

function setToken(token) {
  localStorage.setItem('token', token)
} 

export default function Login() {
    const usernameRef = useRef()
    const passwordRef = useRef()

    const handleSubmit = (event) => {
        event.preventDefault()
        const data = {
            username: usernameRef.current.value,
            password: passwordRef.current.value
        }

        const getToken = async () => {
          await axios.post(LOGIN_URL, data)
          .then(response => {
            setToken(response.data.token)
            window.location.reload()
          })
          .catch(error => console.log(error))
        }
        getToken()
    }

  

    return (
    <div>
            <form onSubmit={handleSubmit} >
              <div>Log in</div>
                <Field ref={usernameRef} label="Username:" type="text" />
                <Field ref={passwordRef} label="Password:" type="password" />
                <div>
                  <button type="submit">Submit</button>
                </div>
                <Link to='/sign-up'>Sign up</Link> 
            </form>
    </div>)
}