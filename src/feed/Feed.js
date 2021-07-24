import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Search from '../search/Search.js'
import UploadImage from '../uploadImage/UploadImage.js'
import Post from '../post/Post.js'
import Logout from '../logout/Logout.js'
import Suggestions from '../suggestions/Suggestions.js'


const GET_FOLLOWING_POST_URL = 'http://localhost:10005/post-service/get-following-posts'

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
    <React.Fragment>
      <Search />
      <Logout />
      <UploadImage />
      <div> Feed </div>
      <div>{posts ? posts.map((post, index) => <Post key={index} name={post.Name} owner={post.Owner} path={post.Path} createdOn={post.CreatedOn} />) : "Loading..."}</div>
      <Suggestions />     
      </React.Fragment>)
}