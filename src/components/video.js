import React from 'react';
import './video.css';

const VideoComponent = () => {
  return (
    <div className="video-container">
      <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
        <iframe
          src="https://player.vimeo.com/video/843827613?badge=0&autopause=0&player_id=0&app_id=58479&loop=1&autoplay=1"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}
          title="Video cafe des bains avec bandes couleurs 2"
        ></iframe>
      </div>
      <script src="https://player.vimeo.com/api/player.js"></script>
    </div>
  );
};

export default VideoComponent;
