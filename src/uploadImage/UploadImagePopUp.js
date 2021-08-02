import React, { useState } from 'react';

import UploadImage from './UploadImage';
import Modal from 'react-modal';

Modal.setAppElement('#root');
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      width: '70%',
      height: '18%',
      overflow: 'hidden',
      transform: 'translate(-50%, -50%)',
    },
  };
export default function UploadImagePopUp({ className }) {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal() {
      setIsOpen(false);
    }

    return (
        <div className={className}>
         <Modal
            isOpen={modalIsOpen}
            onAfterOpen={null}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Upload Image">
                <UploadImage />
            </Modal>
            <button className="trigger-btn" onClick={openModal}>Upload Image</button>
        </div>
    )
}
