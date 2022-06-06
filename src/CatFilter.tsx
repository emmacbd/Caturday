import React from 'react';


type CatData = {
    searchCats: (level: number) => void
}

const CatFilter: React.FC<CatData> = ({ searchCats }) => {
    const handleSelect = (e: any) => {
        let num = parseInt(e.target.value)
        searchCats(num)
    }

    return (
        <div className="cat-filter-section">
            <select
                title="Filter By Affection Level"
                className="affection-level-dropdown"
                onChange={handleSelect}
            >
                <option value="7">All Cats</option>
                <option value="2">You Can Pet Me But Your Friends Can't</option>
                <option value="3">Will Accept Pets In Exchange For Food</option>
                <option value="4">Friendly Within Reason</option>
                <option value="5">I Will Never Leave You</option>

            </select>
        </div>
    )
}

export default CatFilter;
