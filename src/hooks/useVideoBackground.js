import { GETMOVIEVIDEO_API, API_OPTIONS } from "../utils/constant";
import { addTrailerVideo } from '../utils/movieSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from "react";

const useVideoBackground = ({movieId}) => {
    const dispatch = useDispatch();
    const movieVideDetails = async () => {
        const movieData = await fetch(GETMOVIEVIDEO_API(movieId), API_OPTIONS);
        const movieJson = await movieData.json();
        const results = movieJson.results;
        console.log("Movie Video Results ", results);
        const trailer = results.filter((vid) => {
            console.log("Video Type ", vid.type, vid.type == "Trailer");
            return vid.type == "Trailer";
        });
        console.log("Trailer ", trailer);
        const tailerMovie = trailer && trailer.length > 0 ? trailer[0] : results[0];
        dispatch(addTrailerVideo(tailerMovie));
    }

    useEffect(() => {
        movieVideDetails();
    }, []);
}

export default useVideoBackground;