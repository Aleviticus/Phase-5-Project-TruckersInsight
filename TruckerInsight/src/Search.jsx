import React from 'react'

function Search({onSeacrh}) {
    return (
        <div className='seacrhbar'>
            <label htmlFor='search'>Search Trucker</label>
            <input
                text='text'
                id='search'
                placeholder='Type a name, trailer, years of experience...'
                onChange={(e) => onSeacrh(e.target.value)}
            ></input>
        </div>
    )
}

export default Search