import { useState, useRef } from "react";

function App() {
  const picker = useRef();

  function clickPicker() {
    console.log(picker);
    picker.current.click();
  }

  return (
    <div id="app">
      <p>Please select an image</p>
      <p>
        <input
          id="picker"
          ref={picker}
          data-testid="file-picker"
          type="file"
          accept="image/*"
        />
        <button onClick={clickPicker}>Pick Image</button>
      </p>
    </div>
  );
}

export default App;
