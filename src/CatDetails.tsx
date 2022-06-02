import { setDefaultResultOrder } from 'dns';
import React, { useState, useEffect } from 'react';
import { SelectedCat, errorKitten } from './Interfaces'

type CatProps = {
  catId: string
}


// We now want to pass just the cat ID to fetch the correct cat. 
// We want to store the cat object in state so that we can render the correct cat. 
//we can not 
const CatDetails: React.FC<CatProps>= ({catId}) => {
  const[CatInfo , getCat ] = useState<SelectedCat[]>([])
  
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
    if(!CatInfo.length){
      return<div>Error</div>
    } else {
      return <p>{CatInfo[0].breeds[0].name}</p>
    }
  }

  return (
    
    
    <div>
    {displayCat()}
    </div>
  )
}

export default CatDetails;
