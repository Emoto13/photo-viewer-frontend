import React from 'react'

export default function DownloadImage({ imageUrl, className }) {
    return (
        <a href={imageUrl} download className={className}>
            <button>Download</button>
        </a>
    )
}

