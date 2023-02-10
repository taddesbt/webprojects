
import React, { useState } from 'react'

import Grid from "@mui/material/Grid";



import SearchBar from "./components/SearchBar";
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';
import youtube from "./api/youtube";

function VideoShare() {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState({ id: {}, snippet: {} });



    return (
        <Grid style={{ justifyContent: "center" }} container spacing={10}>
            <Grid item xs={11}>
                <Grid container spacing={10}>
                    <Grid item xs={12}>
                   
                        <SearchBar onSubmit={handleSubmit} />
                    </Grid>
                    <Grid item xs={8}>
                       
                        <VideoDetail video={selectedVideo} />
                    </Grid>
                    <Grid item xs={4}>
                   
                        <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    )

    async function handleSubmit(searchTerm) {
        const { data: { items: videos } } = await youtube.get("search", {
            params: {
                part: "snippet",
                maxResults: 5,
                key: "AIzaSyAlQg7NeWOj9OKWDXrFdC2Fg_w4L7RQ0Jg",
                q: searchTerm,
            }
        });

        setVideos(videos);
        setSelectedVideo(videos[0]);
    }





}

export default VideoShare