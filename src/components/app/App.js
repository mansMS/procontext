import React from 'react';
import PhotographersContainer from '../../containers/PhotographersContainer';
import AlbumsContainer from '../../containers/AlbumsContainer';
import ImagesContainer from '../../containers/ImagesContainer';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <PhotographersContainer />
      <AlbumsContainer />
      <ImagesContainer />
    </div>
  )
}

export default App;