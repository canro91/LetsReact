import React from 'react';

import { Grid } from '@material-ui/core';
import { SearchBar, VideoDetails, VideoList } from './components';
import search from './api/youtube';

function App() {
  const [videos, setVideos] = React.useState([]);
  const [selectedVideo, setSelectedVideo] = React.useState(null);

  const handleSubmit = (searchTerm) => {
    console.log(searchTerm);

    search(searchTerm)
      .then(response => {
        const videos = response.data.items;
        setVideos(videos);
        setSelectedVideo(videos[0]);
      });
  }

  return (
    <Grid justify="center" container spacing={10}>
      <Grid item xs={12}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar handleSubmit={handleSubmit} />
          </Grid>

          <Grid item xs={8}>
            <VideoDetails />
          </Grid>

          <Grid item xs={4}>
            <VideoList />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
