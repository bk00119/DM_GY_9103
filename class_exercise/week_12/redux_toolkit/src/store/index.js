import { configureStore } from "@reduxjs/toolkit"
// import our actions so this is the central export point for all other files!
import { songsReducer, addSong, removeSong } from "./slices/songsSlice"
import { moviesReducer, addMovie, removeMovie } from "./slices/moviesSlice"
// dont forget our reset action!
import { reset } from "./actions"

const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviesReducer,
  },
})

export { store, addSong, removeSong, addMovie, removeMovie, reset }

// import { configureStore, createSlice, createAction } from "@reduxjs/toolkit"

// // Another way of resetting songs and movies at the same time
// export const reset = createAction('app/reset')

// const songsSlice = createSlice({
//   name: "song",
//   initialState: [],
//   reducers: {
//     // name + '/' + functionName
//     // 'song/addSong'
//     addSong(state, action) {
//       state.push(action.payload)
//     },
//     removeSong(state, action) {
//       // action.payload is the name of the song we want to remove
//       // get the index of the song passed in via payload
//       const index = state.indexOf(action.payload)
//       // call splice with that index and remove just the once song from our array
//       state.splice(index, 1)
//     }
//   },

//   // // One way of resetting songs when the reset button is pressed
//   // // use extraReducers to watch other reducer
//   // extraReducers(builder) {
//   //   // can call "movie/slice" (name of the action type) instead of moviesSlice.actions.reset.toString()
//   //   builder.addCase(moviesSlice.actions.reset.toString(), (state, action) => {
//   //     return []
//   //   })
//   // }

//   extraReducers(builder) {
//     builder.addCase(reset, (state, action) => {
//       return []
//     })
//   },
// })

// const moviesSlice = createSlice({
//   name: "movie", // just the name for our action types
//   initialState: [],
//   reducers: {
//     addMovie(state, action) {
//       state.push(action.payload)
//     },
//     removeMovie(state, action) {
//       const index = state.indexOf(action.payload)
//       state.splice(index, 1)
//     },
//     // reset(state, action) {
//     //   return []
//     // },
//   },

//   extraReducers(builder) {
//     builder.addCase(reset, (state, action) => {
//       return []
//     })
//   },
// })

// const store = configureStore({
//   reducer: {
//     songs: songsSlice.reducer,
//     movies: moviesSlice.reducer,
//   },
// })

// // console.log(store)

// // const startingState = store.getState()
// // console.log(JSON.stringify(startingState))

// // store.dispatch({
// //   type: 'song/addSong',
// //   payload: 'Where is My Mind?',
// // })

// // const finalState = store.getState()
// // console.log(JSON.stringify(finalState))

// // view an action creator from a slice
// // console.log(songsSlice.actions.addSong('Where is My Mind?'))

// // const startingState = store.getState()
// // console.log(JSON.stringify(startingState))

// // store.dispatch(songsSlice.actions.addSong('Where is My Mind?'))

// // const finalState = store.getState()
// // console.log(JSON.stringify(finalState))

// export { store }
// export const { addSong, removeSong } = songsSlice.actions
// export const { addMovie, removeMovie } = moviesSlice.actions
