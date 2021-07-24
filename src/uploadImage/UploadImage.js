import React, { Fragment, useState } from 'react';
import { FiUpload } from 'react-icons/fi'
import ImageUploader from 'react-images-upload';
import axios from 'axios';

const UPLOAD_IMAGE_URL = 'http://localhost:10002/image-service/upload-image'

export default function UploadImage() {
    const [image, setImage] = useState()
    const [imageURL, setImageURL] = useState()

    function onClick(e) {
        console.log("submitted")
        const uploadImage = async () => { 
            let bodyFormData = new FormData()

            bodyFormData.append('imageName', 'Upload from react')
            bodyFormData.append('fileName', image.name);
            bodyFormData.append('image', image);
        

            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');    
            await axios.post(UPLOAD_IMAGE_URL, bodyFormData, { "Content-Type": "multipart/form-data" })
            .then(response => console.log(response))
            .catch(error => console.log(error))
        }
        uploadImage()
    }

    function onChange(value) {
        setImage(value[value.length - 1])
        setImageURL(URL.createObjectURL(value[value.length - 1]))
    }

    return (
        <Fragment>

            <ImageUploader
                buttonText='Choose images'
                onChange={onChange}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}>
                <FiUpload />
            </ImageUploader>
            {imageURL ? <img src={imageURL} alt="" />: ""}
            <button onClick={onClick}>Upload</button>
        </Fragment>
    )
}