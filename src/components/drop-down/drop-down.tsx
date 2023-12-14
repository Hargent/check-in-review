import { useEffect, useRef, useState } from "react";

import IconButtonWrapper from "../icon-button-wrapper/icon-button-wrapper";
import Icons from "../icons";

// import { FaHome } from "react-icons/fa";
// import IconButtonWrapper from "../icon-button-wrapper/icon-button-wrapper";
// import Icons from "../icons";

type DropDownProps = {
  options: string[];
  defaultValue: string;
  onSelect: (arg: string) => void;
  extendedClassNames: string[];
  title: string;
};
function Dropdown({
  options,
  defaultValue,
  onSelect,
  extendedClassNames,
  title = "Select Address"
}: DropDownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultValue);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Add an event listener to close the dropdown when a click occurs outside of it
    // const handleOutsideClick = (event) => {
    //   if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
    //     setIsOpen(false);
    //   }
    // };
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div
      className={`${extendedClassNames}`}
      ref={dropdownRef}
      onClick={toggleDropdown}
    >
      <div className=" cursor-pointer  p-4 border border-ffq-primary transition-colors duration-200 ease-in-out capitalize  rounded-lg flex items-center justify-center space-x-4 hover:text-ffq-primary">
        <span>{selectedOption || defaultValue || title}</span>
        <IconButtonWrapper extendedClassNames={` `}>
          <Icons.IconDrop isDropdown={!isOpen} />
        </IconButtonWrapper>
      </div>

      {isOpen && (
        <ul className=" min-w-full w-[max-content] flex items-stretch flex-col place-self-center space-y-3  p-4 border bg-ffq-secondary  border-ffq-primary capitalize  rounded-lg my-4 z-50 divide-y divide-ffq-primary absolute">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleOptionClick(option)}
              className=" cursor-pointer hover:text-ffq-primary pt-3 first:pt-0 "
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
