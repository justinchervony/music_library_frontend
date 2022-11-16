import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplaySongs from './components/DisplaySongs';
import CreateSong from './components/CreateSong';



function App() {
  const [songs, setSongs] = useState([]);


  useEffect(() => {
    getAllSongs();
  }, []);

  async function getAllSongs(){
    const response = await axios.get('http://127.0.0.1:8000/api/music/');
    console.log(response.data);
    setSongs(response.data);
  }

  function addNewSong(song){
    let tempSongs = [...songs, song];
    setSongs(tempSongs);
  }

  return (
    <div>
      <div className='titleBanner'>
        <br></br>
        <h3>Music Library Database</h3>
      </div>
      <div className='addSongBanner'>
        <CreateSong addNewSongProp={addNewSong} />
      </div>
      <div>
        <DisplaySongs songCollection={songs} />
      </div>
    </div>
  );
}

export default App;
