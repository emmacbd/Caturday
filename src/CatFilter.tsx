import React, { useState, useEffect } from 'react';
import { CatObject } from './Interfaces';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';


type CatData = {
    searchCats: (level: number, attribute: string) => CatObject[] | null
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
        searchCats(num, '')
    }

    return (
        <div>
            <label htmlFor="affection">How Affectionate:</label>

            <select name="affection" id="affection">
                <option value="0">Nope</option>
                <option value="1">Lets You Live In Their House</option>
                <option value="2">You Can Pet Me But Your Friends Can't</option>
                <option value="3">Will Accept Pets In Exchange For Food</option>
                <option value="4">Friendly Within Reason</option>
                <option value="5">I Will Never Leave You</option>


            </select>


            <DropdownButton
                title="Dropdown right"
                id="dropdown-menu-align-right"
                onSelect={handleSelect}
            >
                <Dropdown.Item eventKey="1">option-1</Dropdown.Item>
                <Dropdown.Item eventKey="2">option-2</Dropdown.Item>
                <Dropdown.Item eventKey="3">option 3</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="some link">some link</Dropdown.Item>
            </DropdownButton>
        </div>
    )

}



export default CatFilter;
