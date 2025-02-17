import clsx from "clsx";
import { ButtonProps } from "./types";

/**
 *
 * A customizable button component with different variants and sizes.
 *
 * @param children - Content inside the button
 * @param onClick - Click handler function
 * @param type - HTML button type
 * @param variant - Button style variant
 * @param size - Button size
 * @param disabled - Whether the button is disabled
 *
 */
const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "medium",
  disabled,
}: ButtonProps) => {
  const baseStyles = clsx(
    "rounded-lg font-medium transition duration-200",
    disabled
      ? "cursor-not-allowed opacity-50"
      : "cursor-pointer hover:transform hover:scale-[1.02]"
  );

  const sizeStyles = {
    small: "px-2 py-1 text-xs",
    medium: "px-3 py-1.5 text-sm",
    large: "px-4 py-2 text-base",
  };

  const variantStyles = {
    primary: clsx(
      "bg-blue-500 text-white",
      !disabled && "hover:bg-blue-600 active:bg-blue-700"
    ),
    danger: clsx(
      "bg-red-500 text-white",
      !disabled && "hover:bg-red-600 active:bg-red-700"
    ),
  };

  return (
    <button
      disabled={disabled}
      type={type}
      className={clsx(baseStyles, sizeStyles[size], variantStyles[variant])}
      onClick={disabled ? undefined : onClick}
    >
      {children}
    </button>
  );
};

export default Button;
