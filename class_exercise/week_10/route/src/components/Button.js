// @flow

import * as React from 'react'
import cx from "classnames"
import { twMerge } from "tailwind-merge"
// prop-types doesn't have to be imported

export type ButtonProps = {
  // label for styleguidist
  /** Text and/or Icon to display within the Button */
  children: React.Node,
  /** Optional Boolean to apple Primary button background border and text color styles */
  primary?: boolean, // "?:" prop is optional
  /** Optional Boolean to apple Secondary button background border and text color styles */
  secondary?: boolean,
  /** Optional Boolean to apple Success button background border and text color styles */
  success?: boolean,
  /** Optional Boolean to apple Warning button background border and text color styles */
  warning?: boolean,
  /** Optional Boolean to apple Danger button background border and text color styles */
  danger?: boolean,
  /** Optional Boolean to apple Rounded button background border and text color styles */
  rounded?: boolean,
  /** Optional Boolean to apple Outline button background border and text color styles */
  outline?: boolean,

  /** Optional classname for adding additional styles */
  className?: string,

  /** Click handler */
  onClick?: (event: SyntheticMouseEvent<>) => mixed, 

}

export default function Button(props: ButtonProps): React.MixedElement {
  const {
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    rounded,
    outline,
    className,
    onClick,
    // ...otherProps // things like onClick, className
  } = props;
  const classes = twMerge(
    cx(className, "flex items-center px-8 py-4 border", {
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
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  )
}

Button.propTypes = {
  //not prop-types!
  // To ignore flow error
  // $FlowIgnore
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