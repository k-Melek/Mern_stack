import React, { useState } from 'react';

const Color = ({ addBox }) => {
  const [chooseColor, setChooseColor] = useState('');
  const [chooseHeight, setChooseHeight] = useState('');
  const [chooseWidth, setChooseWidth] = useState('');

  const handleColor = (e) => {
    e.preventDefault();
    addBox({
      chooseColor,
      chooseHeight: parseInt(chooseHeight),
      chooseWidth: parseInt(chooseWidth),
    });
    setChooseColor('');
    setChooseHeight('');
    setChooseWidth('');
  };

  return (
    <div>
      <form onSubmit={handleColor}>
        {/* Input fields for color, height, and width */}
        <label htmlFor="color">Color</label>
        <input
          type="text"
          id="color"
          value={chooseColor}
          onChange={(e) => setChooseColor(e.target.value)}
        />

        <label htmlFor="height">Height</label>
        <input
          type="number"
          id="height"
          value={chooseHeight}
          onChange={(e) => setChooseHeight(e.target.value)}
        />

        <label htmlFor="width">Width</label>
        <input
          type="number"
          id="width"
          value={chooseWidth}
          onChange={(e) => setChooseWidth(e.target.value)}
        />

        <button type="submit">Add Box</button>
      </form>
    </div>
  );
};

export default Color;
