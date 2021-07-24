import React from 'react'
import './Post.css'

export default function Post({name, path, owner, createdOn}) {
    console.log(name, path, owner, createdOn)
    return (
        <div>
            <img src={path} alt={path} className="image" />
            <h3>{owner}</h3>
            <p>{name}</p>
            <p>{createdOn}</p>
            <button onClick={() => console.log("follow" + owner)}>Follow or Unfollow</button>
        </div>
    )
}