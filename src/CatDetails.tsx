import React, { useState, useEffect } from 'react';
import { SelectedCat, SelectedCatBreedInfo } from './Interfaces';
import './CatDetails.css';

type CatProps = {
  catId: string
}

const CatDetails: React.FC<CatProps> = ({ catId }) => {
  const [CatInfo, setCat] = useState<SelectedCatBreedInfo>()
  const [CatImage, setImage] = useState<SelectedCat[]>([])

  useEffect(() => {
    fetch(`https://api.thecatapi.com/v1/breeds/search?q=${catId}`)
      .then(response => response.json())
      
      .then(data => setCat(data[0]))
  }, [])

   useEffect(() => {
    fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${catId}`)
      .then(response => response.json())
      
      .then(data => setImage(data))
  }, [])


  let displayCat = () => {
    if (!CatInfo) {
      return <div>Error</div>
    } else {
      return <section className="selected-cat-section">

        <img className="selected-cat-image" src={CatImage[0].url} />
        <div className="selected-cat-info">
          <h2 className="selected-cat-name">{CatInfo.name}</h2>
          <div className="selected-cat-other">
            <p>{CatInfo.temperament}</p>
            <p>Average Life Span : {CatInfo.life_span} years</p>
            <p>{CatInfo.description}</p>
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
