import React from "react";
import "./Checkbox.css"; // Import your CSS styles

const Checkbox = ({ checked, onChange }) => {
  return (
    <label className="custom-checkbox">
      <input
        type="checkbox"
        className="hidden-checkbox"
        checked={checked}
        onChange={onChange}
      />
      <span className="custom-checkbox-icon"></span>
    </label>
  );
};

export default Checkbox;
