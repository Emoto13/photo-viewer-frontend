import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import './Login.css'

const LOGIN_URL = `${process.env.REACT_APP_AUTH_SERVICE_URL}/auth-service/login`

const Field = React.forwardRef(({label, type}, ref) => {
    return (
      <div className="input-box">
        <label>{label}</label>
        <input className="inputs" ref={ref} type={type} />
      </div>
    )
})

function setToken(token) {
  localStorage.setItem('token', token)
} 

export default function Login() {
  console.log(process.env)
    const usernameRef = useRef()
    const passwordRef = useRef()

    const handleSubmit = (event) => {
        console.log("CLICKED")
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
    <div className="login-box">
            <form className="form-container" onSubmit={handleSubmit} >
              <h3 className="title">Log in</h3>
                <Field ref={usernameRef} label="Username:" type="text" />
                <Field ref={passwordRef} label="Password:" type="password" />
                <div>
                  <button className="btn"type="submit">Submit</button>
                </div>
                <div className="sign-up">
                <Link to='/sign-up'>Sign up</Link> 
                </div>
            </form>
    </div>)
}