import React from 'react';
import './AlbumsList.scss';

const AlbumsList = ({ albumsData, albumClickHandler, albumId }) => {

  return (
    <section className="AlbumsList">
      <ul className="AlbumsItemList">
        {albumsData.map(album => (
          <li
            key={album.id}
            onClick={() => albumClickHandler(album.id)}
            className={
              album.id === albumId
                ? ["AlbumItem", "activeItem"].join(' ')
                : "AlbumItem"
            }
          >
            {album.title}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default AlbumsList;