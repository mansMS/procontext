import React from 'react';
import './ImageList.scss';

const ImageList = ({ imagesData }) => {
  console.log(imagesData)

  return (
    <section className="ImageList">
      {imagesData.map(image => (
        <img key={image.id} src={image.thumbnailUrl} alt="thumbnailImage" />
      ))}
    </section>
  );
}

export default ImageList;