import React from 'react';
import CatCards from './CatCards';
import { CatObject } from './Interfaces';

type CatData = {
  catData: CatObject[] 
}

const CatContainer: React.FC<CatData> = ({catData}) => {

  const catTiles = catData.map(cat => {
    return (
      <CatCards
      id={cat.id}
      img={cat.image}
      name={cat.name}
      key={cat.id}
      />
    )
  })
  return (
    <div className='cat-container'>
      {catTiles}
    </div>
  )

}



export default CatContainer;
