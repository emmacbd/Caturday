import React, { Component } from 'react';
import './App.css';
import CatContainer from "./CatContainer";
import {fetchCats} from "./ApiCalls"


interface MyState = {
  catData: {}[];
}

class App extends Component<CatData> {
    constructor(){
      super();
      state: MyState = {
         catData: [],
      }
    }

componentDidMount() {

}

  return (
    <div className="App">
      <main>
        <h1> CATURDAY </h1>
        <CatContainer />
      </main>
    </div>
  );
}

export default App;
