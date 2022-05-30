import React from 'react';
import { createStringLiteralFromNode } from 'typescript';
import { CatObject } from './Interfaces'

type CatProps = {
  catInfo: CatObject | null
}

const CatDetails: React.FC<CatProps>= ({catInfo}) => {

  return (
    <>
   {catInfo ? <div className="cat-details">
      <h3>{catInfo.id}</h3>
      <h3>{catInfo.name}</h3>
      <h3>{catInfo.temperament}</h3>
      <h3>{catInfo.id}</h3>
      <img className="cat-image" src={catInfo.image.url} alt={catInfo.name}/>
    </div> : ''
    }
    </>
  )
}

export default CatDetails;
