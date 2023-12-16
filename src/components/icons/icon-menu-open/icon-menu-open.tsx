type Props = {
  size?: number;
  fillColor?: string;
};

const IconMenuOpen = ({
  size = 40,
  fillColor = "var(--primary-theme)"
}: Props) => {
  return (
    <svg
      stroke={fillColor}
      fill={fillColor}
      strokeWidth="0"
      viewBox="0 0 512 512"
      height={size}
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path>
    </svg>
  );
};
export default IconMenuOpen;
