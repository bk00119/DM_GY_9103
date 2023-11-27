// import { useState } from "react"
import { useReducer } from "react"
import Card from "../components/Card"
import Button from "../components/Button"

export default function CounterPage({ initialCount }) {
  const INCREMENT_COUNT = "increment-count"
  const DECREMENT_COUNT = "decrement-count"
  const SET_VALUE_TO_ADD = "set-value-to-add"
  const ADD_VALUE_TO_COUNT = "add-value-to-count"
  // const [count, setCount] = useState(initialCount)
  // const [valueToAdd, setValueToAdd] = useState(0)

  const reducer = (state, action) => {
    switch (action.type) {
      case INCREMENT_COUNT:
        return {
          ...state,
          count: state.count + 1,
        }

      case DECREMENT_COUNT:
        return {
          ...state,
          count: state.count - 1,
        }

      case SET_VALUE_TO_ADD:
        return {
          ...state,
          valueToAdd: action.payload,
        }

      case ADD_VALUE_TO_COUNT:
        return {
          ...state,
          count: state.count + state.valueToAdd,
          valueToAdd: 0,
        }

      default:
        //return something to prevent it getting destroyed
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  })

  const increment = () => {
    // setCount(count + 1)

    dispatch({ type: INCREMENT_COUNT }) // only pass in one argument
  }

  const decrement = () => {
    // setCount(count - 1)

    dispatch({ type: DECREMENT_COUNT })
  }

  function handleSubmit(event) {
    event.preventDefault()
    // setCount(count + valueToAdd)
    // setValueToAdd(0)

    dispatch({ type: ADD_VALUE_TO_COUNT })
  }

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0
    // setValueToAdd(value)

    dispatch({ type: SET_VALUE_TO_ADD, payload: value })
  }

  return (
    <Card className="m-4">
      <h1 className="text-xl mb-4">Count is currently: {state.count}</h1>
      <div className="flex flex-row">
        <Button success outline rounded onClick={increment}>
          Increment
        </Button>
        <Button danger outline rounded onClick={decrement}>
          Decrement
        </Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Add a custom amont to the count</label>
        <input
          value={state.valueToAdd || ""}
          onChange={handleChange}
          type="number"
          className="p-1 m-4 bg-slate-50 border border-slate-300"
        />
        <Button primary outline rounded>
          Add custom amount
        </Button>
      </form>
    </Card>
  )
}
