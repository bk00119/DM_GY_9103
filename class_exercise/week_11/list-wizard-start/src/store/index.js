import { configureStore, createSlice } from "@reduxjs/toolkit"

const songsSlice = createSlice({
  // createSlice
  // A function that automatically generates action creators and action types that correspond to the reducers and state.
  // internally, it uses createAction and createReducer
  name: "song",
  initialState: [],
  reducers: {
    // call it by "{name}/{function}"
    addSong(state, action) {
      state.push(action.payload)
    },
    removeSong(state, action) {
      // action.payload === the name of the song we want to remove
      // get the index of the song passed in via payload
      const index  = state.indexOf(action.payload)
      // call splice with that index to remove just the one song from our array
      state.splice(index, 1)
    },
  },
})

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
  },
})

// REMOVE THE LINES BELOW
// TO ADD A SONG...
// store.dispatch({
//   type: "song/addSong",
//   payload: "Where is My Mind?",
// })
// OR
// store.dispatch(songsSlice.actions.addSong("Where is my mind?"))

// const currState = store.getState()
// console.log(JSON.stringify(currState.songs))

// TO VIEW AN ACTION CREATOR FROM A SLICE
// console.log(songsSlice.actions.addSong("Where is my mind?"))

export { store }

export const { addSong, removeSong } = songsSlice.actions
