// import createSlice
const { createSlice } = require("@reduxjs/toolkit");
const data = require("../../utils/constants/data");

const moviesSlice = createSlice({
  name: "Movies Slice",
  initialState: {
    movies: data,
  },
  reducers: {
    addMovie(state, action) {
      state.movies.default.push(action.payload);
    },
    deleteMovies() {},
  },
});

const moviesReducer = moviesSlice.reducer;
const { addMovie, deleteMovies } = moviesSlice.actions;

export default moviesReducer;
export { addMovie, deleteMovies };
