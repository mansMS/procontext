import React from 'react';
import './ImageList.scss';

const ImageList = ({ imagesData }) => {

  return (
    <section className="ImageList">
      {imagesData.map(image => (
        <div key={image.id} className="ItemBlock">
          <img src={image.thumbnailUrl} alt="thumbnailImage" className="ImageItem" />
        </div>
      ))}
    </section>
  );
}

export default ImageList;