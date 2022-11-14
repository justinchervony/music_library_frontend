function DisplaySongs(props){
    let tempArray = props.songCollection
    return (
        <body>
            {tempArray.map((song, index) => {
                return (
                    <div>
                        <p>{song.title}</p>
                        <p>{song.artist}</p>
                        <p>{song.genre}</p>
                        <p>{song.release_date}</p>
                    </div>
                );
            })}
        </body>
    );
}

export default DisplaySongs;