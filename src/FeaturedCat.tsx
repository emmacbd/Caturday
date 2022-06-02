import React from 'react'
import './FeaturedCat.css'
import { CatObject } from './Interfaces'

type CatProps = {
    catInfo: CatObject | null
  }

  const FeaturedCat: React.FC<CatProps>= ({catInfo}) => {

    return (
      <>
     {catInfo ? <div className="featured-cat-details">
        <div>
          {catInfo.image && <img className="featured-cat-image" src={catInfo.image.url} alt={catInfo.name}/>}
        </div>
        <div className="featured-cat-info">
          <h3>{catInfo.id}</h3>
          <h3>{catInfo.name}</h3>
          <h3>{catInfo.temperament}</h3>
          <h3>{catInfo.id}</h3>
        </div>
      </div> : ''
      }
      </>
    )
  }



export default FeaturedCat
