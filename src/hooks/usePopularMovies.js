import { API_OPTIONS } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../utils/movieSlice';
import { useEffect } from 'react';
import { GETPOPULAR_API } from '../utils/constant';
const usePopularMovies = () => {
    const dispatch = useDispatch();
    const popular = async () => {
        const data = await fetch(GETPOPULAR_API, API_OPTIONS);
        const jsonData = await data.json();
        dispatch(addPopularMovies(jsonData.results));
    }

    useEffect(() => {
        popular();
    }, []);
};

export default usePopularMovies;