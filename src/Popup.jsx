import React, { useState } from "react";
import "tailwindcss/tailwind.css";

const options = [
  { label: "First Name", value: "first_name" },
  { label: "Last Name", value: "last_name" },
  { label: "Gender", value: "gender" },
  { label: "Age", value: "age" },
  { label: "Account Name", value: "account_name" },
  { label: "City", value: "city" },
  { label: "State", value: "state" },
];

const Popup = ({ onClose }) => {
  const [segmentName, setSegmentName] = useState("");
  const [dropdowns, setDropdowns] = useState([{ id: 0, value: "" }]);

  //Adds a new dropdown 
  const handleAddDropdown = () => {
    setDropdowns([...dropdowns, { id: dropdowns.length, value: "" }]);
  };

  const handleDropdownChange = (id, value) => {
    setDropdowns(
      dropdowns.map((dropdown) =>
        dropdown.id === id ? { ...dropdown, value } : dropdown
      )
    );
  };

  const handleSaveSegment = async () => {
    const schema = dropdowns
      .filter((dropdown) => dropdown.value)
      .map((dropdown) => ({
        [dropdown.value]: options.find((opt) => opt.value === dropdown.value)
          ?.label,
      }));

    const payload = {
      segment_name: segmentName,
      schema,
    };

    const webhookUrl = "https://webhook.site/0ab2c178-4f9c-49b0-bb44-225892400d69"; 

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        alert("Segment saved successfully!");
        onClose();
      } else {
        alert("Failed to save the segment. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again later.");
      console.error("Error saving segment:", error);
    }
  };

  const availableOptions = (id) => {
    const selectedValues = dropdowns
      .filter((dropdown) => dropdown.id !== id)
      .map((dropdown) => dropdown.value);
    return options.filter((option) => !selectedValues.includes(option.value));
  };

  return (
    
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6">
      <h1 className="bg-blue-500 text-white font-bold p-4 w-full rounded-md">Saving Segment</h1>
        <h3 className="text-lg font-semibold mb-4 mt-3">Enter the Name of the Segment</h3>
        <input
          type="text"
          placeholder="Name of the Segment"
          value={segmentName}
          onChange={(e) => setSegmentName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="mb-4">
          <label className="block text-sm font-normal mb-2">To save the segment, you need to add the schemas to build the query</label>
          {dropdowns.map((dropdown) => (
            <select
              key={dropdown.id}
              value={dropdown.value}
              onChange={(e) => handleDropdownChange(dropdown.id, e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select</option>
              {availableOptions(dropdown.id).map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ))}
          <button
            onClick={handleAddDropdown}
            className="text-blue-500 hover:underline mt-2"
          >
            + Add New Schema
          </button>
        </div>
        <div className="flex justify-end space-x-2">
          <button
            onClick={handleSaveSegment}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Save the Segment
          </button>
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
