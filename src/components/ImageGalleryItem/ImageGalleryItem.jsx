import React, { useState } from 'react';
import css from '../styles.module.css'
import { Modal } from 'components/Modal/Modal';

 const ImageGalleryItem = ({webformatURL, tags, largeImageURL}) => {
  const [showModal, setShowModal] = useState(false)

    return (
      <li className={css.ImageGalleryItem}>
        <img
          className={css.ImageGalleryItemImage}
          src={webformatURL}
          alt={tags}
          onClick={() => { setShowModal(true) }}
        />
        {showModal && (
          <Modal onModalClick={() => { setShowModal(false) }}>
            <img src={largeImageURL} alt={tags} />
          </Modal>
        )}
      </li>
    );
  }
export default ImageGalleryItem