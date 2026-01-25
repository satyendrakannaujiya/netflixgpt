import { createSlice } from "@reduxjs/toolkit";

const movieSlice  = createSlice({
    name: "movies",
    initialState: { 
        nowPlayingMovies: null,
        tailerVideo: null,
    },
    reducers: {
        addNowPlaying: (state, action) => { 
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.tailerVideo = action.payload;
        }
    }
})

export default movieSlice.reducer;
export const { addNowPlaying, addTrailerVideo } = movieSlice.actions;