import React from "react";
import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";
import state from "../store";

const ColorPicker = () => {
  const snap = useSnapshot(state);

  console.log(state.items)
  return (
    <div className=" ml-1">
      <SketchPicker
        color={snap.items[state.current]}
        disableAlpha
        onChange={(color) => {
         
          (state.items[state.current] = color.hex)}}
        presetColors={["#ccc", "#EFBD4E", "#80C670", "#726DE8"]}
      />
    </div>
  );
};

export default ColorPicker;
