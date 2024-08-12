import React, { useState } from "react";

const SectionOneBtns = () => {
  const [selectedColor, setSelectedColor] = useState("#000000");
  const [showColorInput, setShowColorInput] = useState(false);

  const handleColorChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedColor(event.target.value);
  };

  const handleSelectColor = () => {
    setShowColorInput((prevState) => !prevState);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <button
          className={`black-button bona-nova-sc-regular ${
            showColorInput ? "selected" : ""
          }`}
          onClick={handleSelectColor}
        >
          {showColorInput ? "Set Color" : "Select Color"}
        </button>
        <button className="white-button playwrite-cu">Projects</button>
      </div>

      <div className="color-chooser-container">
        {showColorInput && (
          <input
            type="color"
            value={selectedColor}
            onChange={handleColorChange}
            className="color-input"
          />
        )}

        {showColorInput && (
          <div style={{ backgroundColor: selectedColor, padding: "20px" }}>
            The selected color is: {selectedColor}
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionOneBtns;
