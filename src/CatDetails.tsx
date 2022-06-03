import React, { useState, useEffect } from 'react';
import { SelectedCat, errorKitten } from './Interfaces';
import './CatDetails.css';

type CatProps = {
  catId: string
}


// We now want to pass just the cat ID to fetch the correct cat.
// We want to store the cat object in state so that we can render the correct cat.
//we can not
const CatDetails: React.FC<CatProps> = ({ catId }) => {
  const [CatInfo, getCat] = useState<SelectedCat[]>([])

  // const getKitten = async (catId:string) => {
  //   const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${catId}`;

  //   try{
  //     const response = await fetch(url)
  //     const kitten = await response.json()
  //     getCat(kitten)
  //   } catch(error) {
  //     console.log(error)
  //   }
  // }
  useEffect(() => {
    fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${catId}`)
      .then(response => response.json())
      // .then(cat => {
      //   return cat as SelectedCat[]
      // })
      .then(data => getCat(data))
  }, [])

  let displayCat = () => {
    if (!CatInfo.length) {
      return <div>Error</div>
    } else {
      return <section className="selected-cat-section">
        <img className="selected-cat-image" src={CatInfo[0].url} />
        <div className="selected-cat-info">
          <p>{CatInfo[0].breeds[0].name}</p>
          <p>{CatInfo[0].breeds[0].temperament}</p>
          <p>{CatInfo[0].breeds[0].life_span}</p>
          <p>{CatInfo[0].breeds[0].description}</p>
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
