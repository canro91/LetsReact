import React from 'react';
import VideoItem from './VideoItem';
import { Grid } from '@material-ui/core';

const VideoList = ({ videos, onVideoSelected }) => {
    const videoItems = videos.map((video, id) =>
        <VideoItem key={id} video={video} onVideoSelected={onVideoSelected} />);

    return (
        <Grid container spacing={4}>
            {videoItems}
        </Grid>
    );
}

export default VideoList;