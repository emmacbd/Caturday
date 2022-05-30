import React, { Component } from 'react';
import './App.css';
import CatContainer from "./CatContainer";
import CatDetails from "./CatDetails";
import FeaturedCat from './FeaturedCat';
import { CatObject } from './Interfaces'
// import {cat} from "./CatDetails";
// import {fetchCats} from "./ApiCalls"

// -------------- -------------- //


// type CatProps = {
//   catInfo: CatObject
// }


type State = {
  catData: CatObject[],
  featuredCat: CatObject | null,
}

class App extends React.Component< {}, State> {
      state: State = {
         catData:[],
         featuredCat: null,
      }


componentDidMount() {
  this.fetchCats()
  .then(data => this.setState({ catData: data, featuredCat: data[0] }, () => {console.log(this.state)}))
  .catch(error => {console.log("Oh no!", error)
    });
  }

  fetchCats = (): Promise<CatObject[]> => {
    return fetch('https://api.thecatapi.com/v1/breeds')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network request was unsuccessful')
        }
        return response.json();
      })
      .then(data => {
        return data as CatObject[]
      })
  }

render() {
  return (
    <div className="App">
      <main>
        <h1> CATURDAY </h1>
        {this.state.featuredCat && <CatDetails catInfo={this.state.featuredCat}/>}
        <CatContainer />
        <FeaturedCat catData={this.state.catData}/>
      </main>
    </div>
  )
 }
}

export default App;
