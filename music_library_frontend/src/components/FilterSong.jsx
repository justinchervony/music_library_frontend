import React, { useState } from 'react';


const FilterSong = (props) => {
    const [userInput, setUserInput] = useState('');
    const [userCategorySelect, setUserCategorySelect] = useState('');

    function handleSearch(event){
        event.preventDefault();
        console.log([userInput, userCategorySelect]);
        props.songSearchProp([userInput, userCategorySelect]);
    }


    return (
        <form onSubmit={props.songsRestProp}>
            <label><strong>Song Filtering </strong></label>
            <input type={"text"} value={userInput} placeholder="Filter songs by..." onChange={(event) => setUserInput(event.target.value)} />
            <select value={userCategorySelect}  onChange={(event) => setUserCategorySelect(event.target.value)}>
                <option value=' '>Select</option>
                <option value='title'>Title</option>
                <option value='artist'>Artist</option>
                <option value='album'>Album</option>
                <option value='genre'>Genre</option>
            </select>
            <button type='button' onClick={(event) => handleSearch(event)}>Search</button>
            <button type='submit'>Reset</button>
        </form>
    )
}

export default FilterSong;