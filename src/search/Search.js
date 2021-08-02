import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

import SearchResult from './SearchResult.js'
import './Search.css'


const SEARCH_POSTS_URL = `${process.env.REACT_APP_POST_SERVICE_URL}/post-service/search-posts/`

export default function Search() {
    const [posts, setPosts] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
      const searchPosts = async () => {
        await axios(`${SEARCH_POSTS_URL}${query}`,)
        .then(response => setPosts(response.data.posts))
        .catch(error => console.log(error))
        }
        if (query) {
          searchPosts()
        }
    }, [query])
    

    return (
        <div className="search">
          <TextField
            className="textfield"
            onChange={(e) => setQuery(e.target.value)}
            variant="outlined"
            label="Search Box"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
         <div>{posts && query ? <table><tbody>{posts.map((post, index) => <SearchResult key={index} name={post.Name} path={post.Path} owner={post.Username} /> )}</tbody></table> : ""}</div>
        </div>

    )
}
