import { createSlice, nanoid } from '@reduxjs/toolkit'

const artSlice = createSlice({
  name: 'art',
  initialState: {
    searchTerm: '',
    art: []
  },
  reducers: {
    changeSearchTerm(state, action){
      state.searchTerm = action.payload
    },
    addArt(state, action){
      state.art.push({
        name: action.payload.name,
        price: action.payload.price,
        id: nanoid() //generates a unqiue id
      })
    },
    removeArt(state, action){
      const updated = state.art.filter((item) => {
        return item.id !== action.payload
      })
      state.art = updated
    }
    
  }
})

export const { changeSearchTerm, addArt, removeArt } = artSlice.actions
export const artReducer = artSlice.reducer