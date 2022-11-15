import { useState } from "react"



const CreateSong = (props) => {
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [genre, setGenre] = useState('');
    const [release_date, setReleaseDate] = useState('');

    function handleCreate(event){
        event.preventDefault();
        let newSong = {
            title: title,
            artist: artist,
            album: album,
            genre: genre,
            release_date, release_date,
        };
        console.log(newSong);
        props.addNewSongProp(newSong)
    }

    return (
        <form onSubmit={handleCreate}>
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