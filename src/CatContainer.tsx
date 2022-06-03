import React from 'react';
import CatCards from './CatCards';
import CatFilter from './CatFilter';
import { CatObject } from './Interfaces';
import { NavLink } from 'react-router-dom';
import './CatContainer.css';

type CatData = {
  catData: CatObject[],
  searchCats: (level: number) => void
}

const CatContainer: React.FC<CatData> = ({ catData, searchCats }) => {

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
  
  let error = <p>no catz here</p>
  return (
    <div className='cat-container'>
      < CatFilter searchCats={searchCats} />
      {catData.length ? catTiles : error}
    </div>
  )

}



export default CatContainer;
