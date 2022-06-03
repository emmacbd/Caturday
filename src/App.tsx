import React, { Component } from 'react';
import './App.css';
import CatContainer from "./CatContainer";
import CatDetails from "./CatDetails";
import FeaturedCat from './FeaturedCat';
import CatFilter from "./CatFilter";
import { CatObject } from './Interfaces';
import { Route, NavLink } from 'react-router-dom'
import { Navbar } from './NavBar'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-regular-svg-icons";
// import {fetchCats} from "./ApiCalls"



type State = {
  catData: CatObject[],
  filteredCats: CatObject[] | null,
  featuredCat: CatObject | null,
}

class App extends React.Component<{}, State> {
  state: State = {
    catData: [],
    filteredCats: [],
    featuredCat: null,
  }


  getDay = () => {
    let today = new Date()
    let day = today.getDate()
    return day
  }


  componentDidMount() {
    this.fetchCats()
      .then(data => this.setState({ catData: data, featuredCat: data[this.getDay()] }, () => { console.log(this.state) }))
      .catch(error => {
        console.log("Oh no!", error)
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

  searchCats = (level: number, attribute: string) => {
    let selectCats = this.state.catData.filter(cat => {
      console.log(cat.affection_level, level)
      return cat.affection_level == level
    })
    console.log("Search happened", selectCats)
    return selectCats
  }

  render() {
    return (
      <div className="App">
        <header>
          <Navbar />
        </header>
        <main>
          <div className="main">
            <div className="background-events">
              <h1 className="App-title">CATURDAY</h1>
              <FontAwesomeIcon className="speech-bubble" icon={faComment} />
              <h2 className="meowdy">Meowdy, folks!</h2>
            </div>
            <div>
              <Route exact path='/cats' render={() => <CatContainer catData={this.state.catData} searchCats={this.searchCats} />} />
              <Route exact path='/' render={() => <FeaturedCat catInfo={this.state.featuredCat} />} />
              <Route exact path='/cats/:id' render={({ match }) => {
                return <CatDetails catId={match.params.id} />
              }} />
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default App;
