import React from 'react';
import CatCards from './CatCards';
import { CatObject } from './Interfaces';
import { NavLink } from 'react-router-dom';
import './CatContainer.css';

type CatData = {
  catData: CatObject[]
}

const CatContainer: React.FC<CatData> = ({catData}) => {

  const catTiles = catData.map(cat => {
    return (
      <NavLink className="cat-tiles-nav" to={`/cats/${cat.id}`}>
        <CatCards
        id={cat.id}
        img={cat.image}
        name={cat.name}
        key={cat.id}
        />
      </NavLink>
    )
  })
  return (
    <div className='cat-container'>
      {catTiles}
    </div>
  )

}



export default CatContainer;
