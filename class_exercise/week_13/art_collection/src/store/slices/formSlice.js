import {createSlice} from '@reduxjs/toolkit'
import {addArt} from "./artSlice"

const formSlice = createSlice({
  name: 'form',
  initialState: {
    name: '',
    price: 0,
  },
  reducers: {
    // we can make the assumption here that the name we want to change is coming in as our action.payload
    changeName(state, action) {
      state.name = action.payload
    },
    changePrice(state, action) {
      state.price = action.payload
    },
  },
  
  // use extraReducers to clear the form fields out when addArt is called
  extraReducers(builder){
    builder.addCase(addArt, (state, action) => {
      state.name  = ''
      state.price = ''
    })
  }
})

export const {changeName, changePrice} = formSlice.actions
export const formReducer = formSlice.reducer
