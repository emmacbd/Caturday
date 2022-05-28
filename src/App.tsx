import React, { Component } from 'react';
import './App.css';
import CatContainer from "./CatContainer";
import {fetchCats} from "./ApiCalls"



interface CatObject {
  weight: {
    imperial: string,
    metric: string
  },
  id: string,
  name: string,
  cfa_url: string,
  vetstreet_url: string,
  vcahospitals_url: string,
  temperament: string,
  origin: string,
  country_codes: string,
  country_code: string,
  description: string,
  life_span: string,
  indoor: number,
  lap: number,
  alt_names: string,
  adaptability: number,
  affection_level: number,
  child_friendly: number,
  dog_friendly: number,
  energy_level: number,
  grooming: number,
  health_issues: number,
  intelligence: number,
  shedding_level: number,
  social_needs: number,
  stranger_friendly: number,
  vocalisation: number,
  experimental: number,
  hairless: number,
  natural: number,
  rare: number,
  rex: number,
  suppressed_tail: number,
  short_legs: number,
  wikipedia_url: string,
  hypoallergenic: number,
  reference_image_id: string,
  image: {
    id: string,
    width: number,
    height: number,
    url: string
  }
}

type MyState = {
  catData: CatObject[]
}

class App extends Component< {}, MyState> {
      state: MyState = {
         catData:[]
      }

componentDidMount() {
  fetchCats()
  .then(data => this.setState({catData: data}, () => {console.log(this.state)
          }))
  .catch(error => {console.log("Oh no!", error)
    });
  }



render() {
  return (
    <div className="App">
      <main>
        <h1> CATURDAY </h1>
        <CatContainer />
      </main>
    </div>
  )
 }
}

export default App;
