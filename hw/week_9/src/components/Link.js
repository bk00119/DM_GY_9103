import { useContext } from "react"
import cx from "classnames"
import { twMerge } from "tailwind-merge"

import NavigationContext from "context/navigation"

Link.propTypes = {
  // checks if there's any conflict in color style props
  checkColorVariationValue: ({ primary, secondary }) => {
    const count = Number(!!primary) + Number(!!secondary)
    if (count > 1) {
      return new Error("Only one of primary and secondary can be true")
    }
  },

  // checks if there's any conflict in outline style props
  checkOutlineVariationValue: ({ solid, outline }) => {
    const count = Number(!!solid) + Number(!!outline)
    if (count > 1) {
      return new Error("Only one of solid and outline can be true")
    }
  },
}

export default function Link({
  to,
  children,
  primary,
  secondary,
  rounded,
  solid,
  outline,
  hover,
  ...otherProps
}) {
  const { navigate } = useContext(NavigationContext)

  function handleClick(event) {
    event.preventDefault()
    navigate(to)
  }

  const classes = twMerge(
    cx(otherProps.className, "flex items-center px-8 py-4 border", {
      //color variation
      "border-blue-500 bg-blue-600 text-white": primary,
      "border-gray-800 bg-gray-700 text-white": secondary,

      //rounded
      "rounded-md": rounded,

      //outline variation
      "bg-white": outline,
      "text-blue-500": outline && primary,
      "text-gray-900": outline && secondary,

      //hover effects
      //default
      "hover:cursor-pointer": hover,

      //hover with outline
      "hover:border-blue-500 hover:bg-blue-600 hover:text-white":
        hover && outline && primary,
      "hover:border-gray-900 hover:bg-gray-800 hover:text-white":
        hover && outline && secondary,

      //hover with solid
      "hover:border-blue-700 hover:bg-blue-800 hover:text-white":
        hover && solid && primary,
      "hover:border-gray-950 hover:bg-gray-900 hover:text-white":
        hover && solid && secondary,
    })
  )

  return (
    <div {...otherProps} className={classes} onClick={handleClick}>
      <a href={to}>{children}</a>
    </div>
  )
}
