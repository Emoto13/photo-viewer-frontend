import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Search from '../search/Search.js'
import UploadImage from '../uploadImage/UploadImage.js'
import Post from '../post/Post.js'
import Logout from '../logout/Logout.js'
import Suggestions from '../suggestions/Suggestions.js'
import './Feed.css'

const GET_FOLLOWING_POST_URL = `${process.env.REACT_APP_POST_SERVICE_URL}/post-service/get-following-posts`

export default function Feed() {
    const [posts, setPosts] = useState();

    useEffect(() => {  
      const getFeed = async () => {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
        console.time('getFeed')
        await axios(GET_FOLLOWING_POST_URL, )
        .then(response => setPosts(response.data.posts))
        .catch(error => console.log(error))
        console.timeEnd('getFeed')
      }
      getFeed()

    }, []) 

    return (
    <div>
      <Search />
      <Logout />
      <UploadImage className="upload-image"/>
      <div className="posts">{posts ? posts.map((post, index) => <Post key={index} name={post.Name} owner={post.Owner} path={post.Path} createdOn={post.CreatedOn} />) : "Loading..."}</div>
      <Suggestions />     
    </div>)
}