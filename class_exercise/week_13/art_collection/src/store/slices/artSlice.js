import {createSlice, nanoid} from '@reduxjs/toolkit'

const artSlice = createSlice({
  name: 'art',
  initialState: {
    searchTerm: '',
    data: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload
    },
    addArt(state, action) {
      // we need to update state.art
      // we need to get our values here from action.payload NOT formSlice.state
      state.data.push({
        name: action.payload.name,
        price: action.payload.price,
        id: nanoid(),
      })
    },
    removeArt(state, action) {
      // assume action.payload === the id of the art item we want to remove
      // use a filter function to remove the one art item with that matched id
      const updated = state.data.filter((item) => {
        return item.id !== action.payload
      })
      // assign the updated art as the new art piece of state
      state.data = updated
    },
  },
})

// dont forget the exports!
export const {changeSearchTerm, addArt, removeArt} = artSlice.actions
export const artReducer = artSlice.reducer
