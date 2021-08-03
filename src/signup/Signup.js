import React, { useRef, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

const SIGNUP_URL = `${process.env.REACT_APP_USER_SERVICE_URL}/user-service/create-user`

const Field = React.forwardRef(({label, type}, ref) => {
    return (
      <div>
        <label>{label}</label>
        <input ref={ref} type={type} />
      </div>
    )
})

export default function Signup() {
    const usernameRef = useRef()
    const passwordRef = useRef()
    const emailRef = useRef()
    const [status, setStatus] = useState(true)
    const [message, setMessage] = useState()

    const handleSubmit = (event) => {
        event.preventDefault()
        const data = {
            username: usernameRef.current.value,
            password: passwordRef.current.value,
            email: emailRef.current.value,
        };

        const createUser = async () => {
          await axios.post(SIGNUP_URL, data)
          .then(response => {
            setStatus(true)
          })
          .catch(error => {
            setStatus(false)
            setMessage(error.response.data.error)
          })
        }
        createUser()
    }

  

    return (
    <div>
            <form onSubmit={handleSubmit} >
              <div>Sing up</div>
                <Field ref={usernameRef} label="Username:" type="text" />
                <Field ref={passwordRef} label="Password:" type="password" />
                <Field ref={emailRef} label="Email:" type="text" />
                <div>
                  <button type="submit">Submit</button>
                </div>
                <div>
                  { status && message ? "Registration completed please login" : message} 
                </div>
                <Link to='/login'>Log in</Link> 
            </form>
    </div>)
}