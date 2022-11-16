import React, { useState } from 'react';


const FilterSong = (props) => {
    const [userInput, setUserInput] = useState('');

    function handleSearch(event){
        event.preventDefault();
        console.log(userInput);
        props.songSearchProp(userInput);
    }


    return (
        <form onSubmit={handleSearch}>
            <input type={"text"} value={userInput} onChange={(event) => setUserInput(event.target.value)} />
            <button type='submit'>Search</button>
        </form>
    )
}

export default FilterSong;