import React from 'react'
import HlsPlayer from 'react-hls-player';

const Player = ({url})=> {
  return (
    <div>
       <HlsPlayer
      src={url}
      autoPlay={true}
      controls={true}
      width="75%"
      height="40%"
      preload='auto'
    />
    </div>
  )
}

export default Player
