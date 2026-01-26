import { API_OPTIONS } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addUpcomingMovies } from '../utils/movieSlice';
import { useEffect } from 'react';
import { GETUPCOMING_API } from '../utils/constant';
const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const upcoming = async () => {
        const data = await fetch(GETUPCOMING_API, API_OPTIONS);
        const jsonData = await data.json();
        console.log(jsonData, "upcoming movies data");
        dispatch(addUpcomingMovies(jsonData.results));
    }

    useEffect(() => {
        upcoming();
    }, []);
};

export default useUpcomingMovies;