import './Playlist.css'
import TrackList from '../TrackList/TrackList';



const Playlist = ({ playlistTracks, onNameChange, onRemove, onSave}) => {
  const handleNameChange = event => {
    onNameChange(event.target.value)
  }

  return (
    <div className="Playlist">
      <input defaultValue={"New Playlist"}
             onChange={handleNameChange}/>
      <TrackList tracks={playlistTracks}
                 onRemove={onRemove}
                 isRemoval={true}/>
      <button className="Playlist-save"
              onClick={onSave}>SAVE TO SPOTIFY</button>
    </div>
  );
}

export default Playlist
