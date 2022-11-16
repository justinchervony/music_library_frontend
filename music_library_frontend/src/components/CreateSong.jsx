import { useState } from "react"
import axios from "axios";



const CreateSong = (props) => {
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [genre, setGenre] = useState('');
    const [release_date, setReleaseDate] = useState('');


    async function createSong(event){
        const inputSong = await axios.post('http://127.0.0.1:8000/api/music/', {
            title: title,
            artist: artist,
            album: album,
            genre: genre,
            release_date, release_date,
        });
      }

    return (
        <form onSubmit={createSong}>
            <input type={"text"} value={title} onChange={(event) => setTitle(event.target.value)} />
            <input type={"text"} value={artist} onChange={(event) => setArtist(event.target.value)} />
            <input type={"text"} value={album} onChange={(event) => setAlbum(event.target.value)} />
            <input type={"text"} value={genre} onChange={(event) => setGenre(event.target.value)} />
            <input type={"date"} value={release_date} onChange={(event) => setReleaseDate(event.target.value)} />
            <button type='submit' className="submitButton">Create</button>
        </form>
    );
}

export default CreateSong;