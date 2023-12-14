import { IconTypes } from "../../../shared/types";

function IconDrop({
  isDropdown = true,
  size = 24,
  fillColor = "currentColor"
}: IconTypes & { isDropdown: boolean }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill={fillColor}
      xmlns="http://www.w3.org/2000/svg"
    >
      {isDropdown && (
        // Render the dropdown arrow
        <path d="M2 5l6 6 6-6" fillRule="evenodd" clipRule="evenodd" />
      )}
      {!isDropdown && (
        // Render the up arrow
        <path d="M2 11l6-6 6 6" fillRule="evenodd" clipRule="evenodd" />
      )}
    </svg>
  );
}

export default IconDrop;
