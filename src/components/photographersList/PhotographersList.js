import React from 'react';
import './PhotographersList.scss';

const PhotographersList = ({ photographersData, photographerClickHandler, userId }) => {

  return (
    <section className="PhotographersList">
      <ul className="PhotographersItemList">
        {photographersData.map(photographer => (
          <li
            key={photographer.id}
            onClick={() => photographerClickHandler(photographer.id)}
            className={
              photographer.id === userId
                ? ["PhotographerItem", "activeItem"].join(' ')
                : "PhotographerItem"
            }
          >
            {photographer.name}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default PhotographersList;