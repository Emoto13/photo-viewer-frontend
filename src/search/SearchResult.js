import React from 'react'

import './SearchResult.css'

export default function SearchResult({ name, path, owner }) {
    return (
        <tr className="search-result-div">
            <td>
                <span className="name">{name}</span>
            </td>
            <td>
                <span className="owner">{owner}</span>
            </td>
            <td>
                <img src={path} alt="Missing info" className="image-result"/>
            </td>
        </tr>
    )
}