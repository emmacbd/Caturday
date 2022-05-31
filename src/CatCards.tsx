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
      {img ? <img src={img.url} /> : <img src='https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/MT3FG3YVCNDCRDLQTHYNABGDGM.png' />}
      <p>{name}</p>
    </div>
  )
}




export default CatCards;
