import React from 'react'
import React from 'react'
import './FeaturedCat.css'
import { CatObject } from './Interfaces'

type CatProps = {
    catData: CatObject[]
}

type CatState ={
    catOfDay: CatObject | null,
}

class FeaturedCat extends React.Component<CatProps, CatState> {
    state: CatState = {
        catOfDay: null,
  
    }
    
    getDay = () => {
        let today = new Date()
        let day = today.getDate()
        return day
    }
    

    componentDidMount() {
        this.setState({catOfDay: this.props.catData[this.getDay()]})
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