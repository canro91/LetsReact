import React from 'react';

import { Grid } from '@material-ui/core';
import { SearchBar, VideoDetails, VideoList } from './components';
import search from './api/youtube';

function App() {
  const [videos, setVideos] = React.useState([]);
  const [selectedVideo, setSelectedVideo] = React.useState(null);

  const handleSubmit = (searchTerm) => {
    search(searchTerm)
      .then(response => {
        const videos = response.data.items;
        setVideos(videos);
        setSelectedVideo(videos[0]);
      });
  };

  const handleVideoSelected = (video) => {
    setSelectedVideo(video);
  };

  return (
    <Grid justify="center" container spacing={10}>
      <Grid item xs={12}>
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <SearchBar handleSubmit={handleSubmit} />
          </Grid>

          <Grid item xs={8}>
            {selectedVideo && <VideoDetails video={selectedVideo} />}
          </Grid>

          <Grid item xs={4}>
            <VideoList videos={videos} onVideoSelected={handleVideoSelected} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
