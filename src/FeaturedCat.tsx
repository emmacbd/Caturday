import React from 'react'
import './FeaturedCat.css'
import { CatObject } from './Interfaces'

type CatProps = {
    catData: CatObject[]
}

type CatState ={
    catOfDay: CatObject | null,
    catIndexNum: any,
    date: string,
}

class FeaturedCat extends React.Component<CatProps, CatState> {
    state: CatState = {
        catOfDay: null,
        catIndexNum: 40,
        date: "30",
    }

    storeCounter = () => {
        localStorage.setItem('Counter:', this.state.catIndexNum);
      };

    componentDidMount() {
        this.storeCounter()
        const data = localStorage.getItem('Counter:');
        if(data){ this.setState({ catIndexNum: data }, () => { console.log('data on line 29', data)})
        }
        //get the current date (day of month #) let today = new Date() console.log(today)
        // set yesterday's date today-1 
        // then if today is greater than yesterday then add one to the cat index number 
        //var today = new Date()
        // console.log(today.getHours())
        //we need a conditional for the catIndexNum to reset to 0 once it gets to 66/tries to go to 67 
        //then set catOfDay to catData at index: catIndexNum
    }

    render () {
        return(
           <>
            <button> click me</button>
           </> 
        )
    }
}

export default FeaturedCat

// let randomIndex = 
// It will take index 0 and push into a new featured cat array display and then after cat has been featured the next cat gets pushed into featured cats into an array everyday
//maybe need a class component of the featured cat: APP -> FeaturedCat would be a class component that has date state 

// can have the a reference number that has a counting mechanism that goes 0-66 to reference indexes of 67 cats in array 
//our catIndexNum needs to increase by one everyday 
  ///do we need today's date and yesterday's date 
  // store that today is the 30th 
  //tomorrow check that is 30 === to tomorrow's date 
  // if index # === 68 change it to 0 
