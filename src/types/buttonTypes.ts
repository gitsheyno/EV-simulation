export type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "primary" | "danger";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
};
