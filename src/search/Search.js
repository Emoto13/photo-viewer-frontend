import React, { Fragment, useEffect, useState } from 'react';
import SearchField from "react-search-field";
import axios from 'axios';

import './Search.css'

const SEARCH_POSTS_URL = 'http://localhost:10005/post-service/search-posts/'

export default function Search() {
    const [posts, setPosts] = useState();
    const [query, setQuery] = useState();

    console.log(query, posts)
    useEffect(() => {
      if (query) {
      const searchPosts = async () => {
        await axios(`${SEARCH_POSTS_URL}${query}`,)
        .then(response => setPosts(response.data))
        .catch(error => console.log(error))
        }
        searchPosts()
      }
    }, [query])
    

    return (
        <Fragment>
          <SearchField
          placeholder="Search for posts"
          onChange={setQuery}
          searchText="" />
          <div>{posts ? "POSTS FOUND" : ""}</div>
      </Fragment>
    )
}