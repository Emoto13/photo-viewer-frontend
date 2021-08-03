import React, { useState } from 'react';
import axios from 'axios';
import './UploadImage.css'

const UPLOAD_IMAGE_URL = `${process.env.REACT_APP_IMAGE_SERVICE_URL}/image-service/upload-image`

export default function UploadImage({ className }) {
    const [imageName, setImageName] = useState()
    const [image, setImage] = useState()
    //const [imageURL, setImageURL] = useState("https://photo-viewer.s3.eu-west-1.amazonaws.com/11ecee65f121e006efcf5146529498d8d4c2df4f505af3199373d05b23fd8449.png")
    const [imageURL, setImageURL] = useState()
    
    function onClick(e) {
        const uploadImage = async () => { 
            e.preventDefault()
            let bodyFormData = new FormData()
            bodyFormData.append('imageName', imageName)
            bodyFormData.append('fileName', image.name);
            bodyFormData.append('image', image);
        
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');    
            await axios.post(UPLOAD_IMAGE_URL, bodyFormData, { "Content-Type": "multipart/form-data" })
            .then(response => {
                console.log(response)
            })
            .catch(error => console.log(error))
        }
        if (!image) {
            console.log("Please choose an image")
            return 
        } else {
            uploadImage()
        }
    }

    function onChange(event) {
        setImage(event.target.files[0])
        setImageURL(URL.createObjectURL(event.target.files[0]))
    }

    return (
        <div className={className}>
        <form className="upload-form">
            <h3>Upload image</h3>
            <div className="name-container">
                <label className="label">Image name: </label>
                <input className="image-name-input" label="Image name" placeholder="Enter image name here" onChange={(e) => setImageName(e.target.value)} />
            </div>
            <div className="image-upload">
                <input className="upload-input" id="file-input" type="file" onChange={onChange}/>
            </div>
            <button className="upload-button" onClick={onClick}>Upload</button>
        </form>
            <div className="temp-div">
                {imageURL ? <img src={imageURL} className="temp-image" alt="" />: ""}
            </div>
        </div>
   
    )
}
