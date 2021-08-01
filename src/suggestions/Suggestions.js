import React, {useState, useEffect} from 'react'
import Suggestion from './Suggestion.js'
import axios from 'axios'

import './Suggestions.css';

const GET_SUGGESTIONS_URL = `${process.env.REACT_APP_FOLLOW_SERVICE_URL}/follow-service/get-suggestions`
 
export default function Suggestions() {
    const [suggestions, setSuggestions] = useState([])
    console.log(suggestions)
    useEffect(() => {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
        const getSuggestions = async () => { await axios(GET_SUGGESTIONS_URL, )
            .then(response => setSuggestions(response.data.suggestions))
            .catch(error => console.log(error))
        }
        getSuggestions()
      }, [])
    if (suggestions.length === 0) {
        return <div></div>
    }

    return (
        <div className="suggestions-wrapper">
            <h2 className="header">Suggestions</h2>
            <ul className="suggestions-style">{suggestions ? suggestions.map((suggestion, index) => <Suggestion key={index} username={suggestion.Username} />) : "Loading..."} </ul>
        </div>
        )
}