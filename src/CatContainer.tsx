import React from 'react';
import CatCards from './CatCards';
import CatFilter from './CatFilter';
import { CatObject } from './Interfaces';
import { NavLink } from 'react-router-dom';
import './CatContainer.css';

type CatData = {
  catData: CatObject[]
  searchCats: (level: number, attribute: string) => CatObject[] | null
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
  return (
    <div className='cat-container'>
      < CatFilter searchCats={searchCats} />
      {catTiles}
    </div>
  )

}



export default CatContainer;
