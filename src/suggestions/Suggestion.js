import React, { useState } from 'react'
import axios from 'axios'
import './Suggestion.css'

const FOLLOW_USER_URL = 'http://localhost:10001/follow-service/follow'
const UNFOLLOW_USER_URL = 'http://localhost:10001/follow-service/unfollow'

function executeAction(isFollowing, userToExecuteActionOn) {
    const mapper = {
        true: follow,
        false: unfollow,
    }
    return mapper[isFollowing](userToExecuteActionOn)
}

const follow = async (toFollow) => {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')
        await axios.post(FOLLOW_USER_URL, {"follow": toFollow })
        .then(response => console.log(response))
        .catch(error => console.log(error))
}

const unfollow = async (toUnfollow) =>    {    
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')
    await axios.post(UNFOLLOW_USER_URL, {"unfollow": toUnfollow})
    .then(response => console.log(response))
    .catch(error => console.log(error))
}

export default function Suggestion({ username }) {
    const [isFollowing, setIsFollowing] = useState(false)

    const handleOnClick = (event) => {
        event.preventDefault()
        executeAction(!isFollowing, username)
        setIsFollowing(!isFollowing)
    }

    return (
        <li className="suggestion">
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" width='40%' alt='Profile pic'/>
            <div className="user-info">
                <h3>{username}</h3>
                <button className="follow-button" onClick={handleOnClick}>{isFollowing ? "Unfollow" : "Follow"}</button>
            </div>
        </li>
    )
}