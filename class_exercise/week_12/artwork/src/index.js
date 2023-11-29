import React from "react"
// we only need the one import from ReactDOM
import { createRoot } from "react-dom/client"
import {Provider} from 'react-redux'
import App from "./App"
import {store} from './store'
import "./index.css"

const root = createRoot(document.getElementById("root"))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)

