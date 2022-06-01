import React, { useState, useEffect } from 'react';
import { createStringLiteralFromNode } from 'typescript';
import { CatObject } from './Interfaces'

type CatProps = {
  catInfo: string
}

// We now want to pass just the cat ID to fetch the correct cat. 
// We want to store the cat object in state so that we can render the correct cat. 
//we can not 
const CatDetails: React.FC<CatProps>= ({catInfo}) => {
  const[catId , getCat ] = useState({})
  // useEffect(() => {
  //   fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=beng`)
  //   .then(response => response.json())
  //   .then(cat => {
  //     console.log(cat)
  //     return cat as CatObject
  //   })
  //   .then(data => getCat(data))
  // })
  return (
    <div>
   {/* {catInfo ? <div className="cat-details">
      <h3>{catInfo.id}</h3>
      <h3>{catInfo.name}</h3>
      <h3>{catInfo.temperament}</h3>
      <h3>{catInfo.id}</h3>
      {catInfo.image && <img className="cat-image" src={catInfo.image.url} alt={catInfo.name}/>}
    </div> : ''
    } */}
    </div>
  )
}

export default CatDetails;
