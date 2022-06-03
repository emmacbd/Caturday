import React, { useState, useEffect } from 'react';
import { CatObject } from './Interfaces';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';


type CatData = {
    searchCats: (level: number) => void
}

const CatFilter: React.FC<CatData> = ({ searchCats }) => {
    //drop down
    //five characteristics - affection, shedding, energy, intelligence
    //each have drop have levels 0-5 - icons?
    //filter pop up tag with x/delete button 
    //p tag array "you are filtering by x, y z"
    //
    //filter cat
    const handleSelect = (e: any) => {
        console.log(e)
        let num = parseInt(e)
        searchCats(num)
    }

    return (
        <div>
            <DropdownButton
                title="Filter By Affection Level"
                id="dropdown-menu-align-right"
                onSelect={handleSelect}
            >
                <Dropdown.Item eventKey="7">All Cats</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="0">Nope</Dropdown.Item>
                <Dropdown.Item eventKey="1">Lets You Live In Their House</Dropdown.Item>
                <Dropdown.Item eventKey="2">You Can Pet Me But Your Friends Can't</Dropdown.Item>
                <Dropdown.Item eventKey="3">Will Accept Pets In Exchange For Food</Dropdown.Item>
                <Dropdown.Item eventKey="4">Friendly Within Reason</Dropdown.Item>
                <Dropdown.Item eventKey="5">I Will Never Leave You</Dropdown.Item>
                
            </DropdownButton>
        </div>
    )

}



export default CatFilter;
