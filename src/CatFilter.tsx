import React, { useState, useEffect } from 'react';
import { CatObject } from './Interfaces';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';


type CatData = {
    searchCats: (level: number) => void
}

const CatFilter: React.FC<CatData> = ({ searchCats }) => {
    const handleSelect = (e: any) => {
        console.log(e.target.value)
        let num = parseInt(e.target.value)
        searchCats(num)
    }

    return (
        <div>
            <select
                title="Filter By Affection Level"
                id="dropdown-menu-align-right"
                onChange={handleSelect}
            >
                <option value="7">All Cats</option>
                <option value="0">Nope</option>
                <option value="1">Lets You Live In Their House</option>
                <option value="2">You Can Pet Me But Your Friends Can't</option>
                <option value="3">Will Accept Pets In Exchange For Food</option>
                <option value="4">Friendly Within Reason</option>
                <option value="5">I Will Never Leave You</option>

            </select>
        </div>
    )
}

export default CatFilter;
