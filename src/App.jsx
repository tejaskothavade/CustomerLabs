import React, { useState } from "react";
import Popup from "./Popup";

const App = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <button
        onClick={togglePopup}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none"
      >
        Save Segment
      </button>
      {showPopup && <Popup onClose={togglePopup} />}
    </div>
  );
};

export default App;
