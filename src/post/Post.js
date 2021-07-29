import React from 'react'
import DownloadImage from '../downloadImage/DownloadImage'
import './Post.css'

export default function Post({name, path, owner, createdOn}) {
    return (
        <div className="post">
            <DownloadImage className="download-btn" imageUrl={path} />
            <div className="post-user-info">
                <img className="user-photo" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt='Profile pic'/>
                <h3 className="username">{owner}</h3>
            </div>
            <img src={path} alt={path} className="image" />
            <p>{name}</p>
            <p className="date">{createdOn.slice(0, 10)}</p>
        </div>
    )
}