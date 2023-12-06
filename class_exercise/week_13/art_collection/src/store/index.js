import {configureStore} from '@reduxjs/toolkit'
import {
  artReducer,
  addArt,
  removeArt,
  changeSearchTerm,
} from './slices/artSlice'

import {formReducer, changeName, changePrice} from './slices/formSlice'

// cofigure store
const store = configureStore({
  reducer: {
    art: artReducer,
    form: formReducer,
  },
})

// console.log(store.getState())

// this is the access point for all imports from store
export {store, changeName, changePrice, addArt, removeArt, changeSearchTerm}
