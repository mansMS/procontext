import React from 'react';
import './PhotographersList.scss';

const PhotographersList = ({ photographersData, photographerClickHandler }) => {

  return (
    <section className="PhotographersList">
      <ul className="PhotographersItemList">
        {photographersData.map(photographer => (
          <li
            key={photographer.id}
            onClick={() => photographerClickHandler(photographer.id)}
            className="PhotographerItem"
          >
            {photographer.name}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default PhotographersList;