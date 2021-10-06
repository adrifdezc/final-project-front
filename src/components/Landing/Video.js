import VideoItem from "./videoLanding.mp4"

import React from 'react'

function Video() {
    return (
      <div>
        <video className="videoTag" style={{width:"100%"}}autoPlay loop muted>
          <source src={VideoItem} type="video/mp4" />
        </video>
      </div>
    );
}

export default Video
