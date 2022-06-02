import React, { Component } from 'react';
import './App.css';
import CatContainer from "./CatContainer";
import CatDetails from "./CatDetails";
import FeaturedCat from './FeaturedCat';
import { CatObject } from './Interfaces';
import { Route, NavLink } from 'react-router-dom'
import { Navbar } from './NavBar'
// import {fetchCats} from "./ApiCalls"



type State = {
  catData: CatObject[],
  featuredCat: CatObject | null,
}

class App extends React.Component< {}, State> {
      state: State = {
         catData:[],
         featuredCat: null,
      }

 
  getDay = () => {
    let today = new Date()
    let day = today.getDate()
    return day
  }
    

componentDidMount() {
  this.fetchCats()
  .then(data => this.setState({ catData: data, featuredCat: data[this.getDay()] }, () => {console.log(this.state)}))
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
         <Navbar />
        <Route exact path='/cats' render={ () => <CatContainer catData={this.state.catData}/> } />
       <Route exact path='/' render={() =>  <FeaturedCat catInfo={this.state.featuredCat}/> } />
        <Route exact path ='/cats/:id' render={ ({ match }) => {
          return <CatDetails catId={ match.params.id }  />
        } } />
           
        
      </main>
    </div>
  )
 }
}

export default App;
