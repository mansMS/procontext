import React from 'react';
import './SelectedImage.scss'

const SelectedImage = ({ imageURL }) => {

  console.log(imageURL)
  return (
    <div className="SelectedImage">
      <img src={imageURL} />
    </div>
  )
}

export default SelectedImage