import React from 'react';

const App = () => {
  return (
    <div style={{ margin: '20px' }}>
      <h2>Basic HTML5 Video Player</h2>

      <video
        src="https://ik.imagekit.io/roadsidecoder/yt/example.mp4"
        width="800"
        height="450"
        controls
        poster="https://wallpapers.com/images/featured/youtube-thumbnail-hbdvjnvk0u0butf6.jpg"
      >
        <track
          kind="subtitles"
          src="/english.vtt"
          srcLang="en"
          label="English"
          default
        />
        <track
          kind="subtitles"
          src="/hindi.vtt"
          srcLang="hi"
          label="हिंदी"
        />
        <track
          kind="chapters"
          src="/chapters.vtt"
          srcLang="en"
          label="Chapters"
          default
        />
        {/* 
        <track
          kind="captions"
          src="/english.vtt"
          srcLang="en"
          label="English"
          default
        />
        <track
          kind="captions"
          src="/hindi.vtt"
          srcLang="hi"
          label="Hindi"
          default
        />
        */}
      </video>
     
    </div>
  );
};

export default App;
