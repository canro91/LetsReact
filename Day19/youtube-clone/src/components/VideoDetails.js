import React, { Fragment } from 'react';
import { Paper, Typography } from '@material-ui/core';

const VideoDetails = ({ video }) => {
    const url = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <Fragment>
            <Paper elevation={6} style={{ height: '70%' }}>
                <iframe frameBorder="0" width="100%" height="100%" src={url} />
            </Paper>
            <Paper elevation={6} style={{ padding: '15px' }}>
                <Typography variant="h4">{video.snippet.title} - {video.snippet.channelTitle}</Typography>
                <Typography variant="subtitle1">{video.snippet.channelTitle}</Typography>
                <Typography variant="subtitle2">{video.snippet.description}</Typography>
            </Paper>
        </Fragment>
    );
}

export default VideoDetails;