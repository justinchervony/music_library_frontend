function DisplaySongs(props){
    let tempArray = props.songCollection
    return (
        <body>
            {tempArray.map((song, index) => {
                return (
                    <div>
                        <ul>{song.title}</ul>
                        <ul>{song.artist}</ul>
                        <ul>{song.album}</ul>
                        <ul>{song.genre}</ul>
                        <ul>{song.release_date}</ul>
                    </div>
                );
            })}
        </body>
    );
}

export default DisplaySongs;