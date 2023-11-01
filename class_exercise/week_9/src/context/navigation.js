import { createContext, useState, useEffect } from "react"

const NavigationContext = createContext()

function NavigationProvider({ children }) {
  const [currPath, setCurrPath] = useState(window.location.pathname)

  useEffect(() => {
    function handler() {
      // place the current path in state
      setCurrPath(window.location.pathname)
    }

    // watch for user interaction with our routes
    window.addEventListener("popstate", handler)

    // useEffec can return a cleanup function (or any function) and this will be fired first the next time useEffect is triggered
    return () => {
      window.removeEventListener("popstate", handler)
    }

  }, [])

  function navigate(to) {
    window.history.pushState({}, "", to)
    setCurrPath(to)
  }

  return (
    <NavigationContext.Provider value={{currPath, navigate}}>
      {children}
    </NavigationContext.Provider>
  )
}

export default NavigationContext
export { NavigationProvider }
