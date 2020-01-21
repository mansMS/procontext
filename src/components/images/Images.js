import React, { useState } from 'react';
import SelectedImage from './selectedImage';
import './Images.scss';

const Images = ({ imagesData }) => {

  const [selectedImageURL, setSelectedImageURL] = useState('');
  const [selectedImageId, setSelectedImageId] = useState('');

  console.log(selectedImageURL)

  return (
    <section className="Images">
      {selectedImageURL && <SelectedImage imageURL={selectedImageURL} />}
      <div className="ImagesList">
        {imagesData.map(image => (
          <div key={image.id} className="ItemBlock">
            <div className={image.id === selectedImageId && "SelectedImg"}>
              <img
                src={image.thumbnailUrl}
                alt="thumbnailImage"
                className="ImageItem"
                onClick={() => { setSelectedImageURL(image.url); setSelectedImageId(image.id) }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Images;