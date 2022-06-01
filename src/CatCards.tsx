import React from 'react';
import {Image} from './Interfaces'

type CatCardProps = {
  id: string,
  img?: Image | null ,
  name: string,
  key: string
}

const CatCards: React.FC<CatCardProps> = ({id, img, name, key}) => {
  return (
    
    <div>
      {img ? <img src={img.url} /> : <img src='https://doitbeforeme.com/wp-content/uploads/2020/03/Cute-cat-drawing-step-by-step-e1584179924326.jpg' />}
      <p>{name}</p>
    </div>
  )
}




export default CatCards;
