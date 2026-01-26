import { createSlice } from "@reduxjs/toolkit";
import { add } from "firebase/firestore/pipelines";

const movieSlice  = createSlice({
    name: "movies",
    initialState: { 
        nowPlayingMovies: null,
        tailerVideo: null,
        popularMovies: null,
        upcomingMovies: null
    },
    reducers: {
        addNowPlaying: (state, action) => { 
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.tailerVideo = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        }
    }
})

export default movieSlice.reducer;
export const { addNowPlaying, addTrailerVideo, addPopularMovies, addUpcomingMovies } = movieSlice.actions;