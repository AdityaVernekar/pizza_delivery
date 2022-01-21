import React from "react";

function AddButton({ setClosed }) {
  return (
    <div>
      <button
        className="bg-red-500 rounded-xl p-2 mt-9 text-white active:scale-90 transition-all duration-200 ease-out w-80 bg-opacity-80 hover:bg-opacity-100 "
        onClick={() => setClosed(false)}
      >
        Add Pizza
      </button>
    </div>
  );
}

export default AddButton;
