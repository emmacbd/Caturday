import React from 'react';
import {Image} from './Interfaces';
import './CatCards.css';

type CatCardProps = {
  id: string,
  img?: Image | null ,
  name: string,
  key: string
}

const CatCards: React.FC<CatCardProps> = ({id, img, name, key}) => {
  return (

    <div className="card">
      {img ? <img className="cat-image" src={img.url} /> : <img className="cat-image" src='https://doitbeforeme.com/wp-content/uploads/2020/03/Cute-cat-drawing-step-by-step-e1584179924326.jpg' />}
      <p>{name}</p>
    </div>
  )
}




export default CatCards;
