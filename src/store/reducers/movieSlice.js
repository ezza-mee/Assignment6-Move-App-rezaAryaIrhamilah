import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
	name: 'movie',
	initialState: [],
	reducers: {
		setMovies: (state, action) => {
			return action.payload;
		},
	},
});

export const { setMovies } = movieSlice.actions;
export default movieSlice.reducer;
