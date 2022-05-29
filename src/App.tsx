import React, { Component } from 'react';
import './App.css';
import CatContainer from "./CatContainer";
import CatDetails from "./CatDetails";
import { CatObject, Weight, Image } from './Interfaces'
// import {cat} from "./CatDetails";
// import {fetchCats} from "./ApiCalls"

// -------------- -------------- //


// type CatProps = {
//   catInfo: CatObject
// }


type State = {
  catData: CatObject[],
  featuredCat: CatObject,
}
// let sampleCatWeight: Weight = {
//   imperial: "7 - 10",
//   metric: "3 - 5"
// }

// let sampleCatImage: Image = {
//   id: "0XYvRd7oD",
//   width: 1204,
//   height: 1445,
//   url: "https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg"
// }

let sampleCat: CatObject = {
  weight: { 
    imperial: "7 - 10",
    metric: "3 - 5"
  },
  id: "abys",
  name: "Abyssinian",
  cfa_url: "http://cfa.org/Breeds/BreedsAB/Abyssinian.aspx",
  vetstreet_url: "http://www.vetstreet.com/cats/abyssinian",
  vcahospitals_url: "https://vcahospitals.com/know-your-pet/cat-breeds/abyssinian",
  temperament: "Active, Energetic, Independent, Intelligent, Gentle",
  origin: "Egypt",
  country_codes: "EG",
  country_code: "EG",
  description: "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
  life_span: "14 - 15",
  indoor: 0,
  lap: 1,
  alt_names: "",
  adaptability: 5,
  affection_level: 5,
  child_friendly: 3,
  dog_friendly: 4,
  energy_level: 5,
  grooming: 1,
  health_issues: 2,
  intelligence: 5,
  shedding_level: 2,
  social_needs: 5,
  stranger_friendly: 5,
  vocalisation: 1,
  experimental: 0,
  hairless: 0,
  natural: 1,
  rare: 0,
  rex: 0,
  suppressed_tail: 0,
  short_legs: 0,
  wikipedia_url: "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
  hypoallergenic: 0,
  reference_image_id: "0XYvRd7oD",
  image: {
    id: "0XYvRd7oD",
    width: 1204,
    height: 1445,
    url: "https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg"
  },
}



class App extends React.Component< {}, State> {
      state: State = {
         catData:[],
         featuredCat: sampleCat
      }

// componentDidMount() {
//   this.fetchCats()
//   .then(data => this.setState({ catData: data, featuredCat: data[0] }, () => {console.log(this.state)}))
//   .catch(error => {console.log("Oh no!", error)
//     });
//   }

//   fetchCats = (): Promise<CatObject[]> => {
//     return fetch('https://api.thecatapi.com/v1/breeds')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network request was unsuccessful')
//         }
//         return response.json();
//       })
//       .then(data => {
//         return data as CatObject[]
//       })
//   }

render() {
  return (
    <div className="App">
      <main>
        <h1> CATURDAY </h1>
        <CatDetails catInfo={sampleCat}/>
        <CatContainer />
      </main>
    </div>
  )
 }
}

export default App;
