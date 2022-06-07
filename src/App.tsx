import React from 'react';
import './App.css';
import CatContainer from "./CatContainer";
import CatDetails from "./CatDetails";
import FeaturedCat from './FeaturedCat';
import { CatObject, errorCat } from './Interfaces';
import { Route } from 'react-router-dom'
import { Navbar } from './NavBar'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-regular-svg-icons";


type State = {
  catData: CatObject[],
  filteredCats: CatObject[],
  featuredCat: CatObject,
}

class App extends React.Component<{}, State> {
  state: State = {
    catData: [errorCat],
    filteredCats: [errorCat],
    featuredCat: errorCat,
  }


  getDay = () => {
    let today = new Date()
    let day = today.getDate()
    return day
  }


  componentDidMount() {
    this.fetchCats()
      .then(data => this.setState({ catData: data, filteredCats: data, featuredCat: data[this.getDay()] }))
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

  searchCats = (level: number) => {
    if (level === 7) {
      this.setState({ filteredCats: this.state.catData })
    } else {
      let selectCats = this.state.catData.filter(cat => {
        return cat.affection_level == level
      })
      this.setState({ filteredCats: selectCats })
    }
  }

  render() {
    return (
      <div className="App">
        <header>
          <Navbar />
        </header>
        <main className="main">
          <div className="background-events">
            <FontAwesomeIcon className="speech-bubble" icon={faComment} />
            <h1 className="App-title">CATURDAY</h1>
            <h2 className="meowdy">Meowdy, folks!</h2>
          </div>
          <div className="cat-display">
            <Route exact path='/cats' render={() => <CatContainer catData={this.state.filteredCats} searchCats={this.searchCats} />} />
            <Route exact path='/' render={() => <FeaturedCat catInfo={this.state.featuredCat} />} />
            <Route exact path='/cats/:id' render={({ match }) => {
              return <CatDetails catId={match.params.id} />
            }} />
          </div>
        </main>
      </div>
    )
  }
}

export default App;
