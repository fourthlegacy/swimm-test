let submitDisabled = false;
let isMutating = false;



import React from "react";

const CustomButton = () => {
  return (
    <button
      type="submit"
      className="z-20 w-1/6 rounded-r-full bg-teal-500 py-2 px-4 font-bold text-white hover:bg-teal-700 disabled:bg-teal-200 disabled:text-gray-500"
      disabled={submitDisabled || isMutating}
    >
      Send
    </button>
  );
};

export default CustomButton;
