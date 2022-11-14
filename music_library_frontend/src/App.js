import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplaySongs from './components/DisplaySongs';



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

  return (
    <div>
      <div>
        <button onClick={() => getAllSongs()}>Get All Songs</button>
      </div>
      <div>
        <DisplaySongs songCollection={songs} />
      </div>
    </div>
  );
}

export default App;
