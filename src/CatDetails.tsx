import React, { useState, useEffect } from 'react';
import { SelectedCat } from './Interfaces';
import './CatDetails.css';

type CatProps = {
  catId: string
}

const CatDetails: React.FC<CatProps> = ({ catId }) => {
  const [CatInfo, setCat] = useState<SelectedCat[]>([])

  useEffect(() => {
    fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${catId}`)
      .then(response => response.json())
      .then(data => setCat(data))
  }, [])

  let displayCat = () => {
    if (!CatInfo.length) {
      return <div>Error</div>
    } else {
      return <section className="selected-cat-section">

        <img className="selected-cat-image" src={CatInfo[0].url} />
        <div className="selected-cat-info">
          <h2 className="selected-cat-name">{CatInfo[0].breeds[0].name}</h2>
          <div className="selected-cat-other">
            <p>{CatInfo[0].breeds[0].temperament}</p>
            <p>Average Life Span : {CatInfo[0].breeds[0].life_span} years</p>
            <p>{CatInfo[0].breeds[0].description}</p>
          </div>
        </div>
      </section>

    }
  }

  return (
    <div>
      {displayCat()}
    </div>
  )
}

export default CatDetails;
