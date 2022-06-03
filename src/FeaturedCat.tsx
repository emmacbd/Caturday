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
          <h1 className="most-wanted">MOST WANTED</h1>
          <h2 className="cat-of-the-day">CAT OF THE DAY</h2>
          {catInfo.image && <img className="featured-cat-image" src={catInfo.image.url} alt={catInfo.name}/>}
        </div>
        <div className="featured-cat-info">
          <h3 className="cat-of-the-day-name">{catInfo.name}</h3>
          <h3 className="cat-of-day-temperament">{catInfo.temperament}</h3>
        </div>
      </div> : ''
      }
      </>
    )
  }

export default FeaturedCat
