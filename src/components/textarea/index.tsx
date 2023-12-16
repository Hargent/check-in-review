import React from "react";

const MyTextarea: React.FC = () => {
  return (
    <textarea
      id="myTextarea"
      rows={2}
      className={`resize-none transition-all duration-300
      } border border-gray-500 rounded-lg p-2 w-3/5 focus:w-full outline-none focus-visible:border-gray-500 `}
      placeholder="Type here..."
    />
  );
};

export default MyTextarea;
