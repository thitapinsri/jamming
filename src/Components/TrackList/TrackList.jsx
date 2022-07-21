import './TrackList.css'
import React from 'react';
import Track from '../Track/Track';

const TrackList = ({tracks, isRemoval, onAdd, onRemove}) => {
  return (
    <div className="TrackList">
      {
        tracks.map(track => {
          return <Track track={track}
                        key={track.id}
                        onAdd={onAdd}
                        onRemove={onRemove}
                        isRemoval={isRemoval}/>
        })
      }
    </div>
  )
}

export default TrackList
