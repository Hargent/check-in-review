import React, { ReactNode } from "react";

import { convertPxToRem } from "../../utils/index";

enum ICON_WRAPPER_SIZES {
  sm = "w-6 h-6",
  md = "w-8 h-8",
  lg = "w-10 h-10",
  xl = "w-12 h-12"
}
type IconButtonWrapperProps = {
  children: ReactNode;
  size?: string;
  type?: string;
  boxSizeInPx?: number;
  extendedClassNames: string;
  disabled?: boolean;
  onClick?: () => void;
  isBorder?: boolean;
};
const IconButtonWrapper = ({
  children,
  size = "sm",
  type = "button",
  boxSizeInPx = 24,
  extendedClassNames,
  disabled = false,
  onClick,
  isBorder = false,
  ...otherProps
}: IconButtonWrapperProps) => {
  const computedSize = boxSizeInPx
    ? `w-[${convertPxToRem(boxSizeInPx)}] h-[${convertPxToRem(boxSizeInPx)}]`
    : ICON_WRAPPER_SIZES[size as keyof typeof ICON_WRAPPER_SIZES];
  return (
    <>
      {type === "button" && (
        <button
          type="button"
          disabled={disabled}
          className={`${
            !isBorder && "border-none"
          } outline-none focus:outline-none overflow-hidden  ${computedSize}  ${extendedClassNames} disabled:cursor-not-allowed !disabled:bg-transparent `}
          onClick={onClick}
          {...otherProps}
        >
          {children}
        </button>
      )}

      {type === "span" && (
        <span
          className={`overflow-hidden block  ${computedSize}  ${extendedClassNames}`}
          onClick={onClick}
        >
          {children}
        </span>
      )}
    </>
  );
};

export default IconButtonWrapper;
