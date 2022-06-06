import React from 'react';
import {Image} from './Interfaces';
import './CatCards.css';

type CatCardProps = {
  img?: Image | null ,
  name: string,
  // key: string
}

const CatCards: React.FC<CatCardProps> = ({img, name}) => {
  return (

    <div className="card">
      <h1 className="wanted-poster-card">WANTED</h1>
      {img ? <img className="cat-image" src={img.url} /> : <img className="cat-image" src='https://doitbeforeme.com/wp-content/uploads/2020/03/Cute-cat-drawing-step-by-step-e1584179924326.jpg' />}
      <p className="wanted-poster-name">{name}</p>
    </div>
  )
}




export default CatCards;
