import React from 'react'
import './FeaturedCat.css'
import { CatObject } from './Interfaces'

type CatProps = {
    catInfo: CatObject | null
  }
  
  const FeaturedCat: React.FC<CatProps>= ({catInfo}) => {
  
    return (
      <>
     {catInfo ? <div className="cat-details">
        <h3>{catInfo.id}</h3>
        <h3>{catInfo.name}</h3>
        <h3>{catInfo.temperament}</h3>
        <h3>{catInfo.id}</h3>
        {catInfo.image && <img className="cat-image" src={catInfo.image.url} alt={catInfo.name}/>}
      </div> : ''
      }
      </>
    )
  }
  


export default FeaturedCat