import { ReactNode } from "react";
import { ButtonTypes } from "../../shared/enums";

type ButtonProps = {
  children: ReactNode | string;
  type?: "button" | "submit" | "reset";
  extendedClassNames: string;
  category?: ButtonTypes;
  to?: string;
  onClick?: () => void;
  disabled?: boolean;
  form?: string;
};
export default function ButtonPrimary({
  children,
  type = "button",
  extendedClassNames = "",
  category = ButtonTypes.button,
  onClick,
  to = "#",
  disabled = false,
  form
}: ButtonProps) {
  if (category === ButtonTypes.button) {
    return (
      <button
        disabled={disabled}
        onClick={onClick}
        type={type}
        form={form}
        className={`${extendedClassNames} disabled:cursor-not-allowed disabled:bg-opacity-50`}
      >
        {children}
      </button>
    );
  }

  if (category === ButtonTypes.link) {
    return (
      <a
        href={to}
        className={`${extendedClassNames} disabled:cursor-not-allowed disabled:bg-opacity-50`}
      >
        {children}
      </a>
    );
  }
  if (category === ButtonTypes.span) {
    return (
      <span
        className={`${extendedClassNames} disabled:cursor-not-allowed disabled:bg-opacity-50`}
      >
        {children}
      </span>
    );
  }
}
