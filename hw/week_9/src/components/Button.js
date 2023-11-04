import cx from "classnames"
import { twMerge } from "tailwind-merge"
// prop-types doesn't have to be imported

Button.propTypes = {
  //not prop-types!
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) + // !!: to convert truthy and falsy values to their corresponding boolean values
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger)

    if (count > 1) {
      return new Error(
        "Only one of primary, secondary, success, warning, danger can be true"
      )
    }
  },
}

export default function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  rounded,
  outline,
  ...otherProps // things like onClick, className
}) {
  const classes = twMerge(
    cx(otherProps.className, "flex items-center px-8 py-4 border", {
      //color variation
      "border-blue-500 bg-blue-600 text-white": primary,
      "border-gray-900 bg-gray-800 text-white": secondary,
      "border-green-500 bg-green-600 text-white": success,
      "border-organge-500 bg-organge-600 text-white": warning,
      "border-red-500 bg-red-600 text-white": danger,

      //rounded
      "rounded-md": rounded,

      //outline variation
      "bg-white": outline,
      "text-blue-500": outline && primary,
      "text-gray-900": outline && secondary,
      "text-green-500": outline && success,
      "text-orange-500": outline && warning,
      "text-red-500": outline && danger,
    })
  ) // from tailwind library
  return (
    <button {...otherProps} className={classes}>
      {children}
    </button>
  )
}
