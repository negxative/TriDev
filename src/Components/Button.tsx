import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
const Button = ({
  variant = "default", // default, error, success, warning, information
  leftIcon,
  rightIcon,
  disabled = false,
  children,
  ...props
}) => {
  // Define the base classes for the button
  const baseClasses = "py-2 px-4 rounded focus:outline-none";

  const variantClasses = {
    error: "bg-red-500 text-white",
    success: "bg-green-500 text-white",
    warning: "bg-yellow-500 text-black",
    information: "bg-blue-500 text-white",
    default: "bg-gray-200 text-black",
  };
  const classes = cx(
    baseClasses,
    variantClasses[variant],
    disabled ? "opacity-50 cursor-not-allowed" : ""
  );

  return (
    <button
      className={classes}
      disabled={disabled}
      aria-disabled={disabled}
      {...props}
    >
      {/* Render the left icon if provided */}
      {leftIcon && <span className="mr-2">{leftIcon}</span>}

      {/* Render the button's children */}
      {children}

      {/* Render the right icon if provided */}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

// Define prop types for the Button component
Button.propTypes = {
  variant: PropTypes.string,
  leftIcon: PropTypes.element,
  rightIcon: PropTypes.element,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

// Export the Button component as the default export
export default Button;
