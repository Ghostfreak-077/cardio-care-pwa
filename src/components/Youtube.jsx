import React from 'react'
import YouTube from 'react-youtube';

const Youtube = () => {

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

    //   _onReady(event) {
    //     // access to player in all event handlers via event.target
    //     event.target.pauseVideo();
    //   }

  return (
    <div>
      <YouTube videoId="Q4hPt-bAsCM" opts={opts} onReady={(e)=>{e.target.pauseVideo()}} />
    </div>
  )
}

export default Youtube
