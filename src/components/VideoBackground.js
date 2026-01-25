import React, { use } from 'react'
import { useSelector } from 'react-redux'
import  useVideoBackground  from '../hooks/useVideoBackground';

const VideoBackground = ({movieId}) => {
    useVideoBackground({movieId});
    const trailerVideo = useSelector((state) => state.movies?.tailerVideo);
    return (
        <div>
            <iframe src={`https://www.youtube.com/embed/${trailerVideo?.key}`} title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin"></iframe>
        </div>
    )
}

export default VideoBackground