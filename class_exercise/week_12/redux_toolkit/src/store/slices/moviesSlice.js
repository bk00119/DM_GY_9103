import {createSlice} from '@reduxjs/toolkit'
import {reset} from '../actions'

const moviesSlice = createSlice({
  name: 'movie',
  initialState: [],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload)
    },
    removeMovie(state, action) {
      const index = state.indexOf(action.payload)
      state.splice(index, 1)
    },
  },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return []
    })
  },
})

// export our actions
export const {addMovie, removeMovie} = moviesSlice.actions
// export the combined reducer, we are going to stick to all named exports, no curly braces cause we are not destructiing here!
export const moviesReducer = moviesSlice.reducer