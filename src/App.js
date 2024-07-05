import React, { useState } from 'react';
import './App.css';
import ChannelList from './Components/ChannelList';
import Player from './Components/Player';

function App() {
  const [currentUrl, setCurrentUrl] = useState('');

  const handlePlay = (url) => {
    setCurrentUrl(url);
  };
  return (
    <div className="App">
      <div className="navBar">
        <p>Hello</p>
      </div>
      <div className="player">
       <Player url={currentUrl} />
      </div>
     <div>
     <ChannelList onPlay={handlePlay}/>
     </div>
    </div>
  );
}

export default App;
