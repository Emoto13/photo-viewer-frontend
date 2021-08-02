import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Search from '../search/Search.js'
import UploadImagePopUp from '../uploadImage/UploadImagePopUp.js'
import Post from '../post/Post.js'
import Logout from '../logout/Logout.js'
import Suggestions from '../suggestions/Suggestions.js'
import './Feed.css'

const GET_FOLLOWING_POST_URL = `${process.env.REACT_APP_FEED_SERVICE_URL}/feed-service/get-feed`

export default function Feed() {
    const [feed, setFeed] = useState();
    console.log(feed)
    useEffect(() => {  
      const getFeed = async () => {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
        console.time('getFeed')
        await axios(GET_FOLLOWING_POST_URL, )
        .then(response => setFeed(response.data.feed))
        .catch(error => console.log(error))
        console.timeEnd('getFeed')
      }
      getFeed()

    }, []) 

    return (
    <div>
      <Search />
      <Logout />
      <div className="posts">{feed ? feed.map((post, index) => <Post key={index} name={post.Name} owner={post.Username} path={post.Path} createdOn={post.CreatedOn} />) : "Loading..."}</div>
      <Suggestions /> 
      <UploadImagePopUp className="upload-image-pop-up" />   
    </div>)
}