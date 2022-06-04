import React from 'react';
import CatCards from './CatCards';
import CatFilter from './CatFilter';
import { CatObject, errorCat } from './Interfaces';
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

  let error =
    <div>
      <p>{errorCat.name}</p>
      {errorCat.image ? <img src={errorCat.image.url} /> : ''}
      <p>{errorCat.description}</p>
    </div>

  return (
    <div>
      < CatFilter searchCats={searchCats} />
      <div className='cat-container'>
        {catData.length ? catTiles : error}
      </div>
    </div>
  )

}



export default CatContainer;
