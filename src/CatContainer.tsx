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

  const catTiles = catData.map((cat) => {
    return (
      <NavLink className="cat-tiles-nav" key={cat.id} to={`/cats/${cat.id}`}>
        <CatCards
          img={cat.image}
          name={cat.name}
        />
      </NavLink>
    )
  })

  let error =

    <div className="card error-tile" key="error-cat">
      <h1 className="wanted-poster-card">{errorCat.name}</h1>
      {errorCat.image ? <img className="error-cat-image" src={errorCat.image.url} /> : ''}
      <p className="wanted-poster-name">{errorCat.description}</p>
    </div>

  return (
    <div className="cat-wrapper">
      < CatFilter searchCats={searchCats} />
      <div className='cat-container'>
        {catData.length ? catTiles : error}
      </div>
    </div>
  )

}



export default CatContainer;
