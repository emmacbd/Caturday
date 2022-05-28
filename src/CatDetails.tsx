import React from 'react';
import CatObject from './App';

// export type cat = {
//   catInfo:CatObject
// }

export const CatDetails = ( {cat} ) => {
  return (
    <h3>{cat.catInfo}</h3>
  )
}
