import React, { useRef } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

const SIGNUP_URL = 'http://localhost:10003/user-service/create-user'

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
    const emailRef = useRef();

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
            console.log(response.data)
            window.location.reload()
          })
          .catch(error => console.log(error))
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
                <Link to='/login'>Log in</Link> 
            </form>
    </div>)
}