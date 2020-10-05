import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';

const VideoItem = ({ video, onVideoSelected }) => {
    return (
        <Grid item xs>
            <Paper
                style={{ display: "flex", alignItems: "center", alignContent: "center", cursor: "pointer" }}
                onClick={() => onVideoSelected(video)}
            >
                <img style={{ marginRight: '20px' }} alt={video.snippet.description} src={video.snippet.thumbnails.medium.url} />
                <Typography variant="subtitle1">{video.snippet.title}</Typography>
            </Paper>
        </Grid>
    );
}

export default VideoItem;