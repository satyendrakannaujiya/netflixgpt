import { API_OPTIONS } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addNowPlaying } from '../utils/movieSlice';
import { useEffect } from 'react';
import { GETNOWPLAYING_API } from '../utils/constant';
const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const nowPlaying = async () => {
        const data = await fetch(GETNOWPLAYING_API, API_OPTIONS);
        const jsonData = await data.json();
        dispatch(addNowPlaying(jsonData.results));
        console.log("Now playing data ", jsonData);
    }

    useEffect(() => {
        nowPlaying();
    }, []);
};

export default useNowPlayingMovies;