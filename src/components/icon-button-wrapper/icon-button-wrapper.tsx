import { ICON_WRAPPER_SIZES } from "../../shared/enums";
import { ReactNode } from "react";
import { convertPxToRem } from "../../utils/index";

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
          } outline-none focus:outline-none overflow-hidden  ${computedSize}  ${`${extendedClassNames}`} disabled:cursor-not-allowed !disabled:bg-transparent `}
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
