import React from 'react'

export default function UploadImagePopUp() {
    this.props.toggle();
    return (
        <div className="modal">
            <div className="modal_content">
                <span className="close" onClick={this.handleClick}>&times;    </span>
                <p>I'm A Pop Up!!!</p>
            </div>
        </div>
    )
}