// import { useContext } from "react"
import cx from "classnames"
import useNavigation from "../hooks/useNavigation"
// import NavigationContext from "../context/navigation"



export default function Link({ to, children, className, activeClassName }) {
  // const { navigate, currentPath } = useContext(NavigationContext)
  const { navigate, currentPath } = useNavigation()
  function handleClick(event) {
    event.preventDefault()
    navigate(to)
  }

  const classes = cx('text-blue-500', className, currentPath === to && activeClassName)


  return (
    <>
      <a href={to} onClick={handleClick} className={classes}>
        {children}
      </a>
    </>
  )
}
