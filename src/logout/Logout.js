import React from 'react'
import axios from 'axios'

import './Logout.css'

const LOGOUT_URL = `${process.env.REACT_APP_AUTH_SERVICE_URL}/auth-service/logout`

function removeToken() {
  localStorage.removeItem('token');
} 

export default function Logout() {
    const handleLogout = (event) => {
        event.preventDefault()

        const logout = async () => {
          await axios.post(LOGOUT_URL, {})
          .then(() => {
              removeToken()
              window.location.reload()
            })
          .catch(error => console.log(error))
        }
        logout()
    }

    return (
    <div>
        <button className="logout-button" onClick={handleLogout}>Log out</button>
    </div>)
}